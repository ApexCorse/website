import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const sponsorJoinSchema = z.object({
  name: z.string().min(1, { error: "Name is required" }),
  email: z.email({ message: "Invalid email address" }),
  reason: z.string(),
  industry: z.string().optional(),
  officeLocation: z.object({
    country: z.string(),
    city: z.string(),
    state: z.string(),
    address: z.string(),
    zipCode: z.string(),
  }),
});

type Schema = z.infer<typeof sponsorJoinSchema>;

export function useSponsorForm() {
  const form = useForm<Schema>({
    resolver: zodResolver(sponsorJoinSchema),
    defaultValues: {
      industry: "Automotive",
      officeLocation: {
        country: "Italy",
      },
    },
  });

  async function onSubmit(data: Schema) {
    const response = await fetch("/api/sponsor", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
  };
}
