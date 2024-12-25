'use client'

import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <div className="h-screen   flex justify-center items-center">
            <div className="w-full max-w-7xl flex flex-col lg:flex-row p-8 bg-white shadow-lg rounded-lg">
                <div className="lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0">
                    <img
                        src="https://www.digitalgurujii.com/wp-content/uploads/2020/04/contact-us-furhter.gif"
                        alt="Contact Us"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>

                <div className="lg:w-1/2 lg:pl-8">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>
                    <form>
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-700">Message</label>
                            <textarea
                                id="message"
                                className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                rows="4"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                        <button
                            type="submit"
                            className={`w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg focus:outline-none ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
