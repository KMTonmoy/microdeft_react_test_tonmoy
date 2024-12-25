import React from 'react';

const IntroSection = () => {
    return (
        <section className="relative bg-blue-500 text-white py-16 px-4">
            <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('https://www.infoprolearning.com/wp-content/uploads/2020/10/Six-Phases-of-a-Learner%E2%80%99s-Journey-kc.png')" }}></div>
            <div className="relative z-10 text-center">
                <h2 className="text-4xl font-extrabold mb-4">Unlock Your Learning Journey</h2>
                <p className="text-xl mb-8">Join Learnify to explore, learn, and grow with our expertly designed courses.</p>
                <a href="#courses" className="inline-block py-2 px-6 bg-yellow-500 text-blue-800 font-semibold rounded-full hover:bg-yellow-400 transition duration-300">
                    Explore Courses
                </a>
            </div>
        </section>
    );
};

export default IntroSection;
