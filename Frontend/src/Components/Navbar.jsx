import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="bg-gray-50 w-full">
      {/* Navbar with Glassmorphism */}
      <nav className="w-full flex justify-between items-center p-6 bg-white backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="logo flex justify-between items-center">
        <img src="/img/logo/kid-logo.png" alt="LearnNest Logo" className='w-[50px]' />
        <p className='text-2xl font-bold'><Link to="/">LearnNest</Link></p>
      </div>
        <ul className="hidden md:flex space-x-6 text-lg text-blue-500 font-bold text-[20px]">
          <li className="hover:text-indigo-600">
            <Link to="/">Home</Link> {/* Link to Home */}
          </li>
          <li className="hover:text-indigo-600">
            <Link to="/gallery">Gallery</Link> {/* Link to Gallery */}
          </li>
          <li className="hover:text-indigo-600">
            <Link to="/about">About</Link> {/* Link to About */}
          </li>
          <li className="hover:text-indigo-600">
            <Link to="/contact">Contact Us</Link> {/* Link to Contact */}
          </li>
        </ul>

        {/* Button to Create Account */}
        <Link to="/greetings">
          {" "}
          <Button
            variant="contained"
            color="primary"
            size="large"
            className="shadow-lg animate-bounce"
          >
            Create Account
          </Button>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
