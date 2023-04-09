import React from "react";
import { slugify } from "../utils/slugify";
import Link from "./Link";

interface ArticleProps {
  title: string;
  date: Date;
  description: string;
}

const Article: React.FC<ArticleProps> = ({ title, date, description }) => {
  return (
    <article>
      <h3 className="my-2">{title}</h3>
      <p className=" text-sm text-stone-600">📅 {date.toDateString()}</p>
      <p>{description}</p>
      <Link variant="primary" href={`/blog/${slugify(title)}`}>
        📖 Read
      </Link>
    </article>
  );
};

export default Article;
