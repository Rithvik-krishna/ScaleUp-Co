import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Target, Zap, Settings, PieChart, MapPin } from 'lucide-react';

const WhyChooseUs = () => {
    const benefits = [
        { icon: <Monitor size={20} color="#3b82f6" />, title: "Premium Design Quality", description: "First impressions matter. We out-design your competitors." },
        { icon: <Target size={20} color="#3b82f6" />, title: "Conversion-Focused", description: "Every pixel is optimized to turn visitors into leads." },
        { icon: <Zap size={20} color="#3b82f6" />, title: "Lightning Fast Delivery", description: "Launch your new growth system in weeks, not months." },
        { icon: <Settings size={20} color="#3b82f6" />, title: "Flexible Packages", description: "Pricing that scales with your business growth stage." },
        { icon: <PieChart size={20} color="#3b82f6" />, title: "Ongoing Support", description: "We monitor, maintain, and improve your site post-launch." },
        { icon: <MapPin size={20} color="#3b82f6" />, title: "Local Market Expertise", description: "Proven strategies for local business dominance." }
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
                            Why Choose <span className="text-gradient">ScaleUpCo</span>?
                        </h2>
                        <p className="text-lg text-[#94a3b8] mb-8 leading-relaxed max-w-lg">
                            We separate ourselves from traditional agencies by focusing on what actually matters: <span className="font-bold text-white">Revenue</span>.
                            No vanity metrics, no confusing jargon. Just premium assets that grow your bottom line.
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
