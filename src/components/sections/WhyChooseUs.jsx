import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, CheckCircle2, Cpu, Layers } from 'lucide-react';

const WhyChooseUs = () => {
    const benefits = [
        { icon: <TrendingUp size={20} color="#3b82f6" />, title: "Growth-Focused", description: "Every service is designed to increase leads, revenue, and business growth." },
        { icon: <CheckCircle2 size={20} color="#3b82f6" />, title: "Done-For-You Execution", description: "We handle strategy, implementation, optimization, and support." },
        { icon: <Cpu size={20} color="#3b82f6" />, title: "AI-Powered Systems", description: "Leverage modern automation to reduce costs and save time." },
        { icon: <Layers size={20} color="#3b82f6" />, title: "One Partner, Multiple Solutions", description: "No need to hire separate agencies for websites, SEO, ads, content, CRM, and AI." }
    ];

    const metrics = [
        { label: "Design Quality", value: 97 },
        { label: "On-Time Delivery", value: 94 },
        { label: "Conversion Rate", value: 89 },
        { label: "Client Retention", value: 92 }
    ];

    return (
        <section style={{ background: '#060810', borderTop: '1px solid rgba(59,130,246,0.08)', padding: '7rem 0' }}>
            <div className="max-w-7xl mx-auto px-6 md:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
                            Why Businesses Choose <span className="text-gradient">ScaleUp Co</span>
                        </h2>
                        <p className="text-lg text-[#94a3b8] mb-8 leading-relaxed max-w-lg">
                            We help businesses scale by deploying integrated growth and AI automation systems. 
                            Instead of managing multiple vendor relations, we serve as your single partner for websites, SEO, marketing, and operations.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    {/* 40x40 icon box with 20px icon */}
                                    <div className="w-10 h-10 rounded-md flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(59,130,246,0.25)', minWidth: '40px', minHeight: '40px' }}>
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1 text-sm">{benefit.title}</h4>
                                        <p className="text-xs text-[#64748b]">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Performance Metrics Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="rounded-2xl p-8" style={{ background: '#0b0f1c', border: '1px solid rgba(59,130,246,0.2)' }}>
                            <div className="mb-8">
                                <p className="text-[#64748b] text-sm font-mono uppercase tracking-wider mb-2">Performance Score</p>
                                <div className="text-5xl font-extrabold" style={{ color: '#2563eb' }}>100%</div>
                                <p className="text-lg font-semibold text-white mt-1">Client Satisfaction</p>
                            </div>

                            <div className="space-y-5">
                                {metrics.map((metric, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm text-[#94a3b8] font-medium">{metric.label}</span>
                                            <span className="text-sm font-bold text-white">{metric.value}%</span>
                                        </div>
                                        <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(59,130,246,0.1)' }}>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${metric.value}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: index * 0.15, ease: 'easeOut' }}
                                                className="h-full rounded-full"
                                                style={{ background: 'linear-gradient(90deg, #2563eb, #0ea5e9)' }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
