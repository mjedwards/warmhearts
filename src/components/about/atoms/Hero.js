import React from "react";

export default function Hero({title, description, subtitle, bg}) {
	return (
		<>
			<section
				className='relative h-screen flex flex-row items-center justify-center text-center text-white py-0 px-3'
				style={{
					backgroundImage: `url(${bg})`,
					backgroundSize: "cover",
				}}>
				<div className='mt-50 relative z-10 flex flex-col justify-between text-center w-1/2 gap-8'>
					<div className='m-auto w-3/4'>
						<h1 className='text-white font-bold text-5xl mb-5'>{title}</h1>
						<p className='text-base '>
							{description}
						</p>
					</div>
					<div className=''>
						<p className='text-sm'>{subtitle}</p>
					</div>
				</div>
			</section>
		</>
	);
}
