import { UserButton } from "@clerk/nextjs";
import { LucideIcon } from "lucide-react";
import React from "react";

interface TopBarProps {
  label: string;
  Icon: LucideIcon;
}

const TopBar = ({ Icon, label }: TopBarProps) => {
  return (
    <div className="flex justify-between border border-b-zinc-200 min-h-8 p-4 bg-[#F5F9FF] items-center">
      <div className="flex justify-start items-center gap-1">
        <Icon className="inline-block h-8 w-8 text-indigo-800" />{" "}
        <h1 className="h4 text-indigo-900">{label}</h1>
      </div>
      <UserButton />
    </div>
  );
};

export default TopBar;
