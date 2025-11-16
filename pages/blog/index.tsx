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
        ({ slug, title, date, lastModified, description }) => ({
          slug,
          title,
          date,
          lastModified,
          description,
        })
      ),
    },
  };
};

const Blog: NextPage<BlogProps> = ({ posts }) => {
  const pageTitle = "Blog | Yosef Beder";
  const pageDescription =
    "The official blog of Yosef Beder. Explore articles on medicine, AI, programming, and my journey as a USMLE aspirant.";
  const pageUrl = "https://yosefbeder.com/blog";
  const ogImage = "https://yosefbeder.com/og-image.png";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="canonical" href={pageUrl} />
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />
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
