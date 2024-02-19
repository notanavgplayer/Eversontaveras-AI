"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarItemProps {
  path: string;
  Icon: LucideIcon;
  label: string;
}

const SidebarItem = ({ Icon, label, path }: SidebarItemProps) => {
  // get pathname
  const pathname = usePathname();

  return (
    <Link
      className={cn(
        "flex justify-start items-center  w-full px-4 py-3 text-sm shadow-lg font-semibold  bg-gray-800/50 rounded-md hover:px-5 hover:bg-gray-800/100 transition duration-1000",
        pathname === path && "border-l-indigo-500 border-l-4 bg-gray-800/100  "
      )}
      href={path}
    >
      <Icon
        className={cn(
          "inline-block w-5 h-5 mr-1",
          pathname === path && "text-indigo-400"
        )}
      />
      {label}
    </Link>
  );
};

export default SidebarItem;
