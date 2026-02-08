'use client';

import { useState, useEffect } from 'react';
import TransitionLink from './TransitionLink';
import { NAVIGATION_ITEMS } from '../../constants';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Note: usePathname import removed as it was unused in original source, 
    // but if needed: import { usePathname } from 'next/navigation';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Use NAVIGATION_ITEMS for desktop links to maintain consistency
    const leftItems = NAVIGATION_ITEMS.slice(0, 2);
    const rightItems = NAVIGATION_ITEMS.slice(2);

    return (
        <nav className={`sticky top-0 z-40 w-full transition-all duration-300 ${isScrolled ? 'glass shadow-md h-16' : 'glass h-20'} border-b border-primary/10 flex items-center`}>
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full flex items-center justify-between">
                <div className="hidden md:flex flex-1 items-center gap-8 justify-start">
                    {leftItems.map(item => (
                        <TransitionLink
                            key={item.label}
                            className="text-primary text-sm font-medium uppercase tracking-widest hover:text-gold transition-colors"
                            href={item.href}
                        >
                            {item.label}
                        </TransitionLink>
                    ))}
                </div>

                <div className="flex-shrink-0 flex flex-col items-center">
                    <TransitionLink className="group flex flex-col items-center" href="/">
                        <span className="material-symbols-outlined text-4xl text-primary group-hover:text-gold transition-colors">spa</span>
                        <span className="font-serif text-xl font-bold tracking-tight text-primary leading-none mt-1">Gassy Jack&apos;s</span>
                    </TransitionLink>
                </div>

                <div className="hidden md:flex flex-1 items-center gap-8 justify-end">
                    {rightItems.map(item => (
                        <TransitionLink
                            key={item.label}
                            className="text-primary text-sm font-medium uppercase tracking-widest hover:text-gold transition-colors"
                            href={item.href}
                        >
                            {item.label}
                        </TransitionLink>
                    ))}
                </div>

                <button
                    className="md:hidden text-primary p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="material-symbols-outlined text-2xl">{isMenuOpen ? 'close' : 'menu'}</span>
                </button>
            </div>

            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-hemp border-b border-primary/10 p-6 flex flex-col gap-4 md:hidden shadow-xl animate-fade-in">
                    {NAVIGATION_ITEMS.map((item) => (
                        <TransitionLink
                            key={item.label}
                            href={item.href}
                            className="text-primary text-lg font-serif font-bold uppercase tracking-widest hover:text-gold py-2 border-b border-primary/5"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </TransitionLink>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Header;
