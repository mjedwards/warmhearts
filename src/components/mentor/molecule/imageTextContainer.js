import React from "react";
import microphone from "../../../ui/assets/logos/mentorWithWords@2x.png";
import miniBg from "../../../ui/assets/photos/miniBg.png";

export default function ImageTextContainer() {
  return (
    <div style={{ backgroundImage: `url(${miniBg})` }}>
      <h1 className="text-6xl font-bold pt-20 text-white">Our Founder</h1>
      <div className="bg-white flex lg:flex-row flex-col justify-center content-center w-full lg:h-96 p-0 xl:p-24">
        <img src={microphone} alt="microphone" className="lg:mr-36 lg:w-60 lg:ml-0 w-1/2 m-auto"></img>
        <p className="text-center justify-center content-center lg:w-1/2 p-10 xl:p-0">
          Through the Youth Advocates for Mentoring program, MENTOR trains 12
          young leaders on advocacy, policy, and grassroots organizing skills in
          order to create positive change in their communities and nation.
          MENTOR believes that young people must be at the forefront of
          addressing systemic issues and that this comprehensive training
          program provides young people the real life skills they need to
          communicate with elected officials, address issues in their
          communities, empower their peers into action, and advocate for the
          power of mentoring. MENTOR is a non-partisan organization that seeks
          to fuel the quantity and quality of mentoring relationships for
          America’s young people and to close the mentoring gap.
        </p>
      </div>
    </div>
  );
}
