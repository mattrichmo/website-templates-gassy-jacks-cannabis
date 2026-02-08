
'use client';



const FAQSection = () => {
    return (
        <section className="py-20 px-6 md:px-12 bg-[#151d1a] border-t border-white/5">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-gold font-bold tracking-[0.2em] text-xs uppercase mb-2 block">Good to Know</span>
                    <h2 className="font-serif text-4xl text-hemp font-bold">House Rules & FAQ</h2>
                </div>
                <div className="space-y-4 text-left">
                    <details className="group bg-primary border border-white/5 rounded overflow-hidden transition-all duration-300 open:border-gold/30">
                        <summary className="flex justify-between items-center p-6 cursor-pointer list-none bg-white/5 hover:bg-white/10 transition-colors">
                            <span className="font-serif text-xl text-hemp group-open:text-gold transition-colors">Is there parking available?</span>
                            <span className="material-symbols-outlined text-white/50 transform group-open:rotate-180 transition-transform duration-300">expand_more</span>
                        </summary>
                        <div className="p-6 pt-2 text-white/70 leading-relaxed border-t border-white/5">
                            <p>Yes, there is paid street parking available along Yorkville Avenue. Additionally, there is a Green P parking lot located just one block north on Cumberland Street. We recommend the lot for longer visits.</p>
                        </div>
                    </details>
                    <details className="group bg-primary border border-white/5 rounded overflow-hidden transition-all duration-300 open:border-gold/30" open>
                        <summary className="flex justify-between items-center p-6 cursor-pointer list-none bg-white/5 hover:bg-white/10 transition-colors">
                            <span className="font-serif text-xl text-hemp group-open:text-gold transition-colors">ID Requirements (19+)</span>
                            <span className="material-symbols-outlined text-white/50 transform group-open:rotate-180 transition-transform duration-300">expand_more</span>
                        </summary>
                        <div className="p-6 pt-2 text-white/70 leading-relaxed border-t border-white/5">
                            <p>Absolutely no exceptions. We require two pieces of government-issued photo ID for entry. One must be a primary piece (Driver's License, Passport). We take our responsibility to the community seriously. No ID, no entry.</p>
                        </div>
                    </details>
                    <details className="group bg-primary border border-white/5 rounded overflow-hidden transition-all duration-300 open:border-gold/30">
                        <summary className="flex justify-between items-center p-6 cursor-pointer list-none bg-white/5 hover:bg-white/10 transition-colors">
                            <span className="font-serif text-xl text-hemp group-open:text-gold transition-colors">Are you dog friendly?</span>
                            <span className="material-symbols-outlined text-white/50 transform group-open:rotate-180 transition-transform duration-300">expand_more</span>
                        </summary>
                        <div className="p-6 pt-2 text-white/70 leading-relaxed border-t border-white/5">
                            <p>Jack loves dogs. Well-behaved pooches on a leash are always welcome in the front lounge area. We even keep a jar of CBD-free treats behind the counter for our four-legged guests.</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
