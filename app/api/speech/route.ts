import { checkApiLimit, incrementApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { auth } from "@clerk/nextjs";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { text, speed, voice_code, pitch } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!text) {
      return new NextResponse("Text is required", { status: 400 });
    }

    if (!speed) {
      return new NextResponse("Speed is required", { status: 400 });
    }

    if (!pitch) {
      return new NextResponse("Pitch is required", { status: 400 });
    }

    if (!voice_code) {
      return new NextResponse("Voice code is required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isSubscribed = await checkSubscription();

    if (!freeTrial && !isSubscribed) {
      return new NextResponse("expired trial", { status: 403 });
    }

    let responseArray = [];
    const encodedParams = new URLSearchParams();
    encodedParams.set("voice_code", voice_code);
    encodedParams.set("text", text);
    encodedParams.set("speed", speed);
    encodedParams.set("pitch", pitch);
    encodedParams.set("output_type", "audio_url");

    const options = {
      method: "POST",
      url: "https://cloudlabs-text-to-speech.p.rapidapi.com/synthesize",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": "cloudlabs-text-to-speech.p.rapidapi.com",
      },
      data: encodedParams,
    };
    const response = await axios.request(options);

    responseArray.push(response.data.result.audio_url);

    if (!isSubscribed) {
      await incrementApiLimit();
    }

    return NextResponse.json(responseArray);
  } catch (error) {
    console.log("SPEECH_ERROR", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
