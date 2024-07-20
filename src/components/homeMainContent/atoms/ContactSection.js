import React from "react";
import { NavLink } from "react-router-dom";
import contactImg from "../assets/contact.png";

function ContactSection() {
	return (
		<div
			className='flex flex-col w-full items-center justify-center gap-8 h-screen'
			style={{
				color: "#1F2937",
				backgroundImage: `url(${contactImg})`,
				backgroundSize: "cover",
			}}>
			<h3 className='text-2xl font-bold'>Have Questions?</h3>
			<p className='text-5xl'>Get In Touch with Us</p>
			<NavLink to='/contact' style={{ width: "50%" }}>
				<div
					className='rounded-3xl p-1 text-center w-full p-2 cursor-pointer text-white'
					style={{ backgroundColor: "#EC523D", width: "20%", margin: "auto" }}>
					Contact Us
				</div>
			</NavLink>
		</div>
	);
}

export default ContactSection;
