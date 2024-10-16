// src/pages/Home.jsx
import React from 'react';
import { Button } from '@mui/material';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default Home;
