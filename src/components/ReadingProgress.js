'use client';

import { useEffect, useState } from 'react';

/**
 * Reading progress bar for blog posts
 * Shows a gradient progress bar at the top of the page
 */
export default function ReadingProgress() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;

            const totalScroll = documentHeight - windowHeight;
            const progress = totalScroll > 0 ? (scrollTop / totalScroll) * 100 : 0;

            setScrollProgress(Math.min(100, Math.max(0, progress)));
        };

        // Initial calculation
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className="fixed top-0 left-0 right-0 z-50 h-1"
            style={{ pointerEvents: 'none' }}
        >
            <div
                className="h-full bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 transition-all duration-100 ease-out shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    );
}
