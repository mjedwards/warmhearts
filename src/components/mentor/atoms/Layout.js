import React from "react";
import GridLayout from "../molecule/gridLayout";
import ImageTextContainer from "../molecule/imageTextContainer";
import boy from "../../../ui/assets/photos/boy.png";
import girl from "../../../ui/assets/photos/girl.jpg";
import diversity from "../../../ui/assets/photos/diversity.jpg";

export default function Layout() {
  return (
    <>
      <ImageTextContainer />
      <GridLayout boy={boy} girl={girl} diversity={diversity} />
    </>
  );
}
