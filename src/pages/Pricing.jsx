import React, { useEffect } from 'react';
import PricingSection from '../components/sections/Pricing';
import FinalCTA from '../components/sections/FinalCTA';

const Pricing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col w-full pt-20">
            <div className="bg-dark-bg py-20 border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        Transparent <span className="text-gradient">Pricing</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Choose the growth system that fits your current business stage. No hidden fees.
                    </p>
                </div>
            </div>

            <PricingSection />
            <FinalCTA />
        </div>
    );
};

export default Pricing;
