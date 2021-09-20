import React from "react";

export default function GridLayout({ boy, girl, diversity }) {
  return (
    <div className="mx-20">
      <h1 className="text-6xl font-bold py-20 text-white">Meet The Mentors</h1>
      <div className="flex flex-wrap overflow-hidden lg:-mx-2 content-center justify-center">
        <div className="w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-96">
            <div className="bg-white">
              <img src={boy} alt="smiling child" className="w-full h-1/2" />
              <p className="text-black">Title</p>
              <p className="text-black">Name</p>
              <p className="text-black">Brief Description</p>
            </div>
          </div>
        </div>

        <div className="w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-96">
            <div className="bg-white">
              <img src={girl} alt="smiling child" className="w-full h-1/2" />
              <p className="text-black">Title</p>
              <p className="text-black">Name</p>
              <p className="text-black">Brief Description</p>
            </div>
          </div>
        </div>

        <div className="w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-96">
            <div className="bg-white">
              <img
                src={diversity}
                alt="smiling child"
                className="w-full h-1/2"
              />
              <p className="text-black">Title</p>
              <p className="text-black">Name</p>
              <p className="text-black">Brief Description</p>
            </div>
          </div>
        </div>
        <div className="w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-96">
            <div className="bg-white">
              <img src={boy} alt="smiling child" className="w-full h-1/2" />
              <p className="text-black">Title</p>
              <p className="text-black">Name</p>
              <p className="text-black">Brief Description</p>
            </div>
          </div>
        </div>

        <div className="w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-96">
            <div className="bg-white">
              <img src={girl} alt="smiling child" className="w-full h-1/2" />
              <p className="text-black">Title</p>
              <p className="text-black">Name</p>
              <p className="text-black">Brief Description</p>
            </div>
          </div>
        </div>

        <div className="w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-96">
            <div className="bg-white">
              <img
                src={diversity}
                alt="smiling child"
                className="w-full h-1/2"
              />
              <p className="text-black">Title</p>
              <p className="text-black">Name</p>
              <p className="text-black">Brief Description</p>
            </div>
          </div>
        </div>
        <div className="w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-96">
            <div className="bg-white">
              <img src={boy} alt="smiling child" className="w-full h-1/2" />
              <p className="text-black">Title</p>
              <p className="text-black">Name</p>
              <p className="text-black">Brief Description</p>
            </div>
          </div>
        </div>

        <div className="w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-96">
            <div className="bg-white">
              <img src={girl} alt="smiling child" className="w-full h-1/2" />
              <p className="text-black">Title</p>
              <p className="text-black">Name</p>
              <p className="text-black">Brief Description</p>
            </div>
          </div>
        </div>

        <div className="w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-96">
            <div className="bg-white">
              <img
                src={diversity}
                alt="smiling child"
                className="w-full h-1/2"
              />
              <p className="text-black">Title</p>
              <p className="text-black">Name</p>
              <p className="text-black">Brief Description</p>
            </div>
          </div>
        </div>
        <div className="w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-96">
            <div className="bg-white">
              <img src={boy} alt="smiling child" className="w-full h-1/2" />
              <p className="text-black">Title</p>
              <p className="text-black">Name</p>
              <p className="text-black">Brief Description</p>
            </div>
          </div>
        </div>

        <div className="w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-96">
            <div className="bg-white">
              <img src={girl} alt="smiling child" className="w-full h-1/2" />
              <p className="text-black">Title</p>
              <p className="text-black">Name</p>
              <p className="text-black">Brief Description</p>
            </div>
          </div>
        </div>

        <div className="w-1/4 overflow-hidden lg:my-2 lg:px-2">
          <div className="flex flex-col w-full lg:w-full overflow-hidden bg-white text-white h-96">
            <div className="bg-white">
              <img
                src={diversity}
                alt="smiling child"
                className="w-full h-1/2"
              />
              <p className="text-black">Title</p>
              <p className="text-black">Name</p>
              <p className="text-black">Brief Description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
