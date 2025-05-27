import { NextResponse } from "next/server";
import { getAllArticles } from "@/lib/utils";

export async function GET() {
  const articles = getAllArticles();
  return NextResponse.json(articles);
} 