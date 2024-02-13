"use client";
import Aos from "aos";
import React, { useEffect } from "react";

const ChatWelcome = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div data-aos="fade-up" className="py-8 lg:py-32">
      <h1 className="text-2xl font-bold mb-4">Welcome to ChatBlast</h1>
      <p className="text-sm tracking-wide">
        Ready to get started? Type your first message below and let the
        conversation begin!
      </p>
    </div>
  );
};

export default ChatWelcome;
