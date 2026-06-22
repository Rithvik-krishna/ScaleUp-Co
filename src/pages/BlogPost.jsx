import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ArrowRight, User } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import SEO from '../components/seo/SEO';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import NotFound from './NotFound';

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return <NotFound />;
    }

    // Get related posts (excluding current one)
    const relatedPosts = blogPosts
        .filter(p => p.slug !== slug)
        .slice(0, 2);

    // BlogPosting Schema
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": [post.image],
        "datePublished": new Date(post.date).toISOString().split('T')[0],
        "author": {
            "@type": "Organization",
            "name": "ScaleUp Co",
            "url": "https://www.scaleupco.online"
        },
        "publisher": {
            "@type": "Organization",
            "name": "ScaleUp Co",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.scaleupco.online/logo.png"
            }
        },
        "description": post.summary
    };

    return (
        <div className="flex flex-col w-full pt-20 bg-[#060810] text-white min-h-screen">
            <SEO 
                title={`${post.title} | ScaleUp Co Insights`}
                description={post.summary}
                canonical={`https://www.scaleupco.online/blog/${post.slug}`}
                keywords={`ScaleUp Co Blog, ${post.category}, Web Development, local SEO, AI Automation`}
                image={post.image}
                schema={articleSchema}
            />

            {/* Header / Breadcrumbs Section */}
            <div className="py-12 border-b border-gray-800/40" style={{ background: '#0b0f1c' }}>
                <div className="max-w-4xl mx-auto px-6">
                    <Breadcrumbs items={[{ name: 'Blog', path: '/blog' }, { name: post.title, path: `/blog/${post.slug}` }]} />
                    
                    <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mt-6 mb-4">
                        <ArrowLeft size={16} />
                        Back to Articles
                    </Link>

                    <span style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(59,130,246,0.2)' }} className="inline-block text-xs font-bold text-[#3b82f6] px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                        {post.category}
                    </span>

                    <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                        <span className="flex items-center gap-1.5">
                            <User size={16} className="text-[#3b82f6]" />
                            ScaleUp Co Team
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Calendar size={16} />
                            {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Clock size={16} />
                            {post.readTime}
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Article Image */}
            <div className="max-w-4xl mx-auto w-full px-6 -mt-8 relative z-10">
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                    <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Article Content */}
            <article className="max-w-3xl mx-auto px-6 py-16 w-full">
                <div 
                    className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-6 text-base md:text-lg font-light
                    [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-10 [&>h2]:mb-4
                    [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-white [&>h3]:mt-6 [&>h3]:mb-3
                    [&>p>strong]:text-white [&>p>strong]:font-semibold
                    [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ul>li>strong]:text-white
                    [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2 [&>ol>li>strong]:text-white
                    [&>table]:w-full [&>table]:border-collapse [&>table]:my-6 [&>table]:border [&>table]:border-gray-800
                    [&>table_th]:p-3 [&>table_th]:border-b [&>table_th]:border-gray-800 [&>table_th]:bg-gray-900/50 [&>table_th]:font-bold [&>table_th]:text-white
                    [&>table_td]:p-3 [&>table_td]:border-b [&>table_td]:border-gray-800 [&>table_td]:text-gray-300"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>

            {/* Lead Gen Callout inside Article */}
            <div className="max-w-3xl mx-auto px-6 mb-20 w-full">
                <div style={{ background: '#0b0f1c', border: '1px solid rgba(59,130,246,0.15)' }} className="p-8 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-white mb-3">Ready to Scale Your Business?</h3>
                    <p className="text-gray-400 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
                        Don't let tech complexities slow you down. Our developers, SEO strategists, and automation engineers can build these exact systems for your company.
                    </p>
                    <Link to="/contact">
                        <button style={{ background: '#2563eb', borderRadius: '6px' }} className="px-6 py-3 font-semibold text-white hover:bg-[#3b82f6] transition-colors inline-flex items-center gap-2 text-sm">
                            Get a Free Consultation
                            <ArrowRight size={16} />
                        </button>
                    </Link>
                </div>
            </div>

            {/* Related Posts Section */}
            {relatedPosts.length > 0 && (
                <div className="border-t border-gray-800/60 py-20 bg-[#0b0f1c]">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {relatedPosts.map(relPost => (
                                <div 
                                    key={relPost.slug}
                                    style={{ background: 'rgba(6,8,16,0.6)', border: '1px solid rgba(59,130,246,0.08)' }} 
                                    className="p-6 rounded-2xl flex flex-col justify-between group hover:border-[#3b82f6]/25 transition-colors"
                                >
                                    <div>
                                        <span className="text-xs font-mono uppercase tracking-widest text-[#3b82f6] mb-2 inline-block">
                                            {relPost.category}
                                        </span>
                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#3b82f6] transition-colors line-clamp-2">
                                            <Link to={`/blog/${relPost.slug}`}>{relPost.title}</Link>
                                        </h3>
                                        <p className="text-sm text-gray-400 font-light line-clamp-2 mb-4">
                                            {relPost.summary}
                                        </p>
                                    </div>
                                    <Link to={`/blog/${relPost.slug}`} className="text-xs font-bold text-[#3b82f6] group-hover:text-white transition-colors inline-flex items-center gap-1.5 mt-2">
                                        Read Article
                                        <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogPost;
