import React from "react";
import Layout from "../atoms/Layout";
import Hero from "../atoms/hero";
import TextContainer from "../atoms/textContainer";
import MiniGrid from "../atoms/miniGrid";

export default function ActionDisplay() {
  return (
    <div>
      <Hero />
      <TextContainer />
      <Layout />
      <MiniGrid />
    </div>
  );
}
