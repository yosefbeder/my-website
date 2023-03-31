import type { NextPage } from "next";
import CSS3 from "../components/CSS3";
import HTML5 from "../components/HTML5";
import Article from "../components/Article";
import SocialMediaIcons from "../components/SocialMediaIcons";
import Link from "../components/Link";
import blog from "../data/blog.json";

const tags = [
  "💻 front-end developer",
  "☕ coffee drinker ",
  "🎒 high school student",
  "🤓 maths geek",
  "🌐 languages enthusiastic",
];

enum Tech {
  HTML5,
  CSS3,
}

const techInfo = new Map([
  [
    Tech.HTML5,
    {
      color: "#E34F26",
      icon: HTML5,
    },
  ],
  [
    Tech.CSS3,
    {
      color: "#1572B6",
      icon: CSS3,
    },
  ],
]);

const work = [
  {
    name: "InHand Store",
    screenshots: "/InHand Store.png",
    description:
      "A simple landing page for an ecommerce startup based here in Egypt.",
    tech: [Tech.HTML5, Tech.CSS3],
    link: "https://yosefbeder.github.io/inhandstore/",
    code: "https://github.com/yosefbeder/inhandstore",
  },
];

const Header: React.FC = () => {
  return (
    <header className="flex max-md:flex-col max-md:items-center gap-6 max-md:gap-4 py-6 max-md:py-4 perspective transform-center max-md:transform-75%">
      <img
        className="w-60 max-sm:w-48 rounded-full"
        src="https://avatars.githubusercontent.com/u/78495625?v=4"
        alt="Portrait"
      />
      <div className="flex flex-col gap-6 max-md:gap-4 max-md:items-center inherit-transform-style">
        <h1 className="text-stone-900 inherit-transform-style">
          <span className="inline-block animate-[wave_1s_1s]">👋</span> Hey, I'm{" "}
          <strong className="inline-block shiny from-amber-600 via-amber-400 to-amber-600 bg-clip-text text-transparent animate-[shine_500ms_2s]">
            Yosef
          </strong>
        </h1>
        <div className="flex flex-wrap gap-2 max-md:gap-1.5 max-w-md max-md:justify-center inherit-transform-style">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="shiny from-amber-400 via-amber-200 to-amber-400 text-base max-sm:text-sm font-medium py-0.5 px-1 rounded-md capitalize"
              style={{
                animation: `shine 1s ${2.5 + 0.25 * index}s forwards`,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
        <SocialMediaIcons />
      </div>
    </header>
  );
};

const Work: React.FC = () => {
  return (
    <section className="section">
      <h2 className="text-center">Work</h2>
      {work.map(({ name, screenshots, description, tech, link, code }) => (
        <article className="relative max-w-screen-md mx-auto pb-10 max-md:pb-0 max-md:shadow-lg max-md:rounded-md max-md:overflow-hidden">
          <img
            className="w-5/6 max-md:w-full rounded-md max-md:rounded-none"
            src={screenshots}
            alt={`${name} screenshots`}
          />
          <div className="absolute right-0 bottom-0 max-md:relative flex flex-col gap-2 p-2 rounded-md max-md:rounded-none bg-white w-1/2 max-md:w-full shadow-lg max-md:shadow-none">
            <h3>{name}</h3>
            <div className="flex gap-2">
              {tech.map((item) => {
                const { color, icon: Icon } = techInfo.get(item)!;
                return (
                  <div
                    className="p-1 rounded-md text-white"
                    style={{ backgroundColor: color }}
                  >
                    <Icon />
                  </div>
                );
              })}
            </div>
            <p className="my-0">{description}</p>
            <div className="flex gap-2">
              <Link variant="primary" href={link}>
                🔗 Visit
              </Link>
              <Link variant="secondary" href={code}>
                🧑‍💻 Code
              </Link>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

const Writing: React.FC = () => {
  return (
    <section className="section">
      <h2 className="text-center">Writing</h2>
      {blog
        .slice(0, 3)
        .map(({ title, date, description }) => ({
          title,
          date: new Date(date),
          description,
        }))
        .map((article) => (
          <Article {...article} />
        ))}
    </section>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Work />
      <Writing />
    </>
  );
};

export default Home;
