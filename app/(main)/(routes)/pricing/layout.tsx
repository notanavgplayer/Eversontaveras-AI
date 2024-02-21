import { checkSubscription } from "@/lib/subscription";
import React from "react";
import PricingPlans from "./page";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const isSubscribed = await checkSubscription();
  return (
    <div>
      <PricingPlans isSubscribed={isSubscribed} />
    </div>
  );
};

export default layout;
