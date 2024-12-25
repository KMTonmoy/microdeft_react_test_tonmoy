'use client'

import React from 'react';

const page = () => {
    return (
        <div className="bg-gray-100 py-10">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">Our Services</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Web Development</h3>
                        <p className="text-gray-600 mb-4">We provide full-stack web development services, including front-end and back-end development, using modern technologies such as React, Node.js, and more.</p>
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mobile App Development</h3>
                        <p className="text-gray-600 mb-4">We build high-quality mobile applications for both iOS and Android platforms, ensuring performance and user experience.</p>
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">UI/UX Design</h3>
                        <p className="text-gray-600 mb-4">Our team creates stunning UI/UX designs that provide intuitive, engaging experiences for your users, helping your product stand out.</p>
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">SEO Optimization</h3>
                        <p className="text-gray-600 mb-4">Our SEO services will help your website rank higher in search engine results, increasing visibility and driving more traffic to your site.</p>
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Digital Marketing</h3>
                        <p className="text-gray-600 mb-4">We offer digital marketing services, including social media management, content marketing, and online ad campaigns to boost your business.</p>
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">E-commerce Solutions</h3>
                        <p className="text-gray-600 mb-4">We specialize in building e-commerce platforms with seamless shopping experiences, secure payments, and scalable solutions for your business.</p>
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
