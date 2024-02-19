"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import SpecialButton from "./special-button";
import { maxFreeCount } from "@/lib/freeCount";

interface FreeCounterProps {
  apiLimitCount: number;
}
const FreeCounter = ({ apiLimitCount }: FreeCounterProps) => {
  //   const proModal = useProModal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-white overflow-hidden  flex flex-col gap-4 p-4 lg:p-6 text-gray-800 rounded-[.4rem] justify-around items-center">
      <p className="text-sm lg:text-base lg:font-semibold">
        {apiLimitCount} / {maxFreeCount} Free Generations
      </p>
      <Progress
        className="h-3"
        value={apiLimitCount / maxFreeCount * 100}
      />
      <SpecialButton />
    </div>
  );
};

export default FreeCounter;
