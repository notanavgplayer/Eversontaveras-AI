import Sidebar from "@/components/side-bar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
      <main>{children}</main>
  );
};

export default layout;
