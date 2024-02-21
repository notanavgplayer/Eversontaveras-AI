"use client";
import { sidebarRoutes } from "@/lib/sideRoutes";
import logo from "@/public/images/logo.png";
import { route } from "@/types";
import AOS from "aos";
import Image from "next/image";
import { useEffect } from "react";
import SidebarItem from "./sidebar-item";
import FreeCounter from "./free-counter";
import { useStore } from "@/hooks/use-pro-modal";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface SidebarProps {
  apilimitCount: number;
  isSubscribed: boolean;
}

const Sidebar = ({ apilimitCount = 0, isSubscribed = false }: SidebarProps) => {
  const { subscriptionType } = useStore();
  const router = useRouter();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    router.refresh();
  }, [subscriptionType]);

  return (
    <aside
      data-aos="fade-right"
      data-aos-duration="1000"
      className=" xl:col-span-2 xl:inline-block max-h-screen hidden overflow-y-auto  px-2 py-8 bg-gray-900 "
    >
      <div className="flex relative w-full text-center h-16">
        <Link href="/">
          <Image className="p-2" src={logo} alt="logo" fill />
        </Link>
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
        {!isSubscribed && <FreeCounter apiLimitCount={apilimitCount} />}
      </div>
    </aside>
  );
};

export default Sidebar;
