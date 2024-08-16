import React from "react";

export default function MentorForm() {
	return (
		<div className='flex flex-col items-center justify-items-center py-20 bg-white'>
			<form className='w-full max-w-lg' name='contact' method='POST'>
				<input type='hidden' name='form-name' value='contact' />
				<div className='flex flex-wrap mb-6'>
					<div className='w-full px-3 mb-6 md:mb-0'>
						<input
							className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
							type='text'
							placeholder='Name'
							required
							name='Name'
						/>
					</div>
					<div className='w-full px-3'>
						<input
							className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
							type='email'
							placeholder='Email'
							required
							name='Email'
						/>
					</div>
				</div>

				<div className='flex flex-wrap mb-6'>
					<div className='w-full px-3'>
						<input
							className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
							type='text'
							placeholder='Subject'
							required
							name='Subject'
						/>
					</div>
				</div>

				<div className='flex flex-wrap mb-6'>
					<div className='w-full px-3'>
						<textarea
							className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
							placeholder='Type your message here...'
							required
							name='Message'></textarea>
					</div>
				</div>
				<div className='flex justify-center'>
					<button
						className='shadow bg-yellow-500 hover:bg-yellow-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
						type='submit'>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}
