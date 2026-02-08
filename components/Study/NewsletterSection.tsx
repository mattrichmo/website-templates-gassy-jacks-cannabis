
'use client';

import React from 'react';

const NewsletterSection: React.FC = () => {
    return (
        <section className="py-20 bg-primary text-hemp border-b-8 border-gold">
            <div className="max-w-2xl mx-auto px-6 text-center">
                <span className="text-gold font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Stay Informed</span>
                <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">Join The Study</h2>
                <p className="text-white/70 text-lg mb-8 font-light">
                    Receive our latest articles, curated playlists, and exclusive offers directly to your inbox. No spam, just substance.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input className="flex-1 px-6 py-4 bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold rounded-none" placeholder="Email Address" type="email" />
                    <button className="px-8 py-4 bg-gold hover:bg-white text-primary font-bold uppercase tracking-wider transition-colors" type="button">Subscribe</button>
                </form>
            </div>
        </section>
    );
};

export default NewsletterSection;
