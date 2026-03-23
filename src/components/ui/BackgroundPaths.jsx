// src/components/ui/BackgroundPaths.jsx
import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundPaths = () => {
    // Generate 42 distinct flowing paths
    const paths = Array.from({ length: 42 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5} -${189 + i * 6}C-${380 - i * 5} -${189 + i * 6} -${312 - i * 5} ${216 - i * 6} ${152 + i * 5} ${343 - i * 6}C${616 + i * 5} ${470 - i * 6} ${284 + i * 5} ${873 - i * 6} ${839 + i * 5} ${875 - i * 6}C${1395 + i * 5} ${877 - i * 6} ${1716 + i * 5} ${465 - i * 6} ${1716 + i * 5} ${465 - i * 6}`,
        opacity: 0.15 + (i % 6) * 0.05,
        width: 0.5 + Math.random() * 1.5,
        duration: 12 + Math.random() * 12 + i * 0.2,
        delay: Math.random() * 8
    }));

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden h-full w-full">
            <svg 
                className="w-full h-full object-cover" 
                viewBox="0 0 1440 900" 
                preserveAspectRatio="xMidYMid slice"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="cyanPathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00E1FF" stopOpacity="0" />
                        <stop offset="20%" stopColor="#00E1FF" stopOpacity="0.8" />
                        <stop offset="80%" stopColor="#00E1FF" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#00E1FF" stopOpacity="0" />
                    </linearGradient>
                    <filter id="glowBlur" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feBlend in="SourceGraphic" in2="blur" mode="screen" />
                    </filter>
                </defs>
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3 }}
                    filter="url(#glowBlur)"
                >
                    {paths.map((path) => (
                        <motion.path
                            key={path.id}
                            d={path.d}
                            stroke="url(#cyanPathGradient)"
                            strokeWidth={path.width}
                            strokeOpacity={path.opacity}
                            strokeLinecap="round"
                            initial={{ pathLength: 0, pathOffset: 0 }}
                            animate={{ 
                                pathLength: [0, 0.4, 0.6, 1],
                                pathOffset: [0, 0.3, 0.6, 1]
                            }}
                            transition={{
                                duration: path.duration,
                                repeat: Infinity,
                                ease: "linear",
                                delay: path.delay
                            }}
                        />
                    ))}
                </motion.g>
            </svg>
            <div className="absolute inset-0 bg-dark-bg/20 backdrop-blur-[1px]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/40 via-transparent to-dark-bg/80"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/50 via-transparent to-dark-bg/50"></div>
        </div>
    );
};
