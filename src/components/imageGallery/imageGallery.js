import React from "react";
import Images from "./images";

export default function ImageGallery() {
	return (
		<div className='w-screen'>
			<div className='space-y-2 lg:space-y-0 lg:grid lg:grid-cols-3 w-screen'>
				<div className='w-full rounded'>
					<img src={Images[51]} alt='mentor breakfast' />
				</div>
				<div className='w-full rounded'>
					<img src={Images[47]} alt='mentor breakfast' />
				</div>
				<div className='w-full rounded'>
					<img src={Images[49]} alt='mentor breakfast' />
				</div>
				<div className='w-full rounded'>
					<img src={Images[30]} alt='mentor breakfast' />
				</div>
				<div className='w-full rounded'>
					<img src={Images[33]} alt='mentor breakfast' />
				</div>
				<div className='w-full rounded'>
					<img src={Images[26]} alt='mentor breakfast' />
				</div>
			</div>
		</div>
	);
}
