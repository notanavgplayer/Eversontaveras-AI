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



export const speedOptions = [
  {
    label: 'Speed 1x',
    value : '1.00'
  },
  {
    label: 'Speed 1.25x',
    value : '1.25'
  },
  {
    label: 'Speed 1.5x',
    value : '1.50'
  },
  {
    label: 'Speed 1.75x',
    value : '1.75'
  },
  {
    label: 'Speed 2x',
    value : '2.00'
  },
  {
    label: 'Speed 2.25x',
    value : '2.25'
  },
  {
    label: 'Speed 2.50x',
    value : '2.50'
  },
  {
    label: 'Speed 2.75x',
    value : '2.75'
  },
  {
    label: 'Speed 3x',
    value : '3.00'
  },

]


export const pitchOptions = [
  {
    label: 'Pitch 0x',
    value : '0.00'
  },
  {
    label: 'Pitch 1x',
    value : '1.00'
  },
  {
    label: 'Pitch 2x',
    value : '2.00'
  }
]