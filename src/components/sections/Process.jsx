import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
    const steps = [
        { number: "01", title: "Get Found", description: "SEO, Google Visibility, Paid Advertising" },
        { number: "02", title: "Capture Leads", description: "Landing Pages, Forms, CRM Systems" },
        { number: "03", title: "Convert Customers", description: "Automation, Follow-Ups, Appointment Booking" },
        { number: "04", title: "Scale Operations", description: "AI Chatbots, AI Voice Receptionist, Custom AI Agents" }
    ];

    return (
        <section style={{ background: '#0f1526', borderTop: '1px solid rgba(59,130,246,0.08)', padding: '7rem 0' }}>
            <div className="max-w-7xl mx-auto px-6 md:px-20">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white"
                    >
                        Our <span className="text-gradient">Growth Framework</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-[#94a3b8]"
                    >
                        Our systematic approach is built from the ground up to attract traffic, capture leads, convert customers, and scale your daily operations.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Dashed connector line at circle height */}
                    <div className="hidden lg:block absolute top-[40px] left-[calc(12.5%+32px)] right-[calc(12.5%+32px)] z-0" style={{ borderTop: '1px dashed rgba(59,130,246,0.3)' }}></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 + 0.2 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-all duration-300" style={{ background: '#0b0f1c', border: '1px solid rgba(59,130,246,0.22)' }}>
                                    <span className="font-mono text-xl font-extrabold text-[#3b82f6]">{step.number}</span>
                                </div>

                                <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                                <p className="text-[#94a3b8] leading-relaxed text-sm max-w-xs">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Process;
