import React, { useEffect } from 'react';
import { Settings, Shield, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/seo/SEO';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import FinalCTA from '../../components/sections/FinalCTA';

const BusinessAutomation = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        "API integrations (connecting CRMs, email, databases)",
        "Repetitive workflow elimination (automatic reporting)",
        "Custom AI agents built for internal operational tasks",
        "Lead pipeline & scheduling automations",
        "WhatsApp notification alerts for new transactions",
        "Security-first data encryption and backup automation"
    ];

    const faqs = [
        { q: "What is business process automation?", a: "It is the use of software integrations and rules-based logic to perform repetitive tasks (like data entry, lead routing, or customer notification updates) without human intervention." },
        { q: "How does workflow automation save money?", a: "By eliminating manual copy-pasting, reducing administrative errors, and processing customer files instantly, businesses can operate with lower overhead and faster turnaround times." },
        { q: "Can you automate my existing software tools?", a: "Yes. We specialize in connecting platforms (like HubSpot, Zoho, Google Sheets, Stripe, WhatsApp) using custom API development or tools like Zapier and Make." },
        { q: "What is a custom AI agent for business?", a: "It is an internal software bot powered by LLMs (Large Language Models) designed to perform cognitive tasks, such as summarizing long email chains, categorizing invoices, or drafting customer replies." },
        { q: "Is business automation safe for customer data?", a: "Yes. We adhere to security best practices, utilizing secure API keys, data encryption, and access token controls to protect sensitive business information." }
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
                title="Business Automation Services India | Workflow Automation"
                description="ScaleUp Co builds custom business automation solutions in India. We connect APIs, set up CRM workflows, and deploy internal AI agents to streamline operations."
                canonical="https://www.scaleupco.online/services/business-automation"
                keywords="Business Automation, Workflow Automation, Business Automation Services India, AI Automation"
                schema={faqSchema}
            />

            <div className="py-20 border-b border-gray-800/40" style={{ background: '#0b0f1c' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <Breadcrumbs items={[{ name: 'Services', path: '/services' }, { name: 'Business Automation', path: '/services/business-automation' }]} />
                    
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight mt-6">
                        Custom AI <span className="text-gradient">Agents</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                        Custom-built AI agents that automate repetitive business processes, streamline operations, and improve productivity.
                    </p>
                </div>
            </div>

            {/* Service Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-10">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Streamline Your Business Operations on Autopilot</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Repetitive manual work drains team energy and introduces human errors. Copying lead details from forms into spreadsheets, manually sending appointment reminders, and drafting daily reports can easily be automated. ScaleUp Co builds robust workflow integrations and custom AI agents that connect your operational tools, allowing your team to focus on high-value business development.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            From simple API connectors to sophisticated LLM agents that read docs and categorize inquiries, we deploy tailored solutions for Indian startups and established businesses in Bangalore.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                        <div className="p-6 border border-gray-800 rounded-2xl bg-dark-surface/40">
                            <Settings size={24} className="text-[#3b82f6] mb-4" />
                            <h4 className="font-bold text-white mb-2">Workflow Design</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Map and automate repetitive processes, cutting admin overhead by up to 50%.</p>
                        </div>
                        <div className="p-6 border border-gray-800 rounded-2xl bg-dark-surface/40">
                            <Zap size={24} className="text-[#3b82f6] mb-4" />
                            <h4 className="font-bold text-white mb-2">API Integration</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Synchronize databases, CRMs, email services, and messaging APIs seamlessly.</p>
                        </div>
                        <div className="p-6 border border-gray-800 rounded-2xl bg-dark-surface/40">
                            <Shield size={24} className="text-[#3b82f6] mb-4" />
                            <h4 className="font-bold text-white mb-2">Custom AI Agents</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Deploy intelligent internal bots to synthesize documents, emails, and invoices.</p>
                        </div>
                    </div>

                    <div className="space-y-4 pt-6">
                        <h3 className="text-2xl font-bold">Automation Capabilities</h3>
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
                    <div className="p-8 rounded-3xl border border-gray-800 bg-dark-surface space-y-6">
                        <h3 className="text-xl font-bold text-white">Scale With Automation</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Stop wasting hours on manual spreadsheet copying. Setup API connectors and automated pipelines to optimize business scale.
                        </p>
                        <div className="pt-4">
                            <Link to="/contact">
                                <button className="w-full py-3 font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center justify-center gap-2">
                                    Scale My Business <ArrowRight size={16} />
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

export default BusinessAutomation;
