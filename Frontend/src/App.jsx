import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './index.css';
import Gallery from './Components/Gallery';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Greetings from './Pages/ChildsUI/Greetings';

export default function App() {
  return (
    <Router>  {/* Move Router here to wrap the entire app */}
      <div className="root">
        <div className="navbar">
          <Navbar />  {/* Now Navbar is inside Router */}
        </div>

        <Routes>
          <Route path="/" element={<Home />} />          {/* Home Page */}
          <Route path="/gallery" element={<Gallery />} /> {/* Gallery Page */}
          <Route path="/about" element={<About />} />     {/* About Page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact Page */}
          <Route path='/greetings' element={<Greetings />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
