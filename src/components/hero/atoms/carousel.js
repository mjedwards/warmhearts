import React, { useState, createRef } from "react";
import mentor from "../../../ui/assets/photos/mentor.png";
import professional from "../../../ui/assets/photos/professional.png";
import teacher from "../../../ui/assets/photos/teacher.png";
import guidance from "../../../ui/assets/photos/guidance.png";

const images = [
  {
    image: mentor,
    excerpt: "Mentor",
    copy: "Learn More about the READY SET – MENTOR Event",
  },
  {
    image: professional,
    excerpt: "Professional",
    copy: "MENTOR Receives Largest Individual Donation in its History",
  },
  {
    image: teacher,
    excerpt: "Teacher",
    copy: "MENTOR Receives Largest Individual Donation in its History",
  },
  {
    image: guidance,
    excerpt: "Guidance",
    copy: "RESOURCES FOR MENTORS AROUND RACE, INCLUSION, & CULTURAL RESPECT",
  },
];

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  const refs = images.reduce((acc, val, i) => {
    acc[i] = createRef();
    return acc;
  }, {});

  const scrollToImage = (i) => {
    setCurrentImage(i);

    refs[i].current.scrollIntoView({
      behavior: "smooth",
      inline: "start",
    });
  };
  const totalImages = images.length;

  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  const arrowStyle =
    "absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center";

  const sliderControl = (isLeft) => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? "left-2" : "right-2"}`}
      style={{ top: "40%" }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
        {isLeft ? "◀" : "▶"}
      </span>
    </button>
  );
  return (
    <div className="flex justify-center items-center col-start-1 col-end-4 ">
      <div className="relative w-full">
        <div className="carousel h-full">
          {sliderControl(true)}
          {/* {images.map((img, i) => (
            <figure
              className="relative w-full flex-shrink-0 h-full"
              key={i}
              ref={refs[i]}
            >
              <img
                src={img.image}
                alt={img.excerpt}
                className="
                w-full object-contain shadow-2xl h-full"
              />
              <figcaption className="absolute text-lg -mt-16 text-white px-4">
                <div>
                  <button
                    ref={refs[i]}
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                  >
                    {img.excerpt}
                  </button>
                </div>
              </figcaption>
            </figure>
          ))} */}
          {images.map((img, i) => (
            <div
              className="relative w-full flex-shrink-0 h-full"
              key={i}
              ref={refs[i]}
            >
              <img
                src={img.image}
                alt={img.excerpt}
                className="
                w-full object-contain shadow-2xl h-full opacity-75"
              />
              {/* <div className="absolute text-lg -mt-16 text-white px-4">
                <div>
                  <button
                    ref={refs[i]}
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                  >
                    {img.excerpt}
                  </button>
                </div>
              </div> */}
              <div className="absolute text-lg -mt-96 ml-64 text-white px-4">
                <div className="py-20">
                  <p className="font-bold text-lg">{img.copy}</p>
                </div>
                <button
                  ref={refs[i]}
                  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
          {sliderControl()}
        </div>
      </div>
    </div>
  );
}
