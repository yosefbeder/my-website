import { GetStaticProps, NextPage } from "next";
import rehypeStringify from "rehype-stringify/lib";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

interface AboutProps {
  content: string;
}

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
  const md = await fetch(
    "https://raw.githubusercontent.com/yosefbeder/yosefbeder/main/README.md"
  )
    .then((res) => res.text())
    .then((text) => text);
  const html = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(md);
  return { props: { content: html.toString() } };
};

const About: NextPage<AboutProps> = ({ content }) => {
  return (
    <main className="section">
      <h1>About</h1>
      <article dangerouslySetInnerHTML={{ __html: content }}></article>
    </main>
  );
};

export default About;
