import React from "react";
import { NavLink } from "react-router-dom";
import { Transition } from "@headlessui/react";

function MobileNav({ isOpen }) {
	return (
		<Transition
			show={isOpen}
			enter='transition ease-out duration-100 transform'
			enterFrom='opacity-0 scale-95'
			enterTo='opacity-100 scale-100'
			leave='transition ease-in duration-75 transform'
			leaveFrom='opacity-100 scale-100'
			leaveTo='opacity-0 scale-95'>
			{(ref) => (
				<div className='md:hidden bg-gray-800 z-50' id='mobile-menu'>
					<div
						ref={ref}
						className='px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center'>
						<NavLink
							to='/'
							className='text-white hover:text-orange-400 block px-3 py-2 rounded-md text-base font-medium'>
							Home
						</NavLink>
						<NavLink
							to='/about'
							className='text-white hover:text-orange-400 block px-3 py-2 rounded-md text-base font-medium'>
							About
						</NavLink>
						<NavLink
							to='/mission'
							className='text-white hover:text-orange-400 block px-3 py-2 rounded-md text-base font-medium'>
							Mission
						</NavLink>
						<NavLink
							to='/events'
							className='text-white hover:text-orange-400 block px-3 py-2 rounded-md text-base font-medium'>
							Events
						</NavLink>
						<NavLink
							to='/contact'
							className='text-white hover:text-orange-400 block px-3 py-2 rounded-md text-base font-medium'>
							Contact
						</NavLink>

						<a
							href='https://www.paypal.com/donate/?hosted_button_id=LVRU65QJUS29E'
							target='_blank'
							rel='noopener noreferrer'
							className='text-white px-6 py-2 rounded-full font-medium mt-4'
							style={{backgroundColor: '#ec523d'}}>
							Donate
						</a>
					</div>
				</div>
			)}
		</Transition>
	);
}

export default MobileNav;
