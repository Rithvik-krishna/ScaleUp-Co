import React, { useEffect } from 'react';
import { Utensils, Stethoscope, Building2, Dumbbell, Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import FinalCTA from '../components/sections/FinalCTA';

const Industries = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const industries = [
        {
            name: "Clinics & Healthcare",
            icon: <Stethoscope size={32} className="text-[#00E1FF]" />,
            tagline: "Website Development for Clinics",
            description: "High-performance, HIPAA-compliant patient acquisition sites. We help medical practices and specialty clinics in Bangalore schedule appointments automatically and reduce manual front-desk calls.",
            strategy: "Deploy patient booking portals + Local Business Profile visibility + AI Voice Receptionist."
        },
        {
            name: "Restaurants & Hospitality",
            icon: <Utensils size={32} className="text-[#00E1FF]" />,
            tagline: "SEO & Digital Visibility for Restaurants",
            description: "Increase local search visibility. We optimize restaurant menus, GBP tags, and Google Maps listings so food businesses rank #1 when customers search for dining options nearby.",
            strategy: "Dominate local food-intent queries + customer review generation systems + WhatsApp order routing."
        },
        {
            name: "Real Estate & Agencies",
            icon: <Building2 size={32} className="text-[#00E1FF]" />,
            tagline: "AI Chatbots for Real Estate Businesses",
            description: "24/7 lead qualification and scheduling. Our real estate solutions automatically follow up with property buyers, filter budget specs, and book site visits directly into your calendar.",
            strategy: "Deploy multi-channel lead qualifying chat assistants + Meta Ads lead routing + CRM setups."
        },
        {
            name: "Gyms & Fitness Centers",
            icon: <Dumbbell size={32} className="text-[#00E1FF]" />,
            tagline: "Lead Generation for Gyms",
            description: "Steady inbound membership funnels. We build custom landing pages and run highly targeted advertising campaigns to capture trial memberships and automate new member signups.",
            strategy: "Lead capture page templates + SMS automatic reminders + retention email sequences."
        },
        {
            name: "Startups & E-Commerce",
            icon: <Rocket size={32} className="text-[#00E1FF]" />,
            tagline: "Workflow Automation for Startups",
            description: "Automate manual tasks and eliminate data silos. We integrate CRMs, messaging channels, and payment APIs to help fast-growing Indian startups operate efficiently at scale.",
            strategy: "Develop custom API connectors + CRM pipelines + automated reporting dashboards."
        }
    ];

    const schema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "ScaleUp Co - Industries Served",
        "description": "Custom digital solutions, websites, local SEO, and AI automation tailored for Clinics, Restaurants, Real Estate, Gyms, and Startups.",
        "url": "https://www.scaleupco.online/industries"
    };

    return (
        <div className="flex flex-col w-full pt-20 bg-dark-bg text-white">
            <SEO 
                title="Industries We Serve | Web Development, SEO & AI Automation Solutions"
                description="Custom digital solutions designed for clinics, restaurants, real estate agencies, gyms, and startups. Learn how ScaleUp Co optimizes lead generation by industry niche."
                canonical="https://www.scaleupco.online/industries"
                keywords="Website design for clinics, Restaurant SEO Bangalore, AI chatbots for Real Estate, Gym lead generation India, Startup automation"
                schema={schema}
            />

            <div className="py-20 border-b border-gray-800/40" style={{ background: '#0b0f1c' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <Breadcrumbs items={[{ name: 'Industries', path: '/industries' }]} />
                    
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight mt-6">
                        Niche <span className="text-gradient">Industry Solutions</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                        Generic marketing copy doesn't work. We deliver specialized systems designed around the specific operations, search intents, and customer behaviors of your industry.
                    </p>
                </div>
            </div>

            {/* Industries Hub Grid */}
            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((ind, index) => (
                        <div 
                            key={index}
                            className="p-8 rounded-2xl border border-gray-800 flex flex-col justify-between card-hover-premium"
                            style={{ background: '#0b0f1c' }}
                        >
                            <div className="space-y-6">
                                <div className="w-16 h-16 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
                                    {ind.icon}
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold text-white">{ind.name}</h3>
                                    <p className="text-xs font-semibold font-mono text-[#3b82f6] uppercase tracking-wider">{ind.tagline}</p>
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {ind.description}
                                </p>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-800/60 space-y-4">
                                <div>
                                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">Recommended Strategy</h4>
                                    <p className="text-xs text-gray-300 leading-relaxed">{ind.strategy}</p>
                                </div>
                                <Link to="/contact" className="inline-flex items-center gap-2 text-xs font-bold text-[#3b82f6] hover:text-white transition-colors">
                                    Get {ind.name} Strategy <ArrowRight size={12} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <FinalCTA />
        </div>
    );
};

export default Industries;
