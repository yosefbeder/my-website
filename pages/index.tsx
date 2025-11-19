import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import Avatar from "../public/galary/avatar.png";
import BlogPost, { BlogPostProps } from "../components/BlogPost";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { getBlogPosts } from "../utils/blog";
import Image from "next/image";
import MapPin from "../components/MapPin";
import Story from "../components/Story";
import DrAlaaAvatar from "../public/galary/dr-alaa-eissa.jpeg";
import Testimonial from "../components/Testimonial";

interface HomeProps {
  posts: BlogPostProps[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      posts: (await getBlogPosts())
        .map(({ slug, title, date, lastModified, description }) => ({
          slug,
          title,
          date,
          lastModified,
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

const Testimonials: React.FC = () => {
  return (
    <section className="section">
      <h2 className="text-center">Testimonials</h2>
      <Testimonial
        author="Dr. Alaa Eissa"
        affiliation="Head of Pharmacology Department"
        avatar={DrAlaaAvatar}
        text="I am truly impressed by your way of thinking, Yosef, and how you support your colleagues. You are excellent, and I predict a promising future for you in Pharmacology."
        context="Feedback received after creating several video tutorials on my iPad helping my colleagues in a WhatsApp group supervised by the doctor."
        recording="/audio/dr-alaa-eissa.mp3"
      />
    </section>
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
  const pageTitle = "Yosef Beder";
  const pageDescription =
    "Meet Yosef Beder, a Medical Student and AI & Programming Enthusiast based in Egypt. Follow his journey as a USMLE Aspirant.";
  const pageUrl = "https://yosefbeder.com";
  const ogImage = `${pageUrl}/og-image.png`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="canonical" href={pageUrl} />
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Yosef Beder",
              url: pageUrl,
              image: `${pageUrl}/galary/avatar.png`,
              jobTitle: [
                "Medical Student",
                "AI & Programming Enthusiast",
                "USMLE Aspirant",
              ],
              description:
                "Level-2 medical student at Al-Azhar University with 4+ years of coding experience. Co-developer of DocReader Guide (4,452+ active users), integrating Gen AI to add over 50,000 MCQ questions. I intend to pursue a career combining medicine and AI in the USA.", //
              address: {
                "@type": "PostalAddress",
                addressLocality: "New Domiat",
                addressRegion: "Dumyat",
                addressCountry: "EG",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+201019967816",
                  contactType: "Mobile",
                },
                {
                  "@type": "ContactPoint",
                  email: "dryosefbeder@gmail.com",
                  contactType: "Email",
                },
              ],
              sameAs: [
                "https://www.linkedin.com/in/yosefbeder",
                "https://github.com/yosefbeder",
                "https://t.me/yosefbeder",
              ],
              knowsLanguage: [
                { "@type": "Language", name: "Arabic" },
                { "@type": "Language", name: "English" },
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Al-Azhar University",
              },
            }),
          }}
        />
      </Head>
      <Header />
      <Story />
      <Testimonials />
      <Blog posts={posts} />
    </>
  );
};

export default Home;
