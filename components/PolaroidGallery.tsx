import React from "react";
import Image, { StaticImageData } from "next/image";
import PaperClip from "../components/PaperClip";

const PolaroidGallery = ({
  images,
}: {
  images: { src: StaticImageData; alt: string; title: string }[];
}) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-6 mb-4">
      {images.map((image, idx) => (
        <div
          key={idx}
          className={`
            ${
              idx % 3 === 0
                ? "rotate-[-5deg]"
                : idx % 3 === 1
                ? "rotate-[3deg]"
                : "rotate-[5deg]"
            }
          `}
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 text-blue-600">
            <PaperClip />
          </div>
          <Image
            src={image.src}
            alt={image.alt}
            title={image.title}
            placeholder="blur"
            className="w-52 h-auto rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default PolaroidGallery;
