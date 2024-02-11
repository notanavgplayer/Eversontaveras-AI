import TopBar from "@/components/top-bar";
import { FileVolume, Volume } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#F5F9FF] min-h-screen">
      <TopBar iconColor="blue" label="Text to speech" Icon={FileVolume} />
      <main className="text-gray-900">
        <h1>Text to speech</h1>
      </main>
    </div>
  );
};

export default page;
