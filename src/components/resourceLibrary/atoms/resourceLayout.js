import React from "react";
import contact from "../../../ui/resources/contact.pdf";
import tips from "../../../ui/resources/tips.pdf";
import roles from "../../../ui/resources/roles.pdf";

export default function ResourceLayout() {
	return (
		<div className='py-16' style={{ backgroundColor: "#F9FAFB" }}>
			<div className='max-w-7xl mx-auto px-6'>
				<h2
					className='text-4xl md:text-5xl font-bold mb-16 text-left'
					style={{ color: "#ec523d" }}>
					Resources
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					<div className='bg-white rounded-lg overflow-hidden shadow-lg flex flex-col h-full'>
						<img
							className='w-full h-48 object-cover'
							src='https://storage.googleapis.com/whms_images/images/assets/mentoring_matters.jpeg'
							alt='Mentoring Matters'
						/>
						<div className='p-6 flex-grow flex flex-col'>
							<h3 className='font-bold text-xl mb-3 text-center'>
								Mentoring Matters: Well Defined Outline Of A Mentor
							</h3>
							<p className='text-gray-700 text-center mb-6 leading-relaxed flex-grow'>
								Mentors have to traverse through complex situations at times. That is why it is good to know what a mentor should focus and what a mentor should be.
							</p>
							<div className='flex justify-center gap-4 mt-auto'>
								<button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded'>
									<a href={roles} target='_blank' rel='noopener noreferrer'>
										Open
									</a>
								</button>
								<button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded'>
									<a href={roles} download>
										Download
									</a>
								</button>
							</div>
						</div>
				</div>

					<div className='bg-white rounded-lg overflow-hidden shadow-lg flex flex-col h-full'>
						<img
							className='w-full h-48 object-cover'
							src='https://storage.googleapis.com/whms_images/images/assets/mentorimage.jpg'
							alt='What Makes A Good Mentor'
						/>
						<div className='p-6 flex-grow flex flex-col'>
							<h3 className='font-bold text-xl mb-3 text-center'>
								What Makes A Good Mentor?
							</h3>
							<p className='text-gray-700 text-center mb-6 leading-relaxed flex-grow'>
								Here are a few tips to help improve your mentoring. It can be difficult but this document provides help information.
							</p>
							<div className='flex justify-center gap-4 mt-auto'>
								<button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded'>
									<a href={tips} target='_blank' rel='noopener noreferrer'>
										Open
									</a>
								</button>
								<button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded'>
									<a href={tips} download>
										Download
									</a>
								</button>
							</div>
						</div>
				</div>

					<div className='bg-white rounded-lg overflow-hidden shadow-lg flex flex-col h-full'>
						<img
							className='w-full h-48 object-cover'
							src='https://www.techtello.com/wp-content/uploads/2020/03/relationship-mentor-mentee.png'
							alt='Contact Form Mentors and Mentees'
						/>
						<div className='p-6 flex-grow flex flex-col'>
							<h3 className='font-bold text-xl mb-3 text-center'>
								Contact Form Mentors and Mentees
							</h3>
							<p className='text-gray-700 text-center mb-6 leading-relaxed flex-grow'>
								links to download or open are below
							</p>
							<div className='flex justify-center gap-4 mt-auto'>
								<button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded'>
									<a href={contact} target='_blank' rel='noopener noreferrer'>
										Open
									</a>
								</button>
								<button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded'>
									<a href={contact} download>
										Download
									</a>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
