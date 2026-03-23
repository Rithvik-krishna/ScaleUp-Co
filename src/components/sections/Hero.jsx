import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Globe, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const StatCard = ({ icon, stat, label, badge, badgeColor, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay }}
        whileHover={{ x: -4, borderColor: 'rgba(59,130,246,0.45)' }}
        style={{
            background: 'rgba(11,15,28,0.9)',
            border: '1px solid rgba(59,130,246,0.22)',
            borderRadius: '12px',
            backdropFilter: 'blur(20px)',
            transition: 'all 0.3s ease'
        }}
        className="flex items-center gap-4 p-5"
    >
        <div style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: '10px' }} className="w-12 h-12 flex items-center justify-center shrink-0">
            {icon}
        </div>
        <div className="flex-1">
            <div className="flex items-center gap-2 mb-0.5">
                <span className="text-2xl font-extrabold text-white">{stat}</span>
                <span style={{ background: badgeColor, fontSize: '10px', borderRadius: '99px' }} className="text-white font-bold px-2 py-0.5 uppercase tracking-wider">{badge}</span>
            </div>
            <p className="text-sm text-[#94a3b8]">{label}</p>
        </div>
    </motion.div>
);

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" style={{ background: '#060810' }}>
            {/* Dot grid background */}
            <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)',
                backgroundSize: '64px 64px'
            }}></div>
            {/* Radial blue glow */}
            <div className="absolute inset-0" style={{
                background: 'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(37,99,235,0.08) 0%, transparent 70%)'
            }}></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-2xl"
                    >
                        {/* Eyebrow label */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="inline-flex items-center gap-2 mb-6"
                            style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(59,130,246,0.25)', borderRadius: '99px', padding: '6px 14px' }}
                        >
                            <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse"></span>
                            <span className="text-sm font-semibold text-[#3b82f6] tracking-wide">Digital Growth Agency</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                            We Help Local Businesses <br />
                            <span className="text-gradient">Scale Online.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-[#94a3b8] mb-10 max-w-xl leading-relaxed">
                            We design high-converting websites and digital growth systems that bring more calls, bookings, and revenue for local businesses.
                        </p>

                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <Link to="/contact">
                                <button
                                    style={{ background: '#2563eb', borderRadius: '6px' }}
                                    className="flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white hover:bg-[#3b82f6] transition-colors group w-full sm:w-auto"
                                >
                                    Book Free Consultation
                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                            <Link to="/services">
                                <button
                                    style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px' }}
                                    className="flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white hover:border-white/40 transition-colors w-full sm:w-auto"
                                >
                                    View Our Work
                                </button>
                            </Link>
                        </div>

                        <div className="mt-12">
                            <p className="text-sm text-[#64748b] mb-4 font-medium uppercase tracking-wider">Helping businesses in:</p>
                            <div className="flex flex-wrap gap-3">
                                {['Restaurants', 'Clinics', 'Gyms', 'Real Estate', 'Salons', 'Local Retail'].map((industry) => (
                                    <span key={industry} style={{ background: 'rgba(11,15,28,0.8)', border: '1px solid rgba(59,130,246,0.15)', borderRadius: '99px' }} className="text-xs font-semibold text-[#94a3b8] px-3 py-1.5">
                                        {industry}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Stat Cards */}
                    <div className="hidden lg:flex flex-col gap-4 max-w-sm ml-auto">
                        <StatCard
                            icon={<TrendingUp className="w-6 h-6 text-[#3b82f6]" />}
                            stat="+342%"
                            label="Average revenue growth"
                            badge="↑ YOY"
                            badgeColor="rgba(34,197,94,0.8)"
                            delay={0.3}
                        />
                        <StatCard
                            icon={<Globe className="w-6 h-6 text-[#3b82f6]" />}
                            stat="500+"
                            label="Websites delivered"
                            badge="Active"
                            badgeColor="rgba(37,99,235,0.85)"
                            delay={0.45}
                        />
                        <StatCard
                            icon={<Star className="w-6 h-6 text-[#3b82f6]" />}
                            stat="4.9★"
                            label="Average client rating"
                            badge="Verified"
                            badgeColor="rgba(100,116,139,0.85)"
                            delay={0.6}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
