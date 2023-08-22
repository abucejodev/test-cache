import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

let count = 10;

export const GET = async () => {
  return NextResponse.json(count);
};

export const POST = async () => {
  count++;
  revalidateTag("count");
  return NextResponse.json(count);
};
