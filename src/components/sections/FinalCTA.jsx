import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
    return (
        <section style={{ background: '#060810', borderTop: '1px solid rgba(59,130,246,0.08)' }} className="py-24 relative overflow-hidden isolate">

            <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden p-10 md:p-20"
                    style={{
                        background: 'linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(11,15,28,0.95) 60%)',
                        border: '1px solid rgba(37,99,235,0.25)',
                        borderRadius: '20px'
                    }}
                >
                    {/* Top edge highlight */}
                    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 10%, #2563eb 50%, transparent 90%)' }}></div>

                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white">
                        Ready to <span className="text-gradient hover:scale-105 inline-block transition-transform duration-300">Scale</span> Your Business?
                    </h2>

                    <p className="text-lg md:text-xl text-[#94a3b8] mb-10 max-w-2xl mx-auto leading-relaxed">
                        Stop losing customers to outdated websites and poor visibility. Book a free 30-minute strategy call with our team to map out your digital growth system.
                    </p>

                    <Link to="/contact">
                        <button
                            style={{ background: '#ffffff', borderRadius: '8px', color: '#060810' }}
                            className="inline-flex items-center gap-3 px-10 py-4 text-base font-bold hover:bg-[#e2e8f0] transition-colors group md:px-12 md:py-5 md:text-lg"
                        >
                            Book Free Strategy Call
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>

                    <p className="mt-8 text-sm text-[#64748b] font-mono">
                        100% Free · No Commitments · High Value Guaranteed
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
