import React from "react";
import blobImage from "../ui/assets/hero/blob.png";

export default function CausePage() {
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
            OUR MISSION
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-base md:text-lg text-gray-100 leading-relaxed font-medium">
              Our mission is to connect experienced mentors with young individuals to support their personal, academic, and professional development. We believe that guidance and mentorship can empower youth to reach their full potential and contribute positively to their communities through meaningful relationships.
            </p>
          </div>
        </div>
      </div>

      {/* What is a mentor Section */}
      <div className="bg-white py-16 relative">
        {/* Curved section divider */}
        <svg className="absolute top-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" height="100" preserveAspectRatio="none">
          <path d="M0 0v4s250 96 500 96 500-96 500-96V0H0Z" fill="#1F2937"></path>
        </svg>
        <div className="max-w-6xl mx-auto px-6 pt-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-4xl font-bold text-orange-500 mb-6">
                What is a mentor?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                A mentor is a trusted adult or friend who provides support, guidance, and encouragement to help a child or teen in their role as a mentor figure.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Our Foundation:</h3>
                  <p className="text-gray-700 text-sm">
                    Our program actively provides access to professional or academic support and life skills development.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Caring and Responsible Adult:</h3>
                  <p className="text-gray-700 text-sm">
                    A mentor offers a trusting and genuine relationship and promotes personal growth and development.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Advocate:</h3>
                  <p className="text-gray-700 text-sm">
                    A mentor first is a positive support, guidance, and encouragement to ensure every child has access to opportunities that support success.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 text-sm mt-6 leading-relaxed">
                A mentor's role is to provide support, guidance, and encouragement to help their mentee develop, focusing on building their confidence, skills, and capacity for meaningful relationships and personal growth, helping young people navigate challenges, discover strengths, and reach their full potential.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="h-96 bg-gray-300 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  [Placeholder Image]
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Qualities Section */}
      <div className="bg-slate-800 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="h-96 bg-gray-300 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  [Placeholder Image]
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="text-white">
              <h2 className="text-4xl font-bold text-orange-500 mb-8">
                Key Qualities of a Good Mentor
              </h2>

              <p className="text-gray-300 leading-relaxed mb-8">
                A good mentor possesses certain qualities that make them effective in their role. Here are key attributes for a mentor:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-white mb-2 flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Good Listener:
                  </h3>
                  <p className="text-gray-300 text-sm ml-5">
                    Attentive to the mentee's hopes and concerns, providing a supportive ear for their questions and challenges.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-white mb-2 flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Patient and Understanding:
                  </h3>
                  <p className="text-gray-300 text-sm ml-5">
                    Recognizes that growth takes time and is willing to support the mentee through their journey.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-white mb-2 flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Authentic:
                  </h3>
                  <p className="text-gray-300 text-sm ml-5">
                    Genuine in their interactions and committed to building trust through honesty and transparency.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-white mb-2 flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Supportive:
                  </h3>
                  <p className="text-gray-300 text-sm ml-5">
                    Encourages the mentee to pursue their goals while providing guidance and celebrating achievements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* A Mentor is Not Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-orange-500 text-center mb-12">
            A Mentor is Not:
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed text-center mb-8">
              It's important to understand what a mentor is not: a parent or tutor. Young people do not see their mentor as a parent figure.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  A Parent or Legal Guardian:
                </h3>
                <p className="text-gray-700 text-sm ml-5 mb-4">
                  While mentors are guidance, they are legally responsible for decision making of their mentee.
                </p>

                <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  A Tutor:
                </h3>
                <p className="text-gray-700 text-sm ml-5 mb-4">
                  While mentors should value education, they aren't primarily responsible for academic instruction.
                </p>

                <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  A Therapist:
                </h3>
                <p className="text-gray-700 text-sm ml-5">
                  Mentors provide support and guidance but are not qualified mental health professionals.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  A Financial Provider:
                </h3>
                <p className="text-gray-700 text-sm ml-5 mb-4">
                  While mentors may offer guidance about financial responsibility, they are not expected to provide financial support.
                </p>

                <p className="text-gray-700 text-sm leading-relaxed">
                  However, youth may respond well when they feel that the mentor is someone to trust, someone who genuinely cares, someone who walks alongside them and not someone who directs them. That being noted that the mentor have more than one clear understanding that they operate from a position of balance, appropriate, they're working to build a position to be comfortable and one where the need are met and aligned for the journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-slate-800 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-orange-500 text-center mb-12">
            Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Resource 1 */}
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="h-32 bg-teal-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-bold">Resource</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">
                Mastering Mentoring: Giving
              </h3>
              <h3 className="font-bold text-gray-800 mb-4">
                Kids A Voice
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Here is a collection of articles, insights, and research related to mentoring and youth development. Written by leading experts in the field.
              </p>
              <button className="text-orange-500 font-medium hover:underline">
                View - Download
              </button>
            </div>

            {/* Resource 2 */}
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="h-32 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-black font-bold">Guide</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-4">
                How Does a Good Mentor?
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                A comprehensive guide outlining the essential qualities and practices that make an effective mentor. This resource helps mentors understand their role better.
              </p>
              <button className="text-orange-500 font-medium hover:underline">
                View - Download
              </button>
            </div>

            {/* Resource 3 */}
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="h-32 bg-blue-400 rounded-lg mb-4 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-2xl font-bold">NEWS</div>
                  <div className="text-2xl font-bold">FEED</div>
                </div>
              </div>
              <h3 className="font-bold text-gray-800 mb-4">
                Connect with Mental Services
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Access to mental health resources and services to support both mentors and mentees in their journey together.
              </p>
              <button className="text-orange-500 font-medium hover:underline">
                View - Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}