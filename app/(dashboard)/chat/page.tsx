"use client";
import TopBar from "@/components/top-bar";
import { Input } from "@/components/ui/input";
import { useStore } from "@/hooks/use-pro-modal";
import { useChat } from "ai/react";
import { Bot, MessageSquareIcon, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ChatWelcome from "./_components/chat-welcome";
import { useRouter } from "next/navigation";

const page = () => {
  const { messages, input, handleInputChange, handleSubmit, error } = useChat();

  const { onOpen } = useStore();

  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false);

  const messageEndRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    router.refresh();

  }, [messages]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (error?.message === "expired trial") {
      onOpen();
    }
  }, [error]);

  if (!isMounted) return null;

  return (
    <div className="bg-[#F5F9FF] flex max-h-screen overflow-y-auto flex-col min-h-screen">
      <TopBar
        iconColor="text-indigo-800"
        label="Chat"
        Icon={MessageSquareIcon}
      />
      <main className="text-gray-900 flex-grow flex flex-col overflow-auto justify-between">
        <div className="flex-1 min-h-[68dvh] max-h-screen overflow-y-auto md:px-8 px-4 my-4">
          {messages.length !== 0 ? (
            <div className="w-[90%] flex-1 my-8 mx-auto relative">
              {messages.map((message) => (
                <div key={message.id} className="w-full">
                  {message.role === "user" ? (
                    <div className="flex flex-col">
                      <div className=" flex justify-start gap-2 items-center rounded-full">
                        <User
                          className="h-8 w-8 p-2 bg-slate-300 rounded-full"
                          color="#fff"
                        />
                        <span className="font-semibold text-black">You</span>
                      </div>

                      <p className="rounded-lg  px-10 py-2 w-full  text-sm">
                        {message.content}
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col">
                      <div className=" flex justify-start gap-2 items-center rounded-full">
                        <Bot className="h-8 w-8 p-2 bg-indigo-600 rounded-full text-white " />
                        <span className="font-semibold text-black">
                          ChatBlast
                        </span>
                      </div>

                      <p className="rounded-lg  px-10 py-2 w-full  text-sm">
                        {message.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex-1 min-h-[64dvh] mx-28 my-8 text-center">
              <ChatWelcome />
            </div>
          )}

          <div ref={messageEndRef}></div>
        </div>
        <form onSubmit={handleSubmit} className=" w-4/5 mb-8 mx-auto">
          <div className="relative flex justify-around items-center">
            <Input
              required
              value={input}
              onChange={handleInputChange}
              autoFocus
              placeholder="Send message..."
              spellCheck={false}
              className="w-full h-8 px-8 py-8 border-0 focus:border-0 placeholder:text-gray-800 text-sm resize-none  text-black pr-16 rounded-xl bg-gray-300"
            />
            <button
              type="submit"
              className="absolute bg-indigo-500 p-2 rounded-lg right-0 mr-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3 h-3 text-white"
              >
                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
              </svg>
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default page;
