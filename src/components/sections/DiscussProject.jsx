import React from 'react';
import { motion } from 'framer-motion';
import { Check, Info, ArrowRight } from 'lucide-react';

const DiscussProject = () => {
    return (
        <section style={{ background: '#faf8f5' }} className="py-24 relative overflow-hidden">
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
                            <span className="text-xs font-bold uppercase tracking-widest text-[#eab308] block">
                                GET STARTED
                            </span>
                            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1e1b4b] leading-tight">
                                Let's Discuss <br />
                                <span className="text-[#eab308]">Your Project</span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-md leading-relaxed">
                                Ready to transform your brand's digital presence? Fill out the form and our team will get back to you within 24 hours.
                            </p>
                        </div>

                        {/* Checklist */}
                        <div className="space-y-4 pt-2">
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full border border-[#1e1b4b]/20 flex items-center justify-center text-[#1e1b4b] shrink-0">
                                    <Check size={12} className="stroke-[3]" />
                                </div>
                                <span className="text-[#1e1b4b] text-sm font-semibold">Free strategy consultation</span>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full border border-[#1e1b4b]/20 flex items-center justify-center text-[#1e1b4b] shrink-0">
                                    <Check size={12} className="stroke-[3]" />
                                </div>
                                <span className="text-[#1e1b4b] text-sm font-semibold">Custom tailored solutions</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full border border-[#1e1b4b]/20 flex items-center justify-center text-[#1e1b4b] shrink-0">
                                    <Check size={12} className="stroke-[3]" />
                                </div>
                                <span className="text-[#1e1b4b] text-sm font-semibold">24-hour response time</span>
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
                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_10px_50px_rgba(30,27,75,0.06)] border border-[#1e1b4b]/5">
                            <form className="space-y-6" action="https://formsubmit.co/scaleupco.contact@gmail.com" method="POST">
                                <input type="hidden" name="_subject" value="New Project Discussion Request from ScaleUp Co" />

                                <div className="space-y-1">
                                    <label className="text-xs text-gray-500 font-medium block">Full Name</label>
                                    <input 
                                        type="text" 
                                        name="Full Name" 
                                        required 
                                        className="w-full bg-transparent border-b border-gray-300 py-2 text-[#1e1b4b] focus:outline-none focus:border-[#1e1b4b] transition-colors text-sm font-medium" 
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs text-gray-500 font-medium block">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        name="Phone" 
                                        required 
                                        className="w-full bg-transparent border-b border-gray-300 py-2 text-[#1e1b4b] focus:outline-none focus:border-[#1e1b4b] transition-colors text-sm font-medium" 
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs text-gray-500 font-medium block">Email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        required 
                                        className="w-full bg-transparent border-b border-gray-300 py-2 text-[#1e1b4b] focus:outline-none focus:border-[#1e1b4b] transition-colors text-sm font-medium" 
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs text-gray-500 font-medium block">Company Name</label>
                                    <input 
                                        type="text" 
                                        name="Company" 
                                        required 
                                        className="w-full bg-transparent border-b border-gray-300 py-2 text-[#1e1b4b] focus:outline-none focus:border-[#1e1b4b] transition-colors text-sm font-medium" 
                                    />
                                </div>

                                {/* Information notes */}
                                <div className="space-y-3 pt-2 text-xs text-gray-500 leading-relaxed">
                                    <div className="flex items-start gap-2.5">
                                        <Info size={14} className="text-gray-400 shrink-0 mt-0.5" />
                                        <p>
                                            If you are a creator looking to collaborate with brands,{' '}
                                            <a href="/contact" className="text-blue-600 hover:underline font-medium">check out this page</a>
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-2.5">
                                        <Info size={14} className="text-gray-400 shrink-0 mt-0.5" />
                                        <p>
                                            If you are looking for a job then visit our{' '}
                                            <a href="https://www.linkedin.com/company/scaleupco" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Linkedin Page</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button 
                                        type="submit" 
                                        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg text-sm font-bold text-white transition-all hover:opacity-90 hover:scale-[1.02]"
                                        style={{ background: '#1e1b4b' }}
                                    >
                                        Submit
                                        <ArrowRight size={14} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default DiscussProject;
