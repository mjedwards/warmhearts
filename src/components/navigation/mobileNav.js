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
				<div className='md:hidden' id='mobile-menu'>
					<div ref={ref} className='px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center'>
						<NavLink
							to='/Who-We-Are'
							className='hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium'>
							Who We Are
						</NavLink>

						<NavLink
							to='/What-We-Do'
							className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
							What We Do
						</NavLink>

						<NavLink
							to='/Take-Action'
							className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
							Take Action
						</NavLink>

						<NavLink
							to='/Resources'
							className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
							Resources
						</NavLink>

						<NavLink
							to=''
							className='rounded-3xl p-1 text-center cursor-pointer border-2 mt-1 w-1/4'
							style={{ borderColor: "#EC523D", color: "#EC523D" }}>
							Donate
						</NavLink>
					</div>
				</div>
			)}
		</Transition>
	);
}

export default MobileNav;
