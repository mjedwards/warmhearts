import React from "react";
// import { useHistory } from "react-router-dom";
import blobImage from "../ui/assets/hero/blob.png";
import mailIcon from "../ui/assets/icons/mail_icon.png";
import pinIcon from "../ui/assets/icons/pin.png";

export default function ContactPage() {
	const onsubmit = () => {
		sessionStorage.setItem("formSubmitted", "true");
	};
	return (
		<div className='min-h-screen'>
			{/* Hero Section */}
			<div
				className='relative min-h-screen flex items-center justify-center overflow-hidden'
				style={{ backgroundColor: "#1f2937" }}>
				{/* Background blob shape - centered and large */}
				<div className='absolute inset-0 flex items-center justify-center'>
					<img
						src={blobImage}
						alt='Background blob'
						className='w-[600px] h-[500px] md:w-[800px] md:h-[600px] object-contain opacity-90'
					/>
				</div>

				{/* Hero Content */}
				<div className='relative z-5 max-w-5xl mx-auto px-6 text-center text-white'>
					<h1 className='text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight'>
						BECOME A<br />
						MENTOR
					</h1>
					<div className='max-w-3xl mx-auto'>
						<p className='text-base md:text-lg text-gray-100 leading-relaxed font-medium'>
							When you were young, did you know how to study for a test or plan
							for college? Do you remember wanting your first car or looking for
							a part-time job? Simple things that seem easy to you now may be a
							complete mystery to a young person. Unfortunately, 1 in 3 young
							people will grow up without a mentor—either through a formal
							mentoring program or informally through a family friend or
							community member—leaving them disconnected from a critical
							resource that could help with these challenges.
						</p>
					</div>
				</div>
			</div>

			{/* Contact Form Section */}
			<form
				name='contact'
				method='POST'
				data-netlify='true'
				data-netlify-redirect='/thank-you'
				onSubmit={onsubmit}>
				<div className='bg-gray-100 py-16 relative'>
					{/* Curved section divider */}
					<svg
						className='absolute top-0 left-0 w-full'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 1000 100'
						height='100'
						preserveAspectRatio='none'>
						<path
							d='M0 0v4s250 96 500 96 500-96 500-96V0H0Z'
							fill='#1F2937'></path>
					</svg>
					<div className='max-w-6xl mx-auto px-6 pt-24'>
						<div className='bg-white rounded-2xl p-8 shadow-lg'>
							<div className='grid lg:grid-cols-5 gap-8'>
								{/* Left Column - Contact Information */}
								<div className='lg:col-span-2 bg-gray-800 text-white p-8 rounded-2xl'>
									<h2 className='text-2xl font-bold mb-6'>
										Contact Information
									</h2>
									<p className='text-gray-300 mb-12 leading-relaxed'>
										Complete the form and a member of the team will get in touch
										with you right away.
									</p>

									<div className='space-y-8'>
										{/* Email */}
										<div className='flex flex-col items-center'>
											<img
												src={mailIcon}
												alt='Email'
												className='w-12 h-auto mb-2'
											/>
											<p className='text-white underline break-words text-center'>
												contact@warmheartmentorshipservice.com
											</p>
										</div>

										{/* Location */}
										<div className='flex flex-col items-center'>
											<img
												src={pinIcon}
												alt='Location'
												className='w-6 h-auto mb-2'
											/>
											<p className='text-white text-center'>
												Florida, United States
											</p>
										</div>
									</div>
								</div>

								{/* Right Column - Contact Form */}
								<div className='lg:col-span-3 space-y-6'>
									<div className='grid md:grid-cols-2 gap-6'>
										<input
											type='text'
											name='fullName'
											placeholder='Full Name'
											className='px-6 py-4 rounded-full bg-gray-200 border-0 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-600'
										/>
										<input
											type='email'
											name='email'
											placeholder='Example@email.com'
											className='px-6 py-4 rounded-full bg-gray-200 border-0 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-600'
										/>
									</div>

									<input
										type='text'
										name='subject'
										placeholder='Subject'
										className='w-full px-6 py-4 rounded-full bg-gray-200 border-0 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-600'
									/>

									<textarea
										name='message'
										placeholder='Your Message...........'
										rows='8'
										className='w-full px-6 py-4 rounded-2xl bg-gray-200 border-0 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none placeholder-gray-600'></textarea>

									<div className='flex justify-end'>
										<button className='bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-medium transition-colors duration-200'>
											Send Message
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}
