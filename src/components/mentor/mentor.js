import React from "react";
import Hero from ".././about/atoms/Hero";
import bgHero from "../../ui/assets/photos/bg_2.png";
import MentorComponent from "./atoms/MentorComponent";
import ResourceLayout from "../resourceLibrary/atoms/resourceLayout";

const content = {
	title: "Advocates for Mentoring",
	description:
		"An advocate for mentoring is dedicated to empowering youth by fostering meaningful and impactful mentoring relationships. Our mission is to connect experienced mentors with young individuals to support their personal, academic, and professional growth. We prioritize trust, reliability, and continuous improvement, ensuring that every interaction contributes to a positive and lasting impact on our community. Through our programs and initiatives, we aim to cultivate future leaders, promote holistic development, and create a more inclusive and supportive environment for all.",
	subtitle: "Empowering Youth, One Mentor at a Time.",
};

const mentorContent = [
	{
		title: "What is a Mentor?",
		description:
			"A mentor is a trusted guide or friend who supports and assists a mentee in their personal and professional development. Here are the key roles a mentor plays:",
		roles: [
			{
				roleTitle: "Trusted Guide",
				roleDescription:
					"A mentor provides access to people, places, and resources outside the mentee's usual environment, including educational, career, and other resources.",
			},
			{
				roleTitle: "Caring and Responsible Adult",
				roleDescription:
					"A mentor offers a listening ear and genuine care, helping the mentee reach their goals.",
			},
			{
				roleTitle: "Positive Role Model",
				roleDescription:
					"A mentor exemplifies appropriate behavior and serves as an example for the mentee to follow.",
			},
		],
		note: "A mentor’s role is to provide support, guidance, and encouragement, helping mentees navigate their personal and professional journeys.",
		image:
			"https://storage.cloud.google.com/whms_images/images/assets/guidance.jpeg",
		
		direction: "flex-row"
	},
	{
		title: "Key Qualities of a Good Mentor",
		description:
			"A good mentor possesses certain qualities that make them effective in their role. Here are some key qualities:",
		roles: [
			{
				roleTitle: "Good Listener",
				roleDescription: "Attentive to the mentee's needs and concerns.",
			},
			{
				roleTitle: "Persistent",
				roleDescription: "Continuously supports and encourages the mentee.",
			},
			{
				roleTitle: "Committed",
				roleDescription: "Dedicated to the mentee's growth and development.",
			},
			{
				roleTitle: "Patient",
				roleDescription:
					"Understands that growth takes time and is willing to support the mentee throughout the process.",
			},
		],
		note: "A good mentor shows patience, empathy, and persistence, creating a supportive environment for mentee growth.",
		image:
			"https://storage.cloud.google.com/whms_images/images/assets/mentoring.jpeg",
		direction: "flex-row-reverse"
	},
	{
		title: "A Mentor is Not:",
		description:
			"It's important to understand what a mentor is not to avoid confusion and set clear expectations:",
		roles: [
			{
				roleTitle: "A Parent or Legal Guardian",
				roleDescription:
					"Unlike parents or guardians, who are legally responsible for providing shelter, food, and clothing, a mentor focuses on guidance and support.",
			},
			{
				roleTitle: "A Social Worker",
				roleDescription:
					"Social workers are licensed professionals trained to handle family issues, which is beyond the scope of a mentor's role.",
			},
			{
				roleTitle: "A Psychologist",
				roleDescription:
					"Psychologists are licensed professionals trained to address mental and behavioral issues, requiring years of specialized training.",
			},
		],
		note: "Mentors must recognize their limits and understand that they cannot fulfill roles that require professional training. However, they can guide mentees on how to access the necessary professional services and resources to meet their needs.",
		image:
			"https://storage.cloud.google.com/whms_images/images/assets/no_mentor.jpeg",
		direction: "flex-row"
	},
];

export default function About() {
	const { title, description, subtitle } = content;
	return (
		<div>
			<Hero
				title={title}
				description={description}
				subtitle={subtitle}
				bg={bgHero}
			/>
			{mentorContent.map((info, index) => (
				<MentorComponent key={index} info={info} />
			))}
			<ResourceLayout />
		</div>
	);
}
