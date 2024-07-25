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
      <h3>
        {title}
        <br />
        <span className="text-sm font-thin text-slate-600">📅 {date}</span>
      </h3>
      <p>{description}</p>
      <Link variant="primary" href={`/blog/${slug}`}>
        📖 Read
      </Link>
    </article>
  );
};

export default BlogPost;
