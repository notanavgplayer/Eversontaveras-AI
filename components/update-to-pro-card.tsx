

import React from "react";
import { Button } from "./ui/button";

const UpgradeToProCard = () => {
  return (
    <div className="bg-gray-100 shadow-lg rounded-lg mt-6 flex justify-center items-start flex-col px-2 py-4 max-w-sm mx-auto">
      <Button
        onClick={
          () => {
            console.log("Upgrade Now")
          }
      }
        variant={'primary'}
      >Upgrade Now</Button>
    </div>
  );
};

export default UpgradeToProCard;
