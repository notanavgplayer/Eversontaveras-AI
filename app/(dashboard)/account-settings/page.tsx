import TopBar from "@/components/top-bar";
import { checkSubscription } from "@/lib/subscription";
import { Settings2 } from "lucide-react";
import AccountSettingsButton from "./_components/AccountSettingsButton";
import FreeCounter from "@/components/free-counter";
import { checkApiLimit, getApiLimitCount } from "@/lib/api-limit";

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
              <div className="flex justify-center items-center mt-8  ">
                {!subscribed && <FreeCounter apiLimitCount={apilimitCount} />}
              </div>
              <p className="text-sm tracking-wide text-gray-700">
                You are subscribed to our service. You can manage your
                subscription from here.
              </p>
              <AccountSettingsButton label={"Manage subscription"} />
            </div>
          </>
        ) : (
          <div className="w-full p-4">
            <p className="text-sm tracking-wide text-gray-700">
              You are subscribed to our service. You can manage your
              subscription from here.
            </p>
            <AccountSettingsButton label={"Upgrade to pro"} />
          </div>
        )}
      </main>
    </div>
  );
};

export default page;
