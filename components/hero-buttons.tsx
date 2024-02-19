"use client";

import React from "react";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

const HeroButtons = () => {
  const user = useAuth();

  return (
    <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
      <div data-aos="fade-up" data-aos-delay="400">
        {user.isSignedIn ? (
          <Link
            className="btn text-white bg-indigo-600 hover:bg-indigo-700 w-full mb-4 sm:w-auto sm:mb-0"
            href="/dashboard"
          >
            Dashboard
          </Link>
        ) : (
          <Link
            className="btn text-white bg-indigo-600 hover:bg-indigo-700 w-full mb-4 sm:w-auto sm:mb-0"
            href="signin"
          >
            Start for Free
          </Link>
        )}
      </div>
      <div data-aos="fade-up" data-aos-delay="600">
        <Link
          className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
          href="/about"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default HeroButtons;
