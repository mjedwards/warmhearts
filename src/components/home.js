import React from "react";
import Hero from "./hero/hero";
import Main from "./homeMainContent/main";
import Contact from "./forms/contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Contact />
      <Main />
    </div>
  );
}
