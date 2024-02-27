"use client";
import { useStore } from "@/hooks/use-pro-modal";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

interface PricingButtonProps {
  isSubscribed: boolean;
}

const ButtonPro = ({ isSubscribed }: PricingButtonProps) => {
  const { userId } = useAuth();
  const router = useRouter();

  const { onOpen } = useStore();
  return (
    <button
      disabled={isSubscribed}
      onClick={userId ? () => onOpen() : () => router.push("/signin")}
      className="text-white bg-blue-600 w-full hover:bg-blue-700 mt-8 block text-sm font-semibold leading-4 text-center rounded-lg shadow-md px-6 py-4"
    >
      {isSubscribed ? "Currently on pro" : " Upgrade to pro"}
    </button>
  );
};

export default ButtonPro;
