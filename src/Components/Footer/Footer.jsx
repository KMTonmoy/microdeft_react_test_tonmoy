'use client'
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-purple-600">About Us</h3>
            <p className="text-gray-400">
              Learnify is an online learning platform offering a variety of courses to enhance your skills.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-purple-600">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-purple-600 transition duration-200">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-600 transition duration-200">Courses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-600 transition duration-200">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-600 transition duration-200">Privacy Policy</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-purple-600">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-600 transition duration-200">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition duration-200">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition duration-200">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition duration-200">
                <FaInstagram />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-center text-gray-400"
        >
          <p>&copy; 2024 Learnify. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
