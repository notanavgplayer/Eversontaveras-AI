import Sidebar from "@/components/side-bar";
import TopBar from "@/components/top-bar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" min-h-screen grid grid-cols-12">
      <Sidebar />
      <main className="col-span-10">
        {children}
      </main>
    </div>
  );
};

export default layout;
