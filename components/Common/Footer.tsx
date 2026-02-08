import React from 'react';
import TransitionLink from './TransitionLink';
import { NAVIGATION_ITEMS } from '../../constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-hemp pt-20 pb-10 border-t-8 border-gold mt-auto">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="material-symbols-outlined text-gold text-3xl">spa</span>
                            <span className="font-serif text-2xl font-bold text-white">Gassy Jack's</span>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed mb-6">
                            Purveyors of fine cannabis and gentlemanly accoutrements. Established in Toronto for the modern connoisseur.
                        </p>
                        <div className="flex gap-4">
                            <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-primary transition-colors" href="#">
                                <span className="font-bold text-xs">IG</span>
                            </a>
                            <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-primary transition-colors" href="#">
                                <span className="font-bold text-xs">TW</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-6">Explore</h4>
                        <ul className="space-y-4 text-sm text-white/70">
                            {NAVIGATION_ITEMS.map(item => (
                                <li key={item.label}>
                                    <TransitionLink className="hover:text-gold transition-colors" href={item.href}>{item.label}</TransitionLink>
                                </li>
                            ))}
                            <li><TransitionLink className="hover:text-gold transition-colors" href="/privacy">Our Promise</TransitionLink></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2 bg-[#152e24] p-8 rounded border border-white/5">
                        <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg">warning</span> Legal Notice
                        </h4>
                        <p className="text-white/50 text-xs leading-relaxed mb-6">
                            Cannabis can be addictive and may impair your ability to drive or operate heavy machinery. Keep out of reach of children and pets. Do not consume if pregnant or breastfeeding. Must be 19 years of age or older to enter this site or purchase products.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 border border-gold/30 px-4 py-2 rounded bg-primary/50">
                                <span className="material-symbols-outlined text-gold text-xl">18_up_rating</span>
                                <span className="font-bold text-gold text-sm uppercase tracking-wide">19+ Only</span>
                            </div>
                            <span className="text-white/30 text-xs">ID Required for delivery and pickup.</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-left">
                        <span>© 2024 Gassy Jack's. All rights reserved.</span>
                        <TransitionLink className="hover:text-white" href="/privacy">Privacy Policy</TransitionLink>
                        <TransitionLink className="hover:text-white" href="/privacy">Terms of Service</TransitionLink>
                    </div>
                    <div className="font-serif italic text-white/20">
                        "Stay Classy."
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
