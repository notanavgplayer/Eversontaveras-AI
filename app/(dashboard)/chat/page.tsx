"use client";
import TopBar from "@/components/top-bar";
import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";
import { MessageSquareIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ChatWelcome from "./_components/chat-welcome";

const page = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  const [isMounted, setIsMounted] = useState(false);

  const messageEndRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="bg-[#F5F9FF] flex flex-col min-h-screen">
      <TopBar
        iconColor="text-indigo-800"
        label="Chat"
        Icon={MessageSquareIcon}
      />
      <main className="text-gray-900 flex-grow flex flex-col overflow-auto justify-between">
        <div className="flex-1 min-h-[68dvh] mx-28 my-8">
          {messages.length !== 0 ? (
            <div className=" space-y-5 w-[75%] flex-1 min-h-[64dvh]  my-8 mx-auto relative">
              {messages.map((message) => (
                <div key={message.id} className="w-full">
                  {message.role === "user" ? (
                    <div className="flex gap-x-2">
                      <div className="bg-gray-500 h-12 w-12 rounded-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-full h-full text-white p-1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>

                      <p className="rounded-lg p-3 w-full border-orange-500 border-2 text-sm">
                        {message.content}
                      </p>
                    </div>
                  ) : (
                    <div className="flex gap-x-2">
                      <div className="bg-indigo-500 h-12 w-12 rounded-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-full h-full text-white p-1"
                        >
                          <path d="M16.5 7.5h-9v9h9v-9z" />
                          <path
                            fillRule="evenodd"
                            d="M8.25 2.25A.75.75 0 019 3v.75h2.25V3a.75.75 0 011.5 0v.75H15V3a.75.75 0 011.5 0v.75h.75a3 3 0 013 3v.75H21A.75.75 0 0121 9h-.75v2.25H21a.75.75 0 010 1.5h-.75V15H21a.75.75 0 010 1.5h-.75v.75a3 3 0 01-3 3h-.75V21a.75.75 0 01-1.5 0v-.75h-2.25V21a.75.75 0 01-1.5 0v-.75H9V21a.75.75 0 01-1.5 0v-.75h-.75a3 3 0 01-3-3v-.75H3A.75.75 0 013 15h.75v-2.25H3a.75.75 0 010-1.5h.75V9H3a.75.75 0 010-1.5h.75v-.75a3 3 0 013-3h.75V3a.75.75 0 01.75-.75zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V6.75z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>

                      <p className="rounded-lg p-3 w-full  text-sm">
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

          <form onSubmit={handleSubmit} className=" w-4/5 mx-auto">
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
        </div>
      </main>
    </div>
  );
};

export default page;
