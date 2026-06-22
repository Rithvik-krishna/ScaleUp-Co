import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col w-full pt-20 bg-dark-bg">
            <div className="bg-dark-bg py-20 border-b border-gray-800">
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                        Privacy <span className="text-gradient">Policy</span>
                    </h1>
                    <p className="text-sm text-gray-500">Last Updated: June 2026</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-16 text-gray-300 space-y-10 leading-relaxed">
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
                    <p>
                        ScaleUpCo values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard information when you use our website and services.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">2. Information We Collect</h2>
                    <p>We may collect:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Name</li>
                        <li>Email Address</li>
                        <li>Phone Number</li>
                        <li>Company Name</li>
                        <li>Information submitted through contact forms</li>
                        <li>Information submitted during consultations</li>
                        <li>Website analytics data</li>
                        <li>Device and browser information</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">3. How We Use Information</h2>
                    <p>We use information to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Respond to inquiries</li>
                        <li>Deliver services</li>
                        <li>Schedule consultations</li>
                        <li>Improve our website</li>
                        <li>Communicate project updates</li>
                        <li>Provide marketing communications where permitted</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">4. Data Protection</h2>
                    <p>
                        We implement reasonable security measures to protect your information from unauthorized access, misuse, or disclosure.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">5. Third-Party Services</h2>
                    <p>We may use third-party platforms including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Google Analytics</li>
                        <li>Google Business Profile</li>
                        <li>Meta Platforms</li>
                        <li>CRM Systems</li>
                        <li>Email Service Providers</li>
                        <li>AI Service Providers</li>
                    </ul>
                    <p>These services may collect information according to their own privacy policies.</p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">6. Cookies</h2>
                    <p>
                        Our website may use cookies and analytics technologies to improve user experience and website performance.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">7. Data Sharing</h2>
                    <p>
                        We do not sell personal information. Information may be shared only with trusted service providers necessary for delivering services.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">8. Your Rights</h2>
                    <p>Users may request:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Access to personal data</li>
                        <li>Correction of information</li>
                        <li>Deletion of information</li>
                        <li>Withdrawal of consent where applicable</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">9. Contact</h2>
                    <p>
                        For privacy-related inquiries, contact us through the website contact form.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
