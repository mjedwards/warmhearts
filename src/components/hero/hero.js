import React from "react";
import VideoHero from "./atoms/videoHero";
import ImageContainer from "./atoms/imageContainer";
import TextContainer from "./atoms/textContainer";
// images
import menteeMentor from "./assets/teacher_student.png";
import sectionImage from "./assets/section_image.png";

const descriptions = ["Through mentorship, we empower our youth from social and economically disadvantaged communities.", "We aim to inspire and empower youth for greatness, leaving a positive impact on our communities."]
const taglines = ["Building Bridges, Transforming Lives: Mentorship for All", "Planting Seeds of Hope, Cultivating Greatness: Shaping Tomorrow's Leaders Today"]
export default function Hero() {
  return (
    <div className="flex flex-col">
      <VideoHero />
      <div className="">
        <div className="flex flex-col lg:flex-row col-span-5 h-full mt-11">
          <TextContainer title="About Us" subtitle="Our Mission" description={descriptions[0]} tagline={taglines[0]} pathname="/Who-We-Are"  bg='white'/>
          <ImageContainer image={menteeMentor} alt_text="teacher and student accepting awards"/>
        </div>
        <div className="flex flex-col lg:flex-row lg:flex-row-reverse col-span-5 h-full mt-11">
          <TextContainer title="What We Do" subtitle="Our Vision" description={descriptions[1]} tagline={taglines[1]} pathname="/Who-We-Are" bg='white'/>
          <ImageContainer image={sectionImage} alt_text="a collage of images"/>
        </div>
      </div>
    </div>
  );
}
