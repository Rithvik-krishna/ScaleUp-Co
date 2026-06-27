import React, { useEffect } from 'react';
import { Mail, Phone, CalendarCheck, ShieldCheck, Clock, ChevronDown } from 'lucide-react';
import SEO from '../components/seo/SEO';
import Breadcrumbs from '../components/ui/Breadcrumbs';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const schema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact ScaleUp Co",
        "description": "Get in touch with ScaleUp Co in Bangalore, India to schedule a free strategy call about websites, SEO, and AI automation.",
        "url": "https://www.scaleupco.online/contact"
    };

    return (
        <div className="flex flex-col w-full pt-20 bg-dark-bg min-h-screen text-white">
            <SEO 
                title="Contact ScaleUp Co | Schedule a Free Digital Strategy Consultation"
                description="Ready to scale your business? Contact ScaleUp Co to consult on high-performance websites, local SEO strategies, AI chatbots, and voice receptionist solutions in Bangalore, India."
                canonical="https://www.scaleupco.online/contact"
                keywords="Contact ScaleUp Co, Web Development Bangalore, SEO Agency Bangalore, AI Automation Consultation"
                schema={schema}
            />

            <div className="max-w-7xl mx-auto px-6 py-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <Breadcrumbs items={[{ name: 'Contact', path: '/contact' }]} />
                    
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight mt-6">
                        Let's <span className="text-gradient">Talk Growth.</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-12 max-w-lg leading-relaxed">
                        Ready to stop losing customers to your competitors? Drop ScaleUp Co a message and we'll schedule a time to map out your digital growth strategy.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start">
                            <div className="w-12 h-12 bg-dark-surface border border-gray-800 rounded-xl flex items-center justify-center mr-6 shrink-0">
                                <Mail className="text-[#00E1FF] w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-1">Email Us</h4>
                                <p className="text-gray-400">scaleupco.contact@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="w-12 h-12 bg-dark-surface border border-gray-800 rounded-xl flex items-center justify-center mr-6 shrink-0">
                                <Phone className="text-[#00E1FF] w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-1">Call Us</h4>
                                <p className="text-gray-400">+91 8095177537</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#060810] border border-gray-800 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                    <div className="mb-8 relative z-10">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-[#eab308] block mb-2">GET IN TOUCH</span>
                        <h2 className="text-4xl font-extrabold text-white mb-3 tracking-tight">Let's Talk</h2>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Start a discussion about your brand's growth. We'd love to hear from you.
                        </p>
                    </div>

                    <form className="space-y-6 relative z-10" action="https://formsubmit.co/scaleupco.contact@gmail.com" method="POST">
                        <input type="hidden" name="_subject" value="New Submission from ScaleUp Co Website" />

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                                FIRST NAME <span className="text-red-500">*</span>
                            </label>
                            <input 
                                type="text" 
                                name="First Name" 
                                required 
                                className="w-full bg-[#0b0f1c] border border-gray-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#eab308] transition-colors" 
                                placeholder="Name" 
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                                EMAIL <span className="text-red-500">*</span>
                            </label>
                            <input 
                                type="email" 
                                name="email" 
                                required 
                                className="w-full bg-[#0b0f1c] border border-gray-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#eab308] transition-colors" 
                                placeholder="Email" 
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                                PHONE <span className="text-red-500">*</span>
                            </label>
                            <input 
                                type="tel" 
                                name="Phone" 
                                required 
                                className="w-full bg-[#0b0f1c] border border-gray-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#eab308] transition-colors" 
                                placeholder="Mobile" 
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                                COMPANY <span className="text-red-500">*</span>
                            </label>
                            <input 
                                type="text" 
                                name="Company" 
                                required 
                                className="w-full bg-[#0b0f1c] border border-gray-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#eab308] transition-colors" 
                                placeholder="Company Name" 
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                                SELECT A SERVICE <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <select 
                                    name="Service" 
                                    required 
                                    className="w-full bg-[#0b0f1c] border border-gray-800 rounded-xl px-4 py-3.5 text-gray-300 focus:outline-none focus:border-[#eab308] appearance-none transition-colors"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Select A Service</option>
                                    <option value="Website Development">Website Development</option>
                                    <option value="Google Visibility">Google Visibility</option>
                                    <option value="Lead Generation Systems">Lead Generation Systems</option>
                                    <option value="Social Media Management & Growth">Social Media Management & Growth</option>
                                    <option value="Video Editing & Content Creation">Video Editing & Content Creation</option>
                                    <option value="Paid Advertising">Paid Advertising</option>
                                    <option value="CRM & Sales Automation">CRM & Sales Automation</option>
                                    <option value="Business Process Automation">Business Process Automation</option>
                                    <option value="AI Chatbots">AI Chatbots</option>
                                    <option value="AI Voice Receptionist">AI Voice Receptionist</option>
                                    <option value="Custom AI Agents">Custom AI Agents</option>
                                </select>
                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                                    <ChevronDown size={18} />
                                </div>
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            className="w-full h-14 rounded-xl px-8 text-base font-bold transition-all hover:scale-[1.02] flex items-center justify-center"
                            style={{ background: '#eab308', color: '#060810' }}
                        >
                            Contact Us
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
