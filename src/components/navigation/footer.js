import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
	return (
		<div>
			{/* Contact Bar */}
			<div style={{backgroundColor: '#34455D'}} className='py-4'>
				<div className='max-w-7xl mx-auto px-6 flex justify-between items-center'>
					<div className='flex items-center gap-8'>
						<div className='flex items-center gap-1'>
							<img src='/mail_icon.png' alt='Mail' className='w-16 h-8' />
							<div className='text-white'>
								<span className='text-gray-300'>Just Mail Us :</span>
								<span className='ml-2'>contact@warmheartmentorshipservice.com</span>
							</div>
						</div>
					</div>

				</div>
			</div>

			{/* Main Footer */}
			<div style={{backgroundColor: '#1F2937'}} className='py-16'>
				<div className='max-w-7xl mx-auto px-6'>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{/* About Us */}
						<div className='text-white'>
							<h3 className='text-xl font-bold mb-6'>About Us</h3>
							<p className='text-gray-300 leading-relaxed mb-8'>
								Warm Heart Mentorship Service is dedicated to empowering youth through quality mentoring relationships. We bridge the gap between potential and achievement by connecting young people with caring mentors who provide guidance, support, and inspiration for personal and academic growth.
							</p>

							{/* Logo */}
							<div className='flex justify-center'>
								<img src='/noBG.png' alt='Warmheart Mentorship Logo' className='h-32 w-auto' />
							</div>
						</div>

						{/* Company */}
						<div className='text-white'>
							<h3 className='text-xl font-bold mb-6'>Company</h3>
							<ul className='space-y-3 text-gray-300'>
								<li>
									<NavLink to='/' className='hover:text-white transition-colors'>
										Home
									</NavLink>
								</li>
								<li>
									<NavLink to='/about' className='hover:text-white transition-colors'>
										About
									</NavLink>
								</li>
								<li>
									<NavLink to='/mission' className='hover:text-white transition-colors'>
										Mission
									</NavLink>
								</li>
								<li>
									<NavLink to='/events' className='hover:text-white transition-colors'>
										Events
									</NavLink>
								</li>
								<li>
									<NavLink to='/contact' className='hover:text-white transition-colors'>
										Contact
									</NavLink>
								</li>
								<li>
									<a
										href='https://www.paypal.com/donate/?hosted_button_id=LVRU65QJUS29E'
										target='_blank'
										rel='noopener noreferrer'
										className='inline-block px-4 py-2 rounded text-white font-semibold hover:opacity-90 transition-opacity'
										style={{backgroundColor: '#ec523d'}}
									>
										Donate
									</a>
								</li>
							</ul>
						</div>

						{/* Gallery */}
						<div className='text-white'>
							<h3 className='text-xl font-bold mb-6'>Gallery</h3>
							<NavLink to='/gallery' className='block cursor-pointer group relative'>
								<div className='grid grid-cols-3 gap-2 transition-opacity group-hover:opacity-60'>
									{[2, 3, 4, 5, 6, 7].map((num) => (
										<img
											key={num}
											src={`/carousel/${num}.jpg`}
											alt='Gallery'
											className='w-full h-16 object-cover rounded'
										/>
									))}
								</div>
								{/* Hover overlay with text */}
								<div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50 rounded'>
									<span className='text-white font-semibold text-lg'>View Gallery</span>
								</div>
							</NavLink>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
}
