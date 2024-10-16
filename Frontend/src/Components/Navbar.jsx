import React from 'react';
import { Button } from '@mui/material';
import '../../src/index.css';

function LandingPage() {
  return (
    <div className="bg-gray-50 w-full">
      {/* Navbar with Glassmorphism */}
      <nav className="w-full flex justify-between items-center p-6 bg-white backdrop-blur-md shadow-md sticky top-0 z-50">
        <div className="text-2xl font-bold text-blue-500">LearnNest</div>
        <ul className="hidden md:flex space-x-6 text-lg text-blue-500 font-bold text-[20px]">
          <li className="hover:text-indigo-600">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-indigo-600">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="hover:text-indigo-600">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-indigo-600">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className="shadow-lg animate-bounce"
        >
          Create Account
        </Button>
      </nav>
    </div>
  );
}

export default LandingPage;
