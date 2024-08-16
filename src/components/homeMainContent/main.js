import React from "react";
import HomeStatistics from "./atoms/HomeStatistics";
import Insight from "./atoms/Insight";
import CTAwithAsset from "./atoms/CTAwithAsset";
import ContactSection from "./atoms/ContactSection";

export default function Main() {
  return (
    <div>
      <HomeStatistics />
      <Insight/>
      <CTAwithAsset />
      <ContactSection />
    </div>
  );
}
