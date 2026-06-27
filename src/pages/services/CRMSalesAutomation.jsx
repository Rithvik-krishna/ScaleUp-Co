import React, { useEffect } from 'react';
import { Database, Zap, Users, CheckCircle2, ArrowRight, Shuffle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/seo/SEO';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import FinalCTA from '../../components/sections/FinalCTA';

const CRMSalesAutomation = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        "CRM Tailoring & Setup (HubSpot, Zoho, Pipedrive)",
        "Lead pipeline layout & deal stage mapping",
        "Automatic email, SMS & WhatsApp follow-up flows",
        "Inbound lead capture form & source tracking integrations",
        "Live appointment calendar & scheduling sync",
        "Sales team task alerts & deal closure reporting"
    ];

    const faqs = [
        { q: "What is CRM & Sales Automation?", a: "It is the process of setting up a Customer Relationship Management (CRM) system and configuring software automations to handle repetitive tasks—such as sending follow-up emails, assigning leads, updating pipeline deal stages, and scheduling reminders—automatically." },
        { q: "Which CRM platforms do you support?", a: "We specialize in custom setup, tailoring, and integrations for major CRM platforms, including HubSpot, Zoho CRM, Pipedrive, Salesforce, and lightweight databases like Airtable or Google Sheets." },
        { q: "How does follow-up automation convert more sales?", a: "Most sales are lost due to delayed follow-ups. When a new prospect submits an inquiry, our system automatically replies via SMS or WhatsApp within 60 seconds, qualifies their interest, and schedules booking options immediately before they click away." },
        { q: "Can we migrate our existing customer data?", a: "Yes. We cleanly map, format, and import your existing client contact lists, previous deals, and interaction history from spreadsheets or legacy files into your new CRM system." },
        { q: "Will automated follow-ups feel impersonal or spammy?", a: "No. We write conversational, personalized scripts that look like they were written by a real sales rep. By supplying relevant, helpful responses quickly, automation improves customer satisfaction rather than feeling like spam." }
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
                title="CRM & Sales Automation Services | ScaleUp Co"
                description="Streamline your sales process. ScaleUp Co builds CRM pipelines, automated lead follow-ups, and sales tracking to convert more leads into closed customers."
                canonical="https://www.scaleupco.online/services/crm-sales-automation"
                keywords="CRM Setup, Sales Automation, Follow-Up Automation, HubSpot Integration, Zoho CRM, Sales Pipeline Setup"
                schema={faqSchema}
            />

            <div className="py-20 border-b border-gray-800/40" style={{ background: '#0b0f1c' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <Breadcrumbs items={[{ name: 'Services', path: '/services' }, { name: 'CRM & Sales Automation', path: '/services/crm-sales-automation' }]} />
                    
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight mt-6">
                        CRM & Sales <span className="text-gradient">Automation</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                        Organize your leads, automate follow-ups, and convert more sales by building a structured CRM and automatic sales pipeline.
                    </p>
                </div>
            </div>

            {/* Service Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-10">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Stop Letting Sales Leads Slip Through the Cracks</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Many companies waste marketing budgets driving leads only to let them go cold due to manual follow-up delays or unstructured tracking. Our CRM and Sales Automation solutions build a structured pipeline for your business. Every inbound lead is immediately captured, routed to the right team member, and followed up with automatically.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Whether you need HubSpot tailored for a startup or Zoho optimized for local operations, we configure workflows that track deal stages, trigger reminders, and maximize your close rates.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                        <div className="p-6 border border-gray-800 rounded-2xl bg-dark-surface/40">
                            <Database size={24} className="text-[#3b82f6] mb-4" />
                            <h4 className="font-bold text-white mb-2">CRM Customization</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Setup and design pipelines to match your specific lead qualification and sales stages.</p>
                        </div>
                        <div className="p-6 border border-gray-800 rounded-2xl bg-dark-surface/40">
                            <Zap size={24} className="text-[#3b82f6] mb-4" />
                            <h4 className="font-bold text-white mb-2">Auto Follow-Ups</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Deploy automated email and SMS responder sequences to nurture leads instantly.</p>
                        </div>
                        <div className="p-6 border border-gray-800 rounded-2xl bg-dark-surface/40">
                            <Shuffle size={24} className="text-[#3b82f6] mb-4" />
                            <h4 className="font-bold text-white mb-2">Lead Routing</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Automatically assign leads to reps based on location, service, or rotation.</p>
                        </div>
                    </div>

                    <div className="space-y-4 pt-6">
                        <h3 className="text-2xl font-bold">Key Automation Capabilities</h3>
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
                        <h3 className="text-2xl font-bold">CRM & Sales FAQs</h3>
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
                    <div className="p-8 rounded-3xl border border-gray-800 bg-dark-surface space-y-6 sticky top-28">
                        <h3 className="text-xl font-bold text-white">Optimize Your Sales</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Stop managing deals with spreadsheets and sticky notes. Build an automated sales pipeline that drives deal progression and conversions.
                        </p>
                        <div className="pt-4">
                            <Link to="/contact">
                                <button className="w-full py-3 font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center justify-center gap-2">
                                    Scale My Sales <ArrowRight size={16} />
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

export default CRMSalesAutomation;
