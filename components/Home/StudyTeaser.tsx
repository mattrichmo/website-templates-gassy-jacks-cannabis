
import React from 'react';
import Link from 'next/link';

const StudyTeaser: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-white text-center border-b border-primary/5" id="study">
            <div className="max-w-2xl mx-auto">
                <span className="text-gold font-bold tracking-[0.2em] text-xs uppercase mb-6 block">From The Study</span>
                <h2 className="font-serif text-4xl md:text-5xl text-primary font-bold leading-tight mb-6">
                    Why 30% THC isn't everything <br /><span className="italic text-3xl opacity-60 font-medium">(Listen to your elders)</span>
                </h2>
                <div className="w-16 h-1 bg-gold mx-auto mb-8"></div>
                <p className="text-charcoal/60 text-lg mb-10 font-body italic">
                    "Chasing numbers is a young man's game. The true connoisseur chases the terpene profile."
                </p>
                <Link className="inline-block px-8 py-3 border border-primary text-primary font-bold hover:bg-primary hover:text-hemp transition-colors uppercase text-sm tracking-wide" href="/study">
                    Read Article
                </Link>
            </div>
        </section>
    );
};

export default StudyTeaser;
