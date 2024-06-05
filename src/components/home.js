import React from "react";
import Hero from "./hero/hero";
import Main from "./homeMainContent/main";
import Contact from "./forms/contact";
// import ImageGallery from "./imageGallery/imageGallery";
import Logos from "./logos";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <ImageGallery /> */}
      <Main />
      <Contact />
      <Logos />
    </div>
  );
}
