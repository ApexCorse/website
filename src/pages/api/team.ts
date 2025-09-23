export const prerender = false;

import { teamJoinSchema } from "@/hooks/useTeamForm";
import { manager } from "@/logic/sheets";
import type { APIRoute } from "astro";
import { ZodError } from "zod";

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const {
      email,
      firstName,
      lastName,
      cameAcrossBy,
      course,
      courseType,
      phoneNumber,
      department,
      year,
    } = teamJoinSchema.parse(data);

    await manager.append(import.meta.env.GOOGLE_SHEET_ID, "G1:S1", [
      [
        firstName,
        lastName,
        email,
        phoneNumber,
        courseType,
        course,
        year,
        cameAcrossBy,
        department,
      ],
    ]);

    return new Response(JSON.stringify({ email, firstName }), {
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
