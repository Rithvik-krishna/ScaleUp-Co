import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        { name: 'Pricing', path: '/pricing' },
        { name: 'About', path: '/about' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Industries', path: '/industries' },
        { name: 'Blog', path: '/blog' }
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
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-sm font-medium transition-colors hover:text-white ${isActive ? 'text-white' : 'text-[#94a3b8]'}`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden md:block">
                    <Link to="/contact">
                        <button style={{ background: '#2563eb', borderRadius: '6px' }} className="text-sm font-semibold text-white px-5 py-2.5 hover:bg-[#3b82f6] transition-colors">
                            Get Started
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
                <div style={{ background: '#060810', borderBottom: '1px solid rgba(59,130,246,0.12)' }} className="md:hidden absolute top-full left-0 right-0 p-6 flex flex-col space-y-4 shadow-xl">
                    {navLinks.map((link) => (
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
                    ))}
                    <div className="pt-4 mt-2" style={{ borderTop: '1px solid rgba(59,130,246,0.12)' }}>
                        <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                            <button style={{ background: '#2563eb', borderRadius: '6px' }} className="w-full text-sm font-semibold text-white py-3 hover:bg-[#3b82f6] transition-colors">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
