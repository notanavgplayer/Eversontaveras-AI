import TopBar from "@/components/top-bar";
import { checkSubscription } from "@/lib/subscription";
import { Settings2 } from "lucide-react";
import AccountSettingsButton from "./_components/AccountSettingsButton";
import FreeCounter from "@/components/free-counter";
import { checkApiLimit, getApiLimitCount } from "@/lib/api-limit";
import { maxFreeCount } from "@/lib/freeCount";

const page = async () => {
  const subscribed = await checkSubscription();
  const apilimitCount = await getApiLimitCount();

  return (
    <div className="bg-[#F5F9FF] min-h-screen">
      <TopBar
        iconColor="text-rose-800"
        label="Account settings"
        Icon={Settings2}
      />
      <main className="text-gray-900">
        {subscribed ? (
          <>
            <div className="w-full p-4">
              <p className="text-sm tracking-wide text-gray-700">
                You are currently subscribed to our pro plan. You can manage
                your subscription here.
              </p>
              <AccountSettingsButton label={"Manage subscription"} />
            </div>
          </>
        ) : (
          <div className="w-full p-4">
            <div className="flex xl:hidden justify-start items-center">
              <h3 className="text-lg font-bold my-2 text-gray-700 ">
                You have {maxFreeCount - apilimitCount} / {maxFreeCount} free
                requests left
              </h3>
            </div>
            <p className="text-sm tracking-wide text-gray-700">
              Currently you are using our free plan. You can upgrade to pro, to get unlimited generations. 
            </p>
            <AccountSettingsButton label={"Upgrade to pro"} />
          </div>
        )}
      </main>
    </div>
  );
};

export default page;
