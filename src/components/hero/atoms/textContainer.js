import React from "react";
import { NavLink } from "react-router-dom";

export default function TextContainer({title, subtitle, description, tagline, pathname, bg, textColor, font}) {
	return (
		<div className='lg:py-12 text-gray flex flex-col lg:m-auto text-left gap-4 w-1/2' style={{backgroundColor: `${bg ? bg : ""}`}}>
			<h2 style={{ color: "#EC523D" }}>{title}</h2>
			<h3 className='font-bold text-3xl' style={{color: `${textColor}`}}>{subtitle}</h3>
			<div style={{color: `${textColor ? textColor: ""}`}}>
				<p className='leading-relaxed text-left text-2xl' style={{fontSize: `${font ? font : ""}`}}>
					{description}
				</p>
				<p className='tagline italic text-lg' style={{fontSize: `${font ? font : ""}`}}>
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
