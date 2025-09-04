import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
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

export function useSponsorForm(defaultIndustry: string, locale: string = "it") {
  const form = useForm<Schema>({
    resolver: zodResolver(sponsorJoinSchema),
    defaultValues: {
      industry: defaultIndustry,
      officeLocation: {
        country: locale === "it" ? "Italia" : undefined,
      },
    },
  });

  async function onSubmit(data: Schema) {
    const response = await fetch("/api/sponsor", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (response.ok) {
      toast.success(
        locale === "it"
          ? "La tua richiesta è stata inviata!"
          : "Your request has been sent!",
      );
    } else {
      toast.error(
        locale === "it"
          ? "Impossibile inviare la tua richiesta. Riprova più tardi."
          : "Failed to send your request. Retry later.",
      );
    }
  }

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
  };
}
