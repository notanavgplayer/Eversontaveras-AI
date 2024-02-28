"use client";

import React from "react";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowRight, MoveRight } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";

const HeroButtons = () => {
  const user = useAuth();

  return (
    <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
      <div data-aos="fade-up" data-aos-delay="400">
        {user.isSignedIn ? (
          <Link
            className="btn text-white bg-black hover:bg-blue-600 w-full mb-4 sm:w-auto sm:mb-0 rounded-xl"
            href="/dashboard"
          >
            Go To Dashboard
          </Link>
        ) : (
          <Link
            className="btn text-white bg-black hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0 rounded-xl"
            href="signin"
          >
            Get Started
            <MoveRight size={18} className="justify-center items-center mt-1 ml-1"/>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeroButtons;
