import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-50 py-12 px-6">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold text-purple-600 mb-6">About Learnify</h1>
                <p className="text-xl text-gray-700 mb-8">
                    Learnify is an online learning platform designed to help individuals of all ages
                    learn new skills, enhance their knowledge, and grow personally and professionally.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex justify-center items-center">
                        <img
                            src="https://150000629.v2.pressablecdn.com/wp-content/uploads/2021/01/learn--scaled.jpg"
                            alt="Learning"
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            At Learnify, we are committed to providing top-quality educational content
                            and learning tools to make the process of acquiring knowledge easier and
                            more accessible. We aim to empower learners from all walks of life to reach
                            their full potential.
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Learnify offers a wide range of online courses, covering topics from web
                        development and programming to design, business, and more. We provide
                        interactive lessons, video tutorials, quizzes, and practical exercises to
                        help you master new skills at your own pace.
                    </p>
                </div>

           
            </div>
        </div>
    );
};

export default About;
