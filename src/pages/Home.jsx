import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import Problem from '../components/sections/Problem';
import ServicesOverview from '../components/sections/ServicesOverview';
import Portfolio from '../components/sections/Portfolio';
import Process from '../components/sections/Process';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Pricing from '../components/sections/Pricing';
import Trust from '../components/sections/Trust';
import FAQ from '../components/sections/FAQ';
import FinalCTA from '../components/sections/FinalCTA';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col w-full">
            <Hero />
            <Problem />
            <ServicesOverview />
            <Portfolio />
            <Process />
            <WhyChooseUs />
            <Pricing />
            <Trust />
            <FAQ />
            <FinalCTA />
        </div>
    );
};

export default Home;
