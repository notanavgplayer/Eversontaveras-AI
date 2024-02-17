"use client";
import Empty from "@/components/empty-page";
import Loader from "@/components/loader";
import TopBar from "@/components/top-bar";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { languageOptions } from "@/lib/lang_options";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import AOS from "aos";
import axios from "axios";
import {
  Check,
  ChevronsUpDown,
  Download,
  Image as ImageIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";
import { formSchema, pitchOptions, speedOptions } from "./constants";

const page = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const router = useRouter();
  const [voices, setVoices] = useState<string[]>([]);
  const [apiLoading, setApiLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
      pitch: "1.00",
      speed: "1.00",
      voice_code: "",
    },
  });

  const isLoading = form.formState.isLoading;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setApiLoading(true);
      setVoices([]);
      const response = await axios.post("/api/voice", values);
      setApiLoading(false);
      setVoices(response.data);
      form.reset();
    } catch (error: any) {
      console.log("error", error);
      // if (error?.response?.status === 403) {
      //   // proModal.onOpen();
      // } else {
      toast.error("Something went wrong");
      // }
    } finally {
      setApiLoading(false);
      router.refresh();
    }
  };

  return (
    <div className="bg-[#F5F9FF] min-h-screen">
      <TopBar
        iconColor="text-blue-800"
        label="Text to speech"
        Icon={ImageIcon}
      />
      <main
        data-aos="fade-up"
        data-aos-duration={1000}
        className="px-4 text-gray-900 lg:px-8"
      >
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
                    md:px-4 
                    border 
                    grid
                    grid-cols-12
                    gap-2 
                    "
          >
            <FormField
              name="text"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-5">
                  <FormControl className="m-0 p-0">
                    <Input
                      className="border border-zinc-300 rounded-[.4rem] px-2 outline-none focus-visible:ring-0 focus-visible:ring-transparent rounde-sm py-5"
                      disabled={isLoading}
                      placeholder="Writer your text here"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="voice_code"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-3">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full flex justify-around items-center border border-zinc-300   rounded-[.4rem] px-2 py-5",
                            !field.value && " text-gray-800"
                          )}
                        >
                          {field.value ? (
                            languageOptions.find(
                              (language) => language.voiceCode === field.value
                            )?.languageName
                          ) : (
                            <span className="text-gray-600">
                              Select language
                            </span>
                          )}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="col-span-12 lg:col-span-3 max-h-60 p-2 overflow-y-auto">
                      <Command>
                        <CommandInput placeholder="Search language..." />
                        <CommandEmpty>No language found.</CommandEmpty>
                        <CommandGroup>
                          {languageOptions.map((language) => (
                            <CommandItem
                              value={language.languageName}
                              key={language.voiceCode}
                              onSelect={() => {
                                form.setValue("voice_code", language.voiceCode);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  language.voiceCode === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {language.languageName}{" "}
                              <span className="text-[9px] ml-1 ">
                                {" "}
                                &#40;{language.languageCode}&#41;
                              </span>
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="speed"
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
                      {speedOptions.map((option) => (
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
              name="pitch"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-1 border border-zinc-300 rounded-[.4rem]">
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
                      {pitchOptions.map((option) => (
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
      </main>
      <div className="space-y-4 mx-4 mt-4 lg:px-8">
        {apiLoading && (
          <div className="h-full flex flex-col gap-y-4 items-center justify-center py-40">
            <Loader />
          </div>
        )}
        {voices.length === 0 && !apiLoading && (
          <div>
            <Empty label="No voice generated" />{" "}
          </div>
        )}
        <div className="grid grid-cols-1 md:grids-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
          {voices.map((src) => (
            <Card key={src} className="rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <audio src={src}></audio>
              </div>
              <CardFooter className="p-2">
                <Button
                  onClick={() => window.open(src)}
                  variant="primary"
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
    </div>
  );
};

export default page;
