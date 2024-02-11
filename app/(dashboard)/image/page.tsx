"use client";
import TopBar from "@/components/top-bar";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import Loader from "@/components/loader";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AOS from "aos";
import Empty from "@/components/empty-page";
import { Card, CardFooter } from "@/components/ui/card";
import { Download, Image } from "lucide-react";
import { useState } from "react";
import { amountOptions, formSchema, resolutionOptions } from "./constants";

const page = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const router = useRouter();
  const [images, setImages] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      amount: "1",
      resolution: "512x512",
      nagative_prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // try {
    //   setImages([]);
    //   const response = await axios.post("/api/image", values);
    //   setImages(response.data);
    //   form.reset();
    // } catch (error: any) {
    //   if (error?.response?.status === 403) {
    //     proModal.onOpen();
    //   } else {
    //     toast.error("Something went wrong");
    //   }
    // } finally {
    //   router.refresh();
    // }
  };

  return (
    <div className="bg-[#F5F9FF] min-h-screen">
      <TopBar
        iconColor="text-violet-800"
        label="Image generator"
        Icon={Image}
      />
      <main
        data-aos="fade-up"
        data-aos-duration={1000}
        className="text-gray-900"
      >
        <div className="px-4 lg:px-8">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="
                    rounded-[.4rem]
                    bg-[#f5f9ff]
                    w-full 
                    mt-4
                    px-2
                    py-4 
                    md:px-6 
                    border 
                    grid
                    grid-cols-12
                    gap-2 
                    "
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-4">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border border-zinc-300 rounded-[.4rem] px-2 outline-none focus-visible:ring-0 focus-visible:ring-transparent rounde-sm py-5"
                        disabled={isLoading}
                        placeholder="Alien cheeseburger creature, self-consumption, cinematic..."
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="nagative_prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-3">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border border-zinc-300 rounded-[.4rem] px-2 py-5 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Provide a negative prompt"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-2 border border-zinc-300 rounded-[.4rem]">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {amountOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="resolution"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-2 border border-zinc-300 rounded-[.4rem]">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {resolutionOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-1 w-full"
                type="submit"
                disabled={isLoading}
                variant={"primary"}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-20">
              <Loader />
            </div>
          )}
          {images.length === 0 && !isLoading && (
            <div>
              {" "}
              <Empty label="No image" />{" "}
            </div>
          )}
          <div className="grid grid-cols-1 md:grids-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
            {images.map((src) => (
              <Card key={src} className="rounded-lg overflow-hidden">
                <div className="relative aspect-square">
                  {/* <Image alt="Image" fill src={src} /> */}
                </div>
                <CardFooter className="p-2">
                  <Button
                    onClick={() => window.open(src)}
                    variant="secondary"
                    className="w-full"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
