import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Globe, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ---------- Floating animation keyframes ---------- */
const floatStyle = (delay = '0s') => ({
    animation: `heroFloat 3.5s ease-in-out infinite`,
    animationDelay: delay,
});

/* We inject keyframes once via a style tag */
const FloatKeyframes = () => (
    <style>{`
        @keyframes heroFloat {
            0%, 100% { transform: translateY(0); }
            50%       { transform: translateY(-5px); }
        }
        @keyframes heroMarquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
        }
    `}</style>
);

/* ---------- Stat card ---------- */
const StatCard = ({ icon, stat, label, badge, badgeColor, delay, floatDelay }) => (
    <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay }}
        style={{
            ...floatStyle(floatDelay),
            background: 'rgba(11,15,28,0.9)',
            border: '1px solid rgba(59,130,246,0.22)',
            borderRadius: '12px',
            backdropFilter: 'blur(20px)',
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

/* ---------- Ticker ---------- */
const tickerItems = [
    'Website Design', 'SEO Growth', 'Lead Generation', 'Google Visibility',
    'Conversion Optimization', 'WhatsApp Integration', 'Brand Identity',
    'E-Commerce', 'Analytics & Tracking'
];

const Ticker = () => {
    const doubled = [...tickerItems, ...tickerItems];
    return (
        <div style={{ borderTop: '1px solid rgba(59,130,246,0.1)', background: '#060810', overflow: 'hidden' }} className="py-4">
            <div style={{ display: 'flex', animation: 'heroMarquee 24s linear infinite', width: 'max-content' }}>
                {doubled.map((item, i) => (
                    <span key={i} className="flex items-center gap-3 px-4">
                        <span className="font-mono text-xs uppercase tracking-widest text-[#64748b]" style={{ whiteSpace: 'nowrap' }}>{item}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] shrink-0"></span>
                    </span>
                ))}
            </div>
        </div>
    );
};

/* ---------- Hero ---------- */
const Hero = () => {
    return (
        <>
            <FloatKeyframes />
            <section className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: '#060810' }}>
                {/* Dot grid */}
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)',
                    backgroundSize: '64px 64px'
                }}></div>
                {/* Radial glow */}
                <div className="absolute inset-0" style={{
                    background: 'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(37,99,235,0.08) 0%, transparent 70%)'
                }}></div>

                {/* Main content */}
                <div className="flex-1 flex items-center relative z-10 w-full">
                    <div className="max-w-7xl mx-auto px-6 md:px-20 w-full" style={{ paddingTop: '7rem', paddingBottom: '4rem' }}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                            {/* LEFT */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                className="max-w-2xl"
                            >
                                {/* Eyebrow */}
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
                                    We Help Businesses <br />
                                    <span className="text-gradient">Scale Online.</span>
                                </h1>

                                <p className="text-lg md:text-xl text-[#94a3b8] mb-8 max-w-xl leading-relaxed">
                                    We design high-converting websites and digital growth systems that bring more visibility, leads, and revenue — for every kind of business.
                                </p>

                                {/* Inline metrics strip */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.35 }}
                                    className="flex mb-10"
                                    style={{
                                        background: 'rgba(11,15,28,0.8)',
                                        border: '1px solid rgba(59,130,246,0.15)',
                                        borderRadius: '10px',
                                        maxWidth: '480px',
                                    }}
                                >
                                    {[
                                        { value: '+342%', label: 'Avg. revenue growth' },
                                        { value: '500+',  label: 'Projects delivered' },
                                        { value: '4.9★',  label: 'Client rating' },
                                    ].map((m, i) => (
                                        <div key={i} className="flex-1 flex flex-col items-center justify-center py-3" style={{ borderRight: i < 2 ? '1px solid rgba(59,130,246,0.12)' : 'none' }}>
                                            <span style={{ fontSize: '1.4rem', fontWeight: 700, color: 'white', lineHeight: 1.2 }}>{m.value}</span>
                                            <span style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '2px', textAlign: 'center', lineHeight: 1.3 }}>{m.label}</span>
                                        </div>
                                    ))}
                                </motion.div>

                                {/* CTA buttons */}
                                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                    <Link to="/contact">
                                        <button style={{ background: '#2563eb', borderRadius: '6px' }} className="flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white hover:bg-[#3b82f6] transition-colors group w-full sm:w-auto">
                                            Book Free Consultation
                                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </Link>
                                    <Link to="/services">
                                        <button style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px' }} className="flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white hover:border-white/40 transition-colors w-full sm:w-auto">
                                            View Our Work
                                        </button>
                                    </Link>
                                </div>

                                {/* Industry tags */}
                                <div className="mt-12">
                                    <p className="text-sm text-[#64748b] mb-4 font-medium uppercase tracking-wider">Helping businesses in:</p>
                                    <div className="flex flex-wrap gap-3">
                                        {['Restaurants', 'Clinics', 'Gyms', 'Real Estate', 'Salons', 'Local Retail', 'Startups', 'E-Commerce'].map((industry) => (
                                            <span key={industry} style={{ background: 'rgba(11,15,28,0.8)', border: '1px solid rgba(59,130,246,0.15)', borderRadius: '99px' }} className="text-xs font-semibold text-[#94a3b8] px-3 py-1.5">
                                                {industry}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* RIGHT — divider + stat cards + live activity */}
                            <div className="hidden lg:flex items-stretch gap-8">
                                {/* Vertical divider */}
                                <div className="self-stretch w-px" style={{ background: 'rgba(59,130,246,0.2)', minHeight: '320px' }}></div>

                                <div className="flex flex-col gap-4 max-w-sm flex-1">
                                    <StatCard icon={<TrendingUp className="w-6 h-6 text-[#3b82f6]" />} stat="+342%" label="Average revenue growth" badge="↑ YOY" badgeColor="rgba(34,197,94,0.8)" delay={0.3} floatDelay="0s" />
                                    <StatCard icon={<Globe className="w-6 h-6 text-[#3b82f6]" />} stat="500+" label="Websites delivered" badge="Active" badgeColor="rgba(37,99,235,0.85)" delay={0.45} floatDelay="0.5s" />
                                    <StatCard icon={<Star className="w-6 h-6 text-[#3b82f6]" />} stat="4.9★" label="Average client rating" badge="Verified" badgeColor="rgba(100,116,139,0.85)" delay={0.6} floatDelay="1s" />

                                    {/* Live activity card */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.8 }}
                                        style={{
                                            background: 'rgba(11,15,28,0.9)',
                                            border: '1px solid rgba(59,130,246,0.15)',
                                            borderRadius: '10px',
                                            padding: '0.875rem 1.25rem',
                                        }}
                                        className="flex items-center gap-3"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-green-400 shrink-0 animate-pulse"></span>
                                        <p className="text-xs text-[#94a3b8] flex-1" style={{ lineHeight: 1.5 }}>
                                            <span className="text-white font-semibold">PowerHouse Fitness</span> — new consultation booked just now
                                        </p>
                                        <span className="font-mono text-[10px] text-[#64748b] shrink-0">2m ago</span>
                                    </motion.div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Scrolling ticker at bottom of hero */}
                <div className="relative z-10">
                    <Ticker />
                </div>
            </section>
        </>
    );
};

export default Hero;
