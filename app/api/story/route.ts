import { checkApiLimit, incrementApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { auth } from "@clerk/nextjs";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { topic, word_count, writing_mode, story_genre } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!topic) {
      return new NextResponse("Topic is required", { status: 400 });
    }

    if (!writing_mode) {
      return new NextResponse("Writting mode is required", { status: 400 });
    }

    if (!story_genre) {
      return new NextResponse("Story genre is required", { status: 400 });
    }

    if (!word_count) {
      return new NextResponse("Word count is required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isSubscribed = await checkSubscription();

    if (!freeTrial && !isSubscribed) {
      return new NextResponse("expired trial", { status: 403 });
    }

    const options = {
      method: "POST",
      url: "https://ai-story-generator.p.rapidapi.com/generate-story",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": "ai-story-generator.p.rapidapi.com",
      },
      data: {
        topic,
        word_count: Number(word_count),
        writing_mode,
        story_genre,
      },
    };
    const response = await axios.request(options);

    if (!isSubscribed) {
      await incrementApiLimit();
    }

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[STORY_ERROR", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
