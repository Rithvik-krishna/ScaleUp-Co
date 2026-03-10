import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, UsersRound, Timer } from 'lucide-react';

const Problem = () => {
    const problems = [
        {
            icon: <UsersRound className="w-8 h-8 text-rose-500" />,
            title: "Lost Opportunities",
            description: "No website means potential customers are finding your competitors instead of you when they search online."
        },
        {
            icon: <TrendingDown className="w-8 h-8 text-rose-500" />,
            title: "Reduced Trust",
            description: "A poor online presence makes prospects question your legitimacy. 75% of users judge credibility based on web design."
        },
        {
            icon: <Timer className="w-8 h-8 text-rose-500" />,
            title: "Low Conversions",
            description: "Slow, outdated websites frustrate users and hurt your bottom line. Every second of delay drops conversions by 7%."
        }
    ];

    return (
        <section className="py-24 bg-white text-gray-900 border-t border-gray-100 relative">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
                    >
                        The Cost of a <span className="text-blue-600">Poor Online Presence</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600"
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
                            className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="w-16 h-16 rounded-xl bg-rose-100 flex items-center justify-center mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Problem;
