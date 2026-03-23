import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
    const steps = [
        {
            number: "01",
            title: "Discovery",
            description: "We understand your business goals, audience, and growth opportunities."
        },
        {
            number: "02",
            title: "Strategy",
            description: "We design a conversion-focused website structure tailored to your niche."
        },
        {
            number: "03",
            title: "Build",
            description: "We develop your high-performance growth website using modern tech."
        },
        {
            number: "04",
            title: "Launch & Scale",
            description: "SEO optimization and lead systems go live to drive revenue."
        }
    ];

    return (
        <section style={{ background: '#0f1526', borderTop: '1px solid rgba(59,130,246,0.08)' }} className="py-24">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white"
                    >
                        Our Simple <span className="text-gradient">4-Step Process</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-[#94a3b8]"
                    >
                        We've streamlined the entire process so you can focus on running your business while we build your growth engine.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Horizontal connector line */}
                    <div className="hidden lg:block absolute top-[40px] left-[calc(12.5%+32px)] right-[calc(12.5%+32px)] h-px z-0" style={{ background: 'rgba(59,130,246,0.2)' }}></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 + 0.2 }}
                                className="flex flex-col items-center text-center group card-hover-premium rounded-2xl p-6"
                                style={{ background: '#0b0f1c', border: '1px solid rgba(59,130,246,0.12)' }}
                            >
                                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-8 relative z-10 group-hover:border-[rgba(59,130,246,0.5)] transition-all duration-300" style={{ background: '#0b0f1c', border: '1px solid rgba(59,130,246,0.22)' }}>
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
