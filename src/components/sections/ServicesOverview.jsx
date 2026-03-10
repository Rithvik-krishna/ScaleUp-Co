import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Search, MessageSquarePlus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
    const services = [
        {
            icon: <Laptop className="w-10 h-10 text-[#00E1FF]" />,
            title: "Website Development",
            description: "High-performance, beautifully designed websites built to convert visitors into paying customers. Fully responsive and lightning fast.",
            features: ["Custom Design", "Mobile Optimization", "Speed Optimized"]
        },
        {
            icon: <Search className="w-10 h-10 text-[#00E1FF]" />,
            title: "Google Visibility",
            description: "Dominate local search results. We optimize your Google Business Profile and website SEO to ensure you rank #1 when customers search.",
            features: ["Local SEO", "Profile Optimization", "Review Management"]
        },
        {
            icon: <MessageSquarePlus className="w-10 h-10 text-[#00E1FF]" />,
            title: "Lead Generation Systems",
            description: "Automated systems that capture leads and turn them into appointments. Integrated with WhatsApp, forms, and booking calendars.",
            features: ["Automated Workflows", "WhatsApp Integration", "CRM Setup"]
        }
    ];

    return (
        <section className="py-24 bg-dark-bg relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                            Our <span className="text-gradient">Growth Systems</span>
                        </h2>
                        <p className="text-lg text-gray-400">
                            We don't just build websites. We build complete digital ecosystems designed to attract, capture, and convert at scale.
                        </p>
                    </div>
                    <Link to="/services" className="hidden md:inline-flex items-center text-[#00E1FF] hover:text-white transition-colors font-medium mt-6 md:mt-0">
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
                            className="bg-dark-surface border border-gray-800 rounded-2xl p-8 card-hover-premium group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E1FF]/5 rounded-bl-[100px] transition-transform group-hover:scale-110"></div>

                            <div className="mb-6 bg-gray-900/50 w-16 h-16 rounded-xl flex items-center justify-center border border-gray-800">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-400 mb-8 min-h-[100px]">
                                {service.description}
                            </p>

                            <ul className="space-y-3">
                                {service.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-center text-sm font-medium text-gray-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#00E1FF] mr-3"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 md:hidden flex justify-center">
                    <Link to="/services" className="inline-flex items-center text-[#00E1FF] font-medium">
                        View All Services <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
