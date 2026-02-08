


const VibeSection = () => {
    return (
        <section className="py-24 px-6 bg-[#241e1b] text-hemp relative overflow-hidden" id="vibe">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-[#241e1b] z-0"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8B6F4E] via-gold to-[#8B6F4E] opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#8B6F4E] via-gold to-[#8B6F4E] opacity-50"></div>
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                    <span className="text-gold font-bold tracking-[0.2em] text-xs uppercase mb-4 block">The Vibe</span>
                    <h2 className="font-serif text-5xl lg:text-6xl font-bold mb-6 text-hemp">Gentleman Stoner Lounge</h2>
                    <p className="text-white/70 text-lg leading-relaxed mb-8 font-light">
                        We believe the atmosphere is just as important as the product. Sink into the leather, let the brass accents catch the light, and tune into our curated sounds.
                    </p>
                    <div className="flex items-center gap-4 text-gold">
                        <span className="material-symbols-outlined text-3xl">chair</span>
                        <span className="material-symbols-outlined text-3xl">speaker_group</span>
                        <span className="material-symbols-outlined text-3xl">wine_bar</span>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-tr from-[#8B6F4E] to-gold rounded-2xl opacity-40 blur-sm"></div>
                    <div className="bg-[#121212] rounded-xl p-6 shadow-2xl border border-white/10 relative">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2 text-white/80">
                                <span className="material-symbols-outlined">graphic_eq</span>
                                <span className="text-xs uppercase tracking-widest font-bold">Now Playing</span>
                            </div>
                            <span className="material-symbols-outlined text-[#1db954] text-2xl">eco</span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                            <div className="size-48 shrink-0 shadow-lg rounded overflow-hidden relative group">
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIqHYsDsmFMVG0h9OP9oF1zuYNYp6YNQD67Dvu42ubFKeWlNSc7ik-Dw9Ysypkro5fxSXzwFs51YQ4J5mm9K3GzRF5qcRxysz9lzwMyvL4ssPBVvkmQpuKfqFhtSpmwGN42TS2CA4IjGFe4N4ELSlRtJ7aTBcMFG7Fk41QAZcDWH_UhPyADwQe2DjFlhOwyntgsPaR19Ua0471QfY7dQcmDvbiqS-t_HCL9SjpVUut5fbs4UMuj2GrHrRDVk2Z95q9qzyh7hX1_YU"
                                    alt="Vinyl"
                                />
                            </div>
                            <div className="flex-1 w-full pt-2 text-center sm:text-left">
                                <h3 className="font-bold text-2xl text-white mb-1 font-serif">Sunday Sativa</h3>
                                <p className="text-white/60 text-sm mb-6">Curated by Jack • 42 Songs</p>
                                <div className="w-full bg-white/10 h-1 rounded-full mb-4 overflow-hidden">
                                    <div className="bg-[#1db954] h-full w-2/3 rounded-full relative">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow"></div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center gap-4">
                                    <span className="material-symbols-outlined text-white/70 hover:text-white cursor-pointer text-2xl">skip_previous</span>
                                    <div className="size-12 rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                                        <span className="material-symbols-outlined text-black text-3xl fill-current">play_arrow</span>
                                    </div>
                                    <span className="material-symbols-outlined text-white/70 hover:text-white cursor-pointer text-2xl">skip_next</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 pt-4 border-t border-white/10 text-center">
                            <a className="text-[#1db954] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center justify-center gap-2" href="#">
                                Open in Spotify <span className="material-symbols-outlined text-sm">open_in_new</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VibeSection;
