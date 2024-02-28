"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.svg";
import { UserButton, useAuth } from "@clerk/nextjs";
import { MobileToggle } from "../mobile-toggle";

export default function Header() {
  const { userId } = useAuth();
  return (
    <header
      data-aos="fade-down"
      data-aos-duration="1000"
      className="absolute top-1 w-full z-30"
    >
      <div className="w-[95%] lg:w-3/4 bg-transparent mx-auto  py-4 px-4 sm:px-6 border-b border-gray-800">
        <div className="flex items-center justify-between ">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="logo">
              <Image  src={logo} alt="logo" width={216} height={40} />
            </Link>
          </div>

          <div className="block lg:hidden">
            <MobileToggle />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap gap-1 tracking-wide items-center">
            <li>
                <Link
                  href="/"
                  className="btn-sm rounded-xl text-black hover:text-white hover:bg-black  flex items-center transition duration-500 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="btn-sm rounded-xl text-black hover:text-white hover:bg-black  flex items-center transition duration-500 ease-in-out"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="btn-sm rounded-xl text-black hover:text-white hover:bg-black  flex items-center transition duration-500 ease-in-out"
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
                      className="btn-sm rounded-xl text-black hover:text-white hover:bg-black flex items-center transition duration-500 ease-in-out border-2 border-zinc-700"
                    >
                      Sign in
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/signup"
                      className="btn-sm rounded-xl  text-white bg-blue-600 hover:bg-blue-800"
                    >
                      Sign up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
