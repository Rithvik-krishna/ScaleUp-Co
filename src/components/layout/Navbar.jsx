import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

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
        { name: 'About', path: '/about' }
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-bg/70 backdrop-blur-md border-b border-gray-800/50 shadow-lg py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold tracking-tight">
                    ScaleUp<span className="text-[#00E1FF]"> Co.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-sm font-medium transition-colors hover:text-[#00E1FF] ${isActive ? 'text-[#00E1FF]' : 'text-gray-300'}`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden md:block">
                    <Link to="/contact">
                        <Button variant="primary" size="sm">Get Started</Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-gray-300 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-dark-bg border-b border-gray-800 p-6 flex flex-col space-y-4 shadow-xl">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={({ isActive }) =>
                                `text-lg font-medium transition-colors ${isActive ? 'text-[#00E1FF]' : 'text-gray-300'}`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <div className="pt-4 mt-2 border-t border-gray-800">
                        <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                            <Button variant="primary" className="w-full">Get Started</Button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
