import * as z from "zod";

// Custom validation function for word count
const wordCount = (value: string) => {
  const numericValue: number = parseInt(value, 10);

  return numericValue > 3 && numericValue < 2000;
  
};

// Custom error message for word count
const wordCountErrorMessage = "Word Count should be between 3 and 2000 words.";

export const formSchema = z.object({
  topic: z.string().min(1, {
    message: "Topic is required.",
  }),
  word_count: z.string().refine((value) => wordCount(value), {
    message: wordCountErrorMessage,
  }),
  writing_mode: z.string().min(1),
  story_genre: z.string().min(1),
});

export const writingModeOptions = [
  {
    value: "Standard",
    label: "Standard",
  },
  {
    value: "Complex",
    label: "Complex",
  },
  {
    value: "Creative",
    label: "Creative",
  },
  {
    value: "Simple",
    label: "Simple",
  },
];


export const storyGenreOptions = [
  {
    value: "science fiction",
    label: "Science fiction",
  },
  {
    value: "mystery",
    label: "Mystery",
  },
  {
    value: "fantasy",
    label: "Fantasy",
  },
  {
    value: "descriptive",
    label: "Descriptive",
  },
];
