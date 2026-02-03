import React, { useState, useEffect } from "react";
import blobImage from "../ui/assets/hero/blob.png";
import cancelEventImage from "../ui/assets/events/cancel-event.png";
import { fetchEvents } from "../lib/sanityQueries";
import { urlFor } from "../lib/sanity";

export default function EventsPage() {
	const [upcomingEvents, setUpcomingEvents] = useState([]);
	const [pastEvents, setPastEvents] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function loadEvents() {
			try {
				setLoading(true);
				const [upcoming, past] = await Promise.all([
					fetchEvents("upcoming"),
					fetchEvents("past"),
				]);
				setUpcomingEvents(upcoming);
				setPastEvents(past);
			} catch (error) {
				console.error("Error fetching events:", error);
			} finally {
				setLoading(false);
			}
		}

		loadEvents();
	}, []);

	const formatDate = (dateString) => {
		// Parse date as local time to avoid timezone issues
		const [year, month, day] = dateString.split('-').map(Number);
		const date = new Date(year, month - 1, day);
		const dayNum = date.getDate();
		const monthStr = date
			.toLocaleString("en-US", { month: "short" })
			.toUpperCase();
		return { day: dayNum, month: monthStr };
	};

	const formatEventDateTime = (dateString, timeRange) => {
		// Parse date as local time to avoid timezone issues
		const [year, month, day] = dateString.split('-').map(Number);
		const date = new Date(year, month - 1, day);
		const dayName = date
			.toLocaleString("en-US", { weekday: "long" })
			.toUpperCase();
		const monthName = date
			.toLocaleString("en-US", { month: "long" })
			.toUpperCase();
		const dayNum = date.getDate();
		return `${dayName}, ${monthName} ${dayNum}${
			timeRange ? " • " + timeRange : ""
		}`;
	};

	console.log(upcomingEvents);
	console.log(pastEvents);
	const renderEventCard = (event) => {
		const { day, month } = formatDate(event.eventDate);
		const eventDateTime = formatEventDateTime(
			event.eventDate,
			event.eventTimeRange
		);
		const learnMoreHref = event.eventUrl || `/events/${event.slug.current}`;
		const isExternalLink = Boolean(
			event.eventUrl && /^https?:\/\//i.test(event.eventUrl)
		);

		return (
			<div
				key={event._id}
				className='bg-white rounded-lg p-8 flex flex-col md:flex-row items-center gap-8'>
				{/* Date */}
				<div className='text-center'>
					<div className='text-6xl font-bold text-gray-800'>{day}</div>
					<div className='text-gray-600 uppercase tracking-wide'>{month}</div>
				</div>

				{/* Event Image */}
				{event.eventImage && (
					<div className='w-48 h-32 rounded-lg flex-shrink-0 relative overflow-hidden'>
						<img
							src={urlFor(event.eventImage).width(400).height(300).url()}
							alt={event.eventImage.alt || event.eventTitle}
							className='w-full h-full object-cover'
						/>
					</div>
				)}

				{/* Event Details */}
				<div className='flex-1'>
					<h3 className='text-2xl font-bold text-gray-800 mb-2'>
						{event.eventTitle}
					</h3>
					<p className='font-medium mb-4' style={{ color: "#ec523d" }}>
						{eventDateTime}
					</p>
					{event.eventDescription && event.eventDescription.length > 0 && (
						<p className='text-gray-700 leading-relaxed mb-4'>
							{event.eventDescription[0]?.children?.[0]?.text || ""}
						</p>
					)}
					<div className='text-right'>
						{event.eventClosed ? (
							<span className='text-gray-500'>Closed</span>
						) : (
							<a
								href={learnMoreHref}
								target={isExternalLink ? "_blank" : undefined}
								rel={isExternalLink ? "noopener noreferrer" : undefined}
								className='text-white font-semibold py-2 px-6 rounded-full transition-colors duration-200'
								style={{ backgroundColor: "#ec523d" }}>
								Learn More
							</a>
						)}
					</div>
				</div>
			</div>
		);
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
						OUR EVENTS
					</h1>
				</div>
			</div>

			{/* Upcoming Events Section */}
			<div className='bg-white py-16 relative'>
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
					<h2
						className='text-4xl font-bold text-center mb-12'
						style={{ color: "#ec523d" }}>
						Upcoming Events
					</h2>

					{loading ? (
						<div className='max-w-4xl mx-auto text-center'>
							<p className='text-gray-500 text-lg'>Loading events...</p>
						</div>
					) : upcomingEvents.length > 0 ? (
						<div className='space-y-8 max-w-4xl mx-auto'>
							{upcomingEvents.map(renderEventCard)}
						</div>
					) : (
						<div className='max-w-4xl mx-auto text-center'>
							<div className='bg-gray-100 rounded-lg p-12'>
								<img
									src={cancelEventImage}
									alt='No events'
									className='w-16 h-16 mx-auto mb-4 opacity-60'
								/>
								<h3 className='text-2xl font-bold text-gray-600 mb-4'>
									No Upcoming Events
								</h3>
								<p className='text-gray-500 text-lg'>
									We don't have any upcoming events scheduled at the moment.
									Please check back soon for future events!
								</p>
							</div>
						</div>
					)}
				</div>
			</div>

			{/* Past Events Section */}
			<div className='bg-gray-100 py-16'>
				<div className='max-w-6xl mx-auto px-6'>
					<h2
						className='text-4xl font-bold text-center mb-12'
						style={{ color: "#ec523d" }}>
						Past Events
					</h2>

					{loading ? (
						<div className='max-w-4xl mx-auto text-center'>
							<p className='text-gray-500 text-lg'>Loading events...</p>
						</div>
					) : pastEvents.length > 0 ? (
						<div className='space-y-8 max-w-4xl mx-auto'>
							{pastEvents.map(renderEventCard)}
						</div>
					) : (
						<div className='max-w-4xl mx-auto text-center'>
							<p className='text-gray-500 text-lg'>
								No past events to display.
							</p>
						</div>
					)}
				</div>
			</div>

			{/* Call to Action Section */}
			<div className='bg-white py-16'>
				<div className='max-w-4xl mx-auto px-6 text-center'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-8'>
						Join our mission. Volunteer, Donate, Advocate. Get Started Today.
					</h2>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<a
							href='/contact'
							className='bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200'>
							CONTACT US NOW
						</a>
						<a
							href='https://www.paypal.com/donate/?hosted_button_id=LVRU65QJUS29E'
							target='_blank'
							rel='noopener noreferrer'
							className='border-2 font-semibold py-3 px-8 rounded-full transition-colors duration-200'
							style={{
								borderColor: "#EC523D",
								color: "#EC523D",
							}}
							onMouseEnter={(e) => {
								e.target.style.backgroundColor = "#EC523D";
								e.target.style.color = "white";
							}}
							onMouseLeave={(e) => {
								e.target.style.backgroundColor = "transparent";
								e.target.style.color = "#EC523D";
							}}>
							DONATE
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
