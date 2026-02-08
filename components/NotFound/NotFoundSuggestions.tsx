
import React from 'react';
import Link from 'next/link';

const NotFoundSuggestions: React.FC = () => {
    return (
        <section className="py-20 px-6 bg-hemp">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-primary/40 font-bold uppercase tracking-[0.3em] text-xs text-center mb-12">Perhaps you were looking for...</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Link href="/#stash" className="group p-8 bg-white border border-primary/5 shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center">
                        <span className="material-symbols-outlined text-gold text-4xl mb-4 group-hover:scale-110 transition-transform">inventory_2</span>
                        <h3 className="font-serif text-xl font-bold text-primary mb-2">The Stash</h3>
                        <p className="text-charcoal/50 text-sm italic">Jack&apos;s premium picks.</p>
                    </Link>
                    <Link href="/legend" className="group p-8 bg-white border border-primary/5 shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center">
                        <span className="material-symbols-outlined text-gold text-4xl mb-4 group-hover:scale-110 transition-transform">history_edu</span>
                        <h3 className="font-serif text-xl font-bold text-primary mb-2">The Legend</h3>
                        <p className="text-charcoal/50 text-sm italic">The man, the myth.</p>
                    </Link>
                    <Link href="/study" className="group p-8 bg-white border border-primary/5 shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center">
                        <span className="material-symbols-outlined text-gold text-4xl mb-4 group-hover:scale-110 transition-transform">menu_book</span>
                        <h3 className="font-serif text-xl font-bold text-primary mb-2">The Study</h3>
                        <p className="text-charcoal/50 text-sm italic">Knowledge is power.</p>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NotFoundSuggestions;
