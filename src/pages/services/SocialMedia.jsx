import React, { useEffect } from 'react';
import { Share2, FileText, Video, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/seo/SEO';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import FinalCTA from '../../components/sections/FinalCTA';

const SocialMedia = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        "Monthly content calendars & pillar strategies",
        "Engaging Reel scripts & viral concept plans",
        "High-quality graphic designs (static & carousel formats)",
        "Automated scheduling, caption writing & hashtag research",
        "Lead capture funnels & auto-DM routing setups",
        "CRM syncing & inbound inquiry tracking support"
    ];

    const faqs = [
        { q: "How does social media management drive leads?", a: "We don't just post for vanity metrics like likes. We build organic conversion funnels using optimized Call-to-Actions (CTAs), lead magnets, and automated DM/comment responders that prompt interested prospects to book appointments directly." },
        { q: "Do you handle the actual video recording?", a: "We provide complete reel concepts, scripts, and editing support. You record the raw videos based on our scripts, and we edit them into high-converting reels with custom hooks, transitions, captions, and graphics." },
        { q: "How often will you post on our accounts?", a: "We design a custom posting schedule based on your target audience. Typically, this includes a mix of 3–4 Reels, 5–6 Carousel posts, and 10 static posts per month, maintaining a highly active and consistent brand presence." },
        { q: "Do you respond to comments and direct messages?", a: "Yes, we monitor comments and DMs to engage with your audience, filter out spam, qualify prospective customers, and direct high-intent inquiries to your booking system or CRM." },
        { q: "Which platforms do you support?", a: "We specialize in Instagram, Facebook, LinkedIn, and Google Business Profile growth, tailoring our strategy to whichever platform your target customers use most." }
    ];

    // FAQ JSON-LD Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <div className="flex flex-col w-full pt-20 bg-dark-bg text-white">
            <SEO 
                title="Social Media Management & Growth | ScaleUp Co"
                description="Turn followers into customers. ScaleUp Co provides comprehensive social media management, reel production, posting strategy, and lead generation automation."
                canonical="https://www.scaleupco.online/services/social-media-management"
                keywords="Social Media Management, Social Media Growth, Instagram Reels Production, Content Calendar, Social Media Lead Generation"
                schema={faqSchema}
            />

            <div className="py-20 border-b border-gray-800/40" style={{ background: '#0b0f1c' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <Breadcrumbs items={[{ name: 'Services', path: '/services' }, { name: 'Social Media Management & Growth', path: '/services/social-media-management' }]} />
                    
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight mt-6">
                        Social Media <span className="text-gradient">Management & Growth</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                        Comprehensive content strategies, scripting, reel editing, and automated lead generation workflows designed to scale your brand presence organic.
                    </p>
                </div>
            </div>

            {/* Service Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Turn Your Social Channels Into Sales Funnels</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Having social media accounts isn't enough; you need a system that captures attention and routes prospective clients into your sales pipeline. ScaleUp Co provides end-to-end management that handles everything from the high-level monthly calendar down to individual comment reply triggers.
                        </p>
                    </div>

                    {/* Dedicated Service Sections */}
                    <div className="space-y-8 pt-4">
                        <h3 className="text-2xl font-bold">What is Included in Our Management</h3>
                        
                        <div className="space-y-6">
                            <div className="p-6 border border-gray-800 rounded-2xl bg-dark-surface/40 hover:border-blue-500/20 transition-all duration-300">
                                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                    <span className="text-[#3b82f6]">1.</span> Monthly Content Strategy & Calendar
                                </h4>
                                <ul className="list-disc pl-6 space-y-1.5 text-sm text-gray-400 leading-relaxed">
                                    <li>Tailored monthly content calendar mapped out in advance</li>
                                    <li>Clear content pillars focused on authority, engagement, and conversion</li>
                                    <li>Consistent posting schedule optimized for maximum reach</li>
                                    <li>Data-backed organic growth strategy</li>
                                </ul>
                            </div>

                            <div className="p-6 border border-gray-800 rounded-2xl bg-dark-surface/40 hover:border-blue-500/20 transition-all duration-300">
                                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                    <span className="text-[#3b82f6]">2.</span> Content Planning & Scripting
                                </h4>
                                <ul className="list-disc pl-6 space-y-1.5 text-sm text-gray-400 leading-relaxed">
                                    <li>Creative Reel concepts aligned with trending formats</li>
                                    <li>Word-for-word Reel scripts with hooks, visual prompts, and body copy</li>
                                    <li>Engaging Carousel slide copy and layouts</li>
                                    <li>Optimized static post descriptions and high-converting Call-to-Actions (CTAs)</li>
                                </ul>
                            </div>

                            <div className="p-6 border border-gray-800 rounded-2xl bg-dark-surface/40 hover:border-blue-500/20 transition-all duration-300">
                                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                    <span className="text-[#3b82f6]">3.</span> Content Creation & Production
                                </h4>
                                <ul className="list-disc pl-6 space-y-1.5 text-sm text-gray-400 leading-relaxed">
                                    <li><strong>10 Static Posts:</strong> High-quality custom graphic designs</li>
                                    <li><strong>5–6 Carousel Posts:</strong> Seamless multi-slide designs built to drive saves and shares</li>
                                    <li><strong>3–4 Reels:</strong> Professional editing with captions, B-rolls, audio pairing, and dynamic transitions</li>
                                    <li><strong>Story Content:</strong> Interactive engagement templates (polls, Q&As, slide links)</li>
                                </ul>
                            </div>

                            <div className="p-6 border border-gray-800 rounded-2xl bg-dark-surface/40 hover:border-blue-500/20 transition-all duration-300">
                                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                    <span className="text-[#3b82f6]">4.</span> Social Media Account Management
                                </h4>
                                <ul className="list-disc pl-6 space-y-1.5 text-sm text-gray-400 leading-relaxed">
                                    <li>End-to-end content scheduling and automatic publishing</li>
                                    <li>Formatting, descriptive caption writing, and location-based tagging</li>
                                    <li>SEO-optimized hashtag research tailored for reach</li>
                                    <li>Active comment and DM monitoring to engage prospects immediately</li>
                                </ul>
                            </div>

                            <div className="p-6 border border-gray-800 rounded-2xl bg-dark-surface/40 hover:border-blue-500/20 transition-all duration-300">
                                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                    <span className="text-[#3b82f6]">5.</span> Lead Generation & Conversion Support
                                </h4>
                                <ul className="list-disc pl-6 space-y-1.5 text-sm text-gray-400 leading-relaxed">
                                    <li>Call-To-Action (CTA) optimization on bios, reels, and stories</li>
                                    <li>Lead capture workflows utilizing comment triggers (e.g., auto-sending links on keyword comments)</li>
                                    <li>Active inquiry management and lead qualification</li>
                                    <li>CRM pipeline integration to track incoming leads automatically</li>
                                    <li>Appointment booking setup and support</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 pt-6">
                        <h3 className="text-2xl font-bold">Key Growth Capabilities</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {features.map((feat, index) => (
                                <div key={index} className="flex items-center gap-3 text-sm text-gray-300">
                                    <CheckCircle2 size={16} className="text-[#00E1FF] shrink-0" />
                                    <span>{feat}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="space-y-6 pt-8">
                        <h3 className="text-2xl font-bold">Social Media & Growth FAQs</h3>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border-b border-gray-800 pb-4">
                                    <h4 className="text-base font-bold text-white mb-2">{faq.q}</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar Card */}
                <div>
                    <div className="p-8 rounded-3xl border border-gray-800 bg-dark-surface space-y-6 sticky top-28">
                        <h3 className="text-xl font-bold text-white">Scale Your Social Presence</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Stop posting aimlessly. Setup a dedicated calendar, high-converting scripts, and automated lead capture pipelines to build a predictable stream of customer inquiries.
                        </p>
                        <div className="pt-4">
                            <Link to="/contact">
                                <button className="w-full py-3 font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center justify-center gap-2">
                                    Grow My Socials <ArrowRight size={16} />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <FinalCTA />
        </div>
    );
};

export default SocialMedia;
