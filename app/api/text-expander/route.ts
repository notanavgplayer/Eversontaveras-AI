import { auth } from "@clerk/nextjs";
import axios from "axios";
import { NextResponse } from "next/server";

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

    const options = {
      method: "POST",
      url: "https://ai-sentence-expander.p.rapidapi.com/expand-sentence",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": "ai-sentence-expander.p.rapidapi.com",
      },
      data: {
        sentence: inputText,
      },
    };

    const response = await axios.request(options);

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[TEXT_EXPANDER_ERROR", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
