import React from 'react';
import { motion } from 'framer-motion';

// SVG line icons as white strokes
const UsersOffIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 11a4 4 0 1 0-8 0"/>
        <path d="M5.5 19a7.5 7.5 0 0 1 13 0"/>
        <line x1="2" y1="2" x2="22" y2="22"/>
    </svg>
);

const TrendingDownIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/>
        <polyline points="16 17 22 17 22 11"/>
    </svg>
);

const ClockIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
    </svg>
);

const Problem = () => {
    const problems = [
        {
            icon: <UsersOffIcon />,
            title: "Lost Opportunities",
            description: "No website means potential customers are finding your competitors instead of you when they search online.",
            stat: "↓ 70% of leads go elsewhere"
        },
        {
            icon: <TrendingDownIcon />,
            title: "Reduced Trust",
            description: "A poor online presence makes prospects question your legitimacy. 75% of users judge credibility based on web design.",
            stat: "75% judge by design"
        },
        {
            icon: <ClockIcon />,
            title: "Low Conversions",
            description: "Slow, outdated websites frustrate users and hurt your bottom line. Every second of delay drops conversions by 7%.",
            stat: "↓ 7% per second delay"
        }
    ];

    return (
        <section style={{ background: '#0b0f1c', borderTop: '1px solid rgba(59,130,246,0.08)', padding: '7rem 0' }}>
            <div className="max-w-7xl mx-auto px-6 md:px-20">

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
                            className="rounded-2xl p-8 group transition-all duration-300"
                            style={{
                                background: 'rgba(220,38,38,0.04)',
                                border: '1px solid rgba(220,38,38,0.12)',
                                transition: 'border-color 0.3s ease, transform 0.3s ease'
                            }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(220,38,38,0.25)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(220,38,38,0.12)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                        >
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: 'rgba(220,38,38,0.1)' }}>
                                {item.icon}
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
