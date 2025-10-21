import React from 'react';

const Hero = ({ title, subtitle, description, className = '' }) => {
	return (
		<div className={`bg-slate-800 relative min-h-screen flex items-center justify-center ${className}`}>
			{/* Background blob shape */}
			<div className="absolute top-20 right-10 md:top-32 md:right-20">
				<div className="w-96 h-96 md:w-[500px] md:h-[400px] bg-red-600 rounded-full opacity-80 transform rotate-12 skew-x-12 skew-y-6"></div>
			</div>

			{/* Content */}
			<div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
				{subtitle && (
					<p className="text-orange-400 text-lg mb-4 font-medium">
						{subtitle}
					</p>
				)}
				<h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
					{title}
				</h1>
				{description && (
					<p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
						{description}
					</p>
				)}
			</div>
		</div>
	);
};

export default Hero;