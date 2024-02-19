import { checkApiLimit, incrementApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const freeTrial = await checkApiLimit();
  const isSubscribed = await checkSubscription();

  if (!freeTrial && !isSubscribed) {
    return new NextResponse("expired trial", { status: 403 });
  }

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages,
  });

  if (!isSubscribed) {
    await incrementApiLimit();
  }

  return new NextResponse(response.choices[0].message.content);
}
