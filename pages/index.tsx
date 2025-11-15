import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import Avatar from "../public/galary/avatar.png";
import BlogPost, { BlogPostProps } from "../components/BlogPost";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { getBlogPosts } from "../utils/blog";
import Image from "next/image";
import MapPin from "../components/MapPin";
import Story from "../components/Story";

interface HomeProps {
  posts: BlogPostProps[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      posts: (await getBlogPosts())
        .map(({ slug, title, date, description }) => ({
          slug,
          title,
          date,
          description,
        }))
        .slice(0, 3),
    },
  };
};

const tags = [
  "Medical Student",
  "AI & Programming Enthusiast",
  "USMLE Aspirant",
];

const Header: React.FC = () => {
  return (
    <header className="flex max-md:flex-col max-md:items-center gap-6 max-md:gap-4 py-6 max-md:py-4">
      <div className="relative w-60 h-60 rounded-full overflow-hidden flex-shrink-0">
        <Image
          className="absolute z-10 top-0 left-0 w-60 h-60 rounded-full"
          src={Avatar}
          alt="Portrait"
        />
        <div className="absolute w-full h-full rounded-full -bottom-16 bg-blue-200"></div>
        <div className="absolute w-full h-full rounded-full -bottom-24 bg-blue-400"></div>
        <div className="absolute w-full h-full rounded-full -bottom-32 bg-blue-600"></div>
      </div>
      <div className="flex flex-col gap-6 max-md:gap-4 max-md:items-center">
        <h1 className="my-0">Yosef Beder</h1>
        <div className="flex flex-wrap gap-2 max-md:justify-center">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-blue-50 text-blue-600 px-4 py-1.5 text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-2 items-center">
          <MapPin />
          <span>New Domiat, Dumyat, Egypt</span>
        </div>
        <SocialMediaIcons />
      </div>
    </header>
  );
};

const Blog: React.FC<HomeProps> = ({ posts }) => {
  return (
    <section className="section">
      <h2 className="text-center">Blog</h2>
      <div className="container">
        {posts.map((post) => (
          <BlogPost {...post} />
        ))}
      </div>
    </section>
  );
};

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Yosef Beder</title>
        <meta
          name="description"
          content="A high school student who likes coding."
        />
      </Head>
      <Header />
      <Story />
      <Blog posts={posts} />
    </>
  );
};

export default Home;
