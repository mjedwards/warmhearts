import React from "react";
import blobImage from "../ui/assets/hero/blob.png";
import EventsImageGallery from "../components/events/EventsImageGallery";

export default function GalleryPage() {
  // Check if events exist by importing the events data
  const hasEvents = true; // This would be determined by checking if EventsImageGallery has events

  // If events exist, show the EventsImageGallery
  if (hasEvents) {
    return <EventsImageGallery />;
  }

  // If no events, show placeholder
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
            GALLERY
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-base md:text-lg text-gray-100 leading-relaxed font-medium">
              Discover moments of connection, growth, and joy through our community events and mentoring activities. These images capture the heart of our mission in action.
            </p>
            <p className="text-sm md:text-base text-orange-400 mt-4 font-medium">
              Moments That Matter. Stories That Inspire.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Content Section */}
      <div className="bg-white py-16 relative">
        {/* Curved section divider */}
        <svg className="absolute top-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" height="100" preserveAspectRatio="none">
          <path d="M0 0v4s250 96 500 96 500-96 500-96V0H0Z" fill="#1F2937"></path>
        </svg>
        <div className="max-w-7xl mx-auto px-6 pt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: "#ec523d" }}>
              Our Community in Action
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Browse through our collection of memorable moments from events, mentoring sessions, and community gatherings that showcase the impact of mentorship.
            </p>
          </div>

          {/* Gallery Grid - Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <div className="text-6xl text-gray-400 mb-4">📸</div>
              <h3 className="text-xl font-bold text-gray-600 mb-2">Gallery Coming Soon</h3>
              <p className="text-gray-500">
                We're preparing an amazing collection of photos from our events and activities. Check back soon!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}