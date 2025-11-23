import React from "react";
import Image, { StaticImageData } from "next/image";
import AudioPlayer from "./AudioPlayer";

interface TestimonialProps {
  author: string;
  avatar: StaticImageData | string;
  affiliation: string;
  text: string;
  context?: string | JSX.Element;
  recording?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  author,
  avatar,
  affiliation,
  text,
  context,
  recording,
}) => {
  return (
    <div className="relative flex flex-col gap-4 w-full max-w-lg mx-auto p-4 bg-blue-50 rounded-2xl">
      <span className="absolute -top-4 -left-4 z-10 text-blue-200 text-8xl font-serif font-black pointer-events-none">
        “
      </span>
      <p className="font-medium my-0 text-center text-lg z-20">{text}</p>
      {context && <p className="italic my-0 text-center text-sm">{context}</p>}
      {recording && <AudioPlayer src={recording} />}
      <div className="flex gap-2 justify-center">
        <div className="shrink-0 w-14 h-14 rounded-full border-2 border-blue-600 overflow-hidden">
          <Image
            className="w-14 h-14"
            src={avatar}
            alt={`Professional headshot of ${author}`}
            title={author}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="my-0">{author}</h3>
          <span className="text-blue-600 text-sm font-medium">
            {affiliation}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
