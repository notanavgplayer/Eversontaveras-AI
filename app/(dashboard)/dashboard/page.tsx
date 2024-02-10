import TopBar from "@/components/top-bar";
import { sidebarRoutes } from "@/lib/sideRoutes";
import { LayoutDashboard } from "lucide-react";
import React from "react";


const Dashboard = () => {
  return (
    <div className="bg-[#F5F9FF] min-h-screen">
      <TopBar label="Dashboard" Icon={LayoutDashboard} />
      <main className="text-gray-900">
        <h1>Dashboard</h1>
      </main>
    </div>
  );
};

export default Dashboard;
