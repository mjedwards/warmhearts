import React from "react";
import ImageContainer from "../../hero/atoms/imageContainer";

function MentorComponent({ info }) {
	const { title, description, roles, note, image, direction } = info;
	return (
		<div className={`flex flex-col lg:${direction} col-span-5 h-full mt-11`}>
			<div className='lg:py-12 text-gray flex flex-col lg:m-auto text-left gap-4 md:w-1/2 p-2'>
				<h2 className='font-bold text-xl' style={{ color: "#EC523D" }}>
					{title}
				</h2>
				<h3 className='font-bold text-2xl'>{description}</h3>
				<div>
					{roles && (
						<ul>
							{roles.map(({ roleTitle, roleDescription }) => (
								<li
									key={roleTitle}
									className='leading-relaxed text-left text-xl mb-5'>
									<strong>{roleTitle}:</strong> {roleDescription}
								</li>
							))}
						</ul>
					)}
					{note && <p className='tagline italic text-lg'>{note}</p>}
				</div>
			</div>
			<ImageContainer
				image={image}
				alt_text='teacher and student accepting awards'
			/>
		</div>
	);
}

export default MentorComponent;
