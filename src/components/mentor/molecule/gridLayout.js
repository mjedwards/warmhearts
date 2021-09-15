import React from "react";

export default function GridLayout({ boy, girl, diversity }) {
  return (
    <div className="mx-20">
      <h1 className="text-6xl font-bold py-20 text-white">Meet The Mentors</h1>
      <div class="flex flex-wrap overflow-hidden lg:-mx-2 content-center justify-center">
        <div class="w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-48">
            <div className="">
              <img src={boy} alt="smiling child" className="w-full" />
            </div>
          </div>
        </div>

        <div class="w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-48">
            <div className="">
              <img src={girl} alt="smiling child" className="w-full" />
            </div>
          </div>
        </div>

        <div class="w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-48">
            <div className="">
              <img src={diversity} alt="smiling child" className="w-full" />
            </div>
          </div>
        </div>
        <div class="w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-48">
            <div className="">
              <img src={boy} alt="smiling child" className="w-full" />
            </div>
          </div>
        </div>

        <div class="w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-48">
            <div className="">
              <img src={girl} alt="smiling child" className="w-full" />
            </div>
          </div>
        </div>

        <div class="w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-48">
            <div className="">
              <img src={diversity} alt="smiling child" className="w-full" />
            </div>
          </div>
        </div>
        <div class="w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-48">
            <div className="">
              <img src={boy} alt="smiling child" className="w-full" />
            </div>
          </div>
        </div>

        <div class="w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-48">
            <div className="">
              <img src={girl} alt="smiling child" className="w-full" />
            </div>
          </div>
        </div>

        <div class="w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-48">
            <div className="">
              <img src={diversity} alt="smiling child" className="w-full" />
            </div>
          </div>
        </div>
        <div class="w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-48">
            <div className="">
              <img src={boy} alt="smiling child" className="w-full" />
            </div>
          </div>
        </div>

        <div class="w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-48">
            <div className="">
              <img src={girl} alt="smiling child" className="w-full" />
            </div>
          </div>
        </div>

        <div class="w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-48">
            <div className="">
              <img src={diversity} alt="smiling child" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
