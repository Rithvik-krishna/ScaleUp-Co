import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

const Process = () => {
    const steps = [
        {
            icon: <Search className="w-8 h-8 text-[#00E1FF]" />,
            title: "1. Discovery",
            description: "We understand your business goals, audience, and growth opportunities."
        },
        {
            icon: <PenTool className="w-8 h-8 text-[#00E1FF]" />,
            title: "2. Strategy",
            description: "We design a conversion-focused website structure tailored to your niche."
        },
        {
            icon: <Code className="w-8 h-8 text-[#00E1FF]" />,
            title: "3. Build",
            description: "We develop your high-performance growth website using modern tech."
        },
        {
            icon: <Rocket className="w-8 h-8 text-[#00E1FF]" />,
            title: "4. Launch & Scale",
            description: "SEO optimization and lead systems go live to drive revenue."
        }
    ];

    return (
        <section className="py-24 bg-white text-gray-900 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
                    >
                        Our Simple <span className="text-blue-600">4-Step Process</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600"
                    >
                        We've streamlined the entire process so you can focus on running your business while we build your growth engine.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden lg:block absolute top-[60px] left-[12%] right-[12%] h-0.5 bg-gray-200 z-0 text-gray-200">
                        <div className="absolute top-0 left-0 h-full bg-blue-600 w-full origin-left scale-x-0 transition-transform duration-1000 ease-out z-0" style={{ transform: 'scaleX(1)' }}></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 + 0.2 }}
                                className="flex flex-col items-center text-center group bg-white border border-gray-100 rounded-3xl p-6 shadow-sm relative z-10 card-hover-premium"
                            >
                                <div className="w-32 h-32 rounded-full bg-gray-50 border-4 border-white shadow-xl flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-300">
                                    <div className="absolute inset-0 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="relative z-10">{step.icon}</div>
                                </div>

                                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed max-w-xs">
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
