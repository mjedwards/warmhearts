import React from "react";
import DonutChart from "./charts/DonutChart";

const behavioralData = [
	{ name: "Past Behavioral Infractions", value: 57 },
	{ name: "Current Behavioral Infractions", value: 43 },
];

const attendanceData = [
	{ name: "Past Absence", value: 341 },
	{ name: "Current Absence", value: 285 },
];

function Insight() {
	return (
		<div style={{ backgroundColor: "#F9FAFB" }} className='px-10 py-14'>
			<div className='flex flex-col lg:flex-row text-left justify-around mb-10'>
				<h3 className='title font-bold text-3xl text-gray-800'>
					Showing Up and <br />
					Standing Out
				</h3>
				<div className='text-left w-1/2'>
					<p className='description text-xs'>
						Education is a cornerstone of our program. We are committed to
						supporting our children as they strive to advance to the next grade.
						Recognizing that they do not get to choose where they go to school,
						it is our responsibility to guide them and help them improve on
						their educational journey.
					</p>
					<br />
					<p className='description text-xs'>
						Throughout our program's history, we've witnessed consistent growth
						and improvement among our students. As they transition to the next
						grade, they continue to excel on the FSA exam, achieving scores
						ranging from level 3 to 5. These scores are indicative of their
						proficiency in both reading and math.
					</p>
				</div>
			</div>
			<div className='flex flex-col lg:flex-row gap-8'>
				<div className='flex flex-col w-1/3 gap-6'>
					<div className='chart flex justify-center'>
						<DonutChart
							data={attendanceData}
							width={300}
							pastName='Past Absence'
							currentName='Current Absence'
						/>
					</div>
					<p className='subtitle text-left font-bold text-gray-800'>
						Attendance Improvement
					</p>
					<p className='description text-left text-xs'>
						We monitor school attendance closely as a key indicator of a child's
						academic progress and holistic growth. Consistent attendance
						guarantees access to learning, nurtures social and emotional
						development, and cultivates essential life skills. Chronic
						absenteeism, however, can result in learning gaps, diminished
						academic performance, and reduced engagement. Thus, prioritizing and
						advocating for regular attendance is paramount for every child to
						thrive academically and personally.
					</p>
				</div>
				<div className='flex flex-col w-1/3 gap-6'>
					<div className='chart flex justify-center'>
						<DonutChart
							data={behavioralData}
							width={300}
							pastName='Past Behavioral Infractions'
							currentName='Current Behavioral Infractions'
						/>
					</div>
					<p className='subtitle text-left font-bold text-gray-800'>
						Behavior Improvement
					</p>
					<p className='description text-left text-xs'>
						Monitoring behavioral improvement in school is vital for a child's
						overall development and academic success. Tracking behavior helps
						identify areas of growth and ensures a supportive learning
						environment. Positive behavior fosters engagement, collaboration,
						and a conducive atmosphere for learning. On the other hand,
						addressing behavioral challenges early can prevent disruptions,
						promote social-emotional skills, and enhance peer relationships.
						Prioritizing behavioral improvement supports students in achieving
						their full potential academically and socially.
					</p>
				</div>
				<div className='flex flex-col w-1/3 justify-evenly'>
					<div className='grade-info'>
						<p className='average font-bold text-left text-3xl'>3.25 GPA</p>
						<p className='subtitle text-left text-gray-800'>Average GPA</p>
					</div>
					<hr />
					<div className='graduation-info flex flex-col gap-1'>
						<p className='percent font-bold text-left text-3xl'>100%</p>
						<p className='subtitle text-left font-bold text-gray-800'>
							Graduates to the next grade
						</p>
						<p className='description text-xs text-left'>
							All sixth and seventh-grade students are advancing to the next
							level. Additionally, our eighth graders are transitioning to high
							school, successfully completing their classes and current grade.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Insight;
