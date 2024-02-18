import { auth } from "@clerk/nextjs";
import axios from "axios";
import { NextResponse } from "next/server";
import { checkApiLimit, incrementApiLimit } from "@/lib/api-limit";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { inputText } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!inputText) {
      return new NextResponse("Input text is required", { status: 400 });
    }

 const freeTrial = await checkApiLimit();

 if (!freeTrial) {
   return new NextResponse("expired trial", { status: 403 });
 }

    const options = {
      method: "POST",
      url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize-text",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "870a7030d7msh014e25f605f2b29p18dbbejsn67d230e5bc71",
        "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
      },
      data: {
        lang: "en",
        text: inputText,
      },
    };
    const response = await axios.request(options);


await incrementApiLimit()

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[TEXT_EXPANDER_ERROR", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
