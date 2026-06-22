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
            name: "ArthaGroww",
            industry: "EdTech & Web App",
            services: ["Web Application Development", "Gamified Learning Engine", "UI/UX Design", "AI Assistant Integration"],
            results: [
                "Built and scaled the mobile web app to support 150,000+ active student builders",
                "Developed interactive daily modules facilitating 3.2M+ completed quiz loops",
                "Engineered gamified streak multipliers driving a 94% retention rate"
            ],
            techStack: ["Next.js", "TailwindCSS", "Framer Motion", "Supabase", "Vercel"],
            url: "https://arthagroww.vercel.app/",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Chameleon Agent",
            industry: "Web Application",
            services: ["WebRTC Remote Access System", "Turn/Stun Server Configuration", "Low-Latency Video Streaming", "E2E Encrypted Protocol Design"],
            results: [
                "Achieved < 100ms connection latency for real-time remote system control",
                "Built secure peer-to-peer browser-to-desktop access with E2E encryption",
                "Scaled TURN/STUN server architecture supporting concurrent active sessions"
            ],
            techStack: ["React", "WebRTC", "Socket.io", "Node.js", "TailwindCSS", "Docker"],
            url: "https://www.chameleon-agent.online/",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
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
