'use client'

import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import './styles.css';

const Page = () => {
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const token = localStorage.getItem('authToken');
                const response = await fetch('https://react-interview.crd4lc.easypanel.host/api/course', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                });

                const data = await response.json();

                if (data.status) {
                    setCourses(data.data.data);
                } else {
                    setError('Failed to fetch courses');
                }
            } catch (err) {
                setError('An error occurred while fetching courses');
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

        fetchCourses();
    }, []);

    return (
        <div className="course-container">
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div className="course-cards">
                {courses.map(course => (
                    <div key={course.id} className="course-card">
                        <img src={course.image} alt={course.title} className="course-image" />
                        <div className="course-content">
                            <h2 className="course-title">{course.title}</h2>
                            <p className="course-description">{course.description}</p>
                            <span className={`badge ${course.badge_color}`}>{course.badge_text}</span>
                            <p className="course-instructor">Instructor: {course.instructor_name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
