import React, { useEffect } from 'react';
import { Workflow, Zap, Settings, CheckCircle2, ArrowRight, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/seo/SEO';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import FinalCTA from '../../components/sections/FinalCTA';

const BusinessProcessAutomation = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        "Workflow design & bottleneck audit assessments",
        "Custom API integrations to connect separate systems",
        "Automated data entry, reporting & invoice generation",
        "E-commerce fulfillment & inventory sync automation",
        "WhatsApp, SMS & email transactional notifications",
        "Error alert logging & automatic database backups"
    ];

    const faqs = [
        { q: "What is Business Process Automation?", a: "It is the practice of using software integrations and rule-based logic to handle repetitive, manual business tasks—like copy-pasting data, generating status reports, sending transactional emails, or syncing files—without requiring human effort." },
        { q: "How does workflow automation save our business money?", a: "By removing manual administrative steps, preventing human entry errors, and processing customer files instantly. Teams save up to 10–20 hours per week, allowing them to focus on high-value business development." },
        { q: "Can you automate our existing software tools?", a: "Yes. We connect and automate platforms like Google Sheets, Slack, QuickBooks, Stripe, Shopify, WhatsApp, and generic SQL databases using custom API connections or tools like Zapier and Make." },
        { q: "What is the difference between this and Custom AI Agents?", a: "Business Process Automation focuses on structured, rule-based workflows (e.g., 'If X happens in CRM, do Y in accounting'). Custom AI Agents are powered by LLMs to make cognitive decisions, like reading a customer inquiry email, determining the category, and drafting a custom response." },
        { q: "Is our business data secure when using automation?", a: "Yes. We strictly adhere to security best practices. We build secure API connections, use OAuth authentication, encrypt sensitive keys, and implement error alert logging to keep your business data private and safe." }
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
                title="Business Process Automation Services | ScaleUp Co"
                description="Save hours of manual labor. ScaleUp Co builds custom workflow automations, connects APIs, and streamlines operations to optimize business efficiency."
                canonical="https://www.scaleupco.online/services/business-process-automation"
                keywords="Business Process Automation, Workflow Automation, API Integrations, Zapier Setup, Make Automation, Operations Efficiency"
                schema={faqSchema}
            />

            <div className="py-20 border-b border-gray-800/40" style={{ background: '#0b0f1c' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <Breadcrumbs items={[{ name: 'Services', path: '/services' }, { name: 'Business Process Automation', path: '/services/business-process-automation' }]} />
                    
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight mt-6">
                        Business Process <span className="text-gradient">Automation</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                        Automate repetitive business tasks using AI and workflow automation to save time, reduce manual work, and improve operational efficiency.
                    </p>
                </div>
            </div>

            {/* Service Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-10">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Put Your Repetitive Operations on Autopilot</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Every hour your team spends manually copying lead info, writing reports, or syncing invoices between accounting systems is an hour not spent generating revenue. ScaleUp Co maps out your business operations and builds API connections and workflows that handle these tasks instantly and error-free.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            From basic Zapier/Make connectors to custom API scripts that coordinate multiple platforms, we deploy systems that keep your data moving seamlessly.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                        <div className="p-6 border border-gray-800 rounded-2xl bg-dark-surface/40">
                            <Workflow size={24} className="text-[#3b82f6] mb-4" />
                            <h4 className="font-bold text-white mb-2">Workflow Design</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Map and build automated logic to pass data seamlessly across your favorite platforms.</p>
                        </div>
                        <div className="p-6 border border-gray-800 rounded-2xl bg-dark-surface/40">
                            <Zap size={24} className="text-[#3b82f6] mb-4" />
                            <h4 className="font-bold text-white mb-2">API Integration</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Connect invoicing, database, notification, and CRM platforms securely.</p>
                        </div>
                        <div className="p-6 border border-gray-800 rounded-2xl bg-dark-surface/40">
                            <Settings size={24} className="text-[#3b82f6] mb-4" />
                            <h4 className="font-bold text-white mb-2">Ops Optimization</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Eliminate administrative bottlenecks to reduce overhead and manual errors.</p>
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
                        <h3 className="text-2xl font-bold">Automation FAQs</h3>
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
                        <h3 className="text-xl font-bold text-white">Streamline Operations</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Stop wasting hours on copy-pasting data. Setup secure integrations and automatic workflows to focus your team on business growth.
                        </p>
                        <div className="pt-4">
                            <Link to="/contact">
                                <button className="w-full py-3 font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center justify-center gap-2">
                                    Scale My Operations <ArrowRight size={16} />
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

export default BusinessProcessAutomation;
