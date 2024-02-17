"use client";
import Loader from "@/components/loader";
import TopBar from "@/components/top-bar";
import { Button } from "@/components/ui/button";

import Empty from "@/components/empty-page";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import AOS from "aos";
import axios from "axios";
import { Book, Copy } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";
import { formSchema, storyGenreOptions, writingModeOptions } from "./constants";

const page = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const router = useRouter();
  const [story, setStory] = useState<string>("");
  const [apiLoading, setApiLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      story_genre: storyGenreOptions[0].value,
      topic: "",
      word_count: "",
      writing_mode: writingModeOptions[0].value,
    },
  });
  const isLoading = form.formState.isLoading;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setApiLoading(true);
      setStory("");
      const response = await axios.post("/api/story", values);
      setApiLoading(false);
      console.log(response);
      setStory(response.data.story);
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
      <TopBar iconColor="text-lime-800" label="Story generator" Icon={Book} />
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
              name="topic"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-5">
                  <FormControl className="m-0 p-0">
                    <Input
                      className="border border-zinc-300 rounded-[.4rem] px-2 outline-none focus-visible:ring-0 focus-visible:ring-transparent rounde-sm py-5"
                      disabled={isLoading}
                      placeholder="Enter a story topic"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="word_count"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-2">
                  <FormControl className="m-0 p-0">
                    <Input
                      className="border border-zinc-300 rounded-[.4rem] px-2 py-5 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                      disabled={isLoading}
                      min={3}
                      max={2000}
                      type="number"
                      placeholder="Words upto 2000"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="writing_mode"
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
                      {writingModeOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                      <FormMessage />
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="story_genre"
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
                      {storyGenreOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                      <FormMessage />
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
        {story.length === 0 && !apiLoading && (
          <div>
            <Empty label="No story generated" />{" "}
          </div>
        )}
        {story && (
          <div className="relative text-black border-zinc-600 rounded-[.4rem]">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold">Story</h1>
              <Button
                onClick={() => {
                  navigator.clipboard.writeText(story);
                  toast.success("Copied to clipboard");
                }}
                variant={"primary"}
                className=" m-2 p-2 bg-indigo-600 text-white rounded-full hover:bg-blue-700"
                title="Copy to clipboard"
              >
                <Copy className="" />
              </Button>
            </div>
            <p className="mt-8 max-h-60 overflow-y-auto text-justify p-2">
              {story}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
