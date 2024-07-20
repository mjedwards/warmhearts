import React from "react";
import MentorForm from "../../forms/becomeMentor";

export default function Layout() {
	return (
		<div class='flex flex-wrap overflow-hidden pt-20'>
			<div class='w-full overflow-hidden xl:w-1/2'>
				<h2 className='font-bold text-black py-5 text-3xl'>Ready? Let's go!</h2>
				<p className='text-center mb-8'>
					Complete the form below and a member of the team will be back in touch
					right away.
				</p>
				<div className='static flex h-auto w-full justify-center items-center'>
					<div
						className='relative my-auto mx-2 left-0 col-start-1 col-end-2 row-start-1 row-end-2 justify-self-start self-start'
						style={{ width: "19px", height: "13px" }}>
						<div className='absolute bottom-0 left-0 right-0 top-0'>
							<svg
								className='absolute bottom-0 left-0 right-0 top-0'
								preserveAspectRatio='xMidYMid meet'
								data-bbox='35 56 130 88'
								viewBox='35 56 130 88'
								xmlns='http://www.w3.org/2000/svg'
								data-type='color'
								role='presentation'
								aria-hidden='true'>
								<defs></defs>
								<g>
									<path
										d='M35 56v88h130V56H35zm64.879 58.87L49.15 64.499h101.455L99.879 114.87zM72.191 99.311l-28.755 30.025V70.757l28.755 28.554zm6.009 5.967l21.679 21.525 21.677-21.525 28.93 30.224H49.254L78.2 105.278zm49.364-5.967l29-28.796v59.092l-29-30.296z'
										fill='#2F54DD'
										data-color='1'></path>
								</g>
							</svg>
						</div>
					</div>
					<div style={{ width: "273px", height: "auto" }}>
						<a
							href='mailto:contact@warmheartmentorshipservice.com'
							className='text-purple-600 mb-8'>
							contact@warmheartmentorshipservice.com
						</a>
					</div>
				</div>
				<img
          className="rotate--10 absolute"
          style={{width: "250px", left: "25%"}}
					src='https://static.wixstatic.com/media/af33bb_451b4998f81d49beb47a95360518c415~mv2.gif'
					alt='instructions to follow'
				/>
			</div>

			<div class='w-full overflow-hidden xl:w-1/2'>
				<MentorForm />
			</div>
		</div>
	);
}
