
import React from 'react';
import TransitionLink from '../Common/TransitionLink';

const LegendTeaser: React.FC = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-hemp border-b border-primary/5" id="legend">
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 relative">
                        <div className="relative z-10 w-4/5 shadow-2xl border-4 border-white transform -rotate-2">
                            <div className="aspect-[3/4] bg-primary grayscale overflow-hidden">
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDmHM-oj6J33s4is_UnjhxjGEie2tTiPtSgMbKY6t0V0f2zhoHrjMP1wodmko_Fe1kq9XtOaLfRdiBX_DqxxZuHcEkER4h-fM_JBiJ1P0k52TJml2vtPS4u8Ke0XRmR4OhYBjS99ohFWokcx2X5Xd9P35q_enxbCnUm6t3us1RyWR8vtTkjCbNCRUHutE0ki9TjNkwxTxHX2liIgGJBu0J2Hbe8ORk5Qb47HXFjzOO4mZsuHEu6np7ICtSdgromylwoIz2l4I-1Ziw')", opacity: 0.8 }}
                                ></div>
                            </div>
                        </div>
                        <div className="absolute top-12 right-0 w-3/5 z-0 transform rotate-3 shadow-xl border-4 border-white">
                            <div className="aspect-square bg-gold/20 overflow-hidden">
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDDKewOrvyRjEDgtuFZl0QYfMSaQP6ww6Y0CgDtGiucwN6qnSILIRPNVaEM1rg8M-7N-Omtj5z02mKjG5sAa3M07a43Zq3vtcvJ4dQ2CgC7Hcm0ky5Q_MUCMU-0W1huFmA5vHUCk48NViIkXzCv2FzNtaxYlNvgE5-9mjRlawugsBiH0n85xzeImtVsL89LgqhCY9L4jBt--Y2fEq-9vAXYSR_gUcNDh6y1iZPY_QiFYEhHah68gfWrg-5TWFRz68u4ohLPvgK52YY')" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7 pl-0 lg:pl-12">
                        <span className="text-primary/50 font-serif italic text-lg mb-2 block">Established 1974 — Reborn 2024</span>
                        <h2 className="font-serif text-5xl text-primary font-bold mb-6">The Legend of Jack</h2>
                        <div className="prose prose-lg text-charcoal/70 mb-8 font-body">
                            <p className="mb-4">
                                They say if you remember the 70s, you weren't really there. Jack disagrees. He remembers the smoke-filled basements of Yorkville, the hushed conversations, and the communal spirit that started it all.
                            </p>
                            <p>
                                Today, Gassy Jack's brings that same rebellious spirit into the light. We've traded the basement for a boutique, but the values remain unchanged: quality, community, and a damn good time.
                            </p>
                        </div>
                        <TransitionLink className="group inline-flex items-center gap-2 text-primary font-bold border-b-2 border-primary hover:text-gold hover:border-gold transition-colors pb-1" href="/legend">
                            Read the Full Story
                            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </TransitionLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LegendTeaser;
