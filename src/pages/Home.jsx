import React, { useEffect } from 'react';
import SEO from '../components/seo/SEO';
import Hero from '../components/sections/Hero';
import Problem from '../components/sections/Problem';
import ServicesOverview from '../components/sections/ServicesOverview';
import Portfolio from '../components/sections/Portfolio';
import Process from '../components/sections/Process';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import DetailedSEOContent from '../components/sections/DetailedSEOContent';
import Pricing from '../components/sections/Pricing';
import Trust from '../components/sections/Trust';
import FAQ from '../components/sections/FAQ';
import DiscussProject from '../components/sections/DiscussProject';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col w-full">
            <SEO 
                title="ScaleUp Co | Web Development, SEO, Lead Generation & AI Automation"
                description="ScaleUp Co helps businesses grow with websites, SEO, lead generation, paid advertising, CRM automation, AI chatbots, AI voice receptionists, and custom AI agents."
                canonical="https://www.scaleupco.online"
                keywords="ScaleUp Co, web development company, SEO agency, lead generation agency, CRM automation, AI automation agency, AI chatbot development, digital growth agency, business automation services"
            />
            {/* SEO-visible text for Google indexing — visually hidden from users */}
            <div style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>
                <h1>ScaleUp Co – Growth Systems, Websites & AI Automation</h1>
                <p>ScaleUp Co helps businesses get found, generate leads, convert customers, and automate growth using websites, SEO, paid advertising, CRM systems, and custom AI systems.</p>
            </div>
            <Hero />
            <Problem />
            <ServicesOverview />
            <Portfolio />
            <Process />
            <WhyChooseUs />
            <DetailedSEOContent />
            <Pricing />
            <Trust />
            <FAQ />
            <DiscussProject />
        </div>
    );
};

export default Home;
