import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { stripe } from "@/lib/stripe";
import { absoluteURL } from "@/lib/utils";
import db from "@/lib/db";

const settingsUrl = absoluteURL("/account-settings");

export async function GET(
  req: Request,
  {params}: {
    params: {
      subsType: 'month' | 'year'
    };
  }
) {
  try {
    const { userId } = auth();
    const user = await currentUser();

    console.log(params)

    if (!userId || !user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    // if (!subscriptionType) {
    //   return new NextResponse("subscriptionType is required", { status: 400 });
    // }
    const userSubscription = await db.userSubscription.findUnique({
      where: {
        userId,
      },
    });

    if (userSubscription && userSubscription.stripeCustomerId) {
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: userSubscription.stripeCustomerId,
        return_url: settingsUrl,
      });

      return new NextResponse(JSON.stringify({ url: stripeSession.url }));
    }

    const stripeSession = await stripe.checkout.sessions.create({
      success_url: settingsUrl,
      cancel_url: settingsUrl,
      payment_method_types: ["card"],
      mode: "subscription",
      billing_address_collection: "auto",
      customer_email: user.emailAddresses[0].emailAddress,
      line_items: [
        {
          price_data: {
            currency: "USD",
            product_data: {
              name: "Geniuswriter",
              description: "Access Unlimited AI Generations On Geniuswriter",
            },
            unit_amount: 60000,
            recurring: {
              interval: params.subsType,
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId,
      },
    });

    return new NextResponse(JSON.stringify({ url: stripeSession.url }));
  } catch (error) {
    console.log("[STRIPE_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
