'use client'

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const AddCourse = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        badge_text: '',
        badge_color: '#ff0000',
        instructor_name: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.title || !formData.description || !formData.instructor_name) {
            Swal.fire({
                title: 'Error!',
                text: 'Please fill in all the required fields.',
                icon: 'error',
                confirmButtonText: 'Okay'
            });
            return;
        }

        setIsLoading(true);
        try {
            const token = localStorage.getItem('authToken');
            const response = await fetch('https://react-interview.crd4lc.easypanel.host/api/course', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.status) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Course added successfully.',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                });
                setFormData({
                    title: '',
                    description: '',
                    badge_text: '',
                    badge_color: '#ff0000',
                    instructor_name: ''
                });
            } else {
                setError('Failed to add the course');
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to add the course.',
                    icon: 'error',
                    confirmButtonText: 'Okay'
                });
            }
        } catch (err) {
            setError('An error occurred while adding the course');
            Swal.fire({
                title: 'Error!',
                text: err.message || 'Something went wrong.',
                icon: 'error',
                confirmButtonText: 'Okay'
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='h-screen p-10 flex items-center justify-center bg-gray-50'>
            <motion.div
                className=" w-full mx-auto p-8 bg-white shadow-xl rounded-lg border border-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-center text-3xl font-semibold text-gray-700 mb-6">Add a New Course</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Course Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className="mt-2 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Course Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            className="mt-2 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        ></textarea>
                    </div>

                    <div>
                        <label htmlFor="badge_text" className="block text-sm font-medium text-gray-700">Badge Text</label>
                        <input
                            type="text"
                            id="badge_text"
                            name="badge_text"
                            value={formData.badge_text}
                            onChange={handleChange}
                            className="mt-2 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="badge_color" className="block text-sm font-medium text-gray-700">Badge Color</label>
                        <input
                            type="color"
                            id="badge_color"
                            name="badge_color"
                            value={formData.badge_color}
                            onChange={handleChange}
                            className="mt-2 block w-16"
                        />
                    </div>

                    <div>
                        <label htmlFor="instructor_name" className="block text-sm font-medium text-gray-700">Instructor Name</label>
                        <input
                            type="text"
                            id="instructor_name"
                            name="instructor_name"
                            value={formData.instructor_name}
                            onChange={handleChange}
                            required
                            className="mt-2 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3 mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                    >
                        {isLoading ? 'Adding Course...' : 'Add Course'}
                    </button>
                </form>

                {error && (
                    <motion.p
                        className="mt-4 text-center text-red-500 font-semibold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {error}
                    </motion.p>
                )}
            </motion.div>
        </div>
    );
};

export default AddCourse;
