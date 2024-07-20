import React from "react";
import founder from "../assets/exec.png";

function Founder() {
	return (
		<div
			className='flex lg:flex-row flex-col p-14 justify-evenly items-center'
			style={{ backgroundColor: "#EC523D" }}>
			<img src={founder} alt='' className='w-1/3' />
			<div className='flex flex-col text-white w-1/2'>
				<h2 className='text-5xl font-bold'>Hear from the founder</h2>
				<div class='flex w-full items-center rounded-full'>
					<div
						class='flex-1 border-b'
						style={{
							borderColor: "#F1D195",
							borderWidth: "3px",
							borderRadius: "5px 0px 0px 5px",
						}}></div>
					<span class='text-black text-lg font-semibold leading-8 px-8 py-3'>
						<svg
							class='w-4 h-4 text-gray-700 dark:text-gray-800'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							viewBox='0 0 18 14'>
							<path d='M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z' />
						</svg>
					</span>
					<div
						class='flex-1 border-b'
						style={{
							borderColor: "#F1D195",
							borderWidth: "3px",
							borderRadius: "5px 0px 0px 5px",
						}}></div>
				</div>
				<p>
					Mentors are indispensable because they bridge the gap between
					understanding and support, offering invaluable guidance to those who
					feel unseen or misunderstood. Consider the story of a young man who,
					feeling disconnected and hopeless, doubted anyone could comprehend his
					struggles. Yet, when met with empathy and shared experience, his
					perspective shifted. The mentor's acknowledgment of their own past
					hardships not only validated the young man's feelings but also sparked
					a determination to do more for him and others like him.
				</p>
				<br />
				<p>
					This narrative underscores the essence of mentoring: a beacon of
					empathy and understanding amid adversity. Mentors provide a safe space
					for mentees to express themselves, offering empathy, guidance, and
					shared experiences. Through these meaningful connections, mentors
					empower mentees to navigate life's challenges with resilience and
					determination.
				</p>
				<br />
				<p>
					In essence, mentors serve as catalysts for transformation, empowering
					individuals to overcome obstacles and unlock their full potential.
					They embody the spirit of compassion and resilience, inspiring hope
					and fostering growth in those they mentor. In a world where many feel
					alone in their struggles, mentors offer a guiding light, reminding us
					all that we are not alone on our journey.
				</p>
			</div>
		</div>
	);
}

export default Founder;
