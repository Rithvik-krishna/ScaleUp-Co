import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

const Pricing = () => {
    const plans = [
        {
            name: "Starter",
            price: "₹8,999",
            tagline: "Best for new businesses launching online",
            description: "Perfect for new local businesses needing a professional digital presence.",
            features: [
                "Premium 3-Page Website",
                "Mobile Responsive Design",
                "Basic SEO Setup",
                "Contact Form Integration",
                "Google Business Profile Setup"
            ],
            popular: false,
            cta: "Get Started"
        },
        {
            name: "Growth",
            price: "₹18,999",
            tagline: "Most popular for scaling local brands",
            description: "Our most popular package for businesses ready to scale and capture leads.",
            features: [
                "Premium 5-Page Website",
                "Advanced SEO & Speed Optimization",
                "Lead Capture Systems",
                "WhatsApp Integration",
                "Monthly Performance Report",
                "Priority Email Support"
            ],
            popular: true,
            cta: "Grow Now"
        },
        {
            name: "Scale",
            price: "₹35,000+",
            tagline: "Best for established businesses needing advanced systems",
            description: "Custom digital ecosystem for established brands needing maximum ROI.",
            features: [
                "Custom Feature Development",
                "E-commerce / Booking Systems",
                "Automated CRM Workflows",
                "Aggressive Local SEO Campaigns",
                "Dedicated Account Manager",
                "24/7 Priority Support"
            ],
            popular: false,
            cta: "Let's Talk"
        }
    ];

    return (
        <section className="py-24 bg-dark-bg border-t border-gray-800 relative z-0 relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        Flexible <span className="text-gradient">Growth Packages</span>
                    </h2>
                    <p className="text-lg text-gray-400">
                        No hidden fees. No complicated contracts. Just proven systems that deliver results for businesses at every stage.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className={`relative flex flex-col bg-dark-surface rounded-2xl p-8 border hover:scale-[1.02] ${plan.popular ? 'border-[#00E1FF] md:-translate-y-6 md:scale-[1.02] shadow-[0_0_20px_rgba(0,225,255,0.2)] z-10 hover:shadow-[0_0_40px_rgba(0,225,255,0.4)] transition-all duration-300' : 'border-gray-800 card-hover-premium'} transition-transform`}
                        >
                            {plan.popular && (
                                <div className="absolute inset-0 bg-gradient-to-b from-[#00E1FF]/10 to-transparent pointer-events-none rounded-2xl"></div>
                            )}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00E1FF] text-dark-bg text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                                <p className="text-sm text-[#00E1FF] font-medium mb-3">{plan.tagline}</p>
                                <p className="text-sm text-gray-400 min-h-[40px]">{plan.description}</p>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline text-4xl font-extrabold">
                                    {plan.price}
                                    {plan.name !== "Scale" && <span className="text-lg font-medium text-gray-400 ml-2">/one-time</span>}
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-center text-sm text-gray-300">
                                        <Check className={`w-5 h-5 mr-3 shrink-0 ${plan.popular ? 'text-[#00E1FF]' : 'text-blue-500'}`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto">
                                <Link to="/contact">
                                    <Button
                                        variant={plan.popular ? 'primary' : 'secondary'}
                                        className="w-full h-12"
                                    >
                                        {plan.cta}
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="inline-flex items-center justify-center px-4 py-2 bg-dark-surface border border-gray-800 rounded-full text-sm font-medium text-gray-300 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-[#00E1FF] mr-2 animate-pulse"></span>
                        Average delivery time: 7–14 days
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
