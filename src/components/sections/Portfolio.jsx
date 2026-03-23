import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Portfolio = () => {
    const projects = [
        {
            title: "Fresh Mart",
            description: "Modern e-commerce platform with a seamless shopping experience and optimized checkout flow.",
            type: "E-Commerce",
            gradient: "linear-gradient(135deg, #064e3b 0%, #065f46 50%, #0f172a 100%)",
            tags: ["E-Commerce", "Web Design"],
            link: "https://fresh-mart-1475.vercel.app/"
        },
        {
            title: "PowerHouse Fitness",
            description: "High-performance landing page for a premium gym, designed to drive membership sign-ups.",
            type: "Lead Gen",
            gradient: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #0f172a 100%)",
            tags: ["Lead Gen", "High Conversion"],
            link: "https://demo-gym-gamma.vercel.app/"
        },
        {
            title: "Beryl Healthcare",
            description: "A trusted digital presence for a modern hospital, designed to simplify patient bookings.",
            type: "Healthcare",
            gradient: "linear-gradient(135deg, #164e63 0%, #0e7490 50%, #0f172a 100%)",
            tags: ["Healthcare", "Patient Portal"],
            link: "https://demo-hospital-beryl.vercel.app/"
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
                        Our <span className="text-gradient">Recent Work</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-[#94a3b8]"
                    >
                        A glimpse into the growth systems we design for modern businesses.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="rounded-2xl overflow-hidden group card-hover-premium flex flex-col cursor-pointer"
                            style={{ background: '#060810', border: '1px solid rgba(59,130,246,0.12)' }}
                        >
                            {/* Gradient image placeholder */}
                            <div className="relative h-52 overflow-hidden" style={{ background: project.gradient }}>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                                {/* Work type tag */}
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md" style={{ background: 'rgba(6,8,16,0.8)', color: '#64748b', border: '1px solid rgba(59,130,246,0.15)' }}>
                                        {project.type}
                                    </span>
                                </div>
                                {/* Arrow icon top right */}
                                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ArrowUpRight className="w-5 h-5 text-white" />
                                </div>
                            </div>

                            <div className="p-7 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#3b82f6] transition-colors flex items-center justify-between">
                                    {project.title}
                                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[#3b82f6]" />
                                </h3>
                                <p className="text-[#94a3b8] mb-5 leading-relaxed text-sm flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, tIndex) => (
                                        <span key={tIndex} className="text-xs font-semibold px-3 py-1 rounded-md" style={{ background: 'rgba(37,99,235,0.08)', color: '#64748b', border: '1px solid rgba(59,130,246,0.12)' }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Portfolio;
