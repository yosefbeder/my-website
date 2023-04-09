import React from "react";
import Link from "./Link";

export interface BlogPostProps {
  slug: string;
  title: string;
  date: string;
  description: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  slug,
  title,
  date,
  description,
}) => {
  return (
    <article>
      <h3 className="my-2">{title}</h3>
      <p className=" text-sm text-stone-600">📅 {date}</p>
      <p>{description}</p>
      <Link variant="primary" href={`/blog/${slug}`}>
        📖 Read
      </Link>
    </article>
  );
};

export default BlogPost;
