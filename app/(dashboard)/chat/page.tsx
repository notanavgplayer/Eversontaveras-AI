import TopBar from "@/components/top-bar";
import { MessageSquareIcon } from "lucide-react";
import React from "react";
import ChatInput from "./_components/chat-input";

const page = () => {
  return (
    <div className="bg-[#F5F9FF] flex flex-col min-h-screen">
      <TopBar
        iconColor="text-indigo-800"
        label="Chat"
        Icon={MessageSquareIcon}
      />
      <main className="text-gray-900 flex-grow flex flex-col justify-between">
        <div className=" flex-1 mx-28 my-4">
          <h1>Chat</h1>
          {/* Your chat messages component goes here */}
        </div>
        <div className="flex-none">
          <ChatInput />
        </div>
      </main>
    </div>
  );
};

export default page;
