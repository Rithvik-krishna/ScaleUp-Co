import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Terminal, Users, Cpu, ArrowUpRight } from 'lucide-react';

const DetailedSEOContent = () => {
    return (
        <section style={{ background: '#0b0f1c', borderTop: '1px solid rgba(59,130,246,0.08)' }} className="py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* Left Column: Heading & Introduction */}
                    <div className="lg:col-span-1 space-y-6">
                        <span className="font-mono text-xs uppercase tracking-widest text-[#3b82f6] font-semibold">Local SEO Authority</span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                            ScaleUp Co — Bangalore's Premier Web Design & Growth Agency
                        </h2>
                        <p className="text-[#94a3b8] leading-relaxed font-light text-sm">
                            In today's fast-paced digital ecosystem, a basic template website is no longer enough to secure market leadership. As a dedicated partner in business growth, <strong>ScaleUp Co</strong> designs high-converting websites, Local SEO frameworks, and AI-driven automation systems engineered to dominate local search queries and convert visitors into loyal clients.
                        </p>
                        <div className="p-6 rounded-2xl border border-gray-800" style={{ background: '#060810' }}>
                            <div className="flex items-center gap-3 mb-3">
                                <ShieldCheck className="text-[#3b82f6] w-6 h-6" />
                                <h3 className="font-bold text-white text-base">E-E-A-T Trust Standard</h3>
                            </div>
                            <p className="text-xs text-gray-400 leading-relaxed font-light">
                                Our processes follow Google's Experience, Expertise, Authoritativeness, and Trustworthiness guidelines. Every page is crafted with technical semantic markup, local citations, and authentic brand signals.
                            </p>
                        </div>
                    </div>

                    {/* Middle Column: Detailed Articles / Context */}
                    <div className="lg:col-span-2 space-y-10">
                        {/* Block 1 */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]"></span>
                                Why Businesses Need More Than a Template Website
                            </h3>
                            <p className="text-[#94a3b8] leading-relaxed font-light text-sm">
                                Standard page-builders inject massive script libraries that slow down your website. Google penalizes slow load times, and users abandon sites that take longer than two seconds to display. At <strong>ScaleUp Co</strong>, we construct bespoke React and Vite web architectures. Our clean code structure ensures near-instant loading, which boosts both user engagement and organic search engine rankings.
                            </p>
                        </div>

                        {/* Block 2 */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]"></span>
                                Google Business Profile & Local SEO Optimization
                            </h3>
                            <p className="text-[#94a3b8] leading-relaxed font-light text-sm">
                                To rank #1 for terms like <em>Web Development Bangalore</em> or <em>SEO Services Bangalore</em>, your local citation footprint must be pristine. We programmatically align your website metadata with your Google Business Profile (GBP) name, address, and telephone number (NAP consistency). Our Local SEO systems index location landing pages and deploy targeted schema markers to place your brand in Google's Local 3-Pack.
                            </p>
                        </div>

                        {/* Block 3 */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]"></span>
                                AI Automation: Chatbots & Voice Receptionists
                            </h3>
                            <p className="text-[#94a3b8] leading-relaxed font-light text-sm">
                                Generating website traffic is only half the battle. If a prospect calls your clinic, real estate office, or startup at night and gets no answer, that revenue goes to a competitor. We develop and integrate custom <strong>AI Chatbots</strong> and <strong>AI Voice Receptionists</strong>. Working 24/7, these systems qualify customer intent, schedule appointments, and push lead records directly into your CRM database automatically.
                            </p>
                        </div>

                        {/* Trust Stack Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-800/60">
                            <div className="space-y-2">
                                <div className="text-[#3b82f6] flex items-center gap-1.5">
                                    <Terminal size={16} />
                                    <span className="text-xs font-mono font-bold uppercase tracking-wider">Clean Code Stack</span>
                                </div>
                                <p className="text-xs text-gray-400 leading-relaxed font-light">
                                    We avoid WordPress or heavy plugins. We develop using React, Vite, and tailwind utilities for fast execution.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <div className="text-[#3b82f6] flex items-center gap-1.5">
                                    <Cpu size={16} />
                                    <span className="text-xs font-mono font-bold uppercase tracking-wider">AI Operations</span>
                                </div>
                                <p className="text-xs text-gray-400 leading-relaxed font-light">
                                    Our chatbots connect with OpenAI and Anthropic API pipelines to manage natural interactions.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <div className="text-[#3b82f6] flex items-center gap-1.5">
                                    <Users size={16} />
                                    <span className="text-xs font-mono font-bold uppercase tracking-wider">Local Citations</span>
                                </div>
                                <p className="text-xs text-gray-400 leading-relaxed font-light">
                                    Complete setup of localized backlinks, review monitoring scripts, and structured location pages.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailedSEOContent;
