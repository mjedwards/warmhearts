import React from "react";
import { Link } from "react-router-dom";
import blobImage from "../ui/assets/hero/blob.png";

export default function ArticlesEmptyPage() {
	return (
		<div className='min-h-screen'>
			<div
				className='relative min-h-screen flex items-center justify-center overflow-hidden'
				style={{ backgroundColor: "#1f2937" }}>
				<div className='absolute inset-0 flex items-center justify-center'>
					<img
						src={blobImage}
						alt='Background blob'
						className='w-[600px] h-[500px] md:w-[800px] md:h-[600px] object-contain opacity-90'
					/>
				</div>

				<div className='relative z-5 max-w-3xl mx-auto px-6 text-center text-white'>
					<h1 className='text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight'>
						No Articles Yet
					</h1>
					<p className='text-base md:text-lg text-gray-100 leading-relaxed font-medium mb-8'>
						We’re preparing new stories from the community and our mentorship
						program. Please check back soon.
					</p>
					<Link
						to='/'
						className='inline-flex items-center px-6 py-3 rounded-full text-white font-semibold'
						style={{ backgroundColor: "#ec523d" }}>
						Back to Home
					</Link>
				</div>
			</div>
		</div>
	);
}
