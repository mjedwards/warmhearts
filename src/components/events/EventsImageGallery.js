import React, { useState } from "react";
import { X, Menu } from "lucide-react";
import Images from "./images/images";
import Hero from "./atoms/GalleryHero";

const EventsImageGallery = ({
	events = [
		{
			id: 1,
			name: "Sneaker Ball 2025",
			subtitle:
				"Get your sneakers ready for a night filled with music, dancing, and making connections.",
			images: [
				{ id: 0, src: Images[0], alt: "sneaker ball event", type: "video" },
				{ id: 1, src: Images[1], alt: "sneaker ball event", type: "image" },
				{ id: 2, src: Images[2], alt: "sneaker ball event", type: "image" },
				{ id: 4, src: Images[4], alt: "sneaker ball event", type: "image" },
				{ id: 5, src: Images[5], alt: "sneaker ball event", type: "image" },
				{ id: 6, src: Images[6], alt: "sneaker ball event", type: "image" },
				{ id: 7, src: Images[7], alt: "sneaker ball event", type: "image" },
				{ id: 8, src: Images[8], alt: "sneaker ball event", type: "image" },
				{ id: 9, src: Images[9], alt: "sneaker ball event", type: "image" },
				{ id: 10, src: Images[10], alt: "sneaker ball event", type: "image" },
				{ id: 11, src: Images[11], alt: "sneaker ball event", type: "image" },
				{ id: 12, src: Images[12], alt: "sneaker ball event", type: "image" },
				{ id: 13, src: Images[13], alt: "sneaker ball event", type: "image" },
				{ id: 14, src: Images[14], alt: "sneaker ball event", type: "image" },
				{ id: 15, src: Images[15], alt: "sneaker ball event", type: "image" },
				{ id: 16, src: Images[16], alt: "sneaker ball event", type: "image" },
				{ id: 3, src: Images[3], alt: "sneaker ball event", type: "image" },
			],
		},
		{
			id: 2,
			name: "Mentorship Dinner 2025",
			subtitle: "Nourishing the Future—One Conversation at a Time.",
			images: [
				{
					id: 8,
					src: Images[17],
					alt: "Mentorship Dinner event",
					type: "image",
				},
				{
					id: 9,
					src: Images[18],
					alt: "Mentorship Dinner event",
					type: "image",
				},
				{
					id: 10,
					src: Images[19],
					alt: "Mentorship Dinner event",
					type: "image",
				},
				{
					id: 11,
					src: Images[20],
					alt: "Mentorship Dinner event",
					type: "image",
				},
			],
		},
		{
			id: 3,
			name: "Thanksgiving Drive 2024",
			subtitle: "Stuffing More Than Turkeys—Hearts Too.",
			images: [
				{
					id: 0,
					src: Images[21],
					alt: "Thanksgiving Drive event",
					type: "image",
				},
				{
					id: 5,
					src: Images[26],
					alt: "Thanksgiving Drive event",
					type: "image",
				},
				{
					id: 6,
					src: Images[27],
					alt: "Thanksgiving Drive event",
					type: "image",
				},
				{
					id: 1,
					src: Images[22],
					alt: "Thanksgiving Drive event",
					type: "image",
				},
				{
					id: 2,
					src: Images[23],
					alt: "Thanksgiving Drive event",
					type: "image",
				},
				{
					id: 3,
					src: Images[24],
					alt: "Thanksgiving Drive event",
					type: "image",
				},
				{
					id: 4,
					src: Images[25],
					alt: "Thanksgiving Drive event",
					type: "image",
				},
				{
					id: 7,
					src: Images[28],
					alt: "Thanksgiving Drive event",
					type: "image",
				},
			],
		},
	],
}) => {
	const [selectedEvent, setSelectedEvent] = useState(events[0]);

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
								className='text-4xl lg:text-5xl font-bold mb-6 lg:mb-0'
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
					</div>
				</div>

				{/* Gallery Content */}
				<div className='py-12'>
					<div className='max-w-7xl mx-auto px-6'>
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
					</div>
				</div>
			</div>
		</>
	);
};

export default EventsImageGallery;
