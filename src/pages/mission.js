import React from "react";
import blobImage from "../ui/assets/hero/blob.png";
import mentorImage from "../ui/assets/mission/what_is_mentor.png";
import goodMentorImage from "../ui/assets/mission/good_mentor.png";
import ResourceLayout from "../components/resourceLibrary/atoms/resourceLayout";

export default function MissionPage() {
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
						OUR MISSION
					</h1>
					<div className='max-w-4xl mx-auto'>
						<p className='text-base md:text-lg text-gray-100 leading-relaxed font-medium mb-6'>
							Our mission is to connect experienced mentors with young
							individuals to support their personal, academic, and professional
							growth. We prioritize trust, reliability, and continuous
							improvement, ensuring that every interaction contributes to a
							positive and lasting impact on our community. Through our programs
							and initiatives, we aim to cultivate future leaders, promote
							holistic development, and create a more inclusive and supportive
							environment for all.
						</p>
						<p className='text-sm md:text-base text-white mt-4 font-medium'>
							Empowering Youth, One Mentor at a Time.
						</p>
					</div>
				</div>
			</div>

			{/* What is a mentor Section */}
			<div className='py-16 relative' style={{ backgroundColor: "#F9FAFB" }}>
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
				<div className='max-w-7xl mx-auto px-6 pt-24'>
					<div className='grid md:grid-cols-2 gap-12 items-center'>
						{/* Left Column - Content */}
						<div className='text-left'>
							<h2
								className='text-4xl md:text-5xl font-bold mb-8'
								style={{ color: "#ec523d" }}>
								What is a mentor?
							</h2>
							<p className='text-gray-700 leading-relaxed mb-6 text-lg'>
								A mentor is a trusted guide or friend who supports and assists a
								mentee in their personal and professional development. Here are
								the key roles a mentor plays:
							</p>

							<div className='space-y-4 mb-8'>
								<div>
									<h3 className='font-bold text-gray-800 text-lg'>
										• Trusted Guide:
									</h3>
									<p className='text-gray-700 leading-relaxed ml-4'>
										A mentor provides access to people, places, and resources
										outside the mentee's usual environment, including
										educational, career, and other resources.
									</p>
								</div>

								<div>
									<h3 className='font-bold text-gray-800 text-lg'>
										• Caring and Responsible Adult:
									</h3>
									<p className='text-gray-700 leading-relaxed ml-4'>
										A mentor offers a listening ear and genuine care, helping
										the mentee reach their goals.
									</p>
								</div>

								<div>
									<h3 className='font-bold text-gray-800 text-lg'>
										• Positive Role Model:
									</h3>
									<p className='text-gray-700 leading-relaxed ml-4'>
										A mentor exemplifies appropriate behavior and serves as an
										example for the mentee to follow.
									</p>
								</div>
							</div>

							<p className='text-gray-700 leading-relaxed italic text-lg'>
								A mentor's role is to provide support, guidance, and
								encouragement, helping mentees navigate their personal and
								professional journeys.
							</p>
						</div>

						{/* Right Column - Image */}
						<div className='relative text-center'>
							<img
								src={mentorImage}
								alt='What is a mentor'
								className='w-full h-auto'
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Key Qualities of a Good Mentor Section */}
			<div className='py-16 relative' style={{ backgroundColor: "#1f2937" }}>
				{/* Abstract divider at top */}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" className="absolute top-0 left-0 w-full h-24" preserveAspectRatio="none">
					<path d="M0 0v80l227.5 18c12.1 1 22.5-8.6 22.5-20.7s10.4-21.8 22.5-20.8l205 16.3c12.1 1 22.5-8.6 22.5-20.8s10.4-21.7 22.5-20.8l205 16.3c12.1 1 22.5-8.6 22.5-20.8S760.4 5 772.5 6L1000 24V0H0Z" fill="#F9FAFB"></path>
				</svg>

				<div className='max-w-7xl mx-auto px-6 pt-32 pb-16'>
					<div className='grid md:grid-cols-2 gap-12 items-center justify-center min-h-[500px]'>
						{/* Left Column - Image */}
						<div className='relative flex items-center justify-center h-full'>
							<img
								src={goodMentorImage}
								alt='Key Qualities of a Good Mentor'
								className='h-[450px] w-auto object-contain'
							/>
						</div>

						{/* Right Column - Content */}
						<div className='text-left flex flex-col justify-center'>
							<h2
								className='text-4xl md:text-5xl font-bold mb-8'
								style={{ color: "#ec523d" }}>
								Key Qualities of a Good Mentor
							</h2>
							<p className='text-gray-300 leading-relaxed mb-8 text-lg'>
								A good mentor possesses certain qualities that make them
								effective in their role. Here are some key qualities:
							</p>

							<div className='space-y-6 mb-8'>
								<div className='flex items-start'>
									<span className='text-white font-bold text-lg mr-3'>•</span>
									<div>
										<h3 className='font-bold text-white text-lg mb-2'>
											Good Listener:
										</h3>
										<p className='text-gray-300 leading-relaxed'>
											Attentive to the mentee's needs and concerns.
										</p>
									</div>
								</div>

								<div className='flex items-start'>
									<span className='text-white font-bold text-lg mr-3'>•</span>
									<div>
										<h3 className='font-bold text-white text-lg mb-2'>
											Persistent:
										</h3>
										<p className='text-gray-300 leading-relaxed'>
											Continuously supports and encourages the mentee.
										</p>
									</div>
								</div>

								<div className='flex items-start'>
									<span className='text-white font-bold text-lg mr-3'>•</span>
									<div>
										<h3 className='font-bold text-white text-lg mb-2'>
											Committed:
										</h3>
										<p className='text-gray-300 leading-relaxed'>
											Dedicated to the mentee's growth and development.
										</p>
									</div>
								</div>

								<div className='flex items-start'>
									<span className='text-white font-bold text-lg mr-3'>•</span>
									<div>
										<h3 className='font-bold text-white text-lg mb-2'>
											Patient:
										</h3>
										<p className='text-gray-300 leading-relaxed'>
											Understands that growth takes time and is willing to
											support the mentee throughout the process.
										</p>
									</div>
								</div>
							</div>

							<p className='text-gray-300 leading-relaxed italic text-lg'>
								A good mentor shows patience, empathy, and persistence, creating
								a supportive environment for mentee growth.
							</p>
						</div>
					</div>
				</div>

				{/* Abstract divider at bottom */}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" className="absolute bottom-0 left-0 w-full h-24" preserveAspectRatio="none" style={{ transform: 'rotate(180deg)' }}>
					<path d="M0 0v80l227.5 18c12.1 1 22.5-8.6 22.5-20.7s10.4-21.8 22.5-20.8l205 16.3c12.1 1 22.5-8.6 22.5-20.8s10.4-21.7 22.5-20.8l205 16.3c12.1 1 22.5-8.6 22.5-20.8S760.4 5 772.5 6L1000 24V0H0Z" fill="#F9FAFB"></path>
				</svg>
			</div>

			{/* A Mentor is Not Section */}
			<div className='py-16 relative' style={{ backgroundColor: "#F9FAFB" }}>
				<div className='max-w-5xl mx-auto px-6'>
					<div className='text-center'>
						<h2
							className='text-4xl md:text-5xl font-bold mb-8'
							style={{ color: "#ec523d" }}>
							A Mentor is Not:
						</h2>
						<p className='text-gray-700 leading-relaxed mb-12 text-lg max-w-3xl mx-auto'>
							It's important to understand what a mentor is not to avoid confusion and set clear expectations:
						</p>

						<div className='space-y-8 text-left max-w-4xl mx-auto'>
							<div className='flex items-start'>
								<span className='text-gray-800 font-bold text-lg mr-3'>•</span>
								<div>
									<h3 className='font-bold text-gray-800 text-lg mb-2'>
										A Parent or Legal Guardian:
									</h3>
									<p className='text-gray-700 leading-relaxed'>
										Unlike parents or guardians, who are legally responsible for providing shelter, food, and clothing, a mentor focuses on guidance and support.
									</p>
								</div>
							</div>

							<div className='flex items-start'>
								<span className='text-gray-800 font-bold text-lg mr-3'>•</span>
								<div>
									<h3 className='font-bold text-gray-800 text-lg mb-2'>
										A Social Worker:
									</h3>
									<p className='text-gray-700 leading-relaxed'>
										Social workers are licensed professionals trained to handle family issues, which is beyond the scope of a mentor's role.
									</p>
								</div>
							</div>

							<div className='flex items-start'>
								<span className='text-gray-800 font-bold text-lg mr-3'>•</span>
								<div>
									<h3 className='font-bold text-gray-800 text-lg mb-2'>
										A Psychologist:
									</h3>
									<p className='text-gray-700 leading-relaxed'>
										Psychologists are licensed professionals trained to address mental and behavioral issues, requiring years of specialized training.
									</p>
								</div>
							</div>
						</div>

						<p className='text-gray-700 leading-relaxed italic text-lg mt-12 max-w-4xl mx-auto'>
							Mentors must recognize their limits and understand that they cannot fulfill roles that require professional training. However, they can guide mentees on how to access the necessary professional services and resources to meet their needs.
						</p>
					</div>
				</div>
			</div>

			{/* Resources Section */}
			<ResourceLayout />
		</div>
	);
}
