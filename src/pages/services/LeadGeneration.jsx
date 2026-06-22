import React, { useEffect } from 'react';
import { Target, Users, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/seo/SEO';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import FinalCTA from '../../components/sections/FinalCTA';

const LeadGeneration = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        "Custom, conversion-focused landing page builds",
        "Lead capture forms & scheduling tool integrations",
        "CRM & lead pipeline setups (HubSpot, Zoho, sheets)",
        "WhatsApp API automated lead routing",
        "Email marketing automation & follow-up flows",
        "Conversion rate optimization (CRO) audits"
    ];

    const faqs = [
        { q: "What is a lead generation system?", a: "It is an automated framework that captures website visitor information (name, phone, email) and routes it directly into a CRM database, followed by automated notifications and scheduling options." },
        { q: "How do you capture leads on a website?", a: "We place conversion-focused forms, clear call-to-actions (CTAs), Calendly widgets, and AI chat assistants at key interaction points to maximize user submissions." },
        { q: "Will this integrate with my existing CRM?", a: "Yes. We connect lead capture funnels to major CRMs (HubSpot, Zoho, Salesforce) and automated databases using custom API connections or tools like Zapier." },
        { q: "Can we automate follow-up messages?", a: "Yes. We build automated email or WhatsApp sequences that immediately reply to new leads, helping qualify prospects and secure booking appointments." },
        { q: "What is B2B lead generation?", a: "B2B lead generation targets specific decision-makers in other companies using customized whitepapers, case studies, and scheduling systems." }
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
                title="Lead Generation Services India | B2B Lead Generation"
                description="ScaleUp Co builds high-converting lead generation systems in India. We automate lead capture, CRM pipelines, and appointment booking workflows."
                canonical="https://www.scaleupco.online/services/lead-generation"
                keywords="Lead Generation Services, B2B Lead Generation, Lead Generation Services India, Lead Capture Systems"
                schema={faqSchema}
            />

            <div className="py-20 border-b border-gray-800/40" style={{ background: '#0b0f1c' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <Breadcrumbs items={[{ name: 'Services', path: '/services' }, { name: 'Lead Gen Systems', path: '/services/lead-generation' }]} />
                    
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight mt-6">
                        Lead <span className="text-gradient">Generation</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                        Automated lead capture systems that turn website visitors into qualified appointments using forms, workflows, and CRM integrations.
                    </p>
                </div>
            </div>

            {/* Service Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-10">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Turn Traffic into Appointments on Autopilot</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Driving traffic to your website is only half the battle. If your site lacks an easy way for customers to get in touch, they will click away and contact your competitors instead. ScaleUp Co designs lead capture funnels that capture visitor interest, qualify leads dynamically, and automatically coordinate calendar bookings.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Whether you need a simple form routing to Google Sheets, a complex CRM pipeline integration, or WhatsApp follow-up automations, we ensure that every visitor inquiry is handled instantly.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                        <div className="p-6 border border-gray-800 rounded-2xl bg-dark-surface/40">
                            <Target size={24} className="text-[#3b82f6] mb-4" />
                            <h4 className="font-bold text-white mb-2">CRM Setup</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Organize leads into CRM pipelines to track deal progression cleanly.</p>
                        </div>
                        <div className="p-6 border border-gray-800 rounded-2xl bg-dark-surface/40">
                            <Zap size={24} className="text-[#3b82f6] mb-4" />
                            <h4 className="font-bold text-white mb-2">Automation</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Configure email and SMS responders to reply to leads within seconds.</p>
                        </div>
                        <div className="p-6 border border-gray-800 rounded-2xl bg-dark-surface/40">
                            <Users size={24} className="text-[#3b82f6] mb-4" />
                            <h4 className="font-bold text-white mb-2">Bookings</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Embed live calendars so prospects can schedule strategy sessions directly.</p>
                        </div>
                    </div>

                    <div className="space-y-4 pt-6">
                        <h3 className="text-2xl font-bold">Key Capabilities</h3>
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
                        <h3 className="text-2xl font-bold">Lead Generation FAQs</h3>
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
                        <h3 className="text-xl font-bold text-white">Capture More Leads</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Stop losing website visitors. Setup conversion-focused forms and CRM integrations to build a predictable lead pipeline.
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

export default LeadGeneration;
