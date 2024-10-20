import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons for the menu

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu open/close

  // Toggle the menu open/close state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-50 w-full">
      {/* Navbar with Glassmorphism */}
      <nav className="w-full flex justify-between items-center p-6 bg-white backdrop-blur-md shadow-md sticky top-0 z-50">
        <div className="logo flex justify-between items-center">
          <img src="/img/logo/kid-logo.png" alt="LearnNest Logo" className="w-[50px]" />
          <p className="text-2xl font-bold">
            <Link to="/">LearnNest</Link>
          </p>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-500">
            <FaBars size={30} />
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-lg text-blue-500 font-bold text-[20px]">
          <li className="hover:text-indigo-600">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-indigo-600">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="hover:text-indigo-600">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-indigo-600">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* Button to Create Account (Desktop Only) */}
        <div className="hidden md:block">
          <Link to="/greetings">
            <Button
              variant="contained"
              color="primary"
              size="large"
              className="shadow-lg animate-bounce"
            >
              Create Account
            </Button>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center space-y-4">
          <button onClick={toggleMenu} className="absolute top-4 right-4">
            <FaTimes size={30} className="text-blue-500" />
          </button>
          <ul className="flex flex-col space-y-4 text-lg text-blue-500 font-bold text-center">
            <li className="hover:text-indigo-600">
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="hover:text-indigo-600">
              <Link to="/gallery" onClick={toggleMenu}>Gallery</Link>
            </li>
            <li className="hover:text-indigo-600">
              <Link to="/about" onClick={toggleMenu}>About</Link>
            </li>
            <li className="hover:text-indigo-600">
              <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
            </li>
          </ul>
          <Link to="/greetings">
            <Button
              variant="contained"
              color="primary"
              size="large"
              className="shadow-lg animate-bounce"
              onClick={toggleMenu} // Close the menu when clicking the button
            >
              Create Account
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
