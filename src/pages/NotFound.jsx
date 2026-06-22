import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileQuestion } from 'lucide-react';
import SEO from '../components/seo/SEO';

const NotFound = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        { name: 'Website Development', path: '/services/web-development' },
        { name: 'SEO & Visibility', path: '/services/seo' },
        { name: 'Lead Gen Systems', path: '/services/lead-generation' },
        { name: 'AI Chatbots', path: '/services/ai-chatbots' },
        { name: 'AI Voice Receptionist', path: '/services/ai-voice-receptionist' },
        { name: 'Business Automation', path: '/services/business-automation' }
    ];

    return (
        <div className="flex flex-col w-full min-h-screen pt-20 bg-dark-bg text-white">
            <SEO 
                title="Page Not Found | ScaleUp Co" 
                description="The page you are looking for does not exist. Explore our high-converting web development, SEO, and AI automation solutions."
                noindex={true}
            />

            <div className="flex-grow flex items-center justify-center py-20 px-6">
                <div className="max-w-2xl text-center space-y-8">
                    <div className="w-24 h-24 bg-blue-600/10 border border-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-500">
                        <FileQuestion size={48} />
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                        Page <span className="text-gradient">Not Found</span>
                    </h1>
                    
                    <p className="text-xl text-[#94a3b8] leading-relaxed max-w-md mx-auto">
                        Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Link to="/">
                            <button className="px-6 py-3 font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
                                Back to Home <ArrowRight size={16} />
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="px-6 py-3 font-semibold text-white border border-gray-800 hover:border-gray-700 rounded-lg transition-colors w-full sm:w-auto">
                                Contact Support
                            </button>
                        </Link>
                    </div>

                    <div className="pt-12 border-t border-gray-800/40">
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Popular Services</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-lg mx-auto">
                            {services.map((service, index) => (
                                <Link 
                                    key={index} 
                                    to={service.path} 
                                    className="px-4 py-3 bg-dark-surface border border-gray-800/60 hover:border-blue-500/35 rounded-xl text-sm font-medium text-gray-300 hover:text-white transition-colors"
                                >
                                    {service.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
