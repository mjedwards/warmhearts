import React from "react";

export default function ImageContainer({image, alt_text}) {
  return (
    <div className="w-2/6 h-1/2 m-auto">
      <img src={image} alt={alt_text} className="w-screen h-full" />
    </div>
  );
}
