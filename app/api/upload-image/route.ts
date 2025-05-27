import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  const alt = formData.get("alt") as string;
  const title = formData.get("title") as string;

  if (!file) {
    return NextResponse.json({ error: "No se recibió ningún archivo" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_")}`;
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  const filePath = path.join(uploadDir, fileName);

  await fs.writeFile(filePath, buffer);

  // La URL interna para usar en los artículos
  const url = `/uploads/${fileName}`;

  // Guardar metadatos en un archivo JSON
  const metaPath = path.join(process.cwd(), "public", "uploads", "images-meta.json");
  let metaArr = [];
  try {
    const metaRaw = await fs.readFile(metaPath, "utf-8");
    metaArr = JSON.parse(metaRaw);
  } catch {}
  metaArr.push({ url, alt, title, fileName, uploaded: new Date().toISOString() });
  await fs.writeFile(metaPath, JSON.stringify(metaArr, null, 2), "utf-8");

  return NextResponse.json({ url, alt, title });
} 