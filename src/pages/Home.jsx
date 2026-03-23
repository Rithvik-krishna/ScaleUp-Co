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
            {/* SEO-visible text for Google indexing — visually hidden from users */}
            <div style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>
                <h1>ScaleUpCo</h1>
                <p>ScaleUpCo is a digital solutions company helping businesses scale with modern websites, branding, and performance-driven systems.</p>
            </div>
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
