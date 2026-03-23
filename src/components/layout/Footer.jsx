import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ background: '#0b0f1c', borderTop: '1px solid rgba(59,130,246,0.12)' }} className="pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="text-3xl font-bold tracking-tight mb-6 inline-block text-white">
                            ScaleUp<span className="text-[#3b82f6]"> Co.</span>
                        </Link>
                        <p className="text-[#64748b] max-w-sm mb-8">
                            Professional websites and growth systems designed to bring more customers, more calls, and more revenue for local businesses.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://x.com/scaleupcoonline?s=11" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full flex items-center justify-center text-[#64748b] hover:text-white transition-colors" style={{ border: '1px solid rgba(59,130,246,0.15)' }}>
                                <Twitter size={18} />
                            </a>
                            <a href="https://www.linkedin.com/company/scaleupco" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full flex items-center justify-center text-[#64748b] hover:text-white transition-colors" style={{ border: '1px solid rgba(59,130,246,0.15)' }}>
                                <Linkedin size={18} />
                            </a>
                            <a href="https://www.instagram.com/scaleupco.online" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full flex items-center justify-center text-[#64748b] hover:text-white transition-colors" style={{ border: '1px solid rgba(59,130,246,0.15)' }}>
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-mono uppercase text-xs tracking-widest text-[#94a3b8] mb-6">Services</h4>
                        <ul className="space-y-4">
                            <li><Link to="/services" className="text-[#64748b] hover:text-white transition-colors text-sm">Website Development</Link></li>
                            <li><Link to="/services" className="text-[#64748b] hover:text-white transition-colors text-sm">Google Visibility</Link></li>
                            <li><Link to="/services" className="text-[#64748b] hover:text-white transition-colors text-sm">Lead Gen Systems</Link></li>
                            <li><Link to="/services" className="text-[#64748b] hover:text-white transition-colors text-sm">SEO Optimization</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-mono uppercase text-xs tracking-widest text-[#94a3b8] mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-[#64748b] hover:text-white transition-colors text-sm">About Us</Link></li>
                            <li><Link to="/pricing" className="text-[#64748b] hover:text-white transition-colors text-sm">Pricing</Link></li>
                            <li><Link to="/contact" className="text-[#64748b] hover:text-white transition-colors text-sm">Contact</Link></li>
                            <li><Link to="#" className="text-[#64748b] hover:text-white transition-colors flex items-center text-sm">Client Portal <ArrowUpRight size={14} className="ml-1" /></Link></li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 flex flex-col md:flex-row justify-between items-center" style={{ borderTop: '1px solid rgba(59,130,246,0.08)' }}>
                    <p className="text-[#64748b] text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} ScaleUp Co. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm">
                        <Link to="#" className="text-[#64748b] hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="text-[#64748b] hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
