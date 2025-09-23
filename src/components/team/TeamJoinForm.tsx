import { useTeamForm } from "@/hooks/useTeamForm";
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

export default function TeamJoinForm({
  fieldLabels,
  locale,
  courseTypesList,
  yearsList,
  cameAcrossByList,
  departmentsList,
}: {
  fieldLabels: Record<string, string>;
  locale: string;
  courseTypesList: string[];
  yearsList: string[];
  cameAcrossByList: string[];
  departmentsList: string[];
}) {
  const { form, onSubmit } = useTeamForm(locale);

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
              name="firstName"
              render={({ field }) => (
                <FormItem className="text-white">
                  <FormLabel>{fieldLabels.firstName}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="text-white">
                  <FormLabel>{fieldLabels.lastName}</FormLabel>
                  <FormControl>
                    <Input {...field} />
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
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="text-white">
                  <FormLabel>{fieldLabels.phoneNumber}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="courseType"
              render={({ field }) => (
                <FormItem className="text-white">
                  <FormLabel>{fieldLabels.courseType}</FormLabel>
                  <FormControl>
                    <Select
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue defaultValue={field.value} />
                      </SelectTrigger>
                      <SelectContent className="text-white">
                        {courseTypesList.map((courseType) => (
                          <SelectItem value={courseType}>
                            {courseType}
                          </SelectItem>
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
              name="course"
              render={({ field }) => (
                <FormItem className="text-white">
                  <FormLabel>{fieldLabels.course}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormItem className="text-white">
                  <FormLabel>{fieldLabels.year}</FormLabel>
                  <FormControl>
                    <Select
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue defaultValue={field.value} />
                      </SelectTrigger>
                      <SelectContent className="text-white">
                        {yearsList.map((year) => (
                          <SelectItem value={year}>{year}</SelectItem>
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
              name="cameAcrossBy"
              render={({ field }) => (
                <FormItem className="text-white">
                  <FormLabel>{fieldLabels.cameAcrossBy}</FormLabel>
                  <FormControl>
                    <Select
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue defaultValue={field.value} />
                      </SelectTrigger>
                      <SelectContent className="text-white">
                        {cameAcrossByList.map((cameAcrossBy) => (
                          <SelectItem value={cameAcrossBy}>
                            {cameAcrossBy}
                          </SelectItem>
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
              name="department"
              render={({ field }) => (
                <FormItem className="text-white">
                  <FormLabel>{fieldLabels.department}</FormLabel>
                  <FormControl>
                    <Select
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue defaultValue={field.value} />
                      </SelectTrigger>
                      <SelectContent className="text-white">
                        {departmentsList.map((department) => (
                          <SelectItem value={department}>
                            {department}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
