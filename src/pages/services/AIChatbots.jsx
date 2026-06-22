import React, { useEffect } from 'react';
import { MessageSquare, Shield, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/seo/SEO';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import FinalCTA from '../../components/sections/FinalCTA';

const AIChatbots = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        "24/7 web chat widgets trained on your business data",
        "Lead qualification & screening flows",
        "WhatsApp AI chatbot integrations",
        "CRM & scheduling tool connectors",
        "Multi-language conversational support",
        "Custom UI designs matched to your website style"
    ];

    const faqs = [
        { q: "How do AI chatbots qualify leads?", a: "The chatbot engages visitors, answers questions based on your custom knowledge base, and asks qualification questions (like budget or timeline) before collecting contact details." },
        { q: "Will the chatbot answer queries 24/7?", a: "Yes. Our AI chat assistants operate continuously, instantly replying to users even during weekends or after business hours." },
        { q: "Can we integrate the chatbot with WhatsApp?", a: "Absolutely. We build and deploy AI chat assistants on WhatsApp Business accounts, enabling users to interact with your brand on their favorite platform." },
        { q: "Is custom knowledge base training supported?", a: "Yes. We feed your documents, FAQs, service guidelines, and policies into the chatbot so it provides accurate, context-specific answers." },
        { q: "Do these chatbots support multiple languages?", a: "Yes. Our LLM-powered chatbots support multiple languages, including English, Kannada, Hindi, and others based on user preference." }
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
                title="AI Chatbots for Business | Customer Support Automation India"
                description="ScaleUp Co builds custom AI chatbots for business lead qualification and customer support automation. We deploy WhatsApp AI and website chat assistants."
                canonical="https://www.scaleupco.online/services/ai-chatbots"
                keywords="AI Chatbots for Business, Customer Support Automation, AI Chatbot Development India, WhatsApp AI Chatbot"
                schema={faqSchema}
            />

            <div className="py-20 border-b border-gray-800/40" style={{ background: '#0b0f1c' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <Breadcrumbs items={[{ name: 'Services', path: '/services' }, { name: 'AI Chatbots', path: '/services/ai-chatbots' }]} />
                    
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight mt-6">
                        AI <span className="text-gradient">Chatbots</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                        24/7 AI-powered chat assistants that engage visitors, answer questions, qualify leads, and automate customer interactions.
                    </p>
                </div>
            </div>

            {/* Service Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-10">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Never Miss a Website Lead Again</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Over 50% of website visitors bounce because they can't find immediate answers. Hiring a full-time live support team is expensive and hard to scale. Our custom AI Chatbots act as intelligent team members. They engage web traffic instantly, answer complex FAQs using custom knowledge bases, qualify prospect specifications, and book sales calls automatically.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            We build conversational AI assistants for clinics, real estate brokers, and B2B services in Bangalore and across India to optimize lead qualification and streamline front-desk operations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                        <div className="p-6 border border-gray-800 rounded-2xl bg-dark-surface/40">
                            <MessageSquare size={24} className="text-[#3b82f6] mb-4" />
                            <h4 className="font-bold text-white mb-2">24/7 Web Chat</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Instantly engage web traffic, answer FAQs, and collect client details day or night.</p>
                        </div>
                        <div className="p-6 border border-gray-800 rounded-2xl bg-dark-surface/40">
                            <Zap size={24} className="text-[#3b82f6] mb-4" />
                            <h4 className="font-bold text-white mb-2">WhatsApp AI</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Deploy smart chatbots directly to WhatsApp to capture and nurture mobile leads.</p>
                        </div>
                        <div className="p-6 border border-gray-800 rounded-2xl bg-dark-surface/40">
                            <Shield size={24} className="text-[#3b82f6] mb-4" />
                            <h4 className="font-bold text-white mb-2">Lead Qualification</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Filter low-intent queries and route hot leads directly to your sales CRM pipeline.</p>
                        </div>
                    </div>

                    <div className="space-y-4 pt-6">
                        <h3 className="text-2xl font-bold">Chatbot Features</h3>
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
                        <h3 className="text-2xl font-bold">AI Chatbot FAQs</h3>
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
                        <h3 className="text-xl font-bold text-white">Automate Customer Chats</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Stop losing website prospects. Setup 24/7 AI chat widgets to answer queries and qualify leads automatically.
                        </p>
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

export default AIChatbots;
