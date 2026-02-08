


const PhilosophySection = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-[#F9F7F2] border-b border-primary/10">
            <div className="max-w-5xl mx-auto text-center">
                <span className="material-symbols-outlined text-gold text-5xl mb-6">psychology</span>
                <h2 className="font-serif text-4xl md:text-5xl text-primary font-bold mb-10">The Philosophy</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                    <div className="bg-white p-8 border border-primary/5 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <h3 className="font-serif text-2xl text-primary font-bold mb-4">Quality Over Hype</h3>
                        <p className="text-charcoal/70 leading-relaxed">We don&apos;t chase the highest THC percentages. We chase the entourage effect. The perfect cure. The smoothest burn. Numbers are for accountants; feelings are for connoisseurs.</p>
                    </div>
                    <div className="bg-white p-8 border border-primary/5 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <h3 className="font-serif text-2xl text-primary font-bold mb-4">Anti-Sterile</h3>
                        <p className="text-charcoal/70 leading-relaxed">Legal weed stores often feel like clinics. Ours feels like a den. We believe purchasing cannabis should be as warm and inviting as the effects of the plant itself.</p>
                    </div>
                    <div className="bg-white p-8 border border-primary/5 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <h3 className="font-serif text-2xl text-primary font-bold mb-4">Respect the Plant</h3>
                        <p className="text-charcoal/70 leading-relaxed">Every bud on our shelf has been hand-selected. We work with craft growers who talk to their plants, not industrial facilities that treat them like widgets.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhilosophySection;
