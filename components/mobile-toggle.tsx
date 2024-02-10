"use client";

import { Button } from "@/components/ui/button";

import { UserButton, useAuth } from "@clerk/nextjs";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


import { Menu, MenuIcon } from "lucide-react";
import logo from '@/public/images/logo.svg'
import Image from 'next/image'
import Link from "next/link";





export function MobileToggle() {

    const  {userId} = useAuth()
  return (
    <Sheet>
          <SheetTrigger>
              <Menu className="w-6 h-6 text-gray-200" />
      </SheetTrigger>
      <SheetContent side="left" className="bg-slate-800 border-0 px-4 py-12">
        <SheetHeader>
          <SheetTitle>
            <Image src={logo} alt="logo" width={160} height={40} />
          </SheetTitle>
          <SheetDescription>
            <nav className="flex flex-col gap-4 mt-8">
              {/* Desktop sign in links */}
              <ul className="flex grow flex-col items-start">
                <li className="relative">
                  <Link
                    href="/about"
                    className="btn-sm rounded-full text-gray-200 hover:text-white hover:bg-gray-700    flex items-center transition duration-500 ease-in-out"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="btn-sm rounded-full text-gray-200 hover:text-white hover:bg-gray-700  flex items-center transition duration-500 ease-in-out"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="btn-sm rounded-full text-gray-200 hover:text-white hover:bg-gray-700   flex items-center transition duration-500 ease-in-out"
                  >
                    Contact
                  </Link>
                </li>

                {userId ? (
                  <UserButton afterSignOutUrl="/" />
                ) : (
                  <>
                    <li>
                      <Link
                        href="/signin"
                        className="btn-sm rounded-full text-gray-200 hover:text-white hover:bg-gray-700   flex items-center transition duration-500 ease-in-out"
                      >
                        Sign in
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/signup"
                        className="btn-sm rounded-full  text-white bg-indigo-700 hover:bg-indigo-800"
                      >
                        Sign up
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
