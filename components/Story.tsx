import Hamza from "../public/galary/2006 to 2021/hamza.png";
import PersonalOne from "../public/galary/2023/personal-1.jpg";
import PersonalTwo from "../public/galary/2023/personal-2.jpg";
import MasarFirstParty from "../public/galary/2024/masar-1st-party.jpg";
import Poster from "../public/galary/2024/poster.jpg";
import SheikAlAzhar from "../public/galary/2024/sheik-al-azhar.jpg";
import Ismail from "../public/galary/2024/ismail.jpg";
import FirstSemesterEnd from "../public/galary/2025/1st-semester-end.jpg";
import Ahmed from "../public/galary/2025/ahmed.jpg";
import FSPOne from "../public/galary/2025/fifth-settlement-party-1.jpg";
import FSPTwo from "../public/galary/2025/fifth-settlement-party-2.jpg";
import Minister from "../public/galary/2025/minister.jpg";
import PODParty from "../public/galary/2025/pod-party.jpg";
import PolaroidGallery from "./PolaroidGallery";
import ArrowLink from "./ArrowLink";

const timelineData = [
  {
    year: "2006 to 2021",
    points: [
      "Born on 20th March 2006",
      "Started to learn coding on 19th June 2020",
      <>
        Learned frontend development basics and applied what I learned in{" "}
        <ArrowLink href="https://github.com/yosefbeder?tab=repositories">
          23 GitHub repositories
        </ArrowLink>
      </>,
      <>
        Applied the equations I learned in physics in{" "}
        <ArrowLink href="https://codesandbox.io/u/yosefbeder">
          two simple projects
        </ArrowLink>
      </>,
    ],
    images: [
      {
        src: Hamza,
        alt: "Yosef Beder with Hamza, his cousin",
        title: "With Hamza, my cousin",
      },
    ],
  },
  {
    year: "2022",
    points: [
      "Ranked 2nd in my institute in my 1st high school year",
      <>
        Did my first{" "}
        <ArrowLink href="https://github.com/rehypejs/rehype-document/issues/12">
          GitHub contribution
        </ArrowLink>
      </>,
      <>
        Read{" "}
        <ArrowLink href="https://craftinginterpreters.com/">
          Crafting Interpreters
        </ArrowLink>{" "}
        and created a{" "}
        <ArrowLink href="https://github.com/yosefbeder/qatam">
          programming language in Rust
        </ArrowLink>
      </>,
    ],
  },
  {
    year: "2023",
    points: [
      "Ranked 2nd in my institute in my 2nd year of high school",
      <>
        Learned algorithms and data structures by taking{" "}
        <ArrowLink href="https://www.coursera.org/learn/algorithms-part1">
          Algorithms, Part I
        </ArrowLink>{" "}
        and{" "}
        <ArrowLink href="https://www.coursera.org/learn/algorithms-part2">
          Algorithms, Part II
        </ArrowLink>{" "}
        courses
      </>,
      <>
        Learned UX design basics by taking{" "}
        <ArrowLink href="https://www.coursera.org/learn/foundations-user-experience-design">
          Foundations of User Experience (UX) Design
        </ArrowLink>{" "}
        course
      </>,
    ],
    images: [
      {
        src: PersonalOne,
        alt: "Yosef Beder standing outdoors in a casual setting",
        title: "Yosef Beder",
      },
      {
        src: PersonalTwo,
        alt: "Casual photo of Yosef Beder smiling outdoors",
        title: "Yosef Beder",
      },
    ],
  },
  {
    year: "2024",
    points: [
      "Ranked 5th in the Al-Azhar high school education system",
      "Ranked 1st in the Principles of Disease module",
      <>
        Developed{" "}
        <ArrowLink href="https://doc-reader-guide.com/">
          DocReader Guide
        </ArrowLink>{" "}
        with my friends
      </>,
    ],
    images: [
      {
        src: Poster,
        alt: "Official Al-Azhar poster declaring Yosef Beder national rank",
        title: "Al-Azhar official poster",
      },
      {
        src: Ismail,
        alt: "Yosef Beder standing with colleagues, Ismails",
        title: "With my colleagues, the Ismails",
      },
      {
        src: SheikAlAzhar,
        alt: "Yosef Beder meeting with the Grand Imam of Al-Azhar",
        title: "Meeting Sheikh Al-Azhar",
      },
      {
        src: MasarFirstParty,
        alt: "Yosef Beder wearing graduation gown at Egypt Post 1st celebration",
        title: "Egypt Post 1st Celebration",
      },
    ],
  },
  {
    year: "2025",
    points: [
      "Ranked 2nd in my first year in medicine",
      "Participated in SciAsk Scientific Research Training (SRT) program",
      <>
        Learned the basics of statistics and clinical research by taking{" "}
        <ArrowLink href="https://www.coursera.org/learn/clinical-research">
          Understanding Clinical Research: Behind the Statistics
        </ArrowLink>{" "}
        course
      </>,
      "Learned the basics of prompt engineering",
      <>
        Applied what I learned in{" "}
        <ArrowLink href="https://www.linkedin.com/in/yosefbeder/details/projects/">
          these hobby projects
        </ArrowLink>
      </>,
    ],
    images: [
      {
        src: FirstSemesterEnd,
        alt: "Group photo of medical students celebrating end of semester 1",
        title: "End of Semester 1 Celebration",
      },
      {
        src: PODParty,
        alt: "Yosef Beder receiving certificate for ranking 1st in Principle of Disease module",
        title: "POD Party Celebration",
      },
      {
        src: Minister,
        alt: "Yosef Beder receiving recognition from the Minister of High Education",
        title: "Meeting the Minister of High Education",
      },
      {
        src: Ahmed,
        alt: "Yosef Beder and his friend Ahmed",
        title: "With Ahmed, my friend",
      },
      {
        src: FSPOne,
        alt: "Yosef Beder eating dinner with the other top national students",
        title: "Egypt Post 2nd Celebration",
      },
      {
        src: FSPTwo,
        alt: "Group photo of Yosef Beder with the other top national students",
        title: "Egypt Post 2nd Celebration",
      },
    ],
  },
];

const Story = () => {
  return (
    <section className="section">
      <h2 className="text-center">Story</h2>
      <div className="relative">
        <div className="absolute left-6 -translate-x-1/2 top-0 h-full w-0.5 bg-blue-50" />
        <div className="space-y-6">
          {timelineData.map((item, index) => (
            <div key={index} className="relative pl-12">
              <div className="absolute left-6 -translate-x-1/2 top-5 w-5 h-5 bg-blue-600 rounded-full border-2 border-white" />
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-full md:w-1/6">
                  <h3 className="text-blue-600">{item.year}</h3>
                </div>
                <div className="w-full md:w-5/6">
                  <div className="bg-blue-50 p-2 rounded-2xl">
                    <span>Alhamdulillah:</span>
                    <ul className="list-disc pl-5">
                      {item.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                    {item.images && item.images.length > 0 && (
                      <div className="mt-6">
                        <PolaroidGallery images={item.images} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;
