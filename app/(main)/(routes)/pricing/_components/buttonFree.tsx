"use client";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

interface PricingButtonProps {
  isSubscribed: boolean;
}

const PricingButtonForFree = ({ isSubscribed }: PricingButtonProps) => {
  const { userId } = useAuth();
  const router = useRouter();
  return (
    <button
      onClick={userId ? () => null : () => router.push("/signin")}
      className="text-white bg-blue-600 w-full hover:bg-blue-700 mt-8 block text-sm font-semibold leading-4 text-center rounded-lg shadow-md px-6 py-4"
    >
      {!userId && "Start your Free Trial"}{" "}
      {!isSubscribed && userId && "Currently on free trial"}{" "}
      {isSubscribed && "Not eligible"}
    </button>
  );
};

export default PricingButtonForFree;
