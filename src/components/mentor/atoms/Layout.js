import React from "react";
import AboutFounder from "../molecule/AboutFounder";
import GridLayout from "../molecule/gridLayout";
import ImageTextContainer from "../molecule/imageTextContainer";

export default function Layout() {
  return (
    <>
      <ImageTextContainer />
      <AboutFounder />
      <div className="w-9/12 h-0.5 bg-gray-100 rounded-full m-auto mt-10"></div>
      <GridLayout />
    </>
  );
}
