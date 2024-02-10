"use client";

import Link from "next/link";
import React from "react";

interface SidebarItemProps {
  path: string;
  Icon: string;
  label: string;
}

const SidebarItem = ({ Icon, label, path }: SidebarItemProps) => {
  return (
    <Link
      className="inline-block w-full px-4 py-4 font-semibold text-xl bg-indigo-500/40 rounded-md hover:px-5 transition duration-700 "
      href={path}
    >
      {Icon}
      {label}
    </Link>
  );
};

export default SidebarItem;
