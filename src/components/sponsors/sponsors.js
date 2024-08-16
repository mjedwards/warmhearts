import { Link } from "@material-ui/core";
import React from "react";

export default function Sponsors() {
	const url = "https://storage.cloud.google.com/whms_images/images/sponsors/";
	const sponsors = [
		"cpr.webp",
		"dales.png",
		"gba.jpeg",
		"jetexpress.webp",
		"lauderhill.png",
	];
	return (
		<>
			<div className='bg-gray-900 py-24 sm:py-32'>
				<div className='mx-auto max-w-7xl px-6 lg:px-8'>
					<div className='grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2'>
						<div className='mx-auto w-full max-w-xl lg:mx-0 flex flex-col items-center'>
							<h2 className='text-3xl font-bold tracking-tight text-white'>
								Thank you to our sponsors!
							</h2>
							<p className='mt-6 text-lg leading-8 text-white'>
								Feel free to connect with us.
							</p>
							<div className='mt-8 flex items-center gap-x-6'>
								<Link
									href='/Take-Action'
									className='text-sm font-semibold text-white'
									style={{ color: "rgb(236, 82, 61)", cursor: "pointer" }}>
									Contact us{" "}
									<span
										aria-hidden='true'
										style={{ color: "rgb(236, 82, 61)" }}>
										&rarr;
									</span>
								</Link>
							</div>
						</div>
						<div className='mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8'>
							{sponsors.map((sponsor) => (
								<img
									alt='sponsor'
									src={`${url}${sponsor}`}
									width={105}
									height={48}
									className='max-h-12 w-full object-contain object-left'
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
