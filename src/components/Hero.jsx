import React from 'react';
import heroImage from '../assets/bg-img.jpg';

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      {/* Absolute positioned background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      {/* Hero content */}
      <div className="flex flex-col items-center justify-center h-full z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white">Welcome to our Website</h1>
        <p className="mt-4 text-lg text-white">Discover amazing features and services</p>
        <button className="mt-6 py-2 px-4 bg-[#ff702d] text-white font-semibold rounded-lg hover:bg-opacity-80 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
