import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

type Metadata = {
  title: string;
  publishedAt: string;
  updatedAt?: string;
  summary: string;
  image?: string;
  images: string[];
  tag?: string;
  team: Team[];
  link?: string;
  keywords?: string[];
  schema?: any;
};

import { notFound } from "next/navigation";

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    notFound();
  }

  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);

  let schema = null;
  let cleanContent = content;
  
  const schemaMatch = content.match(/<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/);
  if (schemaMatch) {
    try {
      schema = JSON.parse(schemaMatch[1]);
      cleanContent = content.replace(/<script type="application\/ld\+json">\s*[\s\S]*?\s*<\/script>\s*/, '');
    } catch (error) {
      console.warn(`Failed to parse schema in ${filePath}:`, error);
    }
  }

  const metadata: Metadata = {
    title: data.title || "",
    publishedAt: data.publishedAt,
    updatedAt: data.updatedAt ? String(data.updatedAt) : "",
    summary: data.summary || "",
    image: data.image || "",
    images: data.images || [],
    tag: data.tag || [],
    team: data.team || [],
    link: data.link || "",
    keywords: data.keywords || [],
    schema: schema,
  };

  return { metadata, content: cleanContent };
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getPosts(customPath = ["", "", "", ""]) {
  const postsDir = path.join(/*turbopackIgnore: true*/ process.cwd(), ...customPath);
  return getMDXData(postsDir);
}
