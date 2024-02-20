import Sidebar from "@/components/side-bar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const isSubscribed = await checkSubscription();
  const apilimitCount = await getApiLimitCount();
  return (
    <div className=" min-h-screen grid grid-cols-12">
      <Sidebar isSubscribed={isSubscribed} apilimitCount={apilimitCount} />
      <main className="xl:col-span-10 col-span-12 ">{children}</main>
    </div>
  );
};

export default layout;
