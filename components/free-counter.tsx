"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import SpecialButton from "./special-button";

interface FreeCounterProps {
  apiLimitCount: number;
}
const FreeCounter = ({ apiLimitCount = 0 }: FreeCounterProps) => {
  //   const proModal = useProModal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-white overflow-hidden  flex flex-col gap-3 p-4 text-gray-800 rounded-[.4rem] justify-around items-center">
      <p>
        {apiLimitCount} / {2} Free Generations
      </p>
      <Progress
        className="h-3 bg-indigo-500"
        value={(apiLimitCount / 2) * 100}
      />
      <SpecialButton />
    </div>
  );
};

export default FreeCounter;
