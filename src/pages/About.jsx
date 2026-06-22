import React, { useEffect } from 'react';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import FinalCTA from '../components/sections/FinalCTA';
import SEO from '../components/seo/SEO';
import Breadcrumbs from '../components/ui/Breadcrumbs';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const schema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About ScaleUp Co",
        "description": "Learn about ScaleUp Co, a leading Digital Growth & AI Automation Agency in Bangalore helping businesses scale.",
        "publisher": {
            "@type": "Organization",
            "name": "ScaleUp Co",
            "url": "https://www.scaleupco.online"
        }
    };

    return (
        <div className="flex flex-col w-full pt-20 bg-dark-bg text-white">
            <SEO 
                title="About ScaleUp Co | Digital Growth & AI Automation Agency"
                description="Learn about the ScaleUp Co story, our mission to empower local businesses in Bangalore, and our expertise in web development, SEO, and AI automation."
                canonical="https://www.scaleupco.online/about"
                keywords="ScaleUp Co, About ScaleUp Co, Web Development Bangalore, AI Automation India, SEO Services"
                schema={schema}
            />

            <div className="py-24 border-b border-gray-800/40" style={{ background: '#0b0f1c' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <Breadcrumbs items={[{ name: 'About Us', path: '/about' }]} />
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-6">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                                We Are <span className="text-gradient">ScaleUp Co</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                                We started with a simple observation: Most local businesses have terrible websites that actually cost them money and opportunities every single day.
                            </p>
                            <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                At ScaleUp Co, our mission is to arm ambitious local business owners with enterprise-grade digital systems so they can dominate their local markets, scale without friction, and grow predictably.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-600 rounded-3xl -rotate-3 opacity-10 blur-xl"></div>
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                                alt="ScaleUp Co Team working on SEO and AI Automation solutions"
                                className="rounded-3xl shadow-xl relative z-10 w-full object-cover border border-gray-800"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Founder Story & E-E-A-T Section */}
            <div className="py-24" style={{ background: '#060810' }}>
                <div className="max-w-4xl mx-auto px-6 space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-white">Why ScaleUp Co Exists</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Traditional marketing agencies focus on vanity metrics like impressions and clicks. But for a local business in Bangalore or an ambitious startup in India, the only metric that truly matters is **revenue**. ScaleUp Co was founded to bridge the gap between complex software capabilities and practical business needs. We deliver conversion-focused systems that work 24/7.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-white">Our Founder's Vision</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Formed by a team of experienced web developers, search engine optimization experts, and machine learning engineers, ScaleUp Co builds bespoke digital infrastructure. We combine advanced search strategy (SEO) with cutting-edge conversational intelligence (AI chatbots and voice receptionists) to ensure that no lead is left behind.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                        <div className="p-8 rounded-2xl border border-gray-800" style={{ background: '#0b0f1c' }}>
                            <h3 className="text-xl font-bold mb-4 text-[#3b82f6]">Our Mission</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                To empower businesses by deploying high-performance digital ecosystems that simplify lead capture, automate operations, and scale revenue predictably.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl border border-gray-800" style={{ background: '#0b0f1c' }}>
                            <h3 className="text-xl font-bold mb-4 text-[#3b82f6]">Our Core Promise</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                We hold ourselves to strict quality and conversion performance metrics. If it doesn't improve your bottom line, we don't build it.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <WhyChooseUs />
            <FinalCTA />
        </div>
    );
};

export default About;
