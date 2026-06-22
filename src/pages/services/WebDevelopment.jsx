import React, { useEffect } from 'react';
import { Layout, Shield, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/seo/SEO';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import FinalCTA from '../../components/sections/FinalCTA';

const WebDevelopment = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        "Custom, responsive web architectures",
        "Mobile-first layouts & high-speed asset loads",
        "Lead capture integration (forms, CTAs, HubSpot)",
        "Search-optimized code structures (semantic HTML)",
        "HTTPS security & SSL configuration",
        "Vite + React development for lightning-fast speeds"
    ];

    const faqs = [
        { q: "What is the typical time frame for a website build?", a: "Most custom websites are completed and launched within 2 to 3 weeks. Complex platforms with customer portals or custom API setups take 4 to 6 weeks." },
        { q: "Will my website look good and load fast on mobile?", a: "Yes. Every website we build is mobile-first, responsive, and speed-optimized, loading in under 1.5 seconds to maximize conversion rates." },
        { q: "Is basic search engine optimization (SEO) included?", a: "Yes. We implement technical SEO foundations on every site, including canonical links, sitemaps, semantic tag structures, and speed configurations." },
        { q: "Do I get full ownership of my website files?", a: "Absolutely. Once the final payment is cleared, you own 100% of the code, designs, and files. We do not lock you into proprietary hosting platforms." },
        { q: "Do you provide hosting and maintenance support?", a: "Yes. We offer reliable, secure cloud hosting setups and ongoing maintenance packages to keep your site updated and secure." }
    ];

    // FAQ JSON-LD Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <div className="flex flex-col w-full pt-20 bg-dark-bg text-white">
            <SEO 
                title="Web Development Agency Bangalore | Website Design Services"
                description="ScaleUp Co is Bangalore's leading web development agency. We build fast, high-converting, custom websites designed to convert visitors into clients."
                canonical="https://www.scaleupco.online/services/web-development"
                keywords="Web Development Agency, Website Development Services, Business Website Development, Web Development Bangalore"
                schema={faqSchema}
            />

            <div className="py-20 border-b border-gray-800/40" style={{ background: '#0b0f1c' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <Breadcrumbs items={[{ name: 'Services', path: '/services' }, { name: 'Web Development', path: '/services/web-development' }]} />
                    
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight mt-6">
                        Website <span className="text-gradient">Development</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                        High-performance, conversion-focused websites designed to turn visitors into customers. Fully responsive, fast-loading, and built for growth in Bangalore and beyond.
                    </p>
                </div>
            </div>

            {/* Service Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-10">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Why Your Business Needs More Than A Templated Website</h2>
                        <p className="text-gray-300 leading-relaxed">
                            A templated website might look fine initially, but it often carries bloated code, slow loading speeds, and poor mobile responsiveness. In today's competitive digital landscape, a slow website directly leads to lost sales. ScaleUp Co builds custom, lightweight, React-powered architectures that deliver lightning-fast performance, keeping visitors engaged and maximizing your lead conversion rates.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Whether you represent a clinic in Indiranagar, a real estate firm in Bangalore, or a transport logistics startup, we construct your site around your specific client acquisition goals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                        <div className="p-6 border border-gray-800 rounded-2xl bg-dark-surface/40">
                            <Layout size={24} className="text-[#3b82f6] mb-4" />
                            <h4 className="font-bold text-white mb-2">Custom Design</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Tailored to your specific brand identity, avoiding cookie-cutter templates.</p>
                        </div>
                        <div className="p-6 border border-gray-800 rounded-2xl bg-dark-surface/40">
                            <Zap size={24} className="text-[#3b82f6] mb-4" />
                            <h4 className="font-bold text-white mb-2">Speed Optimized</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Fast loading times (under 1.5s) to retain traffic and improve search visibility.</p>
                        </div>
                        <div className="p-6 border border-gray-800 rounded-2xl bg-dark-surface/40">
                            <Shield size={24} className="text-[#3b82f6] mb-4" />
                            <h4 className="font-bold text-white mb-2">Lead Integration</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Automated lead routing from site forms directly to your sales pipeline CRM.</p>
                        </div>
                    </div>

                    <div className="space-y-4 pt-6">
                        <h3 className="text-2xl font-bold">Core Features Included</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {features.map((feat, index) => (
                                <div key={index} className="flex items-center gap-3 text-sm text-gray-300">
                                    <CheckCircle2 size={16} className="text-[#00E1FF] shrink-0" />
                                    <span>{feat}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="space-y-6 pt-8">
                        <h3 className="text-2xl font-bold">Web Development FAQs</h3>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border-b border-gray-800 pb-4">
                                    <h4 className="text-base font-bold text-white mb-2">{faq.q}</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar Card */}
                <div>
                    <div className="p-8 rounded-3xl border border-gray-800 bg-dark-surface space-y-6">
                        <h3 className="text-xl font-bold text-white">Let's Build Your Foundation</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Deploy a high-converting website engineered to represent your brand and attract qualified prospects.
                        </p>
                        <div className="pt-4">
                            <Link to="/contact">
                                <button className="w-full py-3 font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center justify-center gap-2">
                                    Launch My Business <ArrowRight size={16} />
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

export default WebDevelopment;
