import React from "react";
import Images from "./images";

export default function ImageGallery() {
  return (
    <div className="w-screen">
      <div className="space-y-2 lg:space-y-0 lg:grid lg:grid-cols-3 w-screen">
        <div className="w-full rounded">
          <img src={Images[7]} alt="cool watchdog" />
        </div>
        <div className="w-full rounded">
          <img src={Images[4]} alt="cool watchdog" />
        </div>
        <div className="w-full rounded">
          <img src={Images[21]} alt="cool watchdog" />
        </div>
        <div className="w-full rounded">
          <img src={Images[22]} alt="cool watchdog" />
        </div>
        <div className="w-full rounded">
          <img src={Images[2]} alt="cool watchdog" />
        </div>
        <div className="w-full rounded">
          <img src={Images[13]} alt="cool watchdog" />
        </div>
      </div>
    </div>
  );
}
