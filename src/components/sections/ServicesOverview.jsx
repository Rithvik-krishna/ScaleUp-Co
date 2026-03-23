import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Search, MessageSquarePlus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
    const services = [
        {
            icon: <Laptop className="w-10 h-10 text-[#3b82f6]" />,
            title: "Website Development",
            description: "High-performance, beautifully designed websites built to convert visitors into paying customers. Fully responsive and lightning fast.",
            features: ["Custom Design", "Mobile Optimization", "Speed Optimized"]
        },
        {
            icon: <Search className="w-10 h-10 text-[#3b82f6]" />,
            title: "Google Visibility",
            description: "Dominate local search results. We optimize your Google Business Profile and website SEO to ensure you rank #1 when customers search.",
            features: ["Local SEO", "Profile Optimization", "Review Management"]
        },
        {
            icon: <MessageSquarePlus className="w-10 h-10 text-[#3b82f6]" />,
            title: "Lead Generation Systems",
            description: "Automated systems that capture leads and turn them into appointments. Integrated with WhatsApp, forms, and booking calendars.",
            features: ["Automated Workflows", "WhatsApp Integration", "CRM Setup"]
        }
    ];

    return (
        <section style={{ background: '#060810' }} className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
                            Our <span className="text-gradient">Growth Systems</span>
                        </h2>
                        <p className="text-lg text-[#94a3b8]">
                            We don't just build websites. We build complete digital ecosystems designed to attract, capture, and convert at scale.
                        </p>
                    </div>
                    <Link to="/services" className="hidden md:inline-flex items-center text-[#3b82f6] hover:text-white transition-colors font-medium mt-6 md:mt-0">
                        View All Services <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="rounded-2xl p-8 group relative overflow-hidden card-hover-premium"
                            style={{
                                background: '#060810',
                                border: '1px solid rgba(59,130,246,0.12)',
                            }}
                        >
                            {/* Top border on hover */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{ background: 'linear-gradient(90deg, #2563eb, #0ea5e9)' }}></div>

                            <div className="mb-6 w-16 h-16 rounded-xl flex items-center justify-center" style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                            <p className="text-[#94a3b8] mb-8 min-h-[100px]">
                                {service.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {service.features.map((feature, fIndex) => (
                                    <span key={fIndex} className="text-xs font-semibold px-3 py-1.5 rounded-md" style={{ background: 'rgba(37,99,235,0.1)', color: '#3b82f6', border: '1px solid rgba(59,130,246,0.2)' }}>
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 md:hidden flex justify-center">
                    <Link to="/services" className="inline-flex items-center text-[#3b82f6] font-medium">
                        View All Services <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
