import React from "react";
import { NavLink } from "react-router-dom";

export default function TextContainer({title, subtitle, description, tagline, pathname}) {
	return (
		<div className='lg:py-12 text-gray bg-white flex flex-col lg:m-auto text-left gap-4 w-1/2'>
			<h2 style={{ color: "#EC523D" }}>{title}</h2>
			<h3 className='font-bold text-3xl'>{subtitle}</h3>
			<div>
				<p className='leading-relaxed text-left text-2xl'>
					{description}
				</p>
				<p className='tagline italic text-lg'>
					{tagline}
				</p>
			</div>
			<NavLink to={pathname}>
				<div
					className='rounded-3xl p-1 text-center w-1/4 cursor-pointer text-white'
					style={{ backgroundColor: "#EC523D" }}>
					Learn More
				</div>
			</NavLink>
		</div>
	);
}
