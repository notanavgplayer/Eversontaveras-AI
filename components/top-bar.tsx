import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { LucideIcon } from "lucide-react";
import SidebarMobile from "./side-bar-mobile";

interface TopBarProps {
  label: string;
  Icon: LucideIcon;
  iconColor: string;
}

const TopBar = ({ Icon, label, iconColor }: TopBarProps) => {

  return (
    <div className="flex justify-between border-b border-b-zinc-200 min-h-8 p-4 bg-[#F5F9FF] items-center">
      <div className="flex justify-start items-center gap-1">
        <SidebarMobile/>
        <Icon className={cn(`inline-block h-8 w-8`, iconColor)} />{" "}
        <h1 className="h4 text-gray-700">{label}</h1>
      </div>
      <UserButton />
    </div>
  );
};

export default TopBar;
