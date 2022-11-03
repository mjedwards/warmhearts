import React from "react";
import boy from "../../../ui/assets/photos/boy.png";
import girl from "../../../ui/assets/photos/girl.jpg";
import diversity from "../../../ui/assets/photos/diversity.jpg";
import Images from "../../imageGallery/images";

export default function Layout() {
  return (
    <div className="flex flex-wrap overflow-hidden">
      <div className="flex flex-col w-full lg:w-1/2 overflow-hidden bg-green-500 text-white lg:h-96">
        <div className="p-8">
          <h2 className="font-bold uppercase lg:text-3xl">Why Us?</h2>
          <p className="leading-loose text-sm lg:text-lg lg:px-40 lg:p-8">
            Every child deserves an opportunity to achieve excellence in life.
            As a team we understand the hardship that kids in certain
            communities experience and certain lifestyles many children
            experience. We are striving to make their growth and development
            easier by providing them with reliable support and a strong culture
            of responsibility and achievement. Through this we are aiming to
            become a pillar of strength and a beam of light that champions the
            next generation as they go on to become leaders.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 overflow-hidden bg-blue-500 text-white lg:h-96">
        <div className="p-8">
          <h2 className="font-bold uppercase lg:text-3xl">Why Now?</h2>
          <p className="leading-loose text-sm lg:text-lg lg:px-40 lg:p-8">
            There is never a better time than now to make a difference. We live
            in a fast paced world that is evolving each year. If we are not
            active and building up the youth they could get left behind. This is
            something we do not want in our schools or communities. This is why
            Wamrheart Mentorship program began. It was created from the heart of
            the founder Ms. Veronne E. McMain as she saw a need to act now.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 overflow-hidden bg-transparent text-white lg:h-96">
        <div className="p-8">
          <h2 className="font-bold uppercase lg:text-3xl">
            How We Do the Work
          </h2>
          <ul>
            <li>
              <h3>Prioritizing Quality</h3>
              <p className="text-xs p-2">
                : we guarantee that excellent research, field-based data, local
                area experiences, and proper training join to increment
                support and assess the quality and viability of mentoring
                connections for the youth.
              </p>
            </li>
            <li>
              <h3>Leadership</h3>
              <p className="text-xs p-2">
                : we provide leadership experience from gathered from many
                professions, such as law enforcement to business owners. We look
                to provide real world examples of what a leader looks like and
                aim to encourage students that they can achieve that and much
                more.
              </p>
            </li>
            <li>
              <h3>Expansion</h3>
              <p className="text-xs p-2">
                : we look to grow the movement far beyond the walls of Parkway
                Middle school. We look to grow a network of schools and
                communities that aim to protect and provide a better life
                experience for all youth we get a chance to mentor.
              </p>
            </li>
            <li>
              <h3>Influence</h3>
              <p className="text-xs p-2">
                : with the growth of the program comes impact. We look to build
                and prepare ourselves for the positive impact of the program. We
                are always looking for new ideas to reflect the mission.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-1/2 overflow-hidden bg-transparent text-white lg:h-96">
        <div className="">
          <img src={Images[13]} alt="smiling mentors" className="w-full" />
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 overflow-hidden bg-yellow-400 text-white lg:h-96">
        <div className="p-8">
          <p className="leading-loose text-sm lg:text-lg lg:px-40 lg:p-8 text-black">
            “The delicate balance of mentoring someone is not creating them in
            your own image, but giving them the opportunity to create
            themselves.” — Steven Spielberg <br />
            <hr />
            “We’re here for a reason. I believe a bit of the reason is to throw
            little torches out to lead people through the dark.” — Whoopi
            Goldberg
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 overflow-hidden bg-white text-white lg:h-96">
        <div className="">
          <img src={girl} alt="smiling child" className="w-full" />
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-1/2 overflow-hidden bg-white text-white lg:h-96">
        <div className="">
          <img src={diversity} alt="smiling child" className="w-full" />
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 overflow-hidden bg-green-500 text-white lg:h-96">
        <div className="p-8">
          <h2 className="font-bold uppercase">Commitment to Diversity</h2>
          <p className="leading-loose text-sm lg:text-lg lg:px-40 lg:p-8">
            Diversity is more than skin color. We encourage people from all
            walks of life, beliefs, ethnic background, culture, professions,
            and so much more to become mentors or mentees. By having a vast
            group of the best individuals we build a foundation that will help
            inspire the youth to grow and learn as they interact with the best
            we have to offer.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 overflow-hidden bg-transparent text-white lg:h-96">
        <div className="p-8">
          <h2 className="font-bold uppercase">Mission</h2>
          {/* <p className="leading-loose text-sm lg:text-lg lg:px-40 lg:p-8">
            Empower the youth to become well rounded, productive citizens by providing mentorship services to improve academic achievement, character building, self-esteem, social and emotional stability, and avoidance of problems and high risk behaviors. We believe building relationships between caring adults and the youth will foster this goal.
          </p> */}
          <p className="leading-loose text-sm lg:text-lg lg:px-40 lg:p-8">
          Our mission is, through mentorship, to empower youth from social and economically disadvantaged communities to become academically fit people of high character and strong self-esteem who are emotionally stable and free of high-risk behaviors.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 overflow-hidden bg-red-800 text-white lg:h-96">
        <div className="p-8">
          <h2 className="font-bold uppercase">Values</h2>
          <p className="leading-loose text-sm lg:text-lg lg:px-40 lg:p-8">
            Be pioneers, use our abilities, our gifts, our organization, and our opportunity to engage the youth. Be reliable and honor our responsibilities. Be trustworthy, honest, open, and always seeking to improve. Use our values to positively benefit the youth.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 overflow-hidden bg-blue-500 text-white lg:h-96">
        <div className="p-8">
          <h2 className="font-bold uppercase">Impact</h2>
          <p className="leading-loose text-sm lg:text-lg lg:px-40 lg:p-8">
            We look to impact the youth and leave a positive influence in our communities. Through our work we hope to leave behind inspired and hopeful youth that will go on to do great things in the near future.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 overflow-hidden bg-white text-white lg:h-96">
        <div className="">
          <img src={boy} alt="smiling child" className="w-full" />
        </div>
      </div>
    </div>
  );
}
