import React from "react";
import { NavLink } from "react-router-dom";
import sectionImage from "../assets/bodyImg2.png";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function HomeStatistics() {
	return (
		<>
			<div className='flex flex-col lg:flex-row col-span-5 h-full mt-11 py-14'>
				<div className='lg:p-12 text-gray bg-white flex flex-col lg:m-auto text-left gap-4 lg:w-1/2 p-2'>
					<h3
						className='font-bold text-3xl border-b-4'
						style={{ borderColor: "#EC523D", width: "fit-content" }}>
						How It Started
					</h3>
					<div>
						<p className='leading-relaxed text-left text-xl'>
							Veronne McMain, originally from Jamaica, has called Florida home
							since 1986. A Barry University graduate, she spent 14 years as a
							substance abuse therapist before becoming a School Social Worker
							for Broward County Public Schools, where her focus on community
							collaboration thrives.
						</p>
                        <br/>
						<p className='leading-relaxed text-left text-xl'>
							Her personal struggles, including homelessness and absent
							fatherhood, fueled her dedication to helping students. This drive
							led her to establish a mentorship program at Parkway Middle School
							of the Arts and organize an Annual Thanksgiving Dinner for needy
							families.
						</p>
                        <br/>
						<p className='leading-relaxed text-left text-xl'>
							Currently pursuing a Ph.D. in psychology while working as a family
							therapist, Veronne prioritizes humility and kindness, cherishing
							time with loved ones and enjoying hobbies like reading and
							shopping.
						</p>
					</div>
					<NavLink to='/'>
						<div
							className='rounded-3xl w-1/4 cursor-pointer text-white text-lg lg:mb-0 mb-4'
							style={{ color: "#EC523D" }}>
							Learn More
						</div>
					</NavLink>
				</div>
				<div
					className='stats w-screen lg:w-1/2 flex-grow m-auto flex flex-col justify-around rounded-l-3xl'
					style={{ backgroundImage: `url(${sectionImage})`, backgroundSize: 'cover', height: '600px'}}>
					<div>
						<div className='flex flex-row justify-center items-center'>
							<Icon icon='ph:users-three' style={{ color: "white" }} width={60}/>
							<span className="text-4xl text-white ml-2">120</span>
						</div>
						<p className="text-white text-base">Students Participating</p>
					</div>
					<div>
						<div className='flex flex-row justify-center items-center'>
							<Icon icon='hugeicons:mentoring' style={{ color: "white" }} width={60}/>
							<span className="text-4xl text-white ml-2">110</span>
						</div>
						<p className="text-white text-base">Mentors Participating</p>
					</div>
					<div>
						<div className='flex flex-row justify-center items-center'>
							<Icon icon='charm:graduate-cap' style={{ color: "white" }} width={60}/>
							<span className="text-4xl text-white ml-2">75%</span>
						</div>
						<p className="text-white text-base">Academic Improvement</p>
					</div>
				</div>
			</div>
		</>
	);
}
