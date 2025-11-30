import React, { useState, useEffect } from "react";
import Hero from "./atoms/GalleryHero";
import { fetchAllEventImages } from "../../lib/sanityQueries";
import { urlFor } from "../../lib/sanity";

const EventsImageGallery = () => {
	const [events, setEvents] = useState([]);
	const [selectedEvent, setSelectedEvent] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function loadEventImages() {
			try {
				const eventImages = await fetchAllEventImages();

				// Transform Sanity data to match component structure
				const formattedEvents = eventImages.map((eventImg, idx) => ({
					id: idx + 1,
					_id: eventImg._id,
					name: eventImg.event?.eventTitle || "Unnamed Event",
					subtitle: eventImg.subtitle || "",
					images:
						eventImg.images?.map((img, imgIdx) => ({
							id: imgIdx,
							src: urlFor(img.src).width(800).height(800).url(),
							alt: img.alt || eventImg.event?.eventTitle || "Event image",
							type: img.type || "image",
						})) || [],
				}));

				setEvents(formattedEvents);
				if (formattedEvents.length > 0) {
					setSelectedEvent(formattedEvents[0]);
				}
			} catch (error) {
				console.error("Error fetching event images:", error);
			} finally {
				setLoading(false);
			}
		}

		loadEventImages();
	}, []);

	// Function to detect if media is a video based on file extension
	const isVideo = (src, type) => {
		if (type) return type === "video";
		const videoExtensions = [".mp4", ".webm", ".ogg", ".mov", ".avi"];
		return videoExtensions.some((ext) => src.toLowerCase().includes(ext));
	};

	// Function to render media (image or video)
	const renderMedia = (media, index) => {
		const isVideoFile = isVideo(media.src, media.type);

		if (isVideoFile) {
			return (
				<video
					src={media.src}
					className='w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-out'
					controls
					muted
					playsInline
					preload='metadata'
					onLoadStart={(e) => {
						// Add loading state if needed
					}}>
					Your browser does not support the video tag.
				</video>
			);
		} else {
			return (
				<img
					src={media.src}
					alt={media.alt}
					className='w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-out'
					loading='lazy'
				/>
			);
		}
	};

	if (loading) {
		return (
			<>
				<Hero />
				<div className='bg-gray-50 min-h-screen'>
					<div className='bg-white py-8 relative'>
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
							<p className='text-gray-500 text-lg text-center'>
								Loading gallery...
							</p>
						</div>
					</div>
				</div>
			</>
		);
	}

	if (!selectedEvent || events.length === 0) {
		return (
			<>
				<Hero />
				<div className='bg-gray-50 min-h-screen'>
					<div className='bg-white py-8 relative'>
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
							<div className='text-center'>
								<h2
									className='text-3xl font-bold mb-4'
									style={{ color: "#ec523d" }}>
									No Events Found
								</h2>
								<p className='text-gray-500 text-lg'>
									Upload event images in the CMS to see them here!
								</p>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}

	return (
		<>
			<Hero />
			<div className='bg-gray-50 min-h-screen'>
				{/* Header with Event Navigation */}
				<div className='bg-white py-8 relative'>
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
						<div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
							{/* Title */}
							<h1
								className='text-4xl lg:text-4xl font-bold mb-6 lg:mb-0'
								style={{ color: "#ec523d" }}>
								{selectedEvent.name}
							</h1>

							{/* Event Navigation */}
							<div className='flex flex-wrap gap-4'>
								{events.map((event) => (
									<button
										key={event.id}
										onClick={() => setSelectedEvent(event)}
										className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
											selectedEvent.id === event.id
												? "text-white"
												: "text-gray-600 hover:text-gray-900"
										}`}
										style={{
											backgroundColor:
												selectedEvent.id === event.id
													? "#ec523d"
													: "transparent",
										}}>
										{event.name}
									</button>
								))}
							</div>
						</div>

						{/* Subtitle */}
						{selectedEvent.subtitle && (
							<p className='text-gray-600 text-lg mt-6 text-center lg:text-left'>
								{selectedEvent.subtitle}
							</p>
						)}
					</div>
				</div>

				{/* Gallery Content */}
				<div className='py-12'>
					<div className='max-w-7xl mx-auto px-6'>
						{selectedEvent.images && selectedEvent.images.length > 0 ? (
							<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
								{selectedEvent.images.map((media, index) => (
									<div
										key={media.id}
										className='bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300'
										style={{ height: "fit-content" }}>
										<div className='relative overflow-hidden'>
											{renderMedia(media, index)}

											{/* Video indicator overlay */}
											{isVideo(media.src, media.type) && (
												<div className='absolute top-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded'>
													VIDEO
												</div>
											)}
										</div>
									</div>
								))}
							</div>
						) : (
							<div className='text-center py-12'>
								<p className='text-gray-500 text-lg'>
									No images found for this event.
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default EventsImageGallery;
