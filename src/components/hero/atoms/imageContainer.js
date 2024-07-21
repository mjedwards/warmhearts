import React from "react";

export default function ImageContainer({ image, alt_text }) {
	return (
		<div className='md:w-5/6 lg:w-2/6 md:h-1/2 m-auto'>
			<img src={image} alt={alt_text} className='md:w-screen h-full' />
		</div>
	);
}
