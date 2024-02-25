import { checkApiLimit, incrementApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { auth } from "@clerk/nextjs";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { inputText } = body;

console.log( "Rapid api key" , process.env.RAPID_API_KEY)
    console.log("user id from next Auth" ,  userId)
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!inputText) {
      return new NextResponse("Input text is required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isSubscribed = await checkSubscription();

    if (!freeTrial && !isSubscribed) {
      return new NextResponse("expired trial", { status: 403 });
    }

    const options = {
      method: "POST",
      url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize-text",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
      },
      data: {
        lang: "en",
        text: inputText,
      },
    };



    const response = await axios.request(options);

    if (!isSubscribed) {
      await incrementApiLimit();
    }

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[ARTICLE_SUMMARIZER_ERROR", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
