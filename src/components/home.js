import React from "react";
import Hero from "./hero/hero";
import Main from "./homeMainContent/main";
import Sponsors from "./sponsors/sponsors";

export default function Home() {
  return (
    <div>
      <Hero />
      <Main />
      <Sponsors />
    </div>
  );
}
