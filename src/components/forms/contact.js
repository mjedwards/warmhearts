import { useState } from "react";

export default function Contact() {
	const onsubmit = () => {
		sessionStorage.setItem("formSubmitted", "true");
	};
	return (
		<div className='flex flex-col items-center justify-items-center py-20'>
			<h2 className='font-bold text-white py-5 text-3xl'>Contact Us!</h2>

			<form
				name='contact'
				method='POST'
				// action='/thank-you'
				data-netlify='true'
				netlify-honeypot='bot-field'
				// onSubmit={onsubmit}
				onSubmit={(e) => {
					// Always set the flag
					sessionStorage.setItem("formSubmitted", "true");

					// In local dev without Netlify Dev, simulate success
					if (window.location.hostname === "localhost") {
						e.preventDefault(); // stop native POST
						// optionally: actually POST with fetch("/") if you run `netlify dev`
						window.location.href = "/thank-you"; // simulate the redirect
					}
				}}
				className='w-full max-w-lg'>
				{/* Required hidden input for Netlify */}
				<input type='hidden' name='form-name' value='contact' />

				{/* Honeypot field (hidden from users) */}
				<p className='hidden'>
					<label>
						Don’t fill this out: <input name='bot-field' />
					</label>
				</p>

				{/* First + Last Name */}
				<div className='flex flex-wrap -mx-3 mb-6'>
					<div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
						<label
							className='block uppercase tracking-wide text-white text-xs font-bold mb-2'
							htmlFor='grid-first-name'>
							First Name
						</label>
						<input
							id='grid-first-name'
							className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
							type='text'
							placeholder='Jane'
							name='first_name'
							required
						/>
					</div>

					<div className='w-full md:w-1/2 px-3'>
						<label
							className='block uppercase tracking-wide text-white text-xs font-bold mb-2'
							htmlFor='grid-last-name'>
							Last Name
						</label>
						<input
							id='grid-last-name'
							className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white'
							type='text'
							placeholder='Doe'
							name='last_name'
							required
						/>
					</div>
				</div>

				{/* Email */}
				<div className='flex flex-wrap -mx-3 mb-6'>
					<div className='w-full px-3'>
						<label
							className='block uppercase tracking-wide text-white text-xs font-bold mb-2'
							htmlFor='grid-email'>
							Email
						</label>
						<input
							id='grid-email'
							className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
							type='email'
							placeholder='********@email.com'
							name='email'
							required
						/>
					</div>
				</div>

				{/* Message */}
				<div className='flex flex-wrap -mx-3 mb-6'>
					<div className='w-full px-3'>
						<label
							className='block uppercase tracking-wide text-white text-xs font-bold mb-2'
							htmlFor='grid-message'>
							Message
						</label>
						<textarea
							id='grid-message'
							className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
							placeholder='We look forward to hearing from you!'
							name='message'
							required></textarea>
					</div>
				</div>

				{/* Submit */}
				<button
					className='shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
					type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
}
