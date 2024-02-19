import { auth } from "@clerk/nextjs";
import db from "./db";



const DAY_IN_MS = 86_400_000;

export const checkSubscription = async () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  const userSubscription = await db.userSubscription.findUnique({
    where: {
      userId: userId,
    },
    select: {
      subscriptionID: true,
      subscriptionPeriodEnd: true,
    },
  });

  if (!userSubscription) {
    return false;
  }

  const isValid =
    userSubscription.subscriptionID &&
    new Date(userSubscription.subscriptionPeriodEnd!).getTime()! + DAY_IN_MS >
      Date.now();

  return !!isValid;
};
