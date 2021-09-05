import React from "react";
import boy from "../../../ui/assets/photos/boy.png";
import girl from "../../../ui/assets/photos/girl.jpg";
import diversity from "../../../ui/assets/photos/diversity.jpg";

export default function Layout() {
  return (
    <div className="flex flex-wrap overflow-hidden">
      <div className="flex flex-col w-full lg:w-1/2 overflow-hidden bg-green-500 text-white h-96">
        <div className="p-8">
          <h2 className="font-bold uppercase lg:text-3xl">Why Us?</h2>
          <p className="leading-loose lg:px-40 lg:p-8">
            Raise your voice, share your knowledge, and affect positive change
            through engagement with Congress and other influencers in your
            communities by calling on them to prioritize relationships for young
            people.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 overflow-hidden bg-blue-500 text-white h-96">
        <div className="p-8">
          <h2 className="font-bold uppercase lg:text-3xl">Why Now?</h2>
          <p className="leading-loose lg:px-40 lg:p-8">
            Your gift helps increase our country’s capacity to provide quality
            mentoring relationships to the more than 9 million youth who would
            benefit from the mentors they need to strive and thrive.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 overflow-hidden bg-transparent text-white h-96">
        <div className="p-8">
          <h2 className="font-bold uppercase lg:text-3xl">
            How We Do the Work
          </h2>
          <ul>
            <li>
              <h3>Prioritizing Quality</h3>
              <p className="text-xs p-2">
                : we ensures that leading-edge research, ﬁeld-based evidence,
                community insights, and effective training converge to increase,
                sustain
              </p>
            </li>
            <li>
              <h3>Prioritizing Quality</h3>
              <p className="text-xs p-2">
                : we ensures that leading-edge research, ﬁeld-based evidence,
                community insights, and effective training converge to increase,
                sustain
              </p>
            </li>
            <li>
              <h3>Prioritizing Quality</h3>
              <p className="text-xs p-2">
                : we ensures that leading-edge research, ﬁeld-based evidence,
                community insights, and effective training converge to increase,
                sustain
              </p>
            </li>
            <li>
              <h3>Prioritizing Quality</h3>
              <p className="text-xs p-2">
                : we ensures that leading-edge research, ﬁeld-based evidence,
                community insights, and effective training converge to increase,
                sustain
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-1/2 overflow-hidden bg-transparent text-white h-96">
        <div className="p-8"></div>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 overflow-hidden bg-yellow-400 text-white h-96">
        <div className="p-8">
          <p className="leading-loose lg:px-40 lg:p-8">
            “There is no such thing as other people’s children.” Bill Russell,
            MENTOR co-founder
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 overflow-hidden bg-white text-white h-96">
        <div className="">
          <img src={girl} alt="smiling child" className="w-full" />
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-1/2 overflow-hidden bg-white text-white h-96">
        <div className="">
          <img src={diversity} alt="smiling child" className="w-full" />
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 overflow-hidden bg-green-500 text-white h-96">
        <div className="p-8">
          <h2 className="font-bold uppercase">Commitment to Diversity</h2>
          <p className="leading-loose lg:px-40 lg:p-8">
            Raise your voice, share your knowledge, and affect positive change
            through engagement with Congress and other influencers in your
            communities by calling on them to prioritize relationships for young
            people.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 overflow-hidden bg-transparent text-white h-96">
        <div className="p-8">
          <h2 className="font-bold uppercase">Mission</h2>
          <p className="leading-loose lg:px-40 lg:p-8">
            Raise your voice, share your knowledge, and affect positive change
            through engagement with Congress and other influencers in your
            communities by calling on them to prioritize relationships for young
            people.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 overflow-hidden bg-red-800 text-white h-96">
        <div className="p-8">
          <h2 className="font-bold uppercase">Values</h2>
          <p className="leading-loose lg:px-40 lg:p-8">
            Raise your voice, share your knowledge, and affect positive change
            through engagement with Congress and other influencers in your
            communities by calling on them to prioritize relationships for young
            people.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 overflow-hidden bg-blue-500 text-white h-96">
        <div className="p-8">
          <h2 className="font-bold uppercase">Impact</h2>
          <p className="leading-loose lg:px-40 lg:p-8">
            Raise your voice, share your knowledge, and affect positive change
            through engagement with Congress and other influencers in your
            communities by calling on them to prioritize relationships for young
            people.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 overflow-hidden bg-white text-white h-96">
        <div className="">
          <img src={boy} alt="smiling child" className="w-full" />
        </div>
      </div>
    </div>
  );
}
