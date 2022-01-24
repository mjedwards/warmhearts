import React from "react";
import one from "../../../ui/assets/photos/notes/noteOne.jpg"
import two from "../../../ui/assets/photos/notes/noteTwo.jpg"
import three from "../../../ui/assets/photos/notes/noteThree.jpg"
import four from "../../../ui/assets/photos/notes/noteFour.jpg"
import five from "../../../ui/assets/photos/notes/noteFive.jpg"
import six from "../../../ui/assets/photos/notes/noteSix.jpg"
import seven from "../../../ui/assets/photos/notes/noteSeven.jpg"
import eight from "../../../ui/assets/photos/notes/noteEight.jpg"
import nine from "../../../ui/assets/photos/notes/noteNine.jpg"
import ten from "../../../ui/assets/photos/notes/noteTen.jpg"

export default function GridLayout() {
  return (
    <div className="lg:mx-20 mx-10">
      <h1 className="lg:text-6xl text-2xl font-bold py-20 text-white">See What The Children Have To Say</h1>
      <div className="flex flex-wrap overflow-hidden lg:-mx-2 content-center justify-center">
        <div className="lg:w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-96">
            <div className="bg-white">
              <img src={one} alt="smiling child" className="w-full h-full" />
            </div>
          </div>
        </div>

        <div className="lg:w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-96">
            <div className="bg-white">
              <img src={two} alt="smiling child" className="w-full h-full" />
            </div>
          </div>
        </div>

        <div className="lg:w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-96">
            <div className="bg-white">
              <img src={three} alt="smiling child" className="w-full h-full" />
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-96">
            <div className="bg-white">
              <img src={four} alt="smiling child" className="w-full h-full" />
            </div>
          </div>
        </div>

        <div className="lg:w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-96">
            <div className="bg-white">
              <img src={five} alt="smiling child" className="w-full h-full" />
            </div>
          </div>
        </div>

        <div className="lg:w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-96">
            <div className="bg-white">
              <img src={six} alt="smiling child" className="w-full h-full" />
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-96">
            <div className="bg-white">
              <img src={seven} alt="smiling child" className="w-full h-full" />
            </div>
          </div>
        </div>

        <div className="lg:w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-96">
            <div className="bg-white">
              <img src={eight} alt="smiling child" className="w-full h-full" />
            </div>
          </div>
        </div>

        <div className="lg:w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-96">
            <div className="bg-white">
              <img src={nine} alt="smiling child" className="w-full h-full" />
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-96">
            <div className="bg-white">
              <img src={ten} alt="smiling child" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
