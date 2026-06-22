import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Laptop, Search, MessageSquarePlus, ArrowRight, Share2, Video, Megaphone, Bot, PhoneCall, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service, index }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="rounded-2xl p-8 relative overflow-hidden flex flex-col"
            style={{
                background: '#060810',
                border: '1px solid rgba(59,130,246,0.12)',
                transition: 'transform 0.3s ease, border-color 0.3s ease',
                transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
                borderColor: hovered ? 'rgba(59,130,246,0.35)' : 'rgba(59,130,246,0.12)'
            }}
        >
            {/* Top gradient border line on hover */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, #2563eb, #0ea5e9)',
                opacity: hovered ? 1 : 0,
                transition: 'opacity 0.3s ease'
            }}></div>

            <div className="mb-6 w-16 h-16 rounded-xl flex items-center justify-center" style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>
                {service.icon}
            </div>

            <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
            <p className="text-[#94a3b8] mb-8 min-h-[100px]">
                {service.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {service.features.map((feature, fIndex) => (
                    <span key={fIndex} className="text-xs font-semibold px-3 py-1.5 rounded-md" style={{ background: 'rgba(37,99,235,0.1)', color: '#3b82f6', border: '1px solid rgba(59,130,246,0.2)' }}>
                        {feature}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

const ServicesOverview = ({ showViewAll = true }) => {
    const services = [
        {
            icon: <Laptop className="w-10 h-10 text-[#3b82f6]" />,
            title: "Website Development",
            description: "High-performance, conversion-focused websites designed to turn visitors into customers. Fully responsive, fast-loading, and built for growth.",
            features: ["Custom Design", "Mobile Optimized", "Speed Optimized"]
        },
        {
            icon: <Search className="w-10 h-10 text-[#3b82f6]" />,
            title: "Google Visibility",
            description: "Increase your visibility on Google with local SEO, Google Business Profile optimization, and strategies that help customers find your business first.",
            features: ["Local SEO", "GBP Optimization", "Review Management"]
        },
        {
            icon: <MessageSquarePlus className="w-10 h-10 text-[#3b82f6]" />,
            title: "Lead Generation Systems",
            description: "Automated lead capture systems that turn website visitors into qualified appointments using forms, workflows, and CRM integrations.",
            features: ["CRM Setup", "Automation", "Appointment Booking"]
        },
        {
            icon: <Share2 className="w-10 h-10 text-[#3b82f6]" />,
            title: "Social Media Marketing",
            description: "Grow your brand presence and generate inbound leads through strategic social media management and content marketing.",
            features: ["Content Strategy", "Instagram Growth", "LinkedIn Marketing"]
        },
        {
            icon: <Video className="w-10 h-10 text-[#3b82f6]" />,
            title: "Video Editing & Content Creation",
            description: "Transform raw footage into engaging content optimized for social media, advertising campaigns, and audience growth.",
            features: ["Reels Editing", "Shorts Creation", "Content Repurposing"]
        },
        {
            icon: <Megaphone className="w-10 h-10 text-[#3b82f6]" />,
            title: "Paid Advertising",
            description: "Drive targeted traffic and qualified leads through data-driven advertising campaigns across major digital platforms.",
            features: ["Meta Ads", "Google Ads", "Retargeting"]
        },
        {
            icon: <Bot className="w-10 h-10 text-[#3b82f6]" />,
            title: "AI Chatbots",
            description: "24/7 AI-powered chat assistants that engage visitors, answer questions, qualify leads, and automate customer interactions.",
            features: ["Website Chatbot", "WhatsApp AI", "Lead Qualification"]
        },
        {
            icon: <PhoneCall className="w-10 h-10 text-[#3b82f6]" />,
            title: "AI Voice Receptionist",
            description: "AI-powered voice agents that answer calls, qualify prospects, schedule appointments, and provide instant customer support.",
            features: ["Call Answering", "Appointment Booking", "Lead Qualification"]
        },
        {
            icon: <Cpu className="w-10 h-10 text-[#3b82f6]" />,
            title: "Custom AI Agents",
            description: "Custom-built AI agents that automate repetitive business processes, streamline operations, and improve productivity.",
            features: ["Workflow Automation", "CRM Integration", "Custom AI Systems"]
        }
    ];

    return (
        <section style={{ background: '#060810', padding: '7rem 0' }}>
            <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
                            Our <span className="text-gradient">Growth Systems</span>
                        </h2>
                        <p className="text-lg text-[#94a3b8]">
                            We don't just build websites. We build complete digital ecosystems designed to attract, capture, and convert at scale.
                        </p>
                    </div>
                    {showViewAll && (
                        <Link to="/services" className="hidden md:inline-flex items-center text-[#3b82f6] hover:text-white transition-colors font-medium mt-6 md:mt-0">
                            View All Services <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>

                {showViewAll && (
                    <div className="mt-8 md:hidden flex justify-center">
                        <Link to="/services" className="inline-flex items-center text-[#3b82f6] font-medium">
                            View All Services <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ServicesOverview;
