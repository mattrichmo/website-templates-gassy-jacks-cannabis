'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface SmokeTransitionContextType {
    isCovered: boolean;
    isTransitioning: boolean;
    navigateWithSmoke: (href: string) => Promise<void>;
}

const SmokeTransitionContext = createContext<SmokeTransitionContextType | undefined>(undefined);

export const useSmokeTransition = () => {
    const context = useContext(SmokeTransitionContext);
    if (!context) {
        throw new Error('useSmokeTransition must be used within a SmokeTransitionProvider');
    }
    return context;
};

export const SmokeTransitionProvider = ({ children }: { children: React.ReactNode }) => {
    const [isCovered, setIsCovered] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    // Reset transitioning state when pathname changes (meaning navigation is done)
    useEffect(() => {
        if (isTransitioning) {
            // Give a tiny buffer for the new page to render before dissipating
            const timer = setTimeout(() => {
                setIsCovered(false);
                setTimeout(() => setIsTransitioning(false), 1200); // Wait for dissipation animation
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [pathname, isTransitioning]);

    const navigateWithSmoke = useCallback(async (href: string) => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setIsCovered(true);

        // Wait for smoke to fill (~800ms)
        await new Promise(resolve => setTimeout(resolve, 800));

        // Actual navigation
        router.push(href);
    }, [isTransitioning, router]);

    return (
        <SmokeTransitionContext.Provider value={{ isCovered, isTransitioning, navigateWithSmoke }}>
            {children}
        </SmokeTransitionContext.Provider>
    );
};
