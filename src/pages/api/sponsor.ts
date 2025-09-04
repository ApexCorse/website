export const prerender = false;

import { sponsorJoinSchema } from "@/hooks/useSponsorForm";
import { manager } from "@/logic/sheets";
import type { APIRoute } from "astro";
import { ZodError } from "zod";

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const {
      email,
      name,
      officeLocation: { country, city, state, address, zipCode },
      reason,
      industry,
    } = sponsorJoinSchema.parse(data);

    const fullAddress = `${address}, ${city} ${state}, ${zipCode}, ${country}`;

    await manager.append(import.meta.env.GOOGLE_SHEET_ID, "A1:E1", [
      [name, email, fullAddress, reason, industry],
    ]);

    return new Response(JSON.stringify({ email, name }), {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    if (error instanceof ZodError) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
      });
    }

    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
};
