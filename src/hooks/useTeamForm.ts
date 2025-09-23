import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const teamJoinSchema = z.object({
  firstName: z.string().min(1, { error: "Name is required" }),
  lastName: z.string().min(1, { error: "Name is required" }),
  email: z.email({ message: "Invalid email address" }),
  phoneNumber: z.string(),
  courseType: z.string(),
  course: z.string(),
  year: z.string(),
  cameAcrossBy: z.string(),
  department: z.string(),
  cv: z.file().optional(),
});

type Schema = z.infer<typeof teamJoinSchema>;

export function useTeamForm(locale: string = "it") {
  const form = useForm<Schema>({
    resolver: zodResolver(teamJoinSchema),
  });

  async function onSubmit(data: Schema) {
    const response = await fetch("/api/team", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (response.ok) {
      toast.success(
        locale === "it"
          ? "La tua candidatura è stata inviata!"
          : "Your application has been sent!",
      );
    } else {
      toast.error(
        locale === "it"
          ? "Impossibile inviare la tua candidatura. Riprova più tardi."
          : "Failed to send your application. Retry later.",
      );
    }
  }

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
  };
}
