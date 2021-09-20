import React from "react";

import MentorForm from "../../forms/becomeMentor";
import instructions from "../../../ui/assets/photos/instructions.png";

export default function Layout() {
  return (
    <div class="flex flex-wrap overflow-hidden pt-20">
      <div class="w-full overflow-hidden xl:w-1/2">
        <img src={instructions} alt="instructions to follow" />
      </div>

      <div class="w-full overflow-hidden xl:w-1/2">
        <MentorForm />
      </div>
    </div>
  );
}
