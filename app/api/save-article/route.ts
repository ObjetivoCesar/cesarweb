import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

function extractFrontmatter(markdown: string) {
  const match = markdown.match(/^---([\s\S]*?)---/);
  if (!match) return null;
  const yaml = match[1];
  const lines = yaml.split("\n");
  const data: Record<string, string> = {};
  for (const line of lines) {
    const [key, ...rest] = line.split(":");
    if (key && rest.length > 0) {
      data[key.trim()] = rest.join(":").trim().replace(/^"|"$/g, "");
    }
  }
  return data;
}

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '')
    .replace(/\-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function POST(req: NextRequest) {
  try {
    const { markdown } = await req.json();
    const frontmatter = extractFrontmatter(markdown);
    if (!frontmatter || !frontmatter.category || !frontmatter.title) {
      return NextResponse.json({ error: "Faltan campos obligatorios en el encabezado YAML" }, { status: 400 });
    }
    const category = frontmatter.category;
    // Permitir slug personalizado, si no, generar uno
    let slug = frontmatter.slug ? slugify(frontmatter.slug) : slugify(frontmatter.title);
    if (!slug) {
      return NextResponse.json({ error: "El slug no puede estar vacío." }, { status: 400 });
    }
    // Limitar longitud máxima del slug (por seguridad)
    if (slug.length > 100) slug = slug.slice(0, 100);
    const dir = path.join(process.cwd(), "content", "blog", category);
    await fs.mkdir(dir, { recursive: true });
    const filePath = path.join(dir, `${slug}.md`);
    await fs.writeFile(filePath, markdown, "utf-8");
    const url = `/blog/${category}/${slug}`;
    return NextResponse.json({ success: true, url });
  } catch (err: any) {
    return NextResponse.json({ error: "Error inesperado en el servidor: " + (err?.message || err) }, { status: 500 });
  }
}