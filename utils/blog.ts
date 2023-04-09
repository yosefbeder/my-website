import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import highlight from "rehype-highlight";
import stringify from "rehype-stringify";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
}

let cache: BlogPost[];

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  if (cache != null) return cache;

  const blogPath = path.join(process.cwd(), "blog");
  const fileNames = await fs.promises.readdir(blogPath);

  let posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(blogPath, fileName);
      const fileContent = await fs.promises.readFile(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      const processedContent = await unified()
        .use(markdown)
        .use(remark2rehype)
        .use(highlight)
        .use(stringify)
        .process(content);

      return {
        slug: fileName.replace(/\.md$/, ""),
        title: data.title,
        date: data.date,
        description: data.description,
        content: processedContent.toString(),
      };
    })
  );

  posts.sort((a, b) => b.date - a.date);
  posts = posts.map((post) => ({ ...post, date: post.date.toDateString() }));

  cache = posts;

  return posts;
};
