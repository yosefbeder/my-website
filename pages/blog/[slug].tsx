import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { BlogPost as BlogPostProps, getBlogPosts } from "../../utils/blog";
import Head from "next/head";
import "highlight.js/styles/atom-one-dark.css";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: (await getBlogPosts()).map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({
  params,
}) => {
  return {
    props: (await getBlogPosts()).find(({ slug }) => slug == params!.slug)!,
  };
};

const BlogPost: NextPage<BlogPostProps> = ({
  title,
  date,
  description,
  content,
}) => {
  return (
    <>
      <Head>
        <title>{title} | Yosef Beder</title>
        <meta name="description" content={description} />
      </Head>
      <main>
        <h1>{title}</h1>
        <p className="text-sm text-slate-600">📅 {date}</p>
        <p>{description}</p>
        <article dangerouslySetInnerHTML={{ __html: content }}></article>
      </main>
    </>
  );
};

export default BlogPost;
