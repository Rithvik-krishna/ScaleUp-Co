import React, { useEffect } from 'react';
import ServicesOverview from '../components/sections/ServicesOverview';
import FinalCTA from '../components/sections/FinalCTA';

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col w-full pt-20">
            <div className="bg-dark-bg py-20 border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        Our <span className="text-gradient">Services</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Comprehensive digital growth systems designed from the ground up to scale your local business.
                    </p>
                </div>
            </div>

            <ServicesOverview showViewAll={false} />
            <FinalCTA />
        </div>
    );
};

export default Services;
