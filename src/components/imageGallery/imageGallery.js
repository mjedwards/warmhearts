import React from "react";
import Images from "./images";

export default function ImageGallery() {
	return (
		<div className='w-screen'>
			<div className='space-y-2 lg:space-y-0 lg:grid lg:grid-cols-3 w-screen'>
				<div className='w-full rounded'>
					<img src={Images[45]} alt='mentor breakfast' />
				</div>
				<div className='w-full rounded'>
					<img src={Images[47]} alt='mentor breakfast' />
				</div>
				<div className='w-full rounded'>
					<img src={Images[48]} alt='mentor breakfast' />
				</div>
				<div className='w-full rounded'>
					<img src={Images[2]} alt='mentor breakfast' />
				</div>
				<div className='w-full rounded'>
					<img src={Images[53]} alt='mentor breakfast' />
				</div>
				<div className='w-full rounded'>
					<img src={Images[13]} alt='mentor breakfast' />
				</div>
			</div>
		</div>
	);
}
