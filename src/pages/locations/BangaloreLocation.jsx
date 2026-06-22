import React, { useEffect } from 'react';
import { MapPin, CheckCircle, ArrowRight, Laptop, Search, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/seo/SEO';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import FinalCTA from '../../components/sections/FinalCTA';

const BangaloreLocation = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            title: "Website Development Bangalore",
            icon: <Laptop className="w-8 h-8 text-[#00E1FF]" />,
            desc: "Custom, conversion-focused websites engineered for local businesses, clinics, gyms, and real estate offices. Our sites load under 1.5s, are fully mobile-optimized, and act as automated 24/7 lead generators.",
            link: "/services/web-development"
        },
        {
            title: "SEO Services Bangalore",
            icon: <Search className="w-8 h-8 text-[#00E1FF]" />,
            desc: "Dominate search results in Karnataka. We build local authority through precise Google Business Profile setups, review campaigns, local citation indexation, and niche keyword targeting.",
            link: "/services/seo"
        },
        {
            title: "AI Automation Bangalore",
            icon: <Cpu className="w-8 h-8 text-[#00E1FF]" />,
            desc: "Arm your startup or local operation with custom AI chatbots, AI voice receptionists, and automated CRM workflows that save hours of manual data entry and capture every caller lead.",
            link: "/services/business-automation"
        }
    ];

    const localFAQs = [
        {
            q: "Why should a Bangalore business invest in local SEO?",
            a: "Over 80% of local consumers search online before buying. Ranking in the Local 3-Pack on Google Business Profile ensures your clinic, restaurant, or business is found first by high-intent local buyers."
        },
        {
            q: "Do you build custom websites for startups and e-commerce?",
            a: "Yes. We design high-performance sites built on React and modern frameworks. We specialize in custom integrations (CRMs, payment gateways, WhatsApp APIs) tailored to Indian startups."
        },
        {
            q: "What is your typical turnaround time for a project?",
            a: "Simple custom websites are built and deployed within 2 to 3 weeks. Complex workflows and custom AI integrations typically take 4 to 6 weeks, depending on project specifications."
        }
    ];

    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "ScaleUp Co Bangalore",
        "image": "https://www.scaleupco.online/logo.png",
        "url": "https://www.scaleupco.online/locations/bangalore",
        "telephone": "+918095177537",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bangalore",
            "addressLocality": "Bangalore",
            "addressRegion": "Karnataka",
            "postalCode": "560001",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 12.9716,
            "longitude": 77.5946
        },
        "areaServed": [
            {
                "@type": "AdministrativeArea",
                "name": "Bangalore, Karnataka, India"
            }
        ]
    };

    return (
        <div className="flex flex-col w-full pt-20 bg-dark-bg text-white">
            <SEO 
                title="Web Development, SEO & AI Automation Bangalore | ScaleUp Co"
                description="ScaleUp Co is Bangalore's leading digital agency. We construct high-converting websites, Local SEO visibility campaigns, and AI chatbots for Bangalore businesses."
                canonical="https://www.scaleupco.online/locations/bangalore"
                keywords="Web Development Bangalore, SEO Services Bangalore, AI Automation Bangalore, Website designer Bangalore"
                schema={schema}
            />

            <div className="py-20 border-b border-gray-800/40" style={{ background: '#0b0f1c' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <Breadcrumbs items={[{ name: 'Locations', path: '/locations/bangalore' }, { name: 'Bangalore', path: '/locations/bangalore' }]} />
                    
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-6 gap-6">
                        <div>
                            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#00E1FF] mb-3">
                                <MapPin size={16} /> Digital Solutions in Karnataka, India
                            </span>
                            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                                ScaleUp Co <span className="text-gradient">Bangalore</span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mt-4">
                                Empowering Bangalore businesses, Indian startups, and local retailers with high-converting web design, search visibility, and AI-driven growth systems.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Info */}
            <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white">Local Digital Partners for Bangalore's Ambitious Brands</h2>
                        <p className="text-gray-300 leading-relaxed">
                            As Bangalore's tech ecosystem continues to surge, standing out online is no longer optional. A slow website or missing Google Maps listing directly translates to lost revenue. ScaleUp Co delivers clean, custom engineering that ensures you rank higher, capture leads immediately, and automate administrative tasks using advanced AI.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-white">Our Local Specialized Solutions</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {services.map((service, index) => (
                                <div key={index} className="p-6 rounded-2xl border border-gray-800 bg-dark-surface/40 flex flex-col justify-between">
                                    <div className="space-y-4">
                                        <div className="w-12 h-12 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
                                            {service.icon}
                                        </div>
                                        <h4 className="text-lg font-bold text-white">{service.title}</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed">{service.desc}</p>
                                    </div>
                                    <Link to={service.link} className="inline-flex items-center gap-2 text-xs font-bold text-[#3b82f6] hover:text-white transition-colors mt-6">
                                        Learn More <ArrowRight size={12} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Local FAQs */}
                    <div className="space-y-8 pt-6">
                        <h3 className="text-2xl font-bold text-white">Bangalore SEO & Web Development FAQs</h3>
                        <div className="space-y-6">
                            {localFAQs.map((faq, index) => (
                                <div key={index} className="border-b border-gray-800/80 pb-6">
                                    <h4 className="text-lg font-bold text-white mb-2">{faq.q}</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar Info Card */}
                <div className="space-y-8">
                    <div className="p-8 rounded-3xl border border-gray-800 space-y-6 bg-dark-surface">
                        <h3 className="text-xl font-bold text-white">Bangalore Operations Hub</h3>
                        
                        <div className="space-y-4 text-sm text-gray-300">
                            <div>
                                <h5 className="font-semibold text-gray-500">Service Locations</h5>
                                <p>Indiranagar, Koramangala, HSR Layout, Whitefield, Jayanagar, Marathahalli, and surrounding Bangalore areas.</p>
                            </div>
                            <div>
                                <h5 className="font-semibold text-gray-500">Consultation Schedule</h5>
                                <p>Monday to Saturday (9:00 AM - 6:00 PM IST)</p>
                            </div>
                            <div>
                                <h5 className="font-semibold text-gray-500">Direct Contact</h5>
                                <p className="font-mono text-[#00E1FF]">+91 8095177537</p>
                                <p>scaleupco.contact@gmail.com</p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Link to="/contact">
                                <button className="w-full py-3 font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center justify-center gap-2">
                                    Book Free Consultation <ArrowRight size={16} />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <FinalCTA />
        </div>
    );
};

export default BangaloreLocation;
