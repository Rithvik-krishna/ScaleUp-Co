import React, { useEffect } from 'react';
import { Phone, Shield, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/seo/SEO';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import FinalCTA from '../../components/sections/FinalCTA';

const AIVoiceReceptionist = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        "Natural-sounding voice agents (custom accent options)",
        "Automated call answering & query resolution",
        "Direct scheduling in Google Calendar or CRM",
        "CRM connector for instant caller logging",
        "Outbound follow-up campaigns for missed calls",
        "Security-first call transcripts & audit logs"
    ];

    const faqs = [
        { q: "What is an AI Voice Receptionist?", a: "It is an artificial intelligence voice agent trained on your business data. It answers telephone calls, understands natural human queries, and performs tasks like booking appointments or logging leads." },
        { q: "Does the voice sound robotic?", a: "No. We utilize state-of-the-art text-to-speech models that replicate natural human cadence, accents, and tones, ensuring a premium caller experience." },
        { q: "Can it book appointments directly?", a: "Yes. By connecting to your Google Calendar or booking API, the AI voice agent can identify open slots and confirm appointments during the call." },
        { q: "What happens if the customer asks something complex?", a: "The AI agent can be configured to politely transfer the call to a human team member or log the query for follow-up if it falls outside its trained scope." },
        { q: "Is this service suitable for medical clinics?", a: "Absolutely. Clinics use AI voice receptionists to handle high call volumes, answer patient FAQs, and book consultations, reducing front-desk strain." }
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
                title="AI Voice Agent & Receptionist Services | ScaleUp Co"
                description="ScaleUp Co builds intelligent AI voice agents and receptionist systems. We automate incoming calls, appointment bookings, and CRM logs for businesses in India."
                canonical="https://www.scaleupco.online/services/ai-voice-receptionist"
                keywords="AI Voice Agent, AI Receptionist, AI Voice Receptionist India, Voice AI for business"
                schema={faqSchema}
            />

            <div className="py-20 border-b border-gray-800/40" style={{ background: '#0b0f1c' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <Breadcrumbs items={[{ name: 'Services', path: '/services' }, { name: 'AI Voice Receptionist', path: '/services/ai-voice-receptionist' }]} />
                    
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight mt-6">
                        AI Voice <span className="text-gradient">Receptionist</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                        AI-powered voice agents that answer calls, qualify prospects, schedule appointments, and provide instant customer support.
                    </p>
                </div>
            </div>

            {/* Service Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-10">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Capture Every Single Phone Call</h2>
                        <p className="text-gray-300 leading-relaxed">
                            For local businesses, missed calls equal lost revenue. If a prospect calls your clinic, real estate office, or service business and gets no response, they will immediately dial another company. Our AI Voice Receptionists ensure that every call is answered instantly. Using conversational AI, they qualify prospects, schedule appointments directly, and log details in your CRM database.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            We build voice solutions for Indian startups and local businesses in Bangalore to manage call overflow, automate outbound confirmation, and ensure 24/7 client support.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                        <div className="p-6 border border-gray-800 rounded-2xl bg-dark-surface/40">
                            <Phone size={24} className="text-[#3b82f6] mb-4" />
                            <h4 className="font-bold text-white mb-2">Call Answering</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Ensure 100% call response rates. Never lose prospects to a busy line or voicemail.</p>
                        </div>
                        <div className="p-6 border border-gray-800 rounded-2xl bg-dark-surface/40">
                            <Zap size={24} className="text-[#3b82f6] mb-4" />
                            <h4 className="font-bold text-white mb-2">Automated Booking</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">AI checks calendar availability in real-time and schedules bookings instantly.</p>
                        </div>
                        <div className="p-6 border border-gray-800 rounded-2xl bg-dark-surface/40">
                            <Shield size={24} className="text-[#3b82f6] mb-4" />
                            <h4 className="font-bold text-white mb-2">CRM Sync</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Automatically log call transcripts, caller details, and schedules to your CRM.</p>
                        </div>
                    </div>

                    <div className="space-y-4 pt-6">
                        <h3 className="text-2xl font-bold">Capabilities Included</h3>
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
                        <h3 className="text-2xl font-bold">AI Voice FAQs</h3>
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
                        <h3 className="text-xl font-bold text-white">Deploy a Voice AI Agent</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Stop missing customer phone calls. Setup natural, automated voice receptionists to answer calls and schedule appointments 24/7.
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

export default AIVoiceReceptionist;
