import React from "react";
import blobImage from "../ui/assets/hero/blob.png";

export default function CommunityPage() {
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
            OUR<br/>COMMUNITY
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-base md:text-lg text-gray-100 leading-relaxed font-medium mb-4">
              <span className="font-bold">Our Community in Action:</span> From Sneaker Ball to Mentorship Dinners, Thanksgiving Drives, and beyond – our community comes together to celebrate, uplift, and empower.
            </p>
            <p className="text-sm md:text-base text-gray-200 leading-relaxed">
              At Warmheart Mentorship, community is more than a word – it's the heartbeat of everything we do. Our events bring mentors, mentees, families, and supporters together to share moments of joy, growth, and connection. Each gathering is a reflection of our shared commitment to building brighter futures and stronger bonds.
            </p>
          </div>
        </div>
      </div>

      {/* Sneaker Ball 2025 Section */}
      <div className="bg-white py-16 relative">
        {/* Curved section divider */}
        <svg className="absolute top-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" height="100" preserveAspectRatio="none">
          <path d="M0 0v4s250 96 500 96 500-96 500-96V0H0Z" fill="#1F2937"></path>
        </svg>
        <div className="max-w-6xl mx-auto px-6 pt-24">
          <h2 className="text-4xl font-bold text-orange-500 text-center mb-12">
            Sneaker Ball 2025
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
              <div key={item} className="aspect-square bg-gray-300 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  [Photo {item}]
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Events Navigation Sidebar */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="space-y-4">
              <div className="bg-orange-500 text-white p-4 rounded-lg font-bold">
                Sneaker Ball 2025
              </div>
              <div className="bg-orange-500 text-white p-4 rounded-lg font-bold">
                Mentor Dinner 2025
              </div>
              <div className="bg-orange-500 text-white p-4 rounded-lg font-bold">
                Thanksgiving Drive 2024
              </div>
            </div>

            {/* Main Content Area - Additional Photos */}
            <div className="md:col-span-3">
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                  <div key={item} className="aspect-square bg-gray-300 rounded-lg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      [Photo {item}]
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mentor Dinner 2025 Section */}
      <div className="bg-slate-800 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-orange-500 text-center mb-12">
            Mentor Dinner 2025
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
              <div key={item} className="aspect-square bg-gray-300 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  [Photo {item}]
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}