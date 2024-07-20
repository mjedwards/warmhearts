import React from "react";
import contact from "../../../ui/resources/contact.pdf";
import tips from "../../../ui/resources/tips.pdf";
import roles from "../../../ui/resources/roles.pdf";

export default function ResourceLayout() {
	return (
		<div className='' style={{ backgroundColor: "#F9FAFB" }}>
			<div className='flex w-3/4 items-center rounded-full pt-20 mb-20 m-auto'>
				<div
					className='flex-1 border-b w-1/2'
					style={{
						borderColor: "#1F2937",
						borderWidth: "3px",
						borderRadius: "5px 0px 0px 5px",
					}}></div>
				<span className='text-black text-5xl font-semibold leading-8 px-8 py-3'>
					Resources
				</span>
				<div
					className='flex-1 border-b w-1/2'
					style={{
						borderColor: "#1F2937",
						borderWidth: "3px",
						borderRadius: "5px 0px 0px 5px",
					}}></div>
			</div>
			<div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
				<div className='rounded overflow-hidden shadow-lg'>
					<img
						className='w-full'
						src='https://storage.cloud.google.com/whms_images/images/assets/mentoring_matters.jpeg'
						alt='Mountain'
					/>
					<div className='px-6 py-4'>
						<div className='font-bold text-xl mb-2'>
							Mentoring Matters: Well Defined Outline Of A Mentor
						</div>
						<p className='text-gray-700 text-base'>
							Mentors have to traverse through complex situations at times. That
							is why it is good to know what a mentor should focus and what a
							mentor should be.
						</p>
					</div>
					<div className='px-6 pt-4 pb-2'>
						<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
							<a href={roles} target='_blank' rel='noopener noreferrer'>
								Open
							</a>
						</span>
						<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
							<a href={roles} download>
								Download
							</a>
						</span>
					</div>
				</div>

				<div className='rounded overflow-hidden shadow-lg'>
					<img
						className='w-full'
						src='https://d22bbllmj4tvv8.cloudfront.net/d5/c0/efaeb96d41e3a674f8d2ed576bed/what-is-mentoring1-square.jpg'
						alt='Mountain'
					/>
					<div className='px-6 py-4'>
						<div className='font-bold text-xl mb-2'>
							What Makes A Good Mentor?
						</div>
						<p className='text-gray-700 text-base'>
							Here are a few tips to help improve your mentoring. It can be
							difficult but this document provides help information.
						</p>
					</div>
					<div className='px-6 pt-4 pb-2'>
						<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
							<a href={tips} target='_blank' rel='noopener noreferrer'>
								Open
							</a>
						</span>
						<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
							<a href={tips} download>
								Download
							</a>
						</span>
					</div>
				</div>

				<div className='rounded overflow-hidden shadow-lg'>
					<img
						className='w-full'
						src='https://www.techtello.com/wp-content/uploads/2020/03/relationship-mentor-mentee.png'
						alt='Mountain'
					/>
					<div className='px-6 py-4'>
						<div className='font-bold text-xl mb-2'>
							Contact Form Mentors and Mentees
						</div>
						<p className='text-gray-700 text-base'>
							links to download or open are below
						</p>
					</div>
					<div className='px-6 pt-4 pb-2'>
						<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
							<a href={contact} target='_blank' rel='noopener noreferrer'>
								Open
							</a>
						</span>
						<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
							<a href={contact} download>
								Download
							</a>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
