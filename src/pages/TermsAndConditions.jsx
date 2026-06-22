import React, { useEffect } from 'react';

const TermsAndConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col w-full pt-20 bg-dark-bg">
            <div className="bg-dark-bg py-20 border-b border-gray-800">
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                        Terms & <span className="text-gradient">Conditions</span>
                    </h1>
                    <p className="text-sm text-gray-500">Last Updated: June 2026</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-16 text-gray-300 space-y-10 leading-relaxed">
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">1. Acceptance of Terms</h2>
                    <p>
                        By accessing or using ScaleUpCo's website and services, you agree to these Terms & Conditions.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">2. Services</h2>
                    <p>ScaleUpCo provides services including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Website Development</li>
                        <li>SEO & Google Visibility</li>
                        <li>Lead Generation Systems</li>
                        <li>Social Media Marketing</li>
                        <li>Video Editing</li>
                        <li>Paid Advertising</li>
                        <li>AI Automation Solutions</li>
                        <li>AI Chatbots</li>
                        <li>AI Voice Receptionists</li>
                        <li>Custom AI Agents</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">3. Client Responsibilities</h2>
                    <p>Clients agree to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Provide accurate information</li>
                        <li>Provide required assets and content</li>
                        <li>Respond to project requests in a timely manner</li>
                        <li>Review deliverables promptly</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">4. Payments</h2>
                    <p>
                        Project timelines and deliverables may depend on timely payments.
                    </p>
                    <p>
                        Specific pricing, payment schedules, and project scope are defined separately in proposals or agreements.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">5. Intellectual Property</h2>
                    <p>
                        Upon completion of payment, ownership of final approved deliverables transfers to the client unless otherwise specified in writing.
                    </p>
                    <p>
                        ScaleUpCo retains ownership of internal processes, frameworks, templates, and proprietary systems.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">6. Limitation of Liability</h2>
                    <p>ScaleUpCo is not liable for:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Business losses</li>
                        <li>Revenue losses</li>
                        <li>Advertising platform decisions</li>
                        <li>Search engine ranking changes</li>
                        <li>Third-party service interruptions</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">7. Third-Party Platforms</h2>
                    <p>
                        Services may rely on third-party platforms including Google, Meta, OpenAI, CRM systems, and other software providers.
                    </p>
                    <p>
                        We are not responsible for outages or policy changes on these platforms.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">8. Service Modifications</h2>
                    <p>
                        We reserve the right to modify or discontinue services at any time.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">9. Termination</h2>
                    <p>
                        Either party may terminate a project according to the terms outlined in individual agreements.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">10. Governing Law</h2>
                    <p>
                        These Terms shall be governed by the laws applicable in India.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">11. Contact</h2>
                    <p>
                        Questions regarding these Terms & Conditions can be submitted through the website contact form.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TermsAndConditions;
