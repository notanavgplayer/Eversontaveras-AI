import Sidebar from "@/components/side-bar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {

  
  return (
    <div className=" min-h-screen grid grid-cols-12">
      <Sidebar />
      <main className="xl:col-span-10 col-span-12 ">{children}</main>
    </div>
  );
};

export default layout;
