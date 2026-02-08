
import React from 'react';

const LegendHero: React.FC = () => {
    return (
        <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center border-b border-primary/10 py-20 px-6">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-primary opacity-5 mix-blend-multiply"></div>
                <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[#d4cbb8] to-transparent opacity-30"></div>
            </div>
            <div className="relative z-10 text-center max-w-4xl mx-auto">
                <span className="inline-block py-1 px-3 border border-primary/20 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-primary/60 mb-6 bg-hemp/50 backdrop-blur-sm">Our Story</span>
                <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-primary font-bold leading-none mb-6 tracking-tight">
                    The Legend<br /><span className="text-gold italic font-medium text-5xl md:text-7xl lg:text-8xl">of Jack</span>
                </h1>
                <div className="flex flex-col items-center gap-4 mt-8">
                    <div className="h-16 w-[1px] bg-primary/30"></div>
                    <p className="font-serif italic text-2xl text-primary/80">Established 1974 — Reborn 2024</p>
                </div>
            </div>
            <div className="mt-16 w-full max-w-[1400px] mx-auto relative h-[400px] hidden md:block">
                <div className="absolute left-[10%] top-0 w-64 h-80 z-10 transform -rotate-3 shadow-2xl border-4 border-white group hover:scale-105 transition-transform duration-500">
                    <div
                        className="w-full h-full bg-cover bg-center grayscale contrast-125"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDmHM-oj6J33s4is_UnjhxjGEie2tTiPtSgMbKY6t0V0f2zhoHrjMP1wodmko_Fe1kq9XtOaLfRdiBX_DqxxZuHcEkER4h-fM_JBiJ1P0k52TJml2vtPS4u8Ke0XRmR4OhYBjS99ohFWokcx2X5Xd9P35q_enxbCnUm6t3us1RyWR8vtTkjCbNCRUHutE0ki9TjNkwxTxHX2liIgGJBu0J2Hbe8ORk5Qb47HXFjzOO4mZsuHEu6np7ICtSdgromylwoIz2l4I-1Ziw')" }}
                    ></div>
                    <div className="absolute -bottom-10 left-0 bg-white p-2 shadow-lg transform -rotate-2 text-xs font-serif italic text-primary">Yorkville, '74</div>
                </div>
                <div className="absolute left-1/2 top-10 transform -translate-x-1/2 w-80 h-96 z-20 shadow-2xl border-4 border-gold/50 group hover:scale-105 transition-transform duration-500">
                    <div
                        className="w-full h-full bg-cover bg-center sepia-[.3]"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDmHM-oj6J33s4is_UnjhxjGEie2tTiPtSgMbKY6t0V0f2zhoHrjMP1wodmko_Fe1kq9XtOaLfRdiBX_DqxxZuHcEkER4h-fM_JBiJ1P0k52TJml2vtPS4u8Ke0XRmR4OhYBjS99ohFWokcx2X5Xd9P35q_enxbCnUm6t3us1RyWR8vtTkjCbNCRUHutE0ki9TjNkwxTxHX2liIgGJBu0J2Hbe8ORk5Qb47HXFjzOO4mZsuHEu6np7ICtSdgromylwoIz2l4I-1Ziw')" }}
                    ></div>
                </div>
                <div className="absolute right-[10%] top-20 w-72 h-72 z-10 transform rotate-3 shadow-2xl border-4 border-white group hover:scale-105 transition-transform duration-500">
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAe0WcgirgEo9rGVlJZcUAL3brWzm7Mi8yG_Ni76T5-6nFb0IyPMObzumfDP0TE6cYDsvl-gsvypSeTPWfmwVIkqWtIpKiWcN_qqQ5Xe17Vbdbjss1mL6bmkE-fVxQrojJBbVBEqmyYpFkcq9tkT_faPdGiKwa4mvLPn2Cb2CY0xYCjlrrMdm2kOcF55JVDdW1cGcF3Jrmi-TQiaM0olLaxuEy9hONoq3PK4dRziFaGSlwdDlPjm2pI6NAJwxvrbsLtLdAY7VEAl7w')" }}
                    ></div>
                    <div className="absolute -top-5 -right-5 bg-gold text-primary font-bold p-4 rounded-full shadow-lg z-30 flex items-center justify-center w-16 h-16">
                        <span className="text-xs uppercase text-center leading-none">Since<br />1974</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LegendHero;
