'use client'

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setError('');
        setUser(null);

        const loginData = {
            email: email,
            password: password,
        };

        try {
            const response = await fetch('https://react-interview.crd4lc.easypanel.host/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            const data = await response.json();

            if (response.ok && data.status) {
                const token = data.data.token;
                localStorage.setItem('authToken', token);
                console.log('Token:', token);
                setUser(data.data.user);
                Swal.fire({
                    title: 'Login successful!',
                    text: 'Redirecting you to the home page...',
                    icon: 'success',
                    confirmButtonText: 'OK',
                }).then(() => {
                    router.push('/');
                });
            } else {
                setError(data.status_message || 'Login failed. Please try again.');
            }
        } catch (err) {
            setError('An error occurred while logging in.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="h-screen flex justify-center items-center w-full bg-gray-100">
            <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
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
                        <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    <button
                        type="submit"
                        className={`w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg focus:outline-none ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
