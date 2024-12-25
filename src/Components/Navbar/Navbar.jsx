'use client'
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <nav className="bg-[#EBF3FF] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-600">
          <a href="/">Learnify</a>
        </div>
        <div className="hidden md:flex space-x-6 mx-auto">
          <a href="/" className="text-gray-800 hover:text-gray-600 transition-colors">Home</a>
          {isLoggedIn && (
            <>
              <a href="/courses" className="text-gray-800 hover:text-gray-600 transition-colors">Courses</a>
              <a href="/addcourse" className="text-gray-800 hover:text-gray-600 transition-colors">Add Course</a>
            </>
          )}
          <a href="/about" className="text-gray-800 hover:text-gray-600 transition-colors">About</a>
          <a href="/contact" className="text-gray-800 hover:text-gray-600 transition-colors">Contact</a>
          <a href="/service" className="text-gray-800 hover:text-gray-600 transition-colors">Service</a>
        </div>
        <div className="hidden md:flex space-x-4">
          {!isLoggedIn ? (
            <>
              <a href="/login" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-lg">Login</a>
              <a href="/signup" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-lg">Sign Up</a>
            </>
          ) : (
            <button onClick={handleLogout} className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-lg">Logout</button>
          )}
        </div>
        <button className="md:hidden text-gray-800" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-4 bg-white p-4 shadow-md rounded-lg fixed top-0 left-0 w-full h-full z-50"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-purple-600">Learnify</h2>
            <button onClick={toggleMenu} className="text-gray-800 text-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <a href="/" className="block py-2 px-4 text-gray-800 hover:text-gray-600">Home</a>
          {isLoggedIn && (
            <>
              <a href="/courses" className="block py-2 px-4 text-gray-800 hover:text-gray-600">Courses</a>
              <a href="/addcourse" className="block py-2 px-4 text-gray-800 hover:text-gray-600">Add Course</a>
            </>
          )}
          <a href="/about" className="block py-2 px-4 text-gray-800 hover:text-gray-600">About</a>
          <div className="space-y-4">
            {!isLoggedIn ? (
              <>
                <a href="/login" className="block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-lg">Login</a>
                <a href="/signup" className="block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-lg">Sign Up</a>
              </>
            ) : (
              <button onClick={handleLogout} className="block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-lg">Logout</button>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
