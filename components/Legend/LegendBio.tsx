


const LegendBio = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-white relative">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                    <h2 className="font-serif text-5xl text-primary font-bold mb-8">The Bio: From Basement to Boutique</h2>
                    <div className="prose prose-lg text-charcoal/70 font-body space-y-6">
                        <p className="drop-cap">
                            It started with a simple belief: good people deserve good grass. In the hazy summer of 1974, Jack wasn&apos;t a CEO or a &quot;founder.&quot; He was just the guy you knew. The one with the best records, the softest velvet armchair, and a connections list that read like a who&apos;s who of Yorkville&apos;s counter-culture.
                        </p>
                        <p>
                            Jack&apos;s place was a sanctuary. A spot where lawyers rubbed elbows with musicians, and the air was always thick with ideas (and smoke). It wasn&apos;t about the transaction; it was about the ritual.
                        </p>
                        <p>
                            Fast forward fifty years. The laws have changed, but the philosophy hasn&apos;t. We&apos;ve traded the speakeasy vibes for polished brass and legal compliance, but the soul of Gassy Jack&apos;s remains. We&apos;re still the place for the discerning gentleman stoner who appreciates quality over quantity.
                        </p>
                    </div>
                    <div className="mt-10 flex items-center gap-4">
                        <div className="h-[1px] bg-gold w-12"></div>
                        <span className="font-serif italic text-primary text-lg">&quot;Stay classy, stay grassy.&quot; — Jack</span>
                    </div>
                </div>
                <div className="order-1 lg:order-2 relative h-[600px] w-full">
                    <div className="absolute inset-0 bg-primary/10 rounded-tr-[100px] rounded-bl-[100px]"></div>
                    <div className="absolute inset-4 overflow-hidden rounded-tr-[90px] rounded-bl-[90px] shadow-xl">
                        <div
                            className="w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAIqHYsDsmFMVG0h9OP9oF1zuYNYp6YNQD67Dvu42ubFKeWlNSc7ik-Dw9Ysypkro5fxSXzwFs51YQ4J5mm9K3GzRF5qcRxysz9lzwMyvL4ssPBVvkmQpuKfqFhtSpmwGN42TS2CA4IjGFe4N4ELSlRtJ7aTBcMFG7Fk41QAZcDWH_UhPyADwQe2DjFlhOwyntgsPaR19Ua0471QfY7dQcmDvbiqS-t_HCL9SjpVUut5fbs4UMuj2GrHrRDVk2Z95q9qzyh7hX1_YU')" }}
                        ></div>
                    </div>
                    <div className="absolute top-10 right-10 text-white z-20 mix-blend-difference">
                        <span className="material-symbols-outlined text-6xl opacity-50">history_edu</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LegendBio;
