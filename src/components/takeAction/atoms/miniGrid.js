import React from "react";
import boy from "../../../ui/assets/photos/boy.jpg";

export default function MiniGrid() {
  return (
    <div class="flex flex-wrap overflow-hidden">
      <div class="w-full overflow-hidden xl:w-1/2">
        <img src={boy} alt="instructions to follow" />
      </div>

      <div class="w-full overflow-hidden xl:w-1/2 bg-green-400 text-white">
        <div className="p-8">
          <h2 className="font-bold">WHAT IS A MENTOR</h2>
          <p className="leading-loose lg:px-20 lg:p-8">
            A trusted guide or friend: <br/> A mentor provides access to people, places, and things outside the mentee's routine environment. This can include access to educational, career, and other campus resources. <br/>
            A caring responsible adult: <br/>A mentor provides a mentee access to a listening and caring adult whom wants to help the mentee reach their goals.<br/>
            A positive role model: <br/>A mentor always model appropriate behavior.
          </p>
          <ul className="list-disc leading-loose lg:px-20 lg:p-8 text-left">
            <p>KEY QUALITIES OF A GOOD MENTOR</p>
            <li>Good listener</li>
            <li>
              Persistent
            </li>
            <li>
              Committed
            </li>
            <li>Patient</li>
          </ul>
          <h2 className="font-bold">A MENTOR IS NOT</h2>
          <p className="leading-loose lg:px-20 lg:p-8">
            A parent or legal guardian: <br/> The role of a parent or legal guardian (governed by law) is to provide shelter, food, and clothing. <br/>
            A social worker: <br/>A social worker is a licensed professional with the necessary skills and training to assist in family issues.<br/>
            A psychologist: <br/>A psychologist is a licensed professional trained to assist individuals with mental and behavioral issues.<br/><br/>
            Mentors must understand that they cannot be all things to their mentees, especially things that require years of professional training. It is, however, appropriate for a mentor to act as a guide and show the mentee how to access the professional services and resources he or she needs.
          </p>
        </div>
      </div>

      <div class="w-full overflow-hidden xl:w-1/2 bg-blue-400 text-white">
        <div className="p-8">
          <h2 className="font-bold">IMPORTANT TASKS OF A MENTOR</h2>
          <h3>Establish a positive relationship with your mentee </h3>
          <p className="leading-loose lg:px-20 lg:p-8">
            This can involve establishing trust and respect with your mentee and maintaining regular interaction and consistent support.
          </p>
          <h3>Establish a positive relationship with your mentee </h3>
          <p className="leading-loose lg:px-20 lg:p-8">
            This can involve establishing trust and respect with your mentee and maintaining regular interaction and consistent support.
          </p>
          <h3>Help your mentee develop academic and life skills</h3>
          <p className="leading-loose lg:px-20 lg:p-8">
            This can involve working with your mentee to set and reach personal, educational, and career goals, and helping establish time-management, study and communication skills.
          </p>
          <h3>Assist your mentee connect with campus resources</h3>
          <p className="leading-loose lg:px-20 lg:p-8">
            This can include helping your mentee become familiar with the Career Center, the Writing Center, the Quantitative Skills Center, the Library, Counseling Services, and other resources on campus.
          </p>
          <h3>Be a source of support and guidance</h3>
          <p className="leading-loose lg:px-20 lg:p-8">
            One of, if not the, most important things you can do as a mentor is to be there for your mentee. This sounds simple enough, but it can encompass any number things. Being prepared is key.
          </p>
        </div>
      </div>
      <div class="w-full overflow-hidden xl:w-1/2">
        <img src={boy} alt="instructions to follow" />
      </div>
    </div>
  );
}
