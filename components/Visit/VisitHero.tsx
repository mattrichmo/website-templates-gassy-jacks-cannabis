


const VisitHero = () => {
    return (
        <section className="relative py-24 px-6 md:px-12 bg-primary overflow-hidden">
            <div className="absolute inset-0 bg-wood opacity-10 mix-blend-multiply"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#151d1a] to-transparent opacity-60"></div>
            <div className="max-w-[1200px] mx-auto relative z-10 text-center">
                <span className="text-gold font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Toronto Ontario</span>
                <h1 className="font-serif text-6xl md:text-8xl text-hemp font-bold mb-6">Visit the Lounge</h1>
                <div className="w-32 h-1 bg-gold mx-auto mb-8"></div>
                <p className="font-serif italic text-2xl text-white/60 max-w-2xl mx-auto font-light">
                    "A sanctuary for the refined palate. Where the noise of the city fades, and the conversation begins."
                </p>
            </div>
        </section>
    );
};

export default VisitHero;
