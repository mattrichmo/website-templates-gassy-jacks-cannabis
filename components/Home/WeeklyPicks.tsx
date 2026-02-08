

import { WEEKLY_PICKS } from '../../constants';

const WeeklyPicks = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-hemp relative border-b border-primary/5" id="stash">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-gold font-bold tracking-[0.2em] text-xs uppercase mb-2 block">Display Only • Visit In-Store to Purchase</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-primary font-bold">Jack&apos;s Weekly Picks</h2>
                    </div>
                    <div className="hidden md:block w-32 h-[1px] bg-primary/20 mb-4"></div>
                </div>
                <div className="flex overflow-x-auto gap-8 pb-12 scrollbar-hide snap-x px-2">
                    {WEEKLY_PICKS.map(pick => (
                        <div key={pick.id} className="min-w-[320px] md:min-w-[380px] snap-center group">
                            <div className="relative aspect-[3/4] bg-[#e8e4db] rounded-t-xl overflow-hidden mb-0 border-x border-t border-primary/10 shadow-sm">
                                <div className="absolute top-4 right-4 bg-primary text-gold text-xs font-bold px-3 py-1 uppercase tracking-wider z-10 border border-gold">{pick.tag}</div>
                                <div
                                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url('${pick.image}')` }}
                                ></div>
                            </div>
                            <div className="bg-white p-6 rounded-b-xl border border-primary/10 shadow-lg relative">
                                <div className="absolute -top-5 left-6 bg-gold text-primary p-2 rounded-full shadow-md">
                                    <span className="material-symbols-outlined">format_quote</span>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-primary mb-1 mt-2">{pick.name}</h3>
                                <p className="text-charcoal/60 text-sm font-body mb-4 uppercase tracking-wide">{pick.specs}</p>
                                <div className="p-4 bg-hemp/50 rounded border-l-2 border-gold italic font-serif text-primary/80 text-sm">
                                    &quot;{pick.quote}&quot; <br /><span className="font-bold not-italic text-xs mt-1 block text-gold">— Jack Says</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WeeklyPicks;
