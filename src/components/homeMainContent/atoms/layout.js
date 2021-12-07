import React from "react";

export default function Layout() {
  return (
    <div className="flex flex-wrap overflow-hidden">
      <div className="flex flex-col w-full lg:w-1/2 overflow-hidden bg-green-400 text-white h-96">
        <div className="p-8">
          <h2 className="font-bold">ADVOCACY</h2>
          <p className="leading-loose lg:px-40 lg:p-8">
            Speak loudly, share your insight, and influence positive change
            through commitment with local leaders and other powerhouses in your
            networks by approaching them to focus on connections for youngsters.
          </p>
          {/* <button className="mx-64 py-3 px-6 text-white rounded-lg bg-red-500 shadow-lg block md:inline-block border-b-4">
            LEARN MORE
          </button> */}
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 overflow-hidden bg-transparent text-white h-96">
        <div className="p-8">
          <h2 className="font-bold">MAKE A DONATION</h2>
          <p className="leading-loose lg:px-40 lg:p-8">
            Your gift helps increment our program's ability to give quality
            coaching connections to many youth in out local schools who might
            benefit from the coaches they need to endeavor and flourish.
          </p>
          {/* <button className="lg:mx-64 lg:py-3 lg:px-6 text-white rounded-lg bg-red-500 shadow-lg block md:inline-block border-b-4">
            LEARN MORE
          </button> */}
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 overflow-hidden bg-yellow-400 text-white h-96">
        <div className="p-8">
          <h2 className="font-bold">CAMPAIGNS</h2>
          <p className="leading-loose lg:px-40 lg:p-8">
            We elevate our youth by providing a myriad of events and activities
            that allow them to have knowledgeable and fulfilling experiences.
            This leads to a well rounded group individual that will have a huge
            impact on our community in the future.
          </p>
          {/* <button className="mx-64 lg:py-3 lg:px-6 text-white rounded-lg bg-red-500 shadow-lg block md:inline-block border-b-4">
            LEARN MORE
          </button> */}
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 overflow-hidden bg-red-800 text-white h-96">
        <div className="p-8">
          <h2 className="font-bold">RESOURCES</h2>
          <p className="leading-loose lg:px-40 lg:p-8">
            Many mentors are providing resoureces that help the youth develop
            skills and improve existing skills through workshops and programs.
            For parents and others we provide resources that inform you on how
            to participate be involved.
          </p>
          {/* <button className="mx-64 lg:py-3 lg:px-6 text-white rounded-lg bg-red-500 shadow-lg block md:inline-block border-b-4">
            LEARN MORE
          </button> */}
        </div>
      </div>
    </div>
  );
}
