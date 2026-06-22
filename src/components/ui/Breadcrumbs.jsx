import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ items }) => {
    // Generate BreadcrumbList Schema dynamically
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.scaleupco.online"
            },
            ...items.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": item.name,
                "item": item.path ? `https://www.scaleupco.online${item.path}` : undefined
            }))
        ]
    };

    return (
        <nav className="flex text-sm text-[#64748b] mb-8 font-medium">
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
                <li className="inline-flex items-center">
                    <Link to="/" className="hover:text-white transition-colors">Home</Link>
                </li>
                {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                        <span className="mx-2 text-[#475569]">/</span>
                        {item.path ? (
                            <Link to={item.path} className="hover:text-white transition-colors">{item.name}</Link>
                        ) : (
                            <span className="text-[#3b82f6] font-semibold">{item.name}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
