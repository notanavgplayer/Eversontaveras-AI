
import { checkSubscription } from "@/lib/subscription";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
     
      <main className=" ">{children}</main>
    </div>
  );
};

export default layout;
