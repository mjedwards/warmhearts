import React from "react";
import mentee from "../../../ui/assets/photos/mentee@2x.png";

export default function ImageContainer() {
  return (
    <div className="w-full h-full">
      <img src={mentee} alt="smiling child" className="w-screen h-full" />
    </div>
  );
}
