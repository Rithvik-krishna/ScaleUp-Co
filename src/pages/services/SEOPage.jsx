import React, { useEffect } from 'react';
import { Search, Shield, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/seo/SEO';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import FinalCTA from '../../components/sections/FinalCTA';

const SEOPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        "Local SEO & Google Business Profile (GBP) setup",
        "Competitor search analysis & keyword research",
        "On-page content optimization (headings, copy, meta)",
        "Technical SEO fixes (site speed, mobile errors, sitemaps)",
        "Local citation building & directory indexing",
        "Ongoing analytics tracking & keyword ranking updates"
    ];

    const faqs = [
        { q: "How long does it take to see SEO results?", a: "While technical fixes and local sitemap indexing can show immediate indexing changes within weeks, organic keyword authority and local ranking improvements typically take 3 to 6 months." },
        { q: "What is Local SEO and do I need it?", a: "Local SEO focuses on ranking your business in geographical searches (like 'SEO services Bangalore' or 'dentist near me'). If you serve local clients, Local SEO is critical." },
        { q: "Do you guarantee #1 Google rankings?", a: "No legitimate agency can guarantee #1 rankings because search engine algorithms change constantly. However, we follow search engine guidelines and have a proven track record of boosting rankings." },
        { q: "Will you optimize my Google Business Profile (GBP)?", a: "Yes. GBP optimization (categories, attributes, review setups, posting strategies) is a central part of our Local SEO services." },
        { q: "How do you track ranking improvements?", a: "We monitor your rankings using professional platforms and provide monthly performance reports tracking keyword positions, search traffic, and conversions." }
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
                title="SEO Services Bangalore | Local SEO & Google Ranking Solutions"
                description="ScaleUp Co provides highly optimized SEO services in Bangalore. We specialize in local search optimization, Google Business Profile setups, and ranking strategies."
                canonical="https://www.scaleupco.online/services/seo"
                keywords="SEO Services, Local SEO, Google Ranking, SEO Services Bangalore"
                schema={faqSchema}
            />

            <div className="py-20 border-b border-gray-800/40" style={{ background: '#0b0f1c' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <Breadcrumbs items={[{ name: 'Services', path: '/services' }, { name: 'SEO & Visibility', path: '/services/seo' }]} />
                    
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight mt-6">
                        Google <span className="text-gradient">Visibility</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                        Increase your visibility on Google with local SEO, Google Business Profile optimization, and strategies that help local customers find your business first.
                    </p>
                </div>
            </div>

            {/* Service Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-10">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Why Having a Website Isn't Enough Without SEO</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Many businesses invest in design but ignore search engine visibility. If your target customers can't find you on Google, your website remains invisible. Local SEO is the process of putting your business in front of buyers at the exact moment they search for your service. By ranking higher for commercial search queries, you capture high-intent traffic without relying exclusively on expensive paid advertising campaigns.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            ScaleUp Co uses structured, search-engine-friendly schemas, citation building, and custom local landing page structures to boost your visibility in Bangalore, Karnataka, and across India.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                        <div className="p-6 border border-gray-800 rounded-2xl bg-dark-surface/40">
                            <Search size={24} className="text-[#3b82f6] mb-4" />
                            <h4 className="font-bold text-white mb-2">Local SEO</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Optimize Google maps and local business profile queries to rank in the local 3-pack.</p>
                        </div>
                        <div className="p-6 border border-gray-800 rounded-2xl bg-dark-surface/40">
                            <Zap size={24} className="text-[#3b82f6] mb-4" />
                            <h4 className="font-bold text-white mb-2">GBP Optimization</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Proper categorization, review strategies, and location profile optimization.</p>
                        </div>
                        <div className="p-6 border border-gray-800 rounded-2xl bg-dark-surface/40">
                            <Shield size={24} className="text-[#3b82f6] mb-4" />
                            <h4 className="font-bold text-white mb-2">Review Setup</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Establish review generation systems to build credibility and trust signals online.</p>
                        </div>
                    </div>

                    <div className="space-y-4 pt-6">
                        <h3 className="text-2xl font-bold">Included Features</h3>
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
                        <h3 className="text-2xl font-bold">SEO FAQs</h3>
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
                        <h3 className="text-xl font-bold text-white">Dominate Google Search</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Get your business found on Google maps and organic search results by local clients ready to buy.
                        </p>
                        <div className="pt-4">
                            <Link to="/contact">
                                <button className="w-full py-3 font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center justify-center gap-2">
                                    Grow My Business <ArrowRight size={16} />
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

export default SEOPage;
