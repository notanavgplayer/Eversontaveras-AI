import * as z from "zod";

export const formSchema = z.object({
  text: z.string().min(1, {
    message: "Text is required.",
  }),
  voice_code: z.string().min(1, {
    message: "Please choose the language",
  }),
  speed: z.string().min(1),
  pitch: z.string().min(1),
});

