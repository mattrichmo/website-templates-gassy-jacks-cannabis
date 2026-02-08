
import React from 'react';
import TransitionLink from '../Common/TransitionLink';

const NotFoundHero: React.FC = () => {
    return (
        <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center bg-primary overflow-hidden px-6 text-center">
            {/* Background Haze Effect */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(197,160,89,0.1)_0%,transparent_70%)] animate-pulse"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
                <span className="material-symbols-outlined text-gold text-7xl mb-6 opacity-50 block">cloud_off</span>
                <h1 className="font-serif text-6xl md:text-8xl text-hemp font-bold mb-6">
                    Lost in <br /><span className="italic text-gold">the Haze?</span>
                </h1>
                <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
                <p className="font-serif italic text-2xl text-white/60 mb-10">
                    &quot;Even Jack took a wrong turn once. It was 1976. He ended up in Buffalo. Don&apos;t be like Jack.&quot;
                </p>
                <TransitionLink
                    href="/"
                    className="inline-block bg-gold hover:bg-white text-primary font-bold py-4 px-10 rounded shadow-xl transition-all duration-300 uppercase tracking-widest text-sm"
                >
                    Return to the Foyer
                </TransitionLink>
            </div>
        </section>
    );
};

export default NotFoundHero;
