"use client";

import { Button } from "@/components/ui/button";
import { useStore } from "@/hooks/use-pro-modal";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface AccountSettingsButtonProps {
  label: string;
}

const AccountSettingsButton = (props: AccountSettingsButtonProps) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const { onOpen } = useStore();

  const onClickHandlerForSubscriber = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/api/stripe/unknown`);
      window.location.href = response.data.url;
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      router.refresh();
    }
  };

  const onClickHandlerForNonSubscriber = async () => {
    try {
      setIsLoading(true);
      onOpen();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      router.refresh();
    }
  };

  return (
    <Button
      variant={"primary"}
      onClick={
        props.label === "Manage subscription"
          ? onClickHandlerForSubscriber
          : onClickHandlerForNonSubscriber
      }
      className="mt-4"
    >
      {props.label}

      {isLoading && (
        <div className="ml-2 spinner-border spinner-border-sm" role="status">
          <Loader2 className="w-4 h-4 animate-spin" />
        </div>
      )}
    </Button>
  );
};

export default AccountSettingsButton;
