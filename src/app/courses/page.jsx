'use client'
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
    const router = useRouter();

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('https://react-interview.crd4lc.easypanel.host/api/course', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                if (data.status) {
                    setCourses(data.data.data);
                }
            } catch (error) {
                console.error("Error fetching courses:", error);
            } finally {
                setLoading(false);
            }
        };

        if (token) {
            fetchCourses();
        } else {
            setLoading(false);
            Swal.fire({
                icon: 'warning',
                title: 'Login Required',
                text: 'Please log in to view the courses.',
                confirmButtonText: 'OK',
            }).then(() => {
                router.push('/login');
            });
        }
    }, [token, router]);

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-semibold text-center mb-6">My Courses</h2>
            {loading ? (
                <div className="text-center">Loading...</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {courses.map(course => (
                        <div key={course.id} className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
                            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold">{course.title}</h3>
                                <p className="text-gray-700 text-base">{course.description}</p>
                                <p className="mt-2 text-gray-500 text-sm">Instructor: {course.instructor_name}</p>
                                <p className="mt-2 text-gray-500 text-sm">Author: {course.author?.name}</p>
                                <p className="mt-1 text-gray-500 text-sm">Created At: {course.created_at}</p>
                                <span
                                    className="mt-2 inline-block px-3 py-1 text-xs font-semibold rounded-full"
                                    style={{
                                        backgroundColor: course.badge_color,
                                        color: 'white'
                                    }}
                                >
                                    {course.badge_text}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Courses;
