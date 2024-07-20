import React from "react";
import boy from "../../../ui/assets/photos/boy.png";
import girl from "../../../ui/assets/photos/girl.jpg";
import diversity from "../../../ui/assets/photos/breakfast/b14.JPG";

const values = [
	{
		name: "Empowerment Through Connection",
		description:
			"We bridge the mentoring gap by fostering meaningful connections, enabling youth to access the guidance and resources needed to thrive, and driving a movement that prioritizes supportive relationships.",
	},
	{
		name: "Holistic Development and Community Impact",
		description:
			"We elevate youth through diverse activities and leadership experiences, fostering well-rounded individuals ready to impact their communities positively.",
	},
	{
		name: "Commitment to Quality and Growth",
		description:
			"We prioritize excellence through rigorous practices and aim to expand our network, ensuring effective mentoring relationships and broad community impact.",
	},
	{
		name: "Fostering Academic and Personal Growth",
		description:
			"Our mentors help youth set and achieve goals while teaching essential skills, connecting them with valuable resources, and providing consistent support for overall success.",
	},
	{
		name: "Building Trust and Providing Support",
		description:
			"We emphasize building positive, trusting relationships where mentors offer reliable support and guidance, making a significant difference in mentees' personal and academic lives.",
	},
	{
		name: "Expanding Influence and Encouraging Leadership",
		description:
			"We inspire leadership by exposing mentees to diverse role models and continuously seek new ideas to enhance our mission and expand our program's positive impact.",
	},
];
function Values() {
	return (
		<div className='flex flex-wrap' style={{ backgroundColor: "#F9FAFB" }}>
			<div className='mx-auto mt-5 mb-32 max-w-7xl px-6 sm:mt-10 lg:px-8'>
				<div className='flex flex-row items-center'>
					<div className='mx-auto max-w-2xl lg:mx-0'>
						<h2 className='text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl text-left'>
							Our values
						</h2>
						<p className='mt-6 text-lg leading-8 text-gray-800 text-left'>
							Be pioneers, using our abilities, gifts, organization, and
							opportunities to empower and connect with youth. Be reliable and
							honor our commitments, fostering trust and providing consistent
							support. Be trustworthy, honest, and open, and always seek to
							improve. Uphold our values of holistic development, quality,
							growth, academic and personal advancement, and leadership to
							benefit youth positively.
						</p>
					</div>
					<div className='flex flex-col w-full lg:w-1/2 overflow-hidden text-white lg:h-96 mt-32 xl:mx-auto sm:mt-40 xl:px-8 xl:max-w-7xl'>
						<div className=''>
							<img
								src={diversity}
								alt='event for mentors'
								className='aspect-[5/2] object-cover w-full xl:rounded-3xl h-96'
							/>
						</div>
					</div>
				</div>

				<dl className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
					{values.map((value) => (
						<div key={value.name}>
							<dt className='font-semibold text-gray-900 text-left'>
								{value.name}
							</dt>
							<div
								className='flex-1 border-b w-1/2 my-2'
								style={{
									borderColor: "#EC523D",
									borderWidth: "3px",
									borderRadius: "0px 50px 0px 50px",
								}}></div>
							<dd className='mt-1 text-gray-600 text-left'>
								{value.description}
							</dd>
						</div>
					))}
				</dl>
			</div>
		</div>
	);
}

export default Values;
