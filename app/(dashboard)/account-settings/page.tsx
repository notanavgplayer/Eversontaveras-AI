import TopBar from "@/components/top-bar";
import { Settings2 } from "lucide-react";

const page = () => {
  return (
    <div className="bg-[#F5F9FF] min-h-screen">
      <TopBar
        iconColor="text-rose-800"
        label="Account settings"
        Icon={Settings2}
      />
      <main className="text-gray-900">
        Account settings
      </main>
    </div>
  );
};

export default page;
