import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
        <section style={{ background: '#060810', borderTop: '1px solid rgba(59,130,246,0.08)' }} className="py-24">
            <div className="max-w-4xl mx-auto px-6">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white"
                    >
                        Frequently Asked <span className="text-gradient">Questions</span>
                    </motion.h2>
                </div>

                <div>
                    {questions.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{ borderBottom: '1px solid rgba(59,130,246,0.12)' }}
                            className="overflow-hidden"
                        >
                            <button
                                className="w-full px-2 py-6 text-left flex justify-between items-center focus:outline-none"
                                onClick={() => setOpenIndex(index === openIndex ? null : index)}
                            >
                                <h3 className="text-lg md:text-xl font-bold pr-8 text-white">{faq.q}</h3>
                                <div
                                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300"
                                    style={{
                                        background: 'rgba(37,99,235,0.12)',
                                        border: '1px solid rgba(59,130,246,0.2)',
                                        transform: index === openIndex ? 'rotate(45deg)' : 'rotate(0deg)'
                                    }}
                                >
                                    <svg className="w-4 h-4 text-[#3b82f6]" fill="none" viewBox="0 0 16 16">
                                        <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                    </svg>
                                </div>
                            </button>

                            <AnimatePresence>
                                {index === openIndex && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-2 pb-6 text-[#94a3b8] leading-relaxed font-light">
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
