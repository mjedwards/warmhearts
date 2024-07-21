import React from "react";
import whmsBG from "../assets/whmsBG.png";
import heroImg from "../assets/hero_img.png";
import { NavLink } from "react-router-dom";

export default function VideoHero() {
	return (
		<>
			<section
				className='relative h-screen flex flex-row items-end justify-center text-center text-white py-0 px-3'
				style={{ backgroundImage: `url(${whmsBG})`, backgroundSize: "cover" }}>
				<div className='my-auto md:m-auto md:mr-0 md:mt-96 relative flex flex-col justify-between text-left md:w-1/2 gap-8' style={{zIndex: 1}}>
					<div className='w-3/4'>
						<p className='text-4xl'>
							<span className='font-bold' style={{ color: "#EC523D" }}>Inspiring</span> hope and
							leaving a positive influence on future generations.
						</p>
					</div>
					<div className=''>
						<p className='text-base'>Empowering Futures, Igniting Hope</p>
					</div>
					<NavLink to='/Who-We-Are'>
						<div
							className='rounded-3xl p-1 text-center w-1/4 cursor-pointer'
							style={{ backgroundColor: "#EC523D" }}>
							Learn More
						</div>
					</NavLink>
				</div>
				<div className='md:block hidden relative w-2/5' style={{zIndex: 1}}>
					<img src={heroImg} alt='a collection of photos taken during events' />
				</div>
			</section>
		</>
	);
}
