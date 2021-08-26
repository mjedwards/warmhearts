import React from "react";

export default function Layout() {
  return (
    <div className="flex flex-wrap overflow-hidden">
      <div className="flex flex-col w-full lg:w-1/2 overflow-hidden bg-green-400 text-white h-96">
        <div className="p-8">
          <h2 className="font-bold">ADVOCACY</h2>
          <p className="leading-loose lg:px-40 lg:p-8">
            Raise your voice, share your knowledge, and affect positive change
            through engagement with Congress and other influencers in your
            communities by calling on them to prioritize relationships for young
            people.
          </p>
          <button className="mx-64 py-3 px-6 text-white rounded-lg bg-red-500 shadow-lg block md:inline-block border-b-4">
            LEARN MORE
          </button>
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 overflow-hidden bg-transparent text-white h-96">
        <div className="p-8">
          <h2 className="font-bold">MAKE A DONATION</h2>
          <p className="leading-loose lg:px-40 lg:p-8">
            Your gift helps increase our country’s capacity to provide quality
            mentoring relationships to the more than 9 million youth who would
            benefit from the mentors they need to strive and thrive.
          </p>
          <button className="lg:mx-64 lg:py-3 lg:px-6 text-white rounded-lg bg-red-500 shadow-lg block md:inline-block border-b-4">
            LEARN MORE
          </button>
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 overflow-hidden bg-yellow-400 text-white h-96">
        <div className="p-8">
          <h2 className="font-bold">CAMPAIGNS</h2>
          <p className="leading-loose lg:px-40 lg:p-8">
            See all the various ways we elevate youth mentoring!
          </p>
          <button className="mx-64 lg:py-3 lg:px-6 text-white rounded-lg bg-red-500 shadow-lg block md:inline-block border-b-4">
            LEARN MORE
          </button>
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 overflow-hidden bg-red-800 text-white h-96">
        <div className="p-8">
          <h2 className="font-bold">RESOURCES</h2>
          <p className="leading-loose lg:px-40 lg:p-8">
            Raise your voice, share your knowledge, and affect positive change
            through engagement with Congress and other influencers in your
            communities by calling on them to prioritize relationships for young
            people.
          </p>
          <button className="mx-64 lg:py-3 lg:px-6 text-white rounded-lg bg-red-500 shadow-lg block md:inline-block border-b-4">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
}
