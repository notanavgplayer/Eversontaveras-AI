import Header from "@/components/ui/header";
import { checkSubscription } from "@/lib/subscription";
import PricingButtonForFree from "./_components/buttonFree";
import ButtonPro from "./_components/buttonPro";

const PricingPlans = async () => {
  const isSubscribed = await checkSubscription();
  return (
    <div>
      <Header />
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="grid lg:grid-cols-2 gap-12 lg:gap-8 py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6"
      >
        {/* Free Trial Plan */}
        <div className="border border-slate-200 p-8 shadow-lg bg-white rounded-2xl relative flex flex-col">
          <h3 className="text-xl font-bold leading-5 text-black">Free Trial</h3>
          <p className="mt-4 text-slate-700 text-sm leading-6">
            Unleash your creativity with our platform's innovative tools. Start
            your free trial today
          </p>
          <div className="mt-4 bg-slate-50 p-6 rounded-lg text-black -mx-6">
            <p className="text-sm font-semibold text-slate-500 flex items-center">
              <span>USD</span>
              <span className="text-4xl text-slate-900 ml-3">$0</span>
              <span className="ml-1.5">/month</span>
            </p>
          </div>
          <div>
            <ul className="text-black mt-6 space-y-4 flex-1">
              <li className="text-sm text-slate-700 leading-6 flex">
                <svg
                  className="h-5 w-5 text-indigo-500 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span className="ml-3">10 Free Prompts</span>
              </li>
              <li className="text-sm text-slate-700 leading-6 flex">
                <svg
                  className="h-5 w-5 text-indigo-500 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span className="ml-3">Access to all tools available</span>
              </li>
              <li className="text-sm text-slate-700 leading-6 flex">
                <svg
                  className="h-5 w-5 text-indigo-500 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span className="ml-3">7 Days Support Response</span>
              </li>
            </ul>
            <PricingButtonForFree isSubscribed={isSubscribed} />
          </div>
        </div>

        {/* GeniusWriter Pro Plan */}
        <div className="border border-slate-200 p-8 shadow-lg bg-white rounded-2xl relative flex flex-col">
          <h3 className="text-xl font-bold leading-5 text-black">
            GeniusWriter Pro
          </h3>
          <p className="mt-4 text-slate-700 text-sm leading-6">
            The Professional Plan stands out as the premier choice for content
            creators seeking an optimal package.
          </p>
          <div className="mt-4 bg-slate-50 p-6 rounded-lg text-black -mx-6">
            <p className="text-sm font-semibold text-slate-500 flex items-center">
              <span>USD</span>
              <span className="text-4xl text-slate-900 ml-3">$30</span>
              <span className="ml-1.5">/month</span>
            </p>
          </div>
          <div>
            <ul className="text-black mt-6 space-y-4 flex-1">
              <li className="text-sm text-slate-700 leading-6 flex">
                <svg
                  className="h-5 w-5 text-indigo-500 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span className="ml-3">Unlimited Prompts</span>
              </li>
              <li className="text-sm text-slate-700 leading-6 flex">
                <svg
                  className="h-5 w-5 text-indigo-500 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span className="ml-3">Access to all tools available</span>
              </li>
              <li className="text-sm text-slate-700 leading-6 flex">
                <svg
                  className="h-5 w-5 text-indigo-500 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span className="ml-3">Priority Support</span>
              </li>
            </ul>
            <ButtonPro isSubscribed={isSubscribed} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
