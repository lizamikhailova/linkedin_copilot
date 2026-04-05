import { PostStatus } from "@prisma/client";
import { capturedPostSchema, type CapturedPostInput } from "@/lib/validation";
import { db } from "@/server/db";

export async function createCapturedPost(input: CapturedPostInput) {
  const data = capturedPostSchema.parse(input);

  return db.post.create({
    data: {
      sourceUrl: data.sourceUrl,
      authorName: data.authorName,
      text: data.text,
      status: PostStatus.CAPTURED,
    },
  });
}

