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
				{ id: 3, src: Images[3], alt: "sneaker ball event", type: "image" },
				{ id: 4, src: Images[4], alt: "sneaker ball event", type: "image" },
				{ id: 5, src: Images[5], alt: "sneaker ball event", type: "image" },
				{ id: 6, src: Images[6], alt: "sneaker ball event", type: "image" },
				{ id: 7, src: Images[7], alt: "sneaker ball event", type: "image" },
				{ id: 8, src: Images[8], alt: "sneaker ball event", type: "image" },
				{ id: 9, src: Images[9], alt: "sneaker ball event", type: "image" },
				{ id: 10, src: Images[10], alt: "sneaker ball event", type: "image" },
			],
		},
	],
}) => {
	const [selectedEvent, setSelectedEvent] = useState(events[0]);
	const [sidebarOpen, setSidebarOpen] = useState(false);
	// const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrevNext = (direction) => {
		const currentEventIndex = events.findIndex(
			(event) => event.id === selectedEvent.id
		);
		if (direction === "next" && currentEventIndex < events.length - 1) {
			setSelectedEvent(events[currentEventIndex + 1]);
		} else if (direction === "prev" && currentEventIndex > 0) {
			setSelectedEvent(events[currentEventIndex - 1]);
		}
	};

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
					className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out'
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
					className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out'
					loading='lazy'
				/>
			);
		}
	};

	return (
		<>
			<Hero />
			<div className='flex min-h-screen bg-white'>
				{/* Sidebar */}
				<div
					className={`fixed inset-y-0 left-0 z-50 w-64 bg-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
						sidebarOpen ? "translate-x-0" : "-translate-x-full"
					}`}>
					<div
						className='flex flex-col h-full px-8 py-12'
						style={{ "box-shadow": "1px 1px 6px 0px rgba(0,0,0,0.13)" }}>
						{/* Navigation */}
						<nav className='flex-1 space-y-6'>
							{events.map((event) => (
								<button
									key={event.id}
									onClick={() => {
										setSelectedEvent(event);
										setSidebarOpen(false);
									}}
									className={`block text-left text-base transition-colors duration-200 ${
										selectedEvent.id === event.id
											? "text-gray-900 font-medium"
											: "text-gray-500 hover:text-gray-900"
									}`}
									style={{ color: "rgb(236, 82, 61)" }}>
									{event.name}
								</button>
							))}
						</nav>

						{/* Bottom controls */}
						<div className='space-y-4 pt-8 border-t border-gray-100'>
							<div className='flex items-center space-x-2 text-sm text-gray-500'>
								<button
									onClick={() => handlePrevNext("prev")}
									className='hover:text-gray-900 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
									disabled={
										events.findIndex((e) => e.id === selectedEvent.id) === 0
									}>
									PREV
								</button>
								<span>/</span>
								<button
									onClick={() => handlePrevNext("next")}
									className='hover:text-gray-900 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
									disabled={
										events.findIndex((e) => e.id === selectedEvent.id) ===
										events.length - 1
									}>
									NEXT
								</button>
							</div>
							{/* <button className='text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200'>
								SHOW THUMBNAILS
							</button> */}
						</div>

						{/* Mobile close button */}
						<button
							onClick={() => setSidebarOpen(false)}
							className='lg:hidden absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-900'>
							<X className='w-6 h-6' />
						</button>
					</div>
				</div>

				{/* Mobile sidebar overlay */}
				{sidebarOpen && (
					<div
						className='fixed inset-0 bg-black bg-opacity-25 z-40 lg:hidden'
						onClick={() => setSidebarOpen(false)}
					/>
				)}

				{/* Main content */}
				<div className='flex-1 lg:ml-0 mt-2.5'>
					{/* Mobile toggle button - positioned below hero */}
					<div className='lg:hidden px-6 pb-8'>
						<button
							onClick={() => setSidebarOpen(true)}
							className='inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200'>
							<Menu className='w-5 h-5 mr-2' />
							Browse Events
						</button>
					</div>

					{/* Content header */}
					<div className='px-6 lg:px-16 py-12 lg:py-16'>
						<div className='max-w-6xl mx-auto flex flex-col items-center'>
							<h2 className='font-bold text-3xl lg:text-6xl font-light text-gray-900 mb-4 leading-tight'>
								{selectedEvent.name}
							</h2>
							<p className='text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed text-center'>
								{selectedEvent.subtitle}
							</p>
						</div>
					</div>

					{/* Image gallery */}
					<div className='px-6 lg:px-16 pb-12 lg:pb-16'>
						<div className='max-w-6xl mx-auto'>
							<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 lg:gap-3'>
								{selectedEvent.images.map((media, index) => (
									<div
										key={media.id}
										className={`relative overflow-hidden group cursor-pointer ${
											// Create varied heights for masonry effect
											index % 7 === 0
												? "row-span-2"
												: index % 5 === 0
												? "row-span-3"
												: index % 3 === 0
												? "row-span-2"
												: ""
										}`}
										style={{
											aspectRatio:
												index % 7 === 0
													? "1/1.5"
													: index % 5 === 0
													? "1/2"
													: index % 3 === 0
													? "1/1.3"
													: "1/1",
										}}>
										{renderMedia(media, index)}
										<div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300' />

										{/* Video indicator overlay */}
										{isVideo(media.src, media.type) && (
											<div className='absolute top-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded'>
												VIDEO
											</div>
										)}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default EventsImageGallery;
