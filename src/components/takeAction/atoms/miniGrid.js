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
          <h2 className="font-bold">BENEFITS</h2>
          <p className="leading-loose lg:px-20 lg:p-8">
            Mentoring relationships are a shared opportunity for learning and
            growth. Many mentors say that the rewards they gain are as
            substantial as those for their mentees, and that mentoring has
            enabled them to:{" "}
          </p>
          <ul className="list-disc leading-loose lg:px-20 lg:p-8 text-left">
            <li>Have fun</li>
            <li>Achieve personal growth and learn more about themselves</li>
            <li>
              Improve their self-esteem and feel they are making a difference
            </li>
            <li>
              Gain a better understanding of other cultures and develop a
              greater appreciation for diversity
            </li>
            <li>Feel more productive and have a better attitude at work</li>
            <li>Enhance their relationships with their own children</li>
          </ul>
          <p className="leading-loose lg:px-20 lg:p-8">
            Have fun Achieve personal growth and learn more about themselves
            Improve their self-esteem and feel they are making a difference Gain
            a better understanding of other cultures and develop a greater
            appreciation for diversity Feel more productive and have a better
            attitude at work Enhance their relationships with their own children
            Above all, a good mentor is willing to take the time to get to know
            their mentee, to learn new things that are important to the young
            person, and even to be changed by their relationship.
          </p>
        </div>
      </div>

      <div class="w-full overflow-hidden xl:w-1/2 bg-blue-400 text-white">
        <div className="p-8">
          <h2 className="font-bold">BENEFITS</h2>
          <p className="leading-loose lg:px-20 lg:p-8">
            Mentoring relationships are a shared opportunity for learning and
            growth. Many mentors say that the rewards they gain are as
            substantial as those for their mentees, and that mentoring has
            enabled them to:{" "}
          </p>
          <ul className="list-disc leading-loose lg:px-20 lg:p-8 text-left">
            <li>Have fun</li>
            <li>Achieve personal growth and learn more about themselves</li>
            <li>
              Improve their self-esteem and feel they are making a difference
            </li>
            <li>
              Gain a better understanding of other cultures and develop a
              greater appreciation for diversity
            </li>
            <li>Feel more productive and have a better attitude at work</li>
            <li>Enhance their relationships with their own children</li>
          </ul>
          <p className="leading-loose lg:px-20 lg:p-8">
            Have fun Achieve personal growth and learn more about themselves
            Improve their self-esteem and feel they are making a difference Gain
            a better understanding of other cultures and develop a greater
            appreciation for diversity Feel more productive and have a better
            attitude at work Enhance their relationships with their own children
            Above all, a good mentor is willing to take the time to get to know
            their mentee, to learn new things that are important to the young
            person, and even to be changed by their relationship.
          </p>
        </div>
      </div>
      <div class="w-full overflow-hidden xl:w-1/2">
        <img src={boy} alt="instructions to follow" />
      </div>
    </div>
  );
}
