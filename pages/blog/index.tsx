import { GetStaticProps, NextPage } from "next";
import { BlogPostProps } from "../../components/BlogPost";
import BlogPost from "../../components/BlogPost";
import { getBlogPosts } from "../../utils/blog";

interface BlogProps {
  posts: BlogPostProps[];
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  return {
    props: {
      posts: (await getBlogPosts()).map(
        ({ slug, title, date, description }) => ({
          slug,
          title,
          date,
          description,
        })
      ),
    },
  };
};

const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <main className="section">
      <h1>Blog</h1>
      <div className="container">
        {posts.map((post) => (
          <BlogPost {...post} />
        ))}
      </div>
    </main>
  );
};

export default Blog;
