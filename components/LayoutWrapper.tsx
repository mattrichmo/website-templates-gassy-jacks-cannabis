'use client';

import { useState, useEffect, ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Header from './Common/Header';
import Footer from './Common/Footer';
import AgeGate from './Common/AgeGate';
import SmokeTransition from './Common/SmokeTransition';
import { SmokeTransitionProvider } from './Common/SmokeTransitionContext';

const ScrollManager = () => {
    const pathname = usePathname();

    useEffect(() => {
        // Handle hash scrolling if present in URL
        if (window.location.hash) {
            const timer = setTimeout(() => {
                const id = window.location.hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
            return () => clearTimeout(timer);
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return null;
};

export default function LayoutWrapper({ children }: { children: ReactNode }) {
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const pathname = usePathname();

    useEffect(() => {
        const verified = sessionStorage.getItem('gassy_jack_verified');
        if (verified === 'true') {
            setIsVerified(true);
        }
    }, []);

    const handleVerify = (verified: boolean) => {
        if (verified) {
            sessionStorage.setItem('gassy_jack_verified', 'true');
            setIsVerified(true);
        }
    };

    return (
        <SmokeTransitionProvider>
            <div className={`flex flex-col min-h-screen relative ${!isVerified ? 'overflow-hidden h-screen' : ''}`}>
                {/* Grain overlay across the entire experience */}
                <div className="fixed inset-0 pointer-events-none z-[60] bg-grain mix-blend-multiply opacity-40"></div>

                {/* Age Gate as a high-z-index overlay */}
                {!isVerified && <AgeGate onVerify={handleVerify} />}

                <ScrollManager />
                <Header />

                <main className={`flex-grow ${!isVerified ? 'blur-md grayscale' : ''} transition-all duration-700 relative`}>
                    <SmokeTransition>
                        {children}
                    </SmokeTransition>
                </main>

                <Footer />
            </div>
        </SmokeTransitionProvider>
    );
}
