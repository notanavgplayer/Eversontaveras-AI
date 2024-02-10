"use client";

import { LucideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface SidebarItemProps {
  path: string;
  Icon: LucideIcon;
  label: string;
}

const SidebarItem = ({ Icon, label, path }: SidebarItemProps) => {
  return (
    <Link
      className="inline-block w-full px-4 py-4 shadow-lg font-semibold text-xl bg-gray-800/50 rounded-md hover:px-5 transition duration-1000  "
      href={path}
    >
      <Icon className="inline-block w-6 h-6" />
      {label}
    </Link>
  );
};

export default SidebarItem;
