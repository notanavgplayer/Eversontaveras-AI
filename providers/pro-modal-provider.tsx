"use client";

import ProModal from "@/components/pro-modal";
import React from "react";

const ProModalProvider = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <ProModal/>;
};

export default ProModalProvider;
