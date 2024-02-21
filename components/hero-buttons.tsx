"use client";

import React from "react";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const HeroButtons = () => {
  const user = useAuth();

  return (
    <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
      <div data-aos="fade-up" data-aos-delay="400">
        {user.isSignedIn ? (
          <Link
            className="btn text-white bg-indigo-600 hover:bg-indigo-700 w-full mb-4 sm:w-auto sm:mb-0 rounded-full"
            href="/dashboard"
          >
            Go To Dashboard
          </Link>
        ) : (
          <Link
            className="btn text-white bg-indigo-600 hover:bg-indigo-700 w-full mb-4 sm:w-auto sm:mb-0 rounded-full"
            href="signin"
          >
            Get Started - It's Free!
            <MoveRight size={18} className="justify-center items-center mt-1 ml-1"/>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeroButtons;
