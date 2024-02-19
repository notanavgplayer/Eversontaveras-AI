"use client";
import SidebarItem from "./sidebar-item";
import Image from "next/image";
import logo from "@/public/images/logo.svg";
import {
  Book,
  Brain,
  FileText,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Settings2,
  Volume,
} from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import { sidebarRoutes } from "@/lib/sideRoutes";
import { route } from "@/types";
import UpgradeToProCard from "./update-to-pro-card";
import SpecialButton from "./special-button";
import FreeCounter from "./free-counter";



interface SidebarProps {
  apilimitCount: number;
}



const Sidebar = (
  { apilimitCount = 0 }: SidebarProps
) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <aside
      data-aos="fade-right"
      data-aos-duration="1000"
      className=" xl:col-span-2 xl:inline-block max-h-screen hidden overflow-y-auto  px-2 py-8 bg-gray-900 "
    >
      <div className="flex relative w-full text-center h-16">
        <Image className="p-2" src={logo} alt="logo" fill />
      </div>
      <div className="flex flex-col mt-8 gap-2">
        {sidebarRoutes.map((route: route, index: number) => (
          <SidebarItem
            key={index}
            path={route.path}
            Icon={route.Icon}
            label={route.label}
          />
        ))}
      </div>
      <div className="flex justify-center items-center mt-8  ">
        <FreeCounter apiLimitCount={apilimitCount} />
      </div>
    </aside>
  );
};

export default Sidebar;
