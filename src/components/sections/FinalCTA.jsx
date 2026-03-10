import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
    return (
        <section className="py-24 bg-dark-bg relative overflow-hidden isolate border-t border-gray-800">

            {/* Background glow effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-[#00E1FF]/10 rounded-full blur-[120px] pointer-events-none -translate-y-24"></div>

            <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-dark-surface border border-gray-800 rounded-[40px] p-10 md:p-20 shadow-2xl relative overflow-hidden"
                >
                    {/* Decorative lines */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00E1FF]/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00E1FF]/50 to-transparent"></div>

                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        Ready to <span className="text-gradient hover:scale-105 inline-block transition-transform duration-300">Scale</span> Your Business?
                    </h2>

                    <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Stop losing customers to outdated websites and poor visibility. Book a free 30-minute strategy call with our team to map out your digital growth system.
                    </p>

                    <Link to="/contact">
                        <Button variant="primary" size="lg" className="w-full sm:w-auto md:px-12 md:h-16 md:text-lg group hover:scale-[1.02] transition-transform">
                            Book Free Strategy Call
                            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>

                    <p className="mt-8 text-sm text-gray-500 font-medium">
                        100% Free. No Commitments. High Value Guaranteed.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
