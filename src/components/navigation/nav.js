import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MobileNav from "./mobileNav";
import noBG from "../../ui/assets/logos/noBG.png";

function Nav() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className='absolute inset-0 z-10' style={{ height: "fit-content" }}>
			<nav className='md:bg-transparent bg-gray-800'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex items-center justify-between h-16'>
						<div className='flex items-center w-full'>
							<div className='flex-shrink-0'>
								<NavLink to='/'>
									<img className='h-16 w-16' src={noBG} alt='Workflow' />
								</NavLink>
							</div>
							<div className='hidden md:flex w-full justify-center'>
								<div className='ml-10 flex items-baseline space-x-4'>
									<NavLink
										to='/'
										className=' hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium'>
										Home
									</NavLink>
									<NavLink
										to='/Who-We-Are'
										className=' hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium'>
										Who We Are
									</NavLink>

									<NavLink
										to='/What-We-Do'
										className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
										What We Do
									</NavLink>

									<NavLink
										to='/Take-Action'
										className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
										Take Action
									</NavLink>
								</div>
							</div>
						</div>
						<NavLink
							to=''
							className='hidden md:block rounded-3xl p-1 text-center w-1/4 cursor-pointer border-2 w-1/6'
							style={{ borderColor: "#EC523D", color: "#EC523D" }}>
							Donate
						</NavLink>
						<div className='-mr-2 flex md:hidden'>
							<button
								onClick={() => setIsOpen(!isOpen)}
								type='button'
								className='bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
								aria-controls='mobile-menu'
								aria-expanded='false'>
								<span className='sr-only'>Open main menu</span>
								{!isOpen ? (
									<svg
										className='block h-6 w-6'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
										aria-hidden='true'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M4 6h16M4 12h16M4 18h16'
										/>
									</svg>
								) : (
									<svg
										className='block h-6 w-6'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
										aria-hidden='true'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M6 18L18 6M6 6l12 12'
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<MobileNav isOpen={isOpen} />
			</nav>
		</div>
	);
}

export default Nav;
