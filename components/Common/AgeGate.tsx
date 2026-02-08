


interface AgeGateProps {
    onVerify: (verified: boolean) => void;
}

const AgeGate = ({ onVerify }: AgeGateProps) => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-[#0d1f18]">
                <div className="absolute inset-0 bg-grain opacity-20"></div>
                {/* Using bg-wood variable defined in globals.css */}
                <div className="absolute inset-0 opacity-40 bg-[image:var(--bg-wood)]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
            </div>

            <div className="relative w-full max-w-lg bg-hemp shadow-2xl overflow-hidden border border-gold/40">
                <div className="absolute inset-3 border-2 border-gold/30 pointer-events-none">
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gold"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gold"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold"></div>
                </div>

                <div className="relative p-12 text-center flex flex-col items-center gap-8">
                    <div className="flex flex-col items-center text-primary mb-2">
                        <span className="material-symbols-outlined text-5xl mb-2">spa</span>
                        <span className="font-serif text-2xl font-bold tracking-tight leading-none">Gassy Jack&apos;s</span>
                        <div className="w-12 h-[1px] bg-gold/50 mt-4"></div>
                    </div>

                    <div className="space-y-4">
                        <h1 className="font-serif text-4xl font-bold text-primary">Are you of age, friend?</h1>
                        <p className="font-body text-charcoal/70 text-lg leading-relaxed max-w-xs mx-auto">
                            To enter the lounge, you must be of legal age in your province.
                        </p>
                    </div>

                    <div className="flex flex-col w-full gap-4 max-w-xs">
                        <button
                            onClick={() => onVerify(true)}
                            className="w-full py-4 bg-primary text-gold font-serif font-bold tracking-wider uppercase text-sm hover:bg-[#254f3f] transition-colors border border-primary shadow-lg"
                        >
                            I am 19+
                        </button>
                        <button
                            onClick={() => window.location.href = 'https://www.google.com'}
                            className="w-full py-4 bg-transparent text-primary/60 font-serif font-bold tracking-wider uppercase text-sm hover:text-primary hover:bg-primary/5 transition-colors border border-primary/20"
                        >
                            I am under 19
                        </button>
                    </div>

                    <div className="pt-4 border-t border-primary/10 w-full mt-2">
                        <p className="text-[10px] text-charcoal/40 uppercase tracking-widest font-medium leading-relaxed">
                            By entering, you agree to our Terms of Service & Privacy Policy.<br />
                            It is illegal to sell or provide cannabis to anyone under the age of 19 in Ontario.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgeGate;
