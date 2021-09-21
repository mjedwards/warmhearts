import React from "react";
import miniBg from "../../../ui/assets/photos/miniBg.png";

export default function Hero() {
  return (
    <div style={{ backgroundImage: `url(${miniBg})` }}>
      <h1 className="text-6xl font-bold pt-20 text-white">Mentor Resources</h1>
    </div>
  );
}
