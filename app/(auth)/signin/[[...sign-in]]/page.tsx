import React from "react";
import { SignIn } from "@clerk/nextjs";
const page = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <SignIn />
    </div>
  );
};

export default page;
