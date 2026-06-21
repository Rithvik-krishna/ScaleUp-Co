import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Portfolio = () => {
    const projects = [
        {
            title: "ArthaGroww",
            description: "Gamified EdTech platform teaching stock markets, AI automation, Web3, and entrepreneurship through interactive daily modules.",
            type: "EdTech & Web App",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
            gradient: "linear-gradient(135deg, #0284c7 0%, #0f766e 50%, #0f172a 100%)",
            tags: ["Fintech", "Mobile Web App", "EdTech"],
            link: "https://arthagroww.vercel.app/"
        },
        {
            title: "Chameleon Agent",
            description: "A web-based remote desktop solution similar to AnyDesk, enabling seamless remote system access and control directly through the browser.",
            type: "Web Application",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
            gradient: "linear-gradient(135deg, #7c3aed 0%, #4338ca 50%, #0f172a 100%)",
            tags: ["Remote Desktop", "Web App", "WebRTC"],
            link: "https://www.chameleon-agent.online/"
        },
        {
            title: "Beryl Healthcare",
            description: "A trusted digital presence for a modern hospital, designed to simplify patient bookings.",
            type: "Healthcare",
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
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
                            {/* Image with dark overlay */}
                            <div className="relative h-52 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Dark gradient overlay */}
                                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(6,8,16,0.3) 0%, rgba(6,8,16,0.55) 100%)' }}></div>
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
