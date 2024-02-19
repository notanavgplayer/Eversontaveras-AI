import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse, DataMessage } from "ai";
import { NextResponse } from "next/server";
import { checkApiLimit, incrementApiLimit } from "@/lib/api-limit";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const freeTrial = await checkApiLimit();

  if (!freeTrial) {
    return new NextResponse("expired trial", { status: 403 });
  }

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages,
  });

  await incrementApiLimit();

  return new NextResponse(response.choices[0].message.content);
}
