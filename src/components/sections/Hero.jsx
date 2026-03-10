import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Zap } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

const Hero = () => {
    const { scrollY } = useScroll();
    const yHeroImage = useTransform(scrollY, [0, 500], [0, -20]);

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-dark-bg">
                {/* Subtle grid pattern */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

                {/* Animated Premium Glow */}
                <motion.div
                    animate={{
                        x: [0, 50, 0, -50, 0],
                        y: [0, 30, -30, 0, 0],
                        opacity: [0.4, 0.6, 0.4],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute inset-0 z-0 mix-blend-screen"
                    style={{ background: 'radial-gradient(circle at 30% 50%, rgba(56,189,248,0.15), transparent 60%)' }}
                />

                {/* Glow Effects */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00E1FF] rounded-full filter blur-[150px] opacity-10 blur-xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full filter blur-[150px] opacity-10"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-2xl"
                    >


                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                            We Help Local Businesses <br />
                            <span className="text-gradient">Scale Online.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
                            We design high-converting websites and digital growth systems that bring more calls, bookings, and revenue for local businesses.
                        </p>

                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <Link to="/contact">
                                <Button variant="primary" size="lg" className="w-full sm:w-auto group">
                                    Book Free Consultation
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <Link to="/services">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                    <Play className="mr-2 h-5 w-5 fill-current" />
                                    View Our Work
                                </Button>
                            </Link>
                        </div>



                        <div className="mt-12">
                            <p className="text-sm text-gray-400 mb-4 font-medium uppercase tracking-wider">Helping businesses in:</p>
                            <div className="flex flex-wrap gap-3">
                                {['Restaurants', 'Clinics', 'Gyms', 'Real Estate', 'Salons', 'Local Retail'].map((industry) => (
                                    <span key={industry} className="text-xs font-semibold text-gray-300 bg-gray-900/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-800">
                                        {industry}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </motion.div>

                    {/* Hero Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        style={{ y: yHeroImage }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-dark-surface p-2 shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#00E1FF]/10 to-transparent opacity-50"></div>
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80"
                                alt="Digital Growth Dashboard"
                                className="rounded-xl w-full h-[600px] object-cover transition-transform duration-700"
                            />
                        </div>

                        {/* Floating Element */}
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -left-10 top-1/4 bg-dark-surface border border-gray-700 p-4 rounded-xl shadow-xl backdrop-blur-md"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                    <ArrowRight className="text-green-500 h-6 w-6 -rotate-45" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Revenue Growth</p>
                                    <p className="text-xl font-bold text-white">+342%</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
