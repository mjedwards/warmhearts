import React from "react";
import { NavLink } from "react-router-dom";
import noBG from "../../ui/assets/logos/noBG.png";

export default function Footer() {
  return (
    <div>
      <div className="bg-linear-pink-invert py-12 px-4">
        <div
          tabIndex="0"
          aria-label="footer"
          className="focus:outline-none mx-auto container flex flex-col items-center justify-center"
        >
          <NavLink to="/">
            <img className="h-60 w-60" src={noBG} alt="Workflow" />
          </NavLink>
          <div className="text-white flex flex-col md:items-center f-f-l pt-3">
            <div className="my-6 text-base text-color f-f-l">
              <ul className="md:flex items-center">
                <li className="md:mr-6 cursor-pointer pt-4 lg:py-0">
                  <NavLink
                    to="/"
                    className="focus:outline-none focus:underline hover:text-gray-500"
                  >
                    Warmheart Mentorship
                  </NavLink>
                </li>
                <li className="md:mr-6 cursor-pointer pt-4 lg:py-0">
                  <NavLink
                    to="/Who-We-Are"
                    className="focus:outline-none focus:underline hover:text-gray-500"
                  >
                    Who We Are
                  </NavLink>
                </li>
                <li className="md:mr-6 cursor-pointer pt-4 lg:py-0">
                  <NavLink
                    to="/What-We-Do"
                    className="focus:outline-none focus:underline hover:text-gray-500"
                  >
                    What We Do
                  </NavLink>
                </li>
                <li className="md:mr-6 cursor-pointer pt-4 lg:py-0">
                  <NavLink
                    to="/Take-Action"
                    className="focus:outline-none focus:underline hover:text-gray-500"
                  >
                    Take Action
                  </NavLink>
                </li>
                <li className="md:mr-6 cursor-pointer pt-4 lg:py-0">
                  <NavLink
                    to="/Resources"
                    className="focus:outline-none focus:underline hover:text-gray-500"
                  >
                    Resources
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="text-sm text-color mb-10 f-f-l">
              <p tabIndex="0" className="focus:outline-none">
                © 2021 Warmhearts Mentorship. All rights reserved
              </p>
            </div>
          </div>
          <div className="w-9/12 h-0.5 bg-gray-100 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
