import { NextPage } from "next";
import Article from "../../components/Article";
import blog from "../../data/blog.json";

const Blog: NextPage = () => {
  return (
    <main className="section">
      <h1>Blog</h1>
      {blog
        .map(({ title, date, description }) => ({
          title,
          date: new Date(date),
          description,
        }))
        .map((article) => (
          <Article {...article} />
        ))}
    </main>
  );
};

export default Blog;
