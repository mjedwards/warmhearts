import React from "react";
import blobImage from "../../../ui/assets/hero/blob.png";

export default function Hero() {
	return (
		<div className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#1f2937' }}>
			{/* Background blob shape - centered and large */}
			<div className="absolute inset-0 flex items-center justify-center">
				<img src={blobImage} alt="Background blob" className="w-[600px] h-[500px] md:w-[800px] md:h-[600px] object-contain opacity-90" />
			</div>

			{/* Hero Content */}
			<div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
				<h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight">
					GALLERY
				</h1>
				<div className="max-w-2xl mx-auto">
					<p className="text-base md:text-lg text-gray-100 leading-relaxed font-medium">
						Discover moments of connection, growth, and joy through our community events and mentoring activities. These images capture the heart of our mission in action.
					</p>
					<p className="text-sm md:text-base text-orange-400 mt-4 font-medium">
						Moments That Matter. Stories That Inspire.
					</p>
				</div>
			</div>
		</div>
	);
}
