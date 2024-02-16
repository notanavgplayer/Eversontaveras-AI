import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_SECETE_KEY,
});

const openAI = new OpenAIApi(configuration);

export const runtime = "edge";

export async function POST(req: Request) {
  const { content } = await req.json();

  const res = await openAI.createChatCompletion({
    messages: content,
    model: "gpt-3.5-turbo",
    stream: true,
  });

  const stream = OpenAIStream(res);

  return new StreamingTextResponse(stream);
}
