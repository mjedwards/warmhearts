import React from "react";

// import Carousel from "./atoms/carousel";
import VideoHero from "./atoms/videoHero";
import ImageContainer from "./atoms/imageContainer";
import TextContainer from "./atoms/textContainer";

export default function Hero() {
  return (
    <div className="flex flex-col">
      <VideoHero />
      <div className="w-full">
        <div className="flex flex-col lg:flex-row col-span-5 h-full">
          <TextContainer title text />
          <ImageContainer image />
        </div>
      </div>
    </div>
  );
}
