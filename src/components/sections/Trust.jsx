import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Zap, MapPin } from 'lucide-react';

const Trust = () => {
    const points = [
        {
            icon: <Target className="w-8 h-8 text-[#00E1FF]" />,
            title: "Conversion-Focused Design",
            description: "Every page is designed to turn visitors into leads and customers."
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-[#00E1FF]" />,
            title: "Built for Real Business Growth",
            description: "Our websites focus on calls, bookings, and measurable results."
        },
        {
            icon: <Zap className="w-8 h-8 text-[#00E1FF]" />,
            title: "Fast Delivery",
            description: "Most projects launch within 7–14 days without compromising quality."
        },
        {
            icon: <MapPin className="w-8 h-8 text-[#00E1FF]" />,
            title: "Local Business Focus",
            description: "We specialize in helping local businesses dominate their market online."
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
                        Why Businesses <span className="text-blue-600">Trust ScaleUp Co.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600"
                    >
                        We build digital assets that yield a return on investment. No fluff, just performance.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {points.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-50 border border-gray-100 rounded-3xl p-8 card-hover-premium group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_20px_rgba(0,225,255,0.2)]">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {/* Wrap 7-14 days in bold if it matches */}
                                {item.description.includes("7–14 days") ? (
                                    <>Most projects launch within <span className="font-bold text-gray-900">7–14 days</span> without compromising quality.</>
                                ) : (
                                    item.description
                                )}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Trust;
