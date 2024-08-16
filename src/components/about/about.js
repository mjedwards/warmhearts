import React from "react";
import Hero from "./atoms/Hero";
import aboutHero from "./assets/about_hero.png";
import Founder from "./atoms/Founder";
import StudentResponse from "./atoms/StudentResponse";
import ImageGallery from "../imageGallery/imageGallery";
import Values from "./atoms/Values";
import Team from "./atoms/Team";

const content = {
	title: "About Us",
	description:
		"Every child deserves an equal opportunity to thrive. Understanding the hardships some communities face, our team is dedicated to providing reliable support and fostering a culture of responsibility and achievement. We aspire to be a pillar of strength, guiding the next generation toward leadership and success.",
	subtitle: "Nurturing Potential, Cultivating Leaders.",
};
export default function About() {
	const { title, description, subtitle } = content;
	return (
		<div>
			<Hero
				title={title}
				description={description}
				subtitle={subtitle}
				bg={aboutHero}
			/>
			<Founder />
			<StudentResponse />
			<ImageGallery />
			<Values />
			<Team />
		</div>
	);
}
