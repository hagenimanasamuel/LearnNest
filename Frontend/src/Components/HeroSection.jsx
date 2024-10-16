import React from 'react';
import { Button } from '@mui/material';

export default function HeroSection() {


  return (
    <section
      id="home"
      className="relative min-h-screen flex-grow flex flex-col items-center justify-center text-center p-10 bg-[#e8f7ff] overflow-hidden"
    >
      
      {/* Transparent Overlay with Content */}
      <div className="relative z-10 bg-white/50 backdrop-blur-md p-10 rounded-lg shadow-lg max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-600 mb-6">
          Welcome to LearnNest
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-8">
          A perfect place for your child's early education. Join us and see them grow with joy!
        </p>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className="px-8 py-3 text-base md:text-lg mb-8 transition-transform transform hover:scale-105"
        >
          Create Account
        </Button>
      </div>

      {/* Optional: Add Quiz Component Below */}
      
    </section>
  );
}
