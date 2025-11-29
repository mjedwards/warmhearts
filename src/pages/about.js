import React, { useState } from "react";
import StudentSurveyChart from "../components/shared/StudentSurveyChart";
import blobImage from "../ui/assets/hero/blob.png";
import menuItemBg from "../ui/assets/about_us/menu_item_bg.png";
import menuItemDefinitionBg from "../ui/assets/about_us/menu_item_definition_bg.png";
import ruthImage from "../ui/assets/about_us/team/ruth.png";
import angelaImage from "../ui/assets/about_us/team/angela_br.png";
import joanetteImage from "../ui/assets/about_us/team/joanette_br.png";
import myriamImage from "../ui/assets/about_us/team/myriam_go.png";
import felicityImage from "../ui/assets/about_us/team/felicity_sw.png";
import sherellImage from "../ui/assets/about_us/team/sherell.png";

export default function AboutPage() {
  const [selectedValue, setSelectedValue] = useState('unity');

  const values = {
    unity: {
      name: 'Unity',
      definition: 'We bridge the mentoring gap by fostering meaningful connections, enabling youth to access the guidance and resources needed to thrive, and driving a movement that prioritizes supportive relationships.'
    },
    enrichment: {
      name: 'Enrichment',
      definition: 'We elevate youth through diverse activities and leadership experiences, fostering well-rounded individuals ready to impact their communities positively.'
    },
    flourish: {
      name: 'Flourish',
      definition: 'Our mentors help youth set and achieve goals while teaching essential skills, connecting them with valuable resources, and providing consistent support for overall success.'
    },
    reliability: {
      name: 'Reliability',
      definition: 'We emphasize building positive, trusting relationships where mentors offer reliable support and guidance, making a significant difference in mentees\' personal and academic lives.'
    },
    excellence: {
      name: 'Excellence',
      definition: 'We prioritize excellence through rigorous practices and aim to expand our network, ensuring effective mentoring relationships and broad community impact.'
    },
    impact: {
      name: 'Impact',
      definition: 'We inspire leadership by exposing mentees to diverse role models and continuously seek new ideas to enhance our mission and expand our program\'s positive impact.'
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#1f2937' }}>
        {/* Background blob shape - centered and large */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={blobImage} alt="Background blob" className="w-[600px] h-[500px] md:w-[800px] md:h-[600px] object-contain opacity-90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-5 max-w-5xl mx-auto px-6 text-center text-white">
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight">
            ABOUT US
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-base md:text-lg text-gray-100 leading-relaxed font-medium">
              Every child deserves an equal opportunity to thrive. Understanding the hardships some communities face, our team is dedicated to providing reliable support and fostering a culture of responsibility and achievement. We aspire to be a pillar of strength, guiding the next generation toward leadership and success.
            </p>
            <p className="text-sm md:text-base text-white mt-4 font-medium">
              Nurturing Potential. Cultivating Leaders.
            </p>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="py-16 relative" style={{backgroundColor: '#F9FAFB'}}>
        {/* Curved section divider */}
        <svg className="absolute top-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" height="100" preserveAspectRatio="none">
          <path d="M0 0v4s250 96 500 96 500-96 500-96V0H0Z" fill="#1F2937"></path>
        </svg>
        <div className="max-w-6xl mx-auto px-6 pt-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative text-center">
              <div className="w-80 h-80 rounded-full mx-auto relative overflow-hidden">
                <img
                  src="/founder.png"
                  alt="Veronne McMain - Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6">
                <h3 className="font-bold text-xl text-gray-800 mb-1">Veronne McMain</h3>
                <p className="text-gray-600 text-lg">Founder</p>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="text-left">
              <p className="text-gray-700 leading-relaxed mb-6">
                Mentors are indispensable because they bridge the gap between understanding and advocacy. They serve as advocates and guides for the youth they work with, ensuring that the unique needs of each young person are met and understood by both the mentor and the community at large.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                This narrative underscores the essence of mentoring: a beacon of empowerment and resilience that extends beyond individual growth. Successful mentoring is rooted in authentic relationships that develop over time through consistent engagement and mutual trust.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                In essence, mentoring serves as a catalyst for transformation, empowering individuals through its focus on individual capacity building, community strengthening, and systematic change. This approach ensures that both mentors and mentees grow and contribute to a more equitable and supportive community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="py-24 relative" style={{backgroundColor: '#1F2937'}}>
        {/* Wave divider at top */}
        <svg className="absolute top-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" height="100" preserveAspectRatio="none">
          <path d="M0 0v4c136 143.8 183.8-73.2 297 26.6 72.2 63.7 97 99 184.7 33.2a30.5 30.5 0 0 1 36.6 0c87.6 65.8 112.5 30.5 184.7-33.2C816.2-69.2 864 147.7 1000 4V0H0Z" fill="#F9FAFB"></path>
        </svg>
        <div className="max-w-6xl mx-auto px-6 pt-24">
          <h2 className="font-bold text-white text-left mb-6" style={{fontSize: '3.75rem'}}>
            Our Values
          </h2>
          <p className="text-white text-left leading-relaxed mb-12 max-w-4xl">
            Be pioneers, using our abilities, gifts, organization, and opportunities to empower and connect with youth. Be reliable and honor our commitments, fostering trust and providing consistent support. Be trustworthy, honest, and open, and always seek to improve. Uphold our values of holistic development, quality, growth, academic and personal advancement, and leadership to benefit youth positively.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Values */}
            <div className="grid grid-cols-2 gap-6">
              {Object.entries(values).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setSelectedValue(key)}
                  className="relative text-white p-4 text-center font-bold cursor-pointer transition-opacity hover:opacity-80"
                  style={{
                    backgroundImage: `url(${menuItemBg})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    minHeight: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {value.name.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Right Column - Definition */}
            <div
              className="text-white px-8 pb-8 pt-0 relative flex flex-col items-center justify-center mx-auto"
              style={{
                backgroundImage: `url(${menuItemDefinitionBg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                width: '420px',
                height: '375px'
              }}
            >
              <h3 className="text-xl font-bold text-center mb-2">
                {values[selectedValue].name}
              </h3>
              <hr
                className="w-24 mb-4"
                style={{
                  borderColor: '#1F2937',
                  borderWidth: '3px',
                  borderStyle: 'solid'
                }}
              />
              <p className="leading-relaxed text-center max-w-xs px-4">
                {values[selectedValue].definition}
              </p>
            </div>
          </div>
        </div>
        {/* Wave divider at bottom */}
        <svg className="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" height="100" preserveAspectRatio="none" style={{transform: 'rotate(180deg)'}}>
          <path d="M0 0v90.2C49.7 99.9 105 82 160 65c75.5-23.3 145.5-22.4 222-3 63 16 119 14 173-8 79.5-32.4 156.2-27.6 240-10 82.6 17.4 143-1 205-31.7V0H0Z" fill="#F9FAFB"></path>
        </svg>
      </div>

      {/* Meet The Team Section */}
      <div className="py-16" style={{backgroundColor: '#F9FAFB'}}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-bold text-gray-800 text-center mb-12" style={{fontSize: '3.75rem'}}>
            Meet The Team
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 relative overflow-hidden">
                <img
                  src={ruthImage}
                  alt="Ruth Carter Lynch"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg text-gray-800">Ruth Carter Lynch</h3>
              <p className="text-gray-600">President</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 relative overflow-hidden">
                <img
                  src={sherellImage}
                  alt="Dr. Shaneil Hobbs"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg text-gray-800">Dr. Sherell Hobbs</h3>
              <p className="text-gray-600">Vice President</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 relative overflow-hidden">
                <img
                  src={angelaImage}
                  alt="Dr. Angela Brinston"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg text-gray-800">Dr. Angela Brewton</h3>
              <p className="text-gray-600">Director</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 4 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 relative overflow-hidden">
                <img
                  src={joanetteImage}
                  alt="Dr. Juliette Browder-George"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg text-gray-800">Dr. Joanette Brookes-George</h3>
              <p className="text-gray-600">Public Communications Director</p>
            </div>

            {/* Team Member 5 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 relative overflow-hidden">
                <img
                  src={myriamImage}
                  alt="Maryam Cochran"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg text-gray-800">Myriam Goldman</h3>
              <p className="text-gray-600">Treasurer</p>
            </div>

            {/* Team Member 6 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 relative overflow-hidden">
                <img
                  src={felicityImage}
                  alt="Felicity Swanson"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg text-gray-800">Felicity Swanson</h3>
              <p className="text-gray-600">Secretary</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We're dedicated to empowering youth through quality mentoring, fostering connections, and promoting holistic development and leadership. Driven by trust, reliability, and continuous improvement, we aim to make a positive impact in our community. Let's make a difference together!
            </p>
          </div>
        </div>
      </div>

      {/* Student Survey Section */}
      <div className="py-16 relative" style={{backgroundColor: '#1F2937'}}>
        {/* Wave divider at top */}
        <svg className="absolute top-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" height="100" preserveAspectRatio="none">
          <path d="M0 0v4s250 96 500 96 500-96 500-96V0H0Z" fill="#F9FAFB"></path>
        </svg>
        <div className="max-w-7xl mx-auto px-6 pt-24">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* Left Column - Chart */}
            <div className="relative">
              <h3 className="text-white text-2xl font-bold mb-8 text-center">Student Survey</h3>
              <StudentSurveyChart />
            </div>

            {/* Right Column - Our Impact */}
            <div
              className="text-white p-8 rounded-lg relative"
              style={{
                backgroundColor: '#1F2937'
              }}
            >
              {/* Background image with reduced opacity */}
              <div
                className="absolute inset-0 rounded-lg opacity-30"
                style={{
                  backgroundImage: `url(${blobImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>
              <div className="relative z-10">
                <h3 className="font-bold mb-6" style={{fontSize: '3.75rem'}}>Our Impact</h3>
                <p className="leading-relaxed text-left">
                  The program has had a significant and measurable impact on the student body. The initiative provides a safe and supportive space where students can share their concerns and feel heard, addressing both individual and community needs during challenging times.
                </p>
                <p className="leading-relaxed text-left mt-4">
                  Student feedback consistently highlights the benefits of the work at Warmheart Mentorship. Many students express gratitude for the dedicated support we offer, which has created a positive and inclusive school environment. Our efforts include individual counseling and community-building activities, all contributing to the overall well-being of the student population.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
