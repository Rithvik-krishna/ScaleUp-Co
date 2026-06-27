import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const DiscussProject = () => {
    return (
        <section className="py-24 relative overflow-hidden" style={{ background: '#060810' }}>
            {/* Dot grid background matching Hero */}
            <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)',
                backgroundSize: '64px 64px'
            }}></div>
            
            {/* Subtle blue radial glow in background */}
            <div className="absolute inset-0" style={{
                background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(37,99,235,0.06) 0%, transparent 85%)'
            }}></div>

            <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#3b82f6] block">
                                BOOK A FREE STRATEGY CALL
                            </span>
                            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                                Let's Build Your <br />
                                <span className="text-gradient">Growth System</span>
                            </h2>
                            <p className="text-base md:text-lg text-[#94a3b8] max-w-md leading-relaxed">
                                Tell us about your business goals and we'll show you how websites, SEO, lead generation, CRM automation, and AI systems can help you grow faster.
                            </p>
                        </div>

                        {/* Checklist */}
                        <div className="space-y-4 pt-2">
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full border border-[#3b82f6]/30 flex items-center justify-center text-[#3b82f6] shrink-0">
                                    <Check size={12} className="stroke-[3]" />
                                </div>
                                <span className="text-gray-300 text-sm font-semibold">Free Growth Strategy Session</span>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full border border-[#3b82f6]/30 flex items-center justify-center text-[#3b82f6] shrink-0">
                                    <Check size={12} className="stroke-[3]" />
                                </div>
                                <span className="text-gray-300 text-sm font-semibold">Custom Business Roadmap</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full border border-[#3b82f6]/30 flex items-center justify-center text-[#3b82f6] shrink-0">
                                    <Check size={12} className="stroke-[3]" />
                                </div>
                                <span className="text-gray-300 text-sm font-semibold">Lead Generation Recommendations</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full border border-[#3b82f6]/30 flex items-center justify-center text-[#3b82f6] shrink-0">
                                    <Check size={12} className="stroke-[3]" />
                                </div>
                                <span className="text-gray-300 text-sm font-semibold">Response Within 24 Hours</span>
                            </div>
                        </div>

                        {/* Contact info below checklist */}
                        <div className="pt-6 border-t border-gray-800/80 flex flex-col sm:flex-row gap-6 text-[#94a3b8]">
                            <div>
                                <p className="text-[10px] uppercase font-mono tracking-widest text-[#64748b] mb-1">Email Us</p>
                                <a href="mailto:scaleupco.contact@gmail.com" className="text-sm font-semibold text-white hover:text-[#3b82f6] transition-colors">scaleupco.contact@gmail.com</a>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase font-mono tracking-widest text-[#64748b] mb-1">Call Us</p>
                                <a href="tel:+918095147814" className="text-sm font-semibold text-white hover:text-[#3b82f6] transition-colors">+91 80951 47814</a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div 
                            style={{ 
                                background: 'rgba(11,15,28,0.95)', 
                                border: '1px solid rgba(59,130,246,0.15)', 
                                boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
                            }}
                            className="rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden transition-all duration-300 hover:border-blue-500/35 group"
                        >
                            <form className="space-y-5" action="https://formsubmit.co/scaleupco.contact@gmail.com" method="POST">
                                <input type="hidden" name="_subject" value="New Growth System Strategy Session Request from ScaleUp Co Website" />

                                <div className="space-y-1.5">
                                    <label className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block">Full Name</label>
                                    <input 
                                        type="text" 
                                        name="Full Name" 
                                        placeholder="Your Name"
                                        required 
                                        className="w-full bg-[#060810]/80 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors text-sm font-medium" 
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block">Email Address</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="your@email.com"
                                        required 
                                        className="w-full bg-[#060810]/80 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors text-sm font-medium" 
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        name="Phone" 
                                        placeholder="Mobile Number"
                                        required 
                                        className="w-full bg-[#060810]/80 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors text-sm font-medium" 
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block">Company Name</label>
                                    <input 
                                        type="text" 
                                        name="Company" 
                                        placeholder="Company Name"
                                        required 
                                        className="w-full bg-[#060810]/80 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors text-sm font-medium" 
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block">Business Website (Optional)</label>
                                    <input 
                                        type="url" 
                                        name="Website" 
                                        placeholder="example.com"
                                        className="w-full bg-[#060810]/80 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors text-sm font-medium" 
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block">Project Requirements</label>
                                    <textarea 
                                        name="message" 
                                        placeholder="Tell us about your goals..."
                                        required
                                        className="w-full bg-[#060810]/80 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors text-sm font-medium min-h-[100px]" 
                                    />
                                </div>

                                <div className="pt-4">
                                    <button 
                                        type="submit" 
                                        className="w-full h-14 rounded-xl text-base font-bold text-white transition-all hover:scale-[1.02] flex items-center justify-center gap-2 group"
                                        style={{ background: 'linear-gradient(90deg, #2563eb, #0ea5e9)' }}
                                    >
                                        Book Free Consultation
                                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>

                                <p className="mt-5 text-[10px] text-gray-500 font-mono text-center tracking-wide">
                                    Trusted for Web Development, SEO, Lead Generation & AI Automation
                                </p>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default DiscussProject;
