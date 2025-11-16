import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { BlogPost as BlogPostProps, getBlogPosts } from "../../utils/blog";
import Head from "next/head";
import "highlight.js/styles/atom-one-dark.css";

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getBlogPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
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
  slug,
}) => {
  const pageUrl = `https://yosefbeder.com/blog/${slug}`;
  const authorName = "Yosef Beder";
  const siteUrl = "https://yosefbeder.com";
  const ogImage = "https://yosefbeder.com/og-image.png";
  const publishedDateISO = new Date(date).toISOString();
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: title,
    description: description,
    author: {
      "@type": "Person",
      name: authorName,
      url: siteUrl,
    },
    publisher: {
      "@type": "Person",
      name: authorName,
      url: siteUrl,
    },
    datePublished: publishedDateISO,
    dateModified: publishedDateISO,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Blog",
        item: `${siteUrl}/blog`,
      },
    ],
  };

  return (
    <>
      <Head>
        <title>
          {title} | {authorName}
        </title>
        <meta name="description" content={description} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={publishedDateISO} />
        <meta property="article:author" content={authorName} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>
      <main>
        <h1>{title}</h1>
        <p className="text-sm text-slate-600">{date}</p>
        <p>{description}</p>
        <article dangerouslySetInnerHTML={{ __html: content }}></article>
      </main>
    </>
  );
};

export default BlogPost;
