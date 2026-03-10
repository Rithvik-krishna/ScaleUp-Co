import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const questions = [
        {
            q: "How long does a website take to build?",
            a: "Most projects launch within 7–14 days depending on required features, revisions, and feedback consistency. We prioritize getting your growth system live quickly."
        },
        {
            q: "Do you provide hosting and domains?",
            a: "Yes, we handle the entire technical setup. We assist with hosting config, domain connections, and full deployment so you don't have to touch a single line of code."
        },
        {
            q: "Will my site rank on Google?",
            a: "Yes. Every website we build is SEO-ready from day one. For businesses wanting to dominate local search, we also offer dedicated ongoing Local SEO services."
        },
        {
            q: "Do you provide ongoing support?",
            a: "Absolutely. We offer comprehensive maintenance and growth packages to keep your site fast, secure, and updated. We continuously monitor and improve your conversion rates."
        }
    ];

    return (
        <section className="py-24 bg-white text-gray-900">
            <div className="max-w-4xl mx-auto px-6">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
                    >
                        Frequently Asked <span className="text-blue-600">Questions</span>
                    </motion.h2>
                </div>

                <div className="space-y-4">
                    {questions.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-gray-200 rounded-2xl overflow-hidden bg-gray-50"
                        >
                            <button
                                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                                onClick={() => setOpenIndex(index === openIndex ? null : index)}
                            >
                                <h3 className="text-lg md:text-xl font-bold pr-8">{faq.q}</h3>
                                <ChevronDown
                                    className={`w-6 h-6 shrink-0 transition-transform duration-300 text-blue-600 ${index === openIndex ? 'rotate-180' : ''}`}
                                />
                            </button>

                            <AnimatePresence>
                                {index === openIndex && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FAQ;
