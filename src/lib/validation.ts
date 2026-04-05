import { z } from "zod";

export const capturedPostSchema = z.object({
  sourceUrl: z.string().url().optional(),
  authorName: z
    .string()
    .trim()
    .transform((value) => value || undefined)
    .optional(),
  text: z.string().trim().min(1, "Post text is required."),
});

export type CapturedPostInput = z.infer<typeof capturedPostSchema>;
