import React, { useEffect } from 'react';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import FinalCTA from '../components/sections/FinalCTA';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col w-full pt-20">
            <div className="bg-white py-24 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-gray-900">
                            We Are <span className="text-blue-600">ScaleUp Co.</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                            We started with a simple observation: Most local businesses have terrible websites that actually cost them money every single day.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Our mission is to arm ambitious local business owners with enterprise-grade digital systems so they can dominate their markets and scale without friction.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-600 rounded-3xl -rotate-3 opacity-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                            alt="Our Team"
                            className="rounded-3xl shadow-xl relative z-10 w-full object-cover"
                        />
                    </div>
                </div>
            </div>

            <WhyChooseUs />
            <FinalCTA />
        </div>
    );
};

export default About;
