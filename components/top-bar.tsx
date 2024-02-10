import React from "react";

interface TopBarProps {
  label: string;
  Icon: string;
}

const TopBar = ({ Icon, label }: TopBarProps) => {
  return (
    <div className="flex justify-between min-h-8 p-4 bg-indigo-400 items-center">
      <div>
        {Icon} {label}
      </div>
      <span>User</span>
    </div>
  );
};

export default TopBar;
