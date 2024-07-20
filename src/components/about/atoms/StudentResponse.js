import React from "react";
import StackedBarChart from "./charts/StackedChart";
import { Icon } from "@iconify/react/dist/iconify.js";

const data = [
	{ question: "Helpful to me", category: "Strongly Agree", percentage: 93.64 },
	{
		question: "Make me successful",
		category: "Strongly Agree",
		percentage: 36.36,
	},
	{
		question: "Feel better about myself",
		category: "Strongly Agree",
		percentage: 63.64,
	},
	{
		question: "Helps interpersonal relationship with peers",
		category: "Strongly Agree",
		percentage: 41.82,
	},
	{
		question: "Highly recommends",
		category: "Strongly Agree",
		percentage: 86.36,
	},
	{ question: "Helpful to me", category: "Agree", percentage: 6.36 },
	{ question: "Make me successful", category: "Agree", percentage: 50 },
	{
		question: "Feel better about myself",
		category: "Agree",
		percentage: 36.36,
	},
	{
		question: "Helps interpersonal relationship with peers",
		category: "Agree",
		percentage: 48.18,
	},
	{ question: "Highly recommends", category: "Agree", percentage: 12.73 },
	{ question: "Helpful to me", category: "Strongly Disagree", percentage: 0 },
	{
		question: "Make me successful",
		category: "Strongly Disagree",
		percentage: 5.45,
	},
	{
		question: "Feel better about myself",
		category: "Strongly Disagree",
		percentage: 0,
	},
	{
		question: "Helps interpersonal relationship with peers",
		category: "Strongly Disagree",
		percentage: 4.55,
	},
	{
		question: "Highly recommends",
		category: "Strongly Disagree",
		percentage: 0,
	},
	{ question: "Helpful to me", category: "Disagree", percentage: 0 },
	{ question: "Make me successful", category: "Disagree", percentage: 8.18 },
	{ question: "Feel better about myself", category: "Disagree", percentage: 0 },
	{
		question: "Helps interpersonal relationship with peers",
		category: "Disagree",
		percentage: 5.45,
	},
	{ question: "Highly recommends", category: "Disagree", percentage: 0.91 },
];

function StudentResponse() {
	return (
		<div className='p-8 h-screen flex flex-col'>
			<h2 className='text-5xl font-bold text-gray-800'>
				Hear from the students
			</h2>
			<div className='flex w-3/4 items-center rounded-full m-auto'>
				<div
					className='flex-1 border-b w-1/2'
					style={{
						borderColor: "#1F2937",
						borderWidth: "3px",
						borderRadius: "5px 0px 0px 5px",
					}}></div>
				<span className='text-black text-lg font-semibold leading-8 px-8 py-3'>
					<Icon icon='noto:woman-student-medium-skin-tone' />
				</span>
				<div
					className='flex-1 border-b w-1/2'
					style={{
						borderColor: "#1F2937",
						borderWidth: "3px",
						borderRadius: "5px 0px 0px 5px",
					}}></div>
			</div>
			<div className='flex flex-row w-3/4 m-auto'>
				<div className='flex flex-col w-3/4 m-auto'>
					<StackedBarChart data={data} />
				</div>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-6 w-1/2'>
					<div className='bg-white overflow-hidden sm:rounded-lg p-6'>
						<p className='mt-2 leading-6 text-gray-600 text-xs text-left'>
							The program has had a significant and measurable impact on the
							student body. The initiative provides a safe and supportive space
							where students can share their concerns and feel heard, addressing
							both individual and community needs during challenging times.
						</p>
						<p className='mt-4 leading-6 text-gray-600 text-xs text-left'>
							Student feedback consistently highlights the benefits of the work
							at Warmheart Mentorship. Many students express gratitude for the
							dedicated support we offer, which has created a positive and
							inclusive school environment. Our efforts include individual
							counseling and community-building activities, all contributing to
							the overall well-being of the student population.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default StudentResponse;
