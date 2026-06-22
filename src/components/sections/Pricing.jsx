import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

const CheckIcon = () => (
    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(59,130,246,0.3)' }}>
        <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
);

const Pricing = () => {
    const plans = [
        {
            name: "LAUNCH",
            tagline: "Build Your Online Foundation",
            description: "Perfect for businesses establishing their digital presence and generating their first leads online.",
            features: [
                "Professional Website Development",
                "Mobile Optimization",
                "Basic SEO Setup",
                "Contact Forms & Lead Capture",
                "Google Business Profile Setup",
                "Social Media Profile Optimization"
            ],
            extra: "👉 Perfect for businesses launching their online presence",
            popular: false,
            cta: "Launch My Business"
        },
        {
            name: "GROWTH",
            tagline: "Generate Consistent Leads & Customers",
            description: "Our most popular growth system for businesses ready to attract, engage, and convert more customers.",
            features: [
                "High-Converting Website",
                "Google Visibility Optimization",
                "Lead Generation System",
                "WhatsApp Integration",
                "Social Media Marketing Setup",
                "Video Content Creation",
                "Conversion-Focused Landing Pages",
                "Monthly Growth Consultation"
            ],
            extra: "👉 Designed to generate more leads, calls, and customers",
            popular: true,
            cta: "Grow My Business"
        },
        {
            name: "SCALE",
            tagline: "Automate, Optimize & Scale Revenue",
            description: "For businesses ready to automate operations, improve efficiency, and scale predictable growth.",
            features: [
                "Everything in Growth",
                "AI Chatbot Implementation",
                "AI Voice Receptionist",
                "Custom AI Agents",
                "CRM & Workflow Automation",
                "Paid Advertising Setup",
                "Advanced Lead Nurturing Systems",
                "Priority Support"
            ],
            extra: "👉 Built for businesses that want scalable growth through automation",
            popular: false,
            cta: "Scale My Business"
        }
    ];

    return (
        <section style={{ background: '#0b0f1c', borderTop: '1px solid rgba(59,130,246,0.08)' }} className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
                        Flexible <span className="text-gradient">Growth Packages</span>
                    </h2>
                    <p className="text-lg text-[#94a3b8]">
                        No complicated contracts. Just proven systems that deliver results for businesses at every stage.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="relative flex flex-col rounded-2xl p-8 card-hover-premium"
                            style={{
                                background: plan.popular ? 'rgba(37,99,235,0.06)' : '#0b0f1c',
                                border: plan.popular ? '1px solid #2563eb' : '1px solid rgba(59,130,246,0.12)',
                                borderRadius: '16px',
                                ...(plan.popular ? { marginTop: '-24px' } : {})
                            }}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-4 py-1.5 uppercase tracking-wider" style={{ background: '#2563eb', borderRadius: '99px' }}>
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-2xl font-bold mb-1 text-white">{plan.name}</h3>
                                <p className="text-sm font-medium mb-3" style={{ color: '#94a3b8' }}>{plan.tagline}</p>
                            </div>

                            <div className="mb-8">
                                <p className="text-sm text-[#64748b] min-h-[40px]">{plan.description}</p>
                            </div>

                            <ul className="space-y-4 mb-6 flex-grow">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start gap-3 text-sm text-[#94a3b8]">
                                        <div className="mt-0.5"><CheckIcon /></div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mb-8 p-4 rounded-xl text-[13px] font-medium leading-relaxed" style={{ background: 'rgba(59,130,246,0.05)', color: '#94a3b8', border: '1px solid rgba(59,130,246,0.1)' }}>
                                {plan.extra}
                            </div>

                            <div className="mt-auto">
                                <Link to="/contact">
                                    <button
                                        className="w-full h-12 font-semibold rounded-lg transition-colors text-sm"
                                        style={plan.popular
                                            ? { background: '#2563eb', color: 'white' }
                                            : { background: 'transparent', color: '#94a3b8', border: '1px solid rgba(59,130,246,0.2)' }
                                        }
                                        onMouseEnter={e => { if (plan.popular) e.currentTarget.style.background = '#3b82f6'; }}
                                        onMouseLeave={e => { if (plan.popular) e.currentTarget.style.background = '#2563eb'; }}
                                    >
                                        {plan.cta}
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 max-w-4xl mx-auto p-6 md:p-8 rounded-2xl" style={{ background: 'rgba(37,99,235,0.03)', border: '1px solid rgba(59,130,246,0.1)' }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm md:text-base font-medium text-[#94a3b8]">
                        <div className="flex items-center gap-3">
                            <CheckIcon /> No recurring contracts — full ownership
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckIcon /> Fast turnaround (3–7 days)
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckIcon /> Built to generate leads, not just look good
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckIcon /> Ongoing support available
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
