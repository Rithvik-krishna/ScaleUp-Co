import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesHovered, setIsServicesHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Industries', path: '/industries' },
        { name: 'Blog', path: '/blog' }
    ];

    const servicesDropdownItems = [
        { name: "Website Development", path: "/services/web-development" },
        { name: "Google Visibility", path: "/services/seo" },
        { name: "Lead Generation Systems", path: "/services/lead-generation" },
        { name: "Social Media Management & Growth", path: "/services/social-media-management" },
        { name: "Video Editing & Content Creation", path: "/services" },
        { name: "Paid Advertising", path: "/services" },
        { name: "CRM & Sales Automation", path: "/services/crm-sales-automation" },
        { name: "Business Process Automation", path: "/services/business-process-automation" },
        { name: "AI Chatbots", path: "/services/ai-chatbots" },
        { name: "AI Voice Receptionist", path: "/services/ai-voice-receptionist" },
        { name: "Custom AI Agents", path: "/services/business-automation" }
    ];

    return (
        <nav style={{ background: 'rgba(6,8,16,0.85)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.04)' }} className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold tracking-tight">
                    ScaleUp<span className="text-[#3b82f6]"> Co</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => {
                        if (link.name === 'Services') {
                            return (
                                <div 
                                    key={link.name}
                                    className="relative py-2"
                                    onMouseEnter={() => setIsServicesHovered(true)}
                                    onMouseLeave={() => setIsServicesHovered(false)}
                                >
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `text-sm font-medium transition-colors hover:text-white flex items-center gap-1 ${isActive ? 'text-white' : 'text-[#94a3b8]'}`
                                        }
                                    >
                                        {link.name}
                                        <ChevronDown size={14} className={`transition-transform duration-200 ${isServicesHovered ? 'rotate-180' : ''}`} />
                                    </NavLink>

                                    {/* Dropdown Panel */}
                                    <AnimatePresence>
                                        {isServicesHovered && (
                                            <motion.div 
                                                initial={{ opacity: 0, y: 10, x: '-50%' }}
                                                animate={{ opacity: 1, y: 0, x: '-50%' }}
                                                exit={{ opacity: 0, y: 10, x: '-50%' }}
                                                transition={{ duration: 0.2, ease: 'easeOut' }}
                                                style={{ 
                                                    background: '#060810', 
                                                    borderTop: '4px solid #2563eb',
                                                    borderLeft: '1px solid rgba(59,130,246,0.12)',
                                                    borderRight: '1px solid rgba(59,130,246,0.12)',
                                                    borderBottom: '1px solid rgba(59,130,246,0.12)',
                                                    boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
                                                }}
                                                className="absolute top-full left-1/2 transform w-80 rounded-b-2xl p-4 z-50 flex flex-col space-y-1 mt-2"
                                            >
                                                {servicesDropdownItems.map((item, index) => (
                                                    <Link 
                                                        key={index} 
                                                        to={item.path}
                                                        onClick={() => setIsServicesHovered(false)}
                                                        className="px-4 py-2.5 rounded-lg text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/5 transition-colors block text-left"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        }

                        return (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-colors hover:text-white ${isActive ? 'text-white' : 'text-[#94a3b8]'}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="hidden md:block">
                    <Link to="/contact">
                        <button style={{ background: '#2563eb', borderRadius: '6px' }} className="text-sm font-semibold text-white px-5 py-2.5 hover:bg-[#3b82f6] transition-colors">
                            Discuss Your Project
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-[#94a3b8] hover:text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div style={{ background: '#060810', borderBottom: '1px solid rgba(59,130,246,0.12)' }} className="md:hidden absolute top-full left-0 right-0 p-6 flex flex-col space-y-4 shadow-xl max-h-[75vh] overflow-y-auto">
                    {navLinks.map((link) => {
                        if (link.name === 'Services') {
                            return (
                                <div key={link.name} className="flex flex-col space-y-2">
                                    <NavLink
                                        to={link.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={({ isActive }) =>
                                            `text-lg font-medium transition-colors ${isActive ? 'text-white' : 'text-[#94a3b8]'}`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                    <div className="pl-4 flex flex-col space-y-2.5 border-l border-gray-800">
                                        {servicesDropdownItems.map((item, idx) => (
                                            <Link
                                                key={idx}
                                                to={item.path}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="text-xs text-gray-500 hover:text-white transition-colors"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={({ isActive }) =>
                                    `text-lg font-medium transition-colors ${isActive ? 'text-white' : 'text-[#94a3b8]'}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        );
                    })}
                    <div className="pt-4 mt-2" style={{ borderTop: '1px solid rgba(59,130,246,0.12)' }}>
                        <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                            <button style={{ background: '#2563eb', borderRadius: '6px' }} className="w-full text-sm font-semibold text-white py-3 hover:bg-[#3b82f6] transition-colors">
                                Discuss Your Project
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
