import { NextResponse } from "next/server";
import { createCapturedPost } from "@/server/posts/service";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const post = await createCapturedPost(body);

    return NextResponse.json(
      { post },
      {
        status: 201,
        headers: corsHeaders,
      },
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unexpected capture failure.";

    return NextResponse.json(
      { error: message },
      {
        status: 400,
        headers: corsHeaders,
      },
    );
  }
}
