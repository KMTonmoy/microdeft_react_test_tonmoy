'use client'

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

const Page = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        if (!name || !email || !password) {
            setMessage('Please fill in all fields.');
            setIsSubmitting(false);
            return;
        }

        const requestBody = {
            name,
            email,
            password
        };

        try {
            const response = await fetch('https://react-interview.crd4lc.easypanel.host/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            const data = await response.json();

            if (response.ok) {
                const token = data.data.token;
                localStorage.setItem('authToken', token);

                Swal.fire({
                    title: 'Registration Successful!',
                    text: 'You are now registered. Redirecting to your dashboard...',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                }).then(() => {
                    router.push('/');
                });
            } else {
                setMessage(data.message || 'Something went wrong.');
                Swal.fire({
                    title: 'Error!',
                    text: data.message || 'Please try again.',
                    icon: 'error',
                    confirmButtonText: 'Okay'
                });
            }
        } catch (error) {
            setMessage('Network error. Please try again later.');
            Swal.fire({
                title: 'Error!',
                text: 'An error occurred while registering.',
                icon: 'error',
                confirmButtonText: 'Okay'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="h-screen bg-gray-100 flex justify-center items-center">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Register</h2>
                <form onSubmit={handleSubmit}>
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
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {message && <p className="text-red-500 text-sm mb-4">{message}</p>}

                    <button
                        type="submit"
                        className={`w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg focus:outline-none ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Register'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Page;
