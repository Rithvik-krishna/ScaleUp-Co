import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark-bg border-t border-gray-800 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="text-3xl font-bold tracking-tight mb-6 inline-block">
                            ScaleUp<span className="text-[#00E1FF]"> Co.</span>
                        </Link>
                        <p className="text-gray-400 max-w-sm mb-8">
                            Professional websites and growth systems designed to bring more customers, more calls, and more revenue for local businesses.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="h-10 w-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-[#00E1FF] hover:border-[#00E1FF] transition-colors">
                                <Twitter size={18} />
                            </a>
                            <a href="https://www.linkedin.com/company/scaleupco" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-[#00E1FF] hover:border-[#00E1FF] transition-colors">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-[#00E1FF] hover:border-[#00E1FF] transition-colors">
                                <Github size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">Services</h4>
                        <ul className="space-y-4">
                            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Website Development</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Google Visibility</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Lead Gen Systems</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">SEO Optimization</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                            <li><Link to="#" className="text-gray-400 hover:text-white transition-colors flex items-center">Client Portal <ArrowUpRight size={14} className="ml-1" /></Link></li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} ScaleUp Co. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm">
                        <Link to="#" className="text-gray-500 hover:text-white">Privacy Policy</Link>
                        <Link to="#" className="text-gray-500 hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
