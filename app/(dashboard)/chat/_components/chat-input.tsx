"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface ChatInputProps {}

const formSchema = z.object({
  content: z.string().min(1),
});

const ChatInput = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // try {
    //   const url = qs.stringifyUrl({
    //     url: apiUrl,
    //     query,
    //   });
    //   await axios.post(url, values);
    //   form.reset();
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const { isSubmitting } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative px-4 lg:px-32  pb-6">
                  <Input
                    autoComplete="off"
                    disabled={isSubmitting}
                    className={cn(
                      "px-4 py-6 bg-zinc-200/90 dark:bg-zinc-700/75 border-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-zinc-600 dark:text-zinc-200 rounded-xl",
                      isSubmitting &&
                        "cursor-not-allowed  text-zinc-800 dark:text-zinc-200"
                    )}
                    placeholder={`Message...`}
                    {...field}
                  />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default ChatInput;
