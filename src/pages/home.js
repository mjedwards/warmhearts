import React, { useState } from "react";
import Hero from "../components/shared/Hero";
import DonutChart from "../components/shared/DonutChart";

export default function HomePage() {
	// Chart data
	const attendanceData = [
		{ name: "Past Absence", value: 341 },
		{ name: "Current Absence", value: 285 },
	];

	const behaviorData = [
		{ name: "Past Incidents", value: 57 },
		{ name: "Current Incidents", value: 43 },
	];

	// Carousel state
	const [currentSlide, setCurrentSlide] = useState(0);

	// Video modal state
	const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

	const carouselCards = [
		{ title: "Community Event", description: "Join us for our annual community gathering", image: "/carousel/0.jpg" },
		{ title: "Thanksgiving Giveaway", description: "Supporting families during the holidays", image: "/carousel/1.jpg" },
		{ title: "Thanksgiving Giveaway", description: "Giving out thanksgiving baskets", image: "/carousel/2.jpg" },
		{ title: "Thanksgiving Food Drive", description: "Annual drive to support families in the community", image: "/carousel/3.jpg" },
		{ title: "Mentorship Dinner", description: "Celebrating our mentees", image: "/carousel/4.jpg" },
		{ title: "Mentorship Dinner", description: "Showing appreciation for our mentors", image: "/carousel/5.jpg" },
		{ title: "Mentorship Dinner", description: "Annual mentor and mentee gathering", image: "/carousel/6.jpg" },
		{ title: "Mentor Appreciation", description: "Celebrating the professionals who help our program", image: "/carousel/7.jpg" },
		{ title: "Mentorship Breakfast", description: "Annual gathering to support the program", image: "/carousel/8.JPG" },
		{ title: "Mentorship Breakfast", description: "Building camaraderie to start the year off right", image: "/carousel/9.JPG" },
		{ title: "Mentorship Breakfast", description: "Connecting and building bonds with other mentors", image: "/carousel/10.JPG" },
		{ title: "Mentorship", description: "Providing love and support", image: "/carousel/11.jpg" },
		{ title: "Sneaker Ball", description: "A fundraiser for networking and supporting our program", image: "/carousel/12.jpeg" },
		{ title: "Sneaker Ball", description: "Providing fun and unique experiences for our mentors and mentees", image: "/carousel/13.jpeg" },
		{ title: "Mentorship Breakfast", description: "Celebrating mentorship excellence", image: "/carousel/14.JPG" },
		{ title: "Mentorship Breakfast", description: "Uplifting our community", image: "/carousel/15.jpg" },
	];

	const maxSlides = Math.ceil(carouselCards.length / 2) - 1;

	const nextSlide = () => {
		setCurrentSlide(prev => prev < maxSlides ? prev + 1 : 0);
	};

	// Video modal handlers
	const openVideoModal = () => {
		setIsVideoModalOpen(true);
	};

	const closeVideoModal = () => {
		setIsVideoModalOpen(false);
	};

	return (
		<div className='min-h-screen'>
			{/* Hero Section */}
			<div
				className='relative min-h-screen flex items-center justify-center'
				style={{
					backgroundImage: "url(/Inspiring_hopeBG.png)",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}>
				{/* Dark overlay for text readability */}
				<div className='absolute inset-0 bg-slate-800 bg-opacity-70'></div>

				{/* Hero Content */}
				<div className='relative z-5 max-w-6xl mx-auto px-6 text-center text-white'>
					<h1 className='text-5xl md:text-7xl font-bold mb-8 leading-tight'>
						<span style={{color: '#ec523d'}}>Inspiring</span> hope and leaving a positive
						<br />
						influence on future generations.
					</h1>

					{/* Subtext and Buttons Container */}
					<div className='flex flex-col items-center justify-center mt-12'>
						<div className='mb-8 text-center'>
							<p className='text-2xl font-bold mb-2'>Empowering Futures,</p>
							<p className='text-2xl font-bold'>Igniting Hope</p>
						</div>
						<div className='flex flex-col sm:flex-row gap-4'>
							<button className='text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200 min-w-[160px]' style={{backgroundColor: '#ec523d'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#d63927'} onMouseLeave={(e) => e.target.style.backgroundColor = '#ec523d'}>
								Learn More
							</button>
							<button
								onClick={openVideoModal}
								className='border-2 border-white bg-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200 min-w-[160px]'
								style={{color: '#1f2937'}}
								onMouseEnter={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'white'}}
								onMouseLeave={(e) => {e.target.style.backgroundColor = 'white'; e.target.style.color = '#1f2937'}}
							>
								Watch Video ▶
							</button>
						</div>
					</div>
				</div>

				{/* White curved divider at bottom */}
				<div className='absolute bottom-0 left-0 w-full overflow-hidden'>
					<svg
						className='relative block w-full h-20'
						viewBox='0 0 1200 120'
						preserveAspectRatio='none'>
						<path
							d='M0,0V120H1200V0C1000,60 800,80 600,60C400,40 200,20 0,0Z'
							fill='#F3F4F6'></path>
					</svg>
				</div>
			</div>

			{/* Empowering Youth Section */}
			<div className='bg-gray-100 py-16'>
				<div className='max-w-6xl mx-auto px-6'>
					<div className='text-center mb-12'>
						<div className='w-24 h-24 flex items-center justify-center mx-auto mb-6'>
							<img src='/mentorWithWords.png' alt='Warmhearts Mentorship Logo' className='w-20 h-20' />
						</div>
						<h2 className='text-3xl font-bold text-gray-800 mb-8'>
							Empowering Youth, One Mentor at a Time
						</h2>
					</div>

					<div className='grid md:grid-cols-3 gap-8'>
						{/* Card 1 - Our Mission */}
						<div className='bg-white rounded-3xl shadow-lg overflow-hidden'>
							<div className='relative'>
								<img
									src="/b39.jpg"
									alt="Our Mission"
									className="w-full h-64 object-cover"
								/>
								<div className='absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-4'>
									<div className='flex items-center gap-2'>
										<h3 className='text-xl font-medium text-gray-800 text-left'>Our Mission</h3>
										<img src='/mission.png' alt='Mission Icon' className='w-6 h-6' />
									</div>
								</div>
							</div>
							<div className='p-6 text-left'>
								<p className='text-gray-700 text-base leading-relaxed mb-5'>
									Through mentorship, we empower our youth from social and economically disadvantaged communities.
								</p>
								<p className='font-semibold text-gray-900 text-sm'>
									Building Bridges, Transforming Lives: Mentorship for All
								</p>
							</div>
						</div>

						{/* Card 2 - Our Vision */}
						<div className='bg-white rounded-3xl shadow-lg overflow-hidden'>
							<div className='relative'>
								<img
									src="/misc6.jpg"
									alt="Our Vision"
									className="w-full h-64 object-cover"
								/>
								<div className='absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-4'>
									<div className='flex items-center gap-2'>
										<h3 className='text-xl font-medium text-gray-800 text-left'>Our Vision</h3>
										<img src='/find.png' alt='Vision Icon' className='w-6 h-6' />
									</div>
								</div>
							</div>
							<div className='p-6 text-left'>
								<p className='text-gray-700 text-base leading-relaxed mb-5'>
									We aim to inspire and empower youth for greatness, leaving a positive impact on our communities.
								</p>
								<p className='font-semibold text-gray-900 text-sm'>
									Planting Seeds of Hope, Cultivating Greatness: Shaping Tomorrow's Leaders Today
								</p>
							</div>
						</div>

						{/* Card 3 - Our Impact */}
						<div className='bg-white rounded-3xl shadow-lg overflow-hidden'>
							<div className='relative'>
								<img
									src="/b27.jpg"
									alt="Our Impact"
									className="w-full h-64 object-cover"
								/>
								<div className='absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-4'>
									<div className='flex items-center gap-2'>
										<h3 className='text-xl font-medium text-gray-800 text-left'>Our Impact</h3>
										<img src='/romance.png' alt='Impact Icon' className='w-6 h-6' />
									</div>
								</div>
							</div>
							<div className='p-6 text-left'>
								<p className='text-gray-700 text-base leading-relaxed mb-5'>
									Through mentorship, we empower our youth from social and economically disadvantaged communities.
								</p>
								<p className='font-semibold text-gray-900 text-sm'>
									Building Bridges, Transforming Lives: Mentorship for All
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Showing Up and Standing Out Section */}
			<div className='relative' style={{backgroundColor: '#1f2937', '--divider-height': '20rem'}}>
				{/* Curved divider at top - positioned behind text */}
				<div className='absolute top-0 left-0 w-full overflow-hidden z-0' style={{height: 'var(--divider-height)'}}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" className='relative block w-full h-full' preserveAspectRatio='none'>
						<path d="M0 0v4c250 0 250 96 500 96S750 4 1000 4V0H0Z" fill="#F3F4F6"></path>
					</svg>
				</div>

				<div className='pt-20 pb-16 px-6'>
					<div className='max-w-6xl mx-auto'>
						{/* Title */}
						<div className='relative z-10 mb-16 text-center'>
							<h2 className='text-6xl font-bold mb-12'>
								<span style={{color: '#ec523d'}}>Showing</span> <span style={{color: '#1F2937'}}>Up and</span>
								<br />
								<span style={{color: '#ec523d'}}>Standing</span> <span style={{color: '#1F2937'}}>Out</span>
							</h2>
						</div>

						{/* Content Grid */}
						<div className='grid md:grid-cols-2 gap-12 mb-16' style={{marginTop: 'calc(var(--divider-height) - 8rem)'}}>
							<div className='text-white'>
								<p className='text-gray-300 leading-relaxed mb-6'>
									Education is a cornerstone of our program. We are committed to supporting our children as they strive to advance to the next grade. Recognizing that they do not get to choose where they go to school, it is our responsibility to guide them and help them improve on their educational journey.
								</p>
								<p className='text-gray-300 leading-relaxed'>
									Throughout our program's history, we've witnessed consistent growth and improvement among our students. As they transition to the next grade, they continue to excel on the FSA exam, achieving scores ranging from level 3 to 5. These scores are indicative of their proficiency in both reading and math.
								</p>
							</div>

							<div className='text-white border-l-2 border-gray-600 pl-8'>
								<div className='mb-8'>
									<h3 className='text-2xl font-bold mb-2' style={{color: '#ec523d'}}>3.25 GPA</h3>
									<p className='text-white font-semibold'>Average GPA</p>
									<p className='text-gray-400 text-sm leading-relaxed mt-2'>
										Additionally, our eighth graders are transitioning to high school, successfully completing their classes and current grade.
									</p>
								</div>
								<div>
									<h3 className='text-2xl font-bold mb-2' style={{color: '#ec523d'}}>100%</h3>
									<p className='text-white font-semibold'>Graduates to the next grade</p>
									<p className='text-gray-400 text-sm leading-relaxed mt-2'>
										All sixth and seventh-grade students are advancing to the next level. Additionally, our eighth graders are transitioning to high school, successfully completing their classes and current grade.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Mission Section */}
			<div style={{backgroundColor: '#1f2937'}} className='py-16'>
				<div className='max-w-7xl mx-auto px-6'>
					<h2 className='text-6xl font-bold text-left mb-12'>
						<span className='text-white'>We're on a</span>{" "}
						<span style={{color: '#ec523d'}}>mission</span>{" "}
						<span className='text-white'>of</span>
						<br />
						<span className='text-white'>Big</span>{" "}
						<span style={{color: '#ec523d'}}>change</span>
					</h2>

					<div className='flex flex-wrap lg:flex-nowrap gap-16 items-center w-full'>
						{/* Left Column - Charts */}
						<div className='space-y-12' style={{width: '95%'}}>
							<div>
								<div className='flex flex-col lg:flex-row lg:items-start gap-8'>
									<div className='w-64 h-64 relative flex-shrink-0 mx-auto lg:mx-0'>
										<DonutChart
											data={attendanceData}
											width={250}
											pastName="Past Absence"
											currentName="Current Absence"
										/>
									</div>
									<div className='text-white flex-1 text-left text-center lg:text-left'>
										<h3 className='text-white text-xl font-bold mb-4 text-left'>
											Attendance Improvement
										</h3>
										<p className='text-sm leading-relaxed text-left'>
											We monitor school attendance closely as a key indicator of a child's academic progress and holistic growth. Consistent attendance guarantees access to learning, nurtures social and emotional development, and cultivates essential life skills. Chronic absenteeism, however, can result in learning gaps, diminished academic performance, and reduced engagement. Thus, prioritizing and advocating for regular attendance is paramount for every child to thrive academically and personally.
										</p>
									</div>
								</div>
							</div>

							<div>
								<div className='flex flex-col lg:flex-row lg:items-start gap-8'>
									<div className='w-64 h-64 relative flex-shrink-0 mx-auto lg:mx-0'>
										<DonutChart
											data={behaviorData}
											width={250}
											pastName="Past Incidents"
											currentName="Current Incidents"
										/>
									</div>
									<div className='text-white flex-1 text-left text-center lg:text-left'>
										<h3 className='text-white text-xl font-bold mb-4 text-left'>
											Behavior Improvement
										</h3>
										<p className='text-sm leading-relaxed text-left'>
											Monitoring behavioral improvement in school is vital for a child's overall development and academic success. Tracking behavior helps identify areas of growth and ensures a supportive learning environment. Positive behavior fosters engagement, collaboration, and a conducive atmosphere for learning. On the other hand, addressing behavioral challenges early can prevent disruptions, promote social-emotional skills, and enhance peer relationships. Prioritizing behavioral improvement supports students in achieving their full potential academically and socially.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Right Column - Image */}
						<div className='relative' style={{width: '50%'}}>
							<img
								src="/mentor-mentee.png"
								alt="Mentor and Mentee"
								className="w-full max-w-md mx-auto"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Community Support Section */}
			<div className='bg-gray-100 py-16'>
				<div className='max-w-6xl mx-auto px-6 text-center'>
					<h2 className='text-3xl font-bold text-gray-800 mb-12'>
						Community Support makes Our Impact Possible
					</h2>

					<div className='flex items-center justify-center max-w-5xl mx-auto gap-8 mb-16'>
						<div className='text-center'>
							<div className='relative w-full max-w-sm mx-auto mb-4'>
								<img
									src='/community_items.png'
									alt='120 Students Participating'
									className='w-full'
								/>
								<div className='absolute inset-0 flex flex-col items-center justify-center text-white font-bold'>
									<div className='text-3xl mb-1'>120</div>
									<div className='text-sm'>Students</div>
									<div className='text-sm'>Participating</div>
								</div>
							</div>
						</div>

						<div className='w-1 h-32' style={{backgroundColor: '#1F2937'}}></div>

						<div className='text-center'>
							<div className='relative w-full max-w-sm mx-auto mb-4'>
								<img
									src='/community_items.png'
									alt='110 Mentors Participating'
									className='w-full'
								/>
								<div className='absolute inset-0 flex flex-col items-center justify-center text-white font-bold'>
									<div className='text-3xl mb-1'>110</div>
									<div className='text-sm'>Mentors</div>
									<div className='text-sm'>Participating</div>
								</div>
							</div>
						</div>

						<div className='w-1 h-32' style={{backgroundColor: '#1F2937'}}></div>

						<div className='text-center'>
							<div className='relative w-full max-w-sm mx-auto mb-4'>
								<img
									src='/community_items.png'
									alt='75% Academic Improvement'
									className='w-full'
								/>
								<div className='absolute inset-0 flex flex-col items-center justify-center text-white font-bold'>
									<div className='text-3xl mb-1'>75%</div>
									<div className='text-sm'>Academic</div>
									<div className='text-sm'>Improvement</div>
								</div>
							</div>
						</div>
					</div>

					{/* Sponsor Logos - Infinite Scroll */}
					<div className='w-full overflow-hidden py-8'>
						<div className='flex animate-scroll'>
							{/* First set of logos */}
							<div className='flex items-center gap-16 min-w-max'>
								<img
									alt="CPR sponsor"
									src="https://storage.googleapis.com/whms_images/images/sponsors/cpr.webp"
									width="140"
									height="64"
									className="max-h-16 object-contain"
								/>
								<img
									alt="Dales sponsor"
									src="https://storage.googleapis.com/whms_images/images/sponsors/dales.png"
									width="140"
									height="64"
									className="max-h-16 object-contain"
								/>
								<img
									alt="GBA sponsor"
									src="https://storage.googleapis.com/whms_images/images/sponsors/gba.jpeg"
									width="140"
									height="64"
									className="max-h-16 object-contain"
								/>
								<img
									alt="Jet Express sponsor"
									src="https://storage.googleapis.com/whms_images/images/sponsors/jetexpress.webp"
									width="140"
									height="64"
									className="max-h-16 object-contain"
								/>
								<img
									alt="Lauderhill sponsor"
									src="https://storage.googleapis.com/whms_images/images/sponsors/lauderhill.png"
									width="140"
									height="64"
									className="max-h-16 object-contain"
								/>
							</div>
							{/* Duplicate set for seamless loop */}
							<div className='flex items-center gap-16 min-w-max'>
								<img
									alt="CPR sponsor"
									src="https://storage.googleapis.com/whms_images/images/sponsors/cpr.webp"
									width="140"
									height="64"
									className="max-h-16 object-contain"
								/>
								<img
									alt="Dales sponsor"
									src="https://storage.googleapis.com/whms_images/images/sponsors/dales.png"
									width="140"
									height="64"
									className="max-h-16 object-contain"
								/>
								<img
									alt="GBA sponsor"
									src="https://storage.googleapis.com/whms_images/images/sponsors/gba.jpeg"
									width="140"
									height="64"
									className="max-h-16 object-contain"
								/>
								<img
									alt="Jet Express sponsor"
									src="https://storage.googleapis.com/whms_images/images/sponsors/jetexpress.webp"
									width="140"
									height="64"
									className="max-h-16 object-contain"
								/>
								<img
									alt="Lauderhill sponsor"
									src="https://storage.googleapis.com/whms_images/images/sponsors/lauderhill.png"
									width="140"
									height="64"
									className="max-h-16 object-contain"
								/>
							</div>
						</div>
						<style jsx>{`
							@keyframes scroll {
								0% {
									transform: translateX(0);
								}
								100% {
									transform: translateX(-50%);
								}
							}
							.animate-scroll {
								animation: scroll 20s linear infinite;
							}
						`}</style>
					</div>
				</div>
			</div>

			{/* Get In Touch Section */}
			<div
				className='relative py-48'
				style={{
					backgroundImage: "url(/contact.png)",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}>
				<div className='relative z-10 max-w-4xl mx-auto px-6 text-center'>
					<h2 className='text-4xl font-bold mb-4' style={{color: '#1F2937'}}>
						Have Questions?
					</h2>
					<h3 className='text-5xl font-bold mb-12' style={{color: '#1F2937'}}>Get In Touch with Us</h3>

					<div className='flex justify-center'>
						<button
							className='px-12 py-4 rounded-full font-bold text-xl transition-colors duration-200 text-white'
							style={{backgroundColor: '#ec523d'}}
							onMouseEnter={(e) => e.target.style.backgroundColor = '#d63927'}
							onMouseLeave={(e) => e.target.style.backgroundColor = '#ec523d'}>
							Contact Us
						</button>
					</div>
				</div>
			</div>

			{/* Stay Updated Section */}
			<div style={{backgroundColor: '#1F2937'}} className='py-16'>
				<div className='max-w-7xl mx-auto px-6'>
					<div className='grid md:grid-cols-2 gap-16 items-center'>
						<div className='text-white text-left'>
							<h2 className='text-4xl font-bold mb-6 text-left' style={{color: '#ec523d'}}>
								Stay Updated
							</h2>
							<h3 className='text-3xl font-bold mb-6 text-white text-left'>
								Keeping up with our Latest Activities
							</h3>
							<p className='text-gray-300 leading-relaxed mb-8 text-left'>
								Supporting families and engaging with the community are essential aspects of Warmheart Mentorship Service. Our commitment to these activities underscores the importance of a strong support system for the children we serve. Also, hosting events to recognize the contributions of our volunteers not only highlights their invaluable role but also reinforces our collective mission. Maintaining these engagements is crucial as they foster a sense of unity, celebrate achievements, and amplify the positive impact on families. By prioritizing family support, Warmheart Mentorship ensures a nurturing and thriving environment for everyone involved.
								<br /><br />
								Warmheart Mentorship: Empowering Families, Building Futures.
							</p>
							<div className='flex items-center gap-2 cursor-pointer group text-left'>
								<span className='text-lg font-semibold' style={{color: '#ec523d'}}>Learn More</span>
								<span className='transition-transform group-hover:translate-x-1' style={{color: '#ec523d'}}>→</span>
							</div>
						</div>

						<div className='relative overflow-hidden w-[592px]'>
							<div
								className='flex transition-transform duration-300 ease-in-out'
								style={{
									transform: `translateX(-${currentSlide * 592}px)`
								}}
							>
								{Array.from({ length: Math.ceil(carouselCards.length / 2) }).map((_, slideIndex) => (
									<div key={slideIndex} className='flex gap-6 justify-start' style={{width: '592px', flexShrink: 0}}>
										{carouselCards.slice(slideIndex * 2, slideIndex * 2 + 2).map((card, cardIndex) => (
											<div
												key={slideIndex * 2 + cardIndex}
												className='p-8 rounded-3xl w-[280px] h-80 flex flex-col justify-end relative overflow-hidden'
												style={{
													backgroundImage: `url(${card.image})`,
													backgroundSize: 'cover',
													backgroundPosition: 'center',
													backgroundRepeat: 'no-repeat'
												}}
											>
												{/* Dark overlay for text readability */}
												<div className='absolute inset-0 bg-black bg-opacity-40'></div>

												<div className='relative z-10 text-center'>
													<div className='text-white font-bold text-lg mb-2'>{card.title}</div>
													<div className='text-white text-sm'>{card.description}</div>
												</div>
											</div>
										))}
									</div>
								))}
							</div>
							{/* Carousel navigation */}
							<div className='absolute right-4 top-1/2 transform -translate-y-1/2'>
								<button
									onClick={nextSlide}
									className='w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors'
									style={{backgroundColor: '#ec523d'}}
									onMouseEnter={(e) => e.target.style.backgroundColor = '#d63927'}
									onMouseLeave={(e) => e.target.style.backgroundColor = '#ec523d'}
								>
									<span className='text-white text-lg'>→</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Video Modal */}
			{isVideoModalOpen && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
					onClick={closeVideoModal}
				>
					<div
						className="relative w-full max-w-4xl mx-4"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Close button */}
						<button
							onClick={closeVideoModal}
							className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-colors z-60"
						>
							✕
						</button>

						{/* Video player */}
						<div className="relative bg-black rounded-lg overflow-hidden">
							<video
								controls
								autoPlay
								className="w-full h-auto"
								src="/videos/Warmhearts Mentorship Service.mp4"
							>
								Your browser does not support the video tag.
							</video>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
