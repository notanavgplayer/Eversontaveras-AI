"use client";
import SidebarItem from "./sidebar-item";
import Image from "next/image";
import logo from "@/public/images/logo.svg";
import { LayoutDashboard } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";



const Sidebar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);


  return (
    <aside
      data-aos="fade-right"
      data-aos-duration="1000"
      className="col-span-2 max-h-screen overflow-y-auto  px-2 py-4 bg-gray-900 "
    >
      <div className="flex relative w-full text-center h-16">
        <Image className="p-2" src={logo} alt="logo" fill />
      </div>
      <div className="flex flex-col gap-2 mt-8">
        <SidebarItem
          label="Dashboard"
          Icon={LayoutDashboard}
          path="/dashboard"
        />
        <div>lorenm</div>
      </div>
    </aside>
  );
};

export default Sidebar;
