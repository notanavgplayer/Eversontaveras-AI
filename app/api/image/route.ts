import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from "replicate";
import { checkApiLimit, incrementApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const {
      prompt,
      amount = 1,
      resolution = "512x512",
      nagative_prompt,
    } = body;

    const replicate = new Replicate({
      auth: process.env.REPLICATE_API_TOKEN,
    });

    const [width, height] = resolution.split("x").map(Number);
    const numOutputs = parseInt(amount, 10);

    if (!replicate) {
      return new NextResponse("Relicate auth error", { status: 401 });
    }

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }

    if (!nagative_prompt) {
      return new NextResponse("Nagative Prompt is required", { status: 400 });
    }

    if (!amount) {
      return new NextResponse("Amount is required", { status: 400 });
    }

    if (!resolution) {
      return new NextResponse("Resolution is required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isSubscribed = await checkSubscription();

    if (!freeTrial && !isSubscribed) {
      return new NextResponse("expired trial", { status: 403 });
    }

    const output = await replicate.run(
      "adalab-ai/kandinsky_v2_2:eb68c00d7fc7d7297a04dcecbdd29032361ab8f1d3f6843c32fbd6ec70532319",
      {
        input: {
          task: "text2img",
          width: width,
          height: height,
          prompt: prompt,
          scheduler: "unipc",
          img_weight: 1,
          num_outputs: numOutputs,
          guidance_scale: 4,
          nagative_prompt: nagative_prompt,
          num_steps_prior: 2,
          num_inference_steps: 18,
        },
      }
    );

    if (!isSubscribed) {
      await incrementApiLimit();
    }
    return NextResponse.json(output);
  } catch (error) {
    console.log("[IMAGE_ERROR", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
