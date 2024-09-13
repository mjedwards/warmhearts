import React from "react";

const team = [
	{
		name: "Veronne McMain",
		role: "CEO",
		imageUrl: "https://storage.googleapis.com/whms_images/images/team/vm.png",
		location: "Florida, US",
	},
	{
		name: "Marci Bennett",
		role: "President",
		imageUrl:
			"https://storage.googleapis.com/whms_images/images/team/placeholder.jpeg",
		location: "Florida, US",
	},
	{
		name: "Ruth Cater Lynch",
		role: "Vice President",
		imageUrl:
			"https://storage.googleapis.com/whms_images/images/team/placeholder.jpeg",
		location: "Florida, US",
	},
	{
		name: "Dr. Joanette Brookes-George",
		role: "Director",
		imageUrl:
			"https://storage.googleapis.com/whms_images/images/team/dr_joanette.jpg",
		location: "Florida, US",
	},
	{
		name: "Felicity Swanson",
		role: "Secretary",
		imageUrl:
			"https://storage.googleapis.com/whms_images/images/team/felicity.jpg",
		location: "Florida, US",
	},
	{
		name: "Maya Gee",
		role: "Public Relations (PR)",
		imageUrl:
			"https://storage.googleapis.com/whms_images/images/team/placeholder.jpeg",
		location: "Florida, US",
	},
];
function Team() {
	return (
		<>
			{" "}
			{/* Team section */}
			<div className='mx-auto mt-32 mb-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
				<div className='mx-auto max-w-2xl lg:mx-0'>
					<h2 className='text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl text-left'>
						Meet the Team
					</h2>
					<p className='mt-6 text-lg leading-8 text-gray-800 text-left'>
						We're dedicated to empowering youth through quality mentoring,
						fostering connections, and promoting holistic development and
						leadership. Driven by trust, reliability, and continuous
						improvement, we aim to make a positive impact in our community.
						Let's make a difference together!
					</p>
				</div>
				<ul
					className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
					{team.map(({ name, role, imageUrl, location }) => (
						<li key={name} className='relative'>
							{" "}
							{/* Add a 'relative' position to the <li> */}
							<img
								className='team-member-image aspect-[14/13] w-full rounded-2xl object-cover'
								src={imageUrl}
								alt={name}
								// style={{ maxHeight: "320px" }}
							/>
							<div className='mt-[318px] pt-6'>
								{" "}
								{/* Add some top padding to create space for the image */}
								<h3 className='text-lg font-semibold leading-8 tracking-tight text-gray-800'>
									{name}
								</h3>
								<p className='text-base leading-7 text-gray-800'>{role}</p>
								<p className='text-sm leading-6 text-gray-800'>{location}</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default Team;
