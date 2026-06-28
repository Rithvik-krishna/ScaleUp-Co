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
    'Website Development', 'Google Visibility', 'Lead Generation Systems',
    'Social Media Management & Growth', 'Video Editing & Content Creation', 'Paid Advertising',
    'CRM & Sales Automation', 'Business Process Automation', 'AI Chatbots',
    'AI Voice Receptionist', 'Custom AI Agents'
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
                        <div className="max-w-4xl">

                            {/* Main Text Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                            >
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 leading-[1.1]">
                                    ScaleUp Co
                                </h1>
                                <p className="text-2xl md:text-3xl font-bold text-gradient mb-6 leading-tight">
                                    Growth Systems, AI Automation & Websites That Scale Businesses
                                </p>

                                <p className="text-lg md:text-xl text-[#94a3b8] mb-8 max-w-xl leading-relaxed">
                                    We help businesses generate more leads, close more customers, and automate operations through websites, SEO, paid advertising, CRM systems, and AI-powered automation.
                                </p>

                                {/* Partners logo badges cloud */}
                                <div className="flex flex-wrap items-center gap-4 mb-8">
                                    {/* Google Partner */}
                                    <div className="bg-white/95 border border-gray-200 shadow-sm px-4 py-2 rounded-lg flex items-center gap-2 h-10 shrink-0 select-none">
                                        <svg className="w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.22-.66-.35-1.36-.35-2.09z" fill="#FBBC05"/>
                                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                                        </svg>
                                        <span className="text-gray-800 font-extrabold text-xs tracking-tight">Partner</span>
                                    </div>

                                    {/* Shopify Partner */}
                                    <div className="bg-white/95 border border-gray-200 shadow-sm px-4 py-2 rounded-lg flex items-center gap-2 h-10 shrink-0 select-none">
                                        <svg className="w-5 h-5 text-[#95BF47] fill-current" viewBox="0 0 24 24">
                                            <path d="M19.5 7.5L18 4.5H12V3c0-.83-.67-1.5-1.5-1.5h-3C6.67 1.5 6 2.17 6 3v1.5H0L1.5 22.5h18l1.5-15zM7.5 3c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v1.5h-4V3zm7.88 12.87c-.8 1.4-2.18 2.25-3.88 2.25-2.5 0-4.5-1.79-4.5-4s2-4 4.5-4c1.69 0 3.06.85 3.86 2.25l-1.37.69c-.5-.87-1.37-1.44-2.49-1.44-1.38 0-2.5.89-2.5 2.5s1.12 2.5 2.5 2.5c1.13 0 2-.57 2.5-1.44l1.38.69z"/>
                                        </svg>
                                        <span className="text-gray-800 font-bold text-xs tracking-tight">shopify <span className="font-normal text-gray-500">partners</span></span>
                                    </div>

                                    {/* Meta Partner */}
                                    <div className="bg-white/95 border border-gray-200 shadow-sm px-4 py-2 rounded-lg flex items-center gap-2 h-10 shrink-0 select-none">
                                        <svg className="w-5 h-5 text-[#0064E0] fill-current" viewBox="0 0 24 24">
                                            <path d="M16.14 7c-1.39 0-2.6.53-3.5 1.4-.73-.72-1.68-1.2-2.78-1.32-.23-.02-.45-.03-.68-.03a5.55 5.55 0 000 11.1c.23 0 .45-.01.68-.03 1.1-.12 2.05-.6 2.78-1.32.9.87 2.11 1.4 3.5 1.4 2.87 0 5.2-2.31 5.2-5.2S19.01 7 16.14 7zm0 8.4c-1.76 0-3.2-1.44-3.2-3.2s1.44-3.2 3.2-3.2 3.2 1.44 3.2 3.2-1.44 3.2-3.2 3.2z"/>
                                        </svg>
                                        <span className="text-gray-800 font-bold text-xs tracking-tight">Meta <span className="font-normal text-gray-500">Business Partners</span></span>
                                    </div>
                                </div>

                                {/* CTA buttons */}
                                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                    <Link to="/contact">
                                        <button style={{ background: '#2563eb', borderRadius: '6px' }} className="flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white hover:bg-[#3b82f6] transition-colors group w-full sm:w-auto">
                                            Book Free Strategy Call
                                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </Link>
                                    <Link to="/services">
                                        <button style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px' }} className="flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white hover:border-white/40 transition-colors w-full sm:w-auto">
                                            View Our Work
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>

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
