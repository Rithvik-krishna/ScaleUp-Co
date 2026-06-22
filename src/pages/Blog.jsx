import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, BookOpen } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import SEO from '../components/seo/SEO';
import Breadcrumbs from '../components/ui/Breadcrumbs';

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Blog Page schema
    const schema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "ScaleUp Co Blog",
        "description": "Expert advice and articles on Web Development, SEO, AI Chatbots, AI Voice Receptionists, and Lead Generation systems.",
        "url": "https://www.scaleupco.online/blog",
        "publisher": {
            "@type": "Organization",
            "name": "ScaleUp Co",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.scaleupco.online/logo.png"
            }
        },
        "blogPost": blogPosts.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "datePublished": new Date(post.date).toISOString().split('T')[0],
            "description": post.summary,
            "url": `https://www.scaleupco.online/blog/${post.slug}`,
            "image": post.image
        }))
    };

    return (
        <div className="flex flex-col w-full pt-20 bg-[#060810] text-white min-h-screen">
            <SEO 
                title="Blog | Web Development, SEO & AI Automation Articles"
                description="Expert articles and resources from ScaleUp Co. Discover how custom web design, SEO strategies, AI chatbots, and lead generation grow your local business."
                canonical="https://www.scaleupco.online/blog"
                keywords="ScaleUp Co Blog, Web Design Articles, SEO Strategy, AI Automation Guide, Business Growth, Local SEO Bangalore"
                schema={schema}
            />

            {/* Header Hero Section */}
            <div className="py-20 border-b border-gray-800/40" style={{ background: '#0b0f1c' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <Breadcrumbs items={[{ name: 'Blog', path: '/blog' }]} />
                    
                    <div className="max-w-3xl mt-6">
                        <span className="font-mono text-xs uppercase tracking-widest text-[#3b82f6] font-semibold">ScaleUp Co Insights</span>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight mt-3">
                            The <span className="text-gradient">Blog</span>
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Discover strategies and tutorials on web design, local SEO, AI voice receptionists, and chatbot automations to scale your business.
                        </p>
                    </div>
                </div>
            </div>

            {/* Articles Grid */}
            <div className="py-24 max-w-7xl mx-auto px-6 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{ 
                                background: 'rgba(11,15,28,0.9)', 
                                border: '1px solid rgba(59,130,246,0.12)', 
                                borderRadius: '16px' 
                            }}
                            className="overflow-hidden flex flex-col group hover:border-[#3b82f6]/40 transition-colors"
                        >
                            {/* Card Image */}
                            <div className="relative aspect-video overflow-hidden">
                                <img 
                                    src={post.image} 
                                    alt={post.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <span 
                                    style={{ background: 'rgba(37,99,235,0.85)', backdropFilter: 'blur(4px)' }} 
                                    className="absolute top-4 left-4 text-xs font-bold text-white px-3 py-1.5 rounded-full uppercase tracking-wider"
                                >
                                    {post.category}
                                </span>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <div>
                                    {/* Meta info */}
                                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-medium">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar size={13} />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Clock size={13} />
                                            {post.readTime}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#3b82f6] transition-colors leading-snug">
                                        <Link to={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h2>

                                    {/* Summary */}
                                    <p className="text-sm text-gray-400 leading-relaxed mb-6 font-light">
                                        {post.summary}
                                    </p>
                                </div>

                                {/* Link */}
                                <div className="pt-4 border-t border-gray-800/60">
                                    <Link 
                                        to={`/blog/${post.slug}`} 
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#3b82f6] group-hover:text-white transition-colors"
                                    >
                                        Read Article
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
