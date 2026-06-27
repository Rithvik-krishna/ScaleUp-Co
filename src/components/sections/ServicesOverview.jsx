import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Laptop, Search, MessageSquarePlus, ArrowRight, Share2, Video, Megaphone, Bot, PhoneCall, Cpu, Database, Workflow } from 'lucide-react';
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
            className="rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between"
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

            <div>
                <div className="mb-6 w-16 h-16 rounded-xl flex items-center justify-center" style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>
                    {service.icon}
                </div>

                <Link to={service.link}>
                    <h3 className="text-2xl font-bold mb-4 text-white hover:text-[#3b82f6] transition-colors">{service.title}</h3>
                </Link>
                <p className="text-[#94a3b8] mb-8 min-h-[80px] font-light text-sm leading-relaxed">
                    {service.description}
                </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-800/40">
                <div className="flex flex-wrap gap-1.5">
                    {service.features.map((feature, fIndex) => (
                        <span key={fIndex} className="text-[10px] font-bold px-2 py-1 rounded" style={{ background: 'rgba(37,99,235,0.06)', color: '#3b82f6', border: '1px solid rgba(59,130,246,0.12)' }}>
                            {feature}
                        </span>
                    ))}
                </div>
                <Link to={service.link} className="text-xs font-bold text-[#3b82f6] hover:text-white flex items-center gap-1 shrink-0 ml-2">
                    Learn More
                    <ArrowRight size={12} />
                </Link>
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
            features: ["Custom Design", "Mobile Optimized", "Speed Optimized"],
            link: "/services/web-development"
        },
        {
            icon: <Search className="w-10 h-10 text-[#3b82f6]" />,
            title: "Google Visibility",
            description: "Increase your visibility on Google with local SEO, Google Business Profile optimization, and strategies that help customers find your business first.",
            features: ["Local SEO", "GBP Optimization", "Review Management"],
            link: "/services/seo"
        },
        {
            icon: <MessageSquarePlus className="w-10 h-10 text-[#3b82f6]" />,
            title: "Lead Generation Systems",
            description: "Automated lead capture systems that turn website visitors into qualified appointments using forms, workflows, and CRM integrations.",
            features: ["CRM Setup", "Automation", "Appointment Booking"],
            link: "/services/lead-generation"
        },
        {
            icon: <Share2 className="w-10 h-10 text-[#3b82f6]" />,
            title: "Social Media Management & Growth",
            description: "Comprehensive social media management including content strategy, monthly content calendars, content creation, reel production, account management, and lead generation systems that turn followers into customers.",
            features: ["Content Calendars", "Reels & Creatives", "Lead Generation"],
            link: "/services/social-media-management"
        },
        {
            icon: <Video className="w-10 h-10 text-[#3b82f6]" />,
            title: "Video Editing & Content Creation",
            description: "Transform raw footage into engaging content optimized for social media, advertising campaigns, and audience growth.",
            features: ["Reels Editing", "Shorts Creation", "Content Repurposing"],
            link: "/services"
        },
        {
            icon: <Megaphone className="w-10 h-10 text-[#3b82f6]" />,
            title: "Paid Advertising",
            description: "Drive targeted traffic and qualified leads through data-driven advertising campaigns across major digital platforms.",
            features: ["Meta Ads", "Google Ads", "Retargeting"],
            link: "/services"
        },
        {
            icon: <Database className="w-10 h-10 text-[#3b82f6]" />,
            title: "CRM & Sales Automation",
            description: "Streamline your sales process with CRM setup, automated follow-ups, lead tracking, and pipeline management that helps convert more leads into customers.",
            features: ["CRM Setup", "Follow-Up Automation", "Sales Pipeline"],
            link: "/services/crm-sales-automation"
        },
        {
            icon: <Workflow className="w-10 h-10 text-[#3b82f6]" />,
            title: "Business Process Automation",
            description: "Automate repetitive business tasks using AI and workflow automation to save time, reduce manual work, and improve operational efficiency.",
            features: ["Workflow Automation", "Integrations", "Operations"],
            link: "/services/business-process-automation"
        },
        {
            icon: <Bot className="w-10 h-10 text-[#3b82f6]" />,
            title: "AI Chatbots",
            description: "24/7 AI-powered chat assistants that engage visitors, answer questions, qualify leads, and automate customer interactions.",
            features: ["Website Chatbot", "WhatsApp AI", "Lead Qualification"],
            link: "/services/ai-chatbots"
        },
        {
            icon: <PhoneCall className="w-10 h-10 text-[#3b82f6]" />,
            title: "AI Voice Receptionist",
            description: "AI-powered voice agents that answer calls, qualify prospects, schedule appointments, and provide instant customer support.",
            features: ["Call Answering", "Appointment Booking", "Lead Qualification"],
            link: "/services/ai-voice-receptionist"
        },
        {
            icon: <Cpu className="w-10 h-10 text-[#3b82f6]" />,
            title: "Custom AI Agents",
            description: "Custom-built AI agents that automate repetitive business processes, streamline operations, and improve productivity.",
            features: ["Workflow Automation", "CRM Integration", "Custom AI Systems"],
            link: "/services/business-automation"
        }
    ];

    const displayedServices = showViewAll ? services.slice(0, 3) : services;

    return (
        <section style={{ background: '#060810', padding: '7rem 0' }}>
            <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
                            Everything You Need <span className="text-gradient">To Grow Your Business</span>
                        </h2>
                        <p className="text-lg text-[#94a3b8] leading-relaxed">
                            From websites and SEO to lead generation, CRM automation, AI chatbots, and custom AI agents, we build complete systems that help businesses attract, convert, and retain customers.
                        </p>
                    </div>
                    {showViewAll && (
                        <Link to="/services" className="hidden md:inline-flex items-center text-[#3b82f6] hover:text-white transition-colors font-medium mt-6 md:mt-0">
                            View All Services <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {displayedServices.map((service, index) => (
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
