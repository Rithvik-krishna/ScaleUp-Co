import React from 'react';
import { motion } from 'framer-motion';

const Problem = () => {
    const problems = [
        {
            emoji: "🔍",
            title: "Lost Opportunities",
            description: "No website means potential customers are finding your competitors instead of you when they search online.",
            stat: "↓ 70% of leads go elsewhere"
        },
        {
            emoji: "📉",
            title: "Reduced Trust",
            description: "A poor online presence makes prospects question your legitimacy. 75% of users judge credibility based on web design.",
            stat: "75% judge by design"
        },
        {
            emoji: "⏱️",
            title: "Low Conversions",
            description: "Slow, outdated websites frustrate users and hurt your bottom line. Every second of delay drops conversions by 7%.",
            stat: "↓ 7% per second delay"
        }
    ];

    return (
        <section style={{ background: '#0b0f1c', borderTop: '1px solid rgba(59,130,246,0.08)' }} className="py-24">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white"
                    >
                        The Cost of a <span className="text-gradient">Poor Online Presence</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-[#94a3b8]"
                    >
                        In today's digital landscape, relying purely on word-of-mouth isn't enough. Here is what you lose without a proper growth system.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            className="rounded-2xl p-8 group transition-all duration-300 card-hover-premium"
                            style={{
                                background: 'rgba(220,38,38,0.04)',
                                border: '1px solid rgba(220,38,38,0.12)',
                            }}
                            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(220,38,38,0.25)'}
                            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(220,38,38,0.12)'}
                        >
                            <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-3xl" style={{ background: 'rgba(220,38,38,0.1)' }}>
                                {item.emoji}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                            <p className="text-[#94a3b8] leading-relaxed mb-6">
                                {item.description}
                            </p>
                            <span className="inline-block font-mono text-xs font-bold px-3 py-1.5 rounded-md" style={{ background: 'rgba(220,38,38,0.1)', color: 'rgba(252,165,165,0.85)' }}>
                                {item.stat}
                            </span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Problem;
