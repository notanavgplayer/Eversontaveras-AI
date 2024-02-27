"use client";
import TopBar from "@/components/top-bar";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import AOS from "aos";

import {
  Clipboard as ArticleSummarizerIcon,
  MessageSquare as ChatIcon,
  Image as ImageGenerationIcon,
  LayoutDashboard,
  BookOpen as StoryGeneratorIcon,
  FileText as TextExpanderIcon,
  Mic as TextToSpeechIcon,
} from "lucide-react";
import { redirect, useRouter } from "next/navigation";

import { useEffect } from "react";
const tools = [
  {
    name: "Chat",
    description: "Generate engaging chat conversations.",
    icon: ChatIcon,
    color: "text-indigo-800",
    duration: 500,
    path: "/chat",
  },
  {
    name: "Article Summarizer",
    description: "Extract and summarize articles effortlessly.",
    icon: ArticleSummarizerIcon,
    color: "text-purple-800",
    path: "/article",
  },
  {
    name: "Image Generation",
    description: "Generate images with AI assistance.",
    icon: ImageGenerationIcon,
    color: "text-violet-800",
    path: "/image",
  },
];

const Dashboard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const user = useUser();
  const router = useRouter();

  if (!user) {
    return redirect("/signin");
  }

  const userName =
    user.user?.fullName ||
    user.user?.firstName ||
    user.user?.emailAddresses[0].emailAddress;

  return (
    <div className="bg-[#F5F9FF] min-h-screen">
      <TopBar
        iconColor="text-indigo-800"
        label="Dashboard"
        Icon={LayoutDashboard}
      />
      <main className="text-gray-700 p-6">
        <h1 className="text-2xl font-bold mb-6">
          Hi {userName}, what would you like to create today?
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Map through tools data to generate cards */}
          {tools.map((tool, index) => (
            <div
              data-aos="fade-up" // Example animation, you can use any AOS animation here
              data-aos-delay={`${index * 100}`} // Optional delay to stagger the animations
              key={index}
              className="bg-white rounded-lg py-8  px-4 shadow-md flex flex-col justify-between"
            >
              <div>
                <tool.icon className={cn(`w-8 h-8`, tool.color)} />
                <h2 className="text-lg font-semibold mt-2">{tool.name}</h2>

                <p className="text-gray-600 my-2 text-justify ">
                  {tool.description}
                </p>
              </div>
              <button
                onClick={() => {
                  router.push(tool.path);
                }}
                className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded-[.2rem] hover:bg-indigo-600 transition duration-300"
              >
                Use {tool.name}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
