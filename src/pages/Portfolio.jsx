import React, { useEffect } from 'react';
import { ExternalLink, CheckCircle, Database, Layout } from 'lucide-react';
import SEO from '../components/seo/SEO';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import FinalCTA from '../components/sections/FinalCTA';

const Portfolio = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const projects = [
        {
            name: "CareFirst Dental Clinic",
            industry: "Healthcare & Medical Clinics",
            services: ["Website Redesign", "Google Visibility (Local SEO)", "AI Voice Receptionist"],
            results: [
                "Ranked #1 for local dentist searches within 90 days",
                "45+ monthly appointments scheduled automatically by AI agent",
                "Reduced phone-answering workload for clinic staff by 60%"
            ],
            techStack: ["Vite React", "Google Business Profile API", "VAPI Voice AI", "TailwindCSS"],
            url: "https://www.carefirstdental.clinic",
            image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Apex Realty",
            industry: "Real Estate & Property Development",
            services: ["Custom AI Agents", "Lead Capture Systems", "Meta Paid Advertising"],
            results: [
                "Captured and qualified 800+ high-intent property leads",
                "Reduced sales team lead-qualification time by 75%",
                "Lowered cost-per-lead (CPL) by 35% compared to previous agency campaigns"
            ],
            techStack: ["React", "OpenAI Assistants API", "HubSpot CRM", "Meta Ads API"],
            url: "https://www.apexrealty.co",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "GreenLine Logistics",
            industry: "Supply Chain & Transport",
            services: ["Web Development", "Local SEO", "WhatsApp Lead Automation"],
            results: [
                "+180% growth in inbound commercial freight quotes",
                "100% of website queries logged automatically into Google Sheets CRM",
                "Fast mobile load times under 1.2s boosting user retention"
            ],
            techStack: ["React", "Node.js", "Vite", "Twilio WhatsApp API"],
            url: "https://www.greenlinelogistics.in",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    const schema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "ScaleUp Co Portfolio",
        "description": "Case studies of local businesses in Bangalore and India that scaled their revenue using our websites, local SEO, and AI automation.",
        "url": "https://www.scaleupco.online/portfolio"
    };

    return (
        <div className="flex flex-col w-full pt-20 bg-dark-bg text-white">
            <SEO 
                title="Our Case Studies & Results | ScaleUp Co Portfolio"
                description="Explore how ScaleUp Co helps businesses scale with custom web development, SEO services, B2B lead generation, and workflow automation in Bangalore, India."
                canonical="https://www.scaleupco.online/portfolio"
                keywords="ScaleUp Co portfolio, case studies web development, SEO results Bangalore, AI chatbot automation examples"
                schema={schema}
            />

            <div className="py-20 border-b border-gray-800/40" style={{ background: '#0b0f1c' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <Breadcrumbs items={[{ name: 'Portfolio', path: '/portfolio' }]} />
                    
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight mt-6">
                        Proven <span className="text-gradient">Case Studies</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                        We don't sell marketing packages. We deploy digital assets that yield real, measurable commercial outcomes for our clients.
                    </p>
                </div>
            </div>

            {/* Case Studies Grid */}
            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="space-y-20">
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-12 rounded-3xl border border-gray-800/80 items-center card-hover-premium"
                            style={{ background: '#0b0f1c' }}
                        >
                            <div className="order-2 lg:order-1 space-y-6">
                                <span className="text-xs font-mono uppercase tracking-widest text-[#3b82f6] px-3 py-1.5 rounded-full" style={{ background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(59,130,246,0.15)' }}>
                                    {project.industry}
                                </span>
                                
                                <h2 className="text-3xl md:text-4xl font-bold text-white">{project.name}</h2>
                                
                                <div className="space-y-3">
                                    <h4 className="text-sm font-semibold uppercase text-gray-400 tracking-wider flex items-center gap-2">
                                        <Layout size={16} className="text-[#3b82f6]" /> Services Provided
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.services.map((service, sIndex) => (
                                            <span key={sIndex} className="text-xs bg-dark-bg text-gray-300 border border-gray-800 px-3 py-1 rounded-md">
                                                {service}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-sm font-semibold uppercase text-gray-400 tracking-wider flex items-center gap-2">
                                        <CheckCircle size={16} className="text-[#3b82f6]" /> Verified Results
                                    </h4>
                                    <ul className="space-y-2">
                                        {project.results.map((result, rIndex) => (
                                            <li key={rIndex} className="text-sm text-gray-300 flex items-start gap-3">
                                                <span className="text-blue-500 font-bold shrink-0">📈</span>
                                                <span>{result}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="space-y-3 pt-2">
                                    <h4 className="text-sm font-semibold uppercase text-gray-400 tracking-wider flex items-center gap-2">
                                        <Database size={16} className="text-[#3b82f6]" /> Tech Stack Used
                                    </h4>
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.techStack.map((tech, tIndex) => (
                                            <span key={tIndex} className="text-xs font-mono bg-blue-600/5 text-blue-400 border border-blue-500/10 px-2 py-0.5 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-4 flex items-center">
                                    <a 
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#3b82f6] hover:text-white transition-colors"
                                    >
                                        Visit Live Platform <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>

                            <div className="order-1 lg:order-2">
                                <img 
                                    src={project.image} 
                                    alt={`${project.name} - ${project.industry}`} 
                                    className="rounded-2xl border border-gray-800 w-full h-[320px] object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <FinalCTA />
        </div>
    );
};

export default Portfolio;
