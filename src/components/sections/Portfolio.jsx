import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Portfolio = () => {
    const projects = [
        {
            title: "Fresh Mart",
            description: "Modern e-commerce platform with a seamless shopping experience and optimized checkout flow.",
            category: "Demo Build",
            image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            tags: ["E-Commerce", "Web Design"],
            link: "https://fresh-mart-1475.vercel.app/"
        },
        {
            title: "PowerHouse Fitness",
            description: "High-performance landing page for a premium gym, designed to drive membership sign-ups.",
            category: "Demo Build",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            tags: ["Lead Gen", "High Conversion"],
            link: "https://demo-gym-gamma.vercel.app/"
        }
    ];

    return (
        <section className="py-24 bg-dark-bg border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
                    >
                        Our <span className="text-gradient">Recent Work</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-400"
                    >
                        A glimpse into the growth systems we design for modern businesses.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8">
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
                            className="bg-dark-surface rounded-2xl border border-gray-800 overflow-hidden group card-hover-premium flex flex-col cursor-pointer"
                        >
                            <div className="relative h-60 overflow-hidden">
                                <div className="absolute inset-0 bg-dark-bg/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="bg-dark-bg/80 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full border border-gray-700">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow relative">
                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#00E1FF] transition-colors flex items-center justify-between">
                                    {project.title}
                                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                                </h3>
                                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, tIndex) => (
                                        <span key={tIndex} className="text-xs font-semibold text-gray-500 bg-gray-900 px-3 py-1 rounded-md border border-gray-800">
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
