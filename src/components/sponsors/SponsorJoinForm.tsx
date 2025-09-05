import { useSponsorForm } from "@/hooks/useSponsorForm";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Toaster } from "../ui/sonner";
import { Textarea } from "../ui/textarea";

export default function SponsorJoinForm({
  industries,
  fieldLabels,
  locale,
}: {
  industries: string[];
  fieldLabels: Record<string, string>;
  locale: string;
}) {
  const { form, onSubmit } = useSponsorForm(industries[0], locale);

  return (
    <>
      <Toaster />
      <Form {...form}>
        <form
          onSubmit={onSubmit}
          className="flex w-full max-w-xl flex-col items-center gap-4"
        >
          <div className="grid w-full grid-cols-1 items-center justify-center gap-4 border-white md:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="text-white">
                  <FormLabel>{fieldLabels.name}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem className="text-white">
                  <FormLabel>{fieldLabels.industry}</FormLabel>
                  <FormControl>
                    <Select
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue defaultValue={field.value} />
                      </SelectTrigger>
                      <SelectContent className="text-white">
                        {industries.map((industry) => (
                          <SelectItem value={industry}>{industry}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="text-white">
                  <FormLabel>{fieldLabels.email}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="officeLocation.address"
              render={({ field }) => (
                <FormItem className="text-white">
                  <FormLabel>{fieldLabels.address}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="officeLocation.city"
              render={({ field }) => (
                <FormItem className="text-white">
                  <FormLabel>{fieldLabels.city}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="officeLocation.state"
              render={({ field }) => (
                <FormItem className="text-white">
                  <FormLabel>{fieldLabels.state}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="officeLocation.zipCode"
              render={({ field }) => (
                <FormItem className="text-white">
                  <FormLabel>{fieldLabels.zipCode}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="officeLocation.country"
              render={({ field }) => (
                <FormItem className="text-white">
                  <FormLabel>{fieldLabels.country}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="reason"
              render={({ field }) => (
                <FormItem className="text-white md:col-span-2">
                  <FormLabel>{fieldLabels.reason}</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className="w-full cursor-pointer bg-white text-black hover:text-white"
          >
            {locale == "en" ? "Submit" : "Invia"}
          </Button>
        </form>
      </Form>
    </>
  );
}
