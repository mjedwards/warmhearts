import React from "react";
import Hero from "./atoms/Hero";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
// import { Search } from "lucide-react";

const EventGallery = () => {
	const events = [
		{
			id: 1,
			title: "Warm Heart Mentorship Service - Sneaker Ball",
			image:
				"https://storage.googleapis.com/whms_images/images/sneakerBall.png",
			date: "Friday, March 21 · 8 - 11:30pm EDT",
			day: "21",
			month: "March",
			location: "5300 Woodlands Boulevard Tamarac, FL 33319",
			description:
				"Come join us for a fantastic evening at our Sneaker Ball event! It's all about mentoring and giving back, but with a fun twist. Get your sneakers ready for a night filled with music, dancing, and making connections. Dress up, but don't forget to wear your favorite pair of sneakers! This is our unique way of blending formal attire with comfy kicks. Let's have a blast while supporting a great cause. See you there!",
			url: "https://www.eventbrite.com/e/warm-heart-mentorship-service-sneaker-ball-tickets-1216944095549?utm_experiment=test_share_listing&aff=ebdsshios",
		},
	];

	return (
		<>
			<Hero />
			<div className='max-w-screen-xl mx-auto p-6 bg-white'>
				{/* Header */}
				<div className='mb-8'>
					<h1 className='text-2xl font-bold text-purple-900 mb-4'>
						All Events
					</h1>
				</div>

				<div className='flex gap-8'>
					{/* Main Content */}
					<div className='flex-1'>
						<section className='bg-white text-gray-800 py-10'>
							<div className='container mx-auto px-6'>
								{/* Event 1 */}
								{events.map((event) => (
									<div className='flex flex-col md:flex-row mb-10 pb-10 border-b'>
										<div className='md:w-1/6 flex-shrink-0 bg-gray-100 p-6 text-center mb-4 md:mb-0'>
											<div className='text-4xl font-bold text-teal-800'>
												{event.day}
											</div>
											<div className='text-gray-500 uppercase'>
												{event.month}
											</div>
										</div>
										<div className='md:w-1/4 flex-shrink-0 mb-4 md:mb-0 md:px-4'>
											<img
												src={event.image}
												alt='Event 1'
												className='w-full object-cover'
											/>
										</div>
										<div className='md:w-7/12 md:px-4'>
											<h3 className='text-xl font-semibold text-teal-800 mb-2'>
												{event.title}
											</h3>
											<p className='text-orange-400 uppercase text-sm mb-2'>
												{event.date}
											</p>
											<p className='text-gray-600 mb-6'>{event.description}</p>
											<a href={event.url}>
												<button className='border px-4 py-1 rounded-full text-sm transition-colors'>
													Buy Tickets
												</button>
											</a>
										</div>
									</div>
								))}
							</div>
						</section>
					</div>
				</div>
			</div>
			<div className='bg-teal-900 py-12 text-center'>
				<div className='container mx-auto px-6'>
					<h2 className='text-2xl font-bold mb-4'>
						Join our mission. Volunteer, Donate, Advocate. Get Started Today.
					</h2>
					<div className='flex justify-center items-center flex-wrap gap-4 mb-8'>
						<a href='mailto:contact@warmheartmentorshipservice.com'>
							Email: contact@warmheartmentorshipservice.com
						</a>
					</div>
					<div className='flex justify-center gap-4 flex-wrap'>
						<NavLink to='/Take-action'>
							<button className='bg-gray-800 text-white font-medium py-2 px-6 rounded-full'>
								CONTACT US NOW
							</button>
						</NavLink>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://www.paypal.com/donate/?hosted_button_id=LVRU65QJUS29E'>
							<button className='border border-gray-800 font-medium py-2 px-6 rounded-full'>
								DONATE
							</button>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default EventGallery;
