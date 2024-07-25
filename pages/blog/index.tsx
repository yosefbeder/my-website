import { GetStaticProps, NextPage } from "next";
import { BlogPostProps } from "../../components/BlogPost";
import BlogPost from "../../components/BlogPost";
import { getBlogPosts } from "../../utils/blog";
import Head from "next/head";

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
    <>
      <Head>
        <title>Blog | Yosef Beder</title>
        <meta
          name="description"
          content="The place where I share the new things I learn."
        />
      </Head>
      <main className="section">
        <h1>Blog</h1>
        <div className="container">
          {posts.map((post) => (
            <BlogPost {...post} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Blog;
