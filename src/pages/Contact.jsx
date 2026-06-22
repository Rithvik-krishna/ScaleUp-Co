import React, { useEffect } from 'react';
import { Mail, Phone, CalendarCheck, ShieldCheck, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col w-full pt-20 bg-dark-bg min-h-screen">
            <div className="max-w-7xl mx-auto px-6 py-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-16">

                <div>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        Let's <span className="text-gradient">Talk Growth with ScaleUpCo.</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-12 max-w-lg leading-relaxed">
                        Ready to stop losing customers to your competitors? Drop ScaleUpCo a message and we'll schedule a time to map out your digital growth strategy.
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

                <div className="bg-dark-surface border border-gray-800 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                    <h3 className="text-2xl font-bold mb-6 relative z-10">Send a Message</h3>

                    <div className="flex flex-col sm:flex-row gap-4 mb-8 relative z-10 hidden lg:flex">
                        <div className="flex items-start space-x-3 bg-dark-bg/50 border border-gray-800 rounded-xl p-3 flex-1">
                            <CalendarCheck className="w-5 h-5 text-[#00E1FF] shrink-0 mt-0.5" />
                            <div>
                                <p className="text-sm font-bold text-gray-200">Free Strategy Call</p>
                                <p className="text-xs text-gray-500">30 Minutes</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3 bg-dark-bg/50 border border-gray-800 rounded-xl p-3 flex-1">
                            <ShieldCheck className="w-5 h-5 text-[#00E1FF] shrink-0 mt-0.5" />
                            <div>
                                <p className="text-sm font-bold text-gray-200">No Commitment</p>
                                <p className="text-xs text-gray-500">Actionable insights</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3 bg-dark-bg/50 border border-gray-800 rounded-xl p-3 flex-1">
                            <Clock className="w-5 h-5 text-[#00E1FF] shrink-0 mt-0.5" />
                            <div>
                                <p className="text-sm font-bold text-gray-200">Avg. Response</p>
                                <p className="text-xs text-gray-500">Under 12 Hours</p>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-6 relative z-10" action="https://formsubmit.co/scaleupco.contact@gmail.com" method="POST">
                        <input type="hidden" name="_subject" value="New Submission from ScaleUpCo Website" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">First Name</label>
                                <input type="text" name="First Name" required className="w-full bg-dark-bg border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00E1FF] transition-colors" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Last Name</label>
                                <input type="text" name="Last Name" required className="w-full bg-dark-bg border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00E1FF] transition-colors" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Email Address</label>
                            <input type="email" name="email" required className="w-full bg-dark-bg border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00E1FF] transition-colors" placeholder="john@example.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Business Name</label>
                            <input type="text" name="Business Name" className="w-full bg-dark-bg border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00E1FF] transition-colors" placeholder="John's Plumbing" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">How can we help?</label>
                            <textarea name="message" required className="w-full bg-dark-bg border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00E1FF] transition-colors min-h-[120px]" placeholder="Tell us about your goals..."></textarea>
                        </div>

                        <Button type="submit" variant="primary" size="lg" className="w-full">
                            Send Message
                        </Button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;
