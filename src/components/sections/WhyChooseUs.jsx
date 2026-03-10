import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const WhyChooseUs = () => {
    const benefits = [
        { title: "Premium Design Quality", description: "First impressions matter. We out-design your competitors." },
        { title: "Conversion-Focused", description: "Every pixel is optimized to turn visitors into leads." },
        { title: "Lightning Fast Delivery", description: "Launch your new growth system in weeks, not months." },
        { title: "Flexible Packages", description: "Pricing that scales with your business growth stage." },
        { title: "Ongoing Support", description: "We monitor, maintain, and improve your site post-launch." },
        { title: "Local Market Expertise", description: "Proven strategies for local business dominance." }
    ];

    return (
        <section className="py-24 bg-white text-gray-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                            Why Choose <span className="text-blue-600">ScaleUp Co.</span>?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                            We separate ourselves from traditional agencies by focusing on what actually matters: <span className="font-bold text-gray-900">Revenue</span>.
                            No vanity metrics, no confusing jargon. Just premium assets that grow your bottom line.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mr-3" />
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">{benefit.title}</h4>
                                        <p className="text-sm text-gray-500">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-3 opacity-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                            alt="Team working together"
                            className="rounded-3xl shadow-2xl relative z-10 w-full object-cover h-[500px]"
                        />

                        <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl z-20 border border-gray-100 hidden md:block">
                            <div className="flex items-center space-x-4">
                                <div className="text-4xl font-extrabold text-blue-600">100%</div>
                                <div className="text-sm font-medium text-gray-600">Client<br />Satisfaction</div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
