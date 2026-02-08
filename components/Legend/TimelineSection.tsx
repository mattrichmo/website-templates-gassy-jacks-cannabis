
import React from 'react';

const TimelineSection: React.FC = () => {
    return (
        <section className="py-24 bg-primary text-hemp overflow-hidden relative">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-felt.png')]"></div>
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-gold font-bold tracking-[0.2em] text-xs uppercase mb-4 block">A Legacy in the Making</span>
                    <h2 className="font-serif text-5xl md:text-6xl font-bold">Through The Decades</h2>
                </div>
                <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-gold/30 hidden md:block"></div>

                    <div className="flex flex-col md:flex-row items-center justify-between mb-24 relative group">
                        <div className="w-full md:w-5/12 text-right pr-0 md:pr-12 order-2 md:order-1 mt-6 md:mt-0">
                            <h3 className="font-serif text-4xl text-gold mb-4">1974</h3>
                            <h4 className="font-bold text-xl mb-3">The First Spark</h4>
                            <p className="text-white/60 leading-relaxed">Yorkville village. Jack opens his "record store" which quickly becomes the neighborhood's worst-kept secret. The vibe is born.</p>
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-primary z-20 hidden md:block group-hover:scale-150 transition-transform"></div>
                        <div className="w-full md:w-5/12 pl-0 md:pl-12 order-1 md:order-2">
                            <div className="aspect-[4/3] bg-white/5 border border-white/10 p-2 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                <div className="w-full h-full bg-cover bg-center grayscale" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAvi81qyMLhb8w3pZ9WNIL-YMVLxd5VWyBarkjtAZdOhG2f7EkdagMsko4Slo7x_8MNkT1nSqjan5b00UKTblmytABkM8gTYvf5WCg6LXMlpKPerENa-3fULc0GFVZ5CHWM0zSHTOdo8Xazm8ojsX87-y_So6l7cYGrQjYrugZgJIWE6k_p3XFIIf1IR_5XH8GSv_Suhaz-GyKdpXZhbp3ZFuSga6lPhd4tKASKOeGbQ9Fu-MDvdNY34rI-wVPYB3tBjCwB8xO_rz8')" }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between mb-24 relative group">
                        <div className="w-full md:w-5/12 text-right pr-0 md:pr-12 order-1 md:mt-0">
                            <div className="aspect-[4/3] bg-white/5 border border-white/10 p-2 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                                <div className="w-full h-full bg-cover bg-center sepia" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBzKMnbWI91Epu71XAzzzsZDZaNMlP5tlJYYeY-Uj0HKDT4yk6jclEErqwWwcfAU1LSEps_kCq2VfoUoegcfOrwi1to95dbQ_bqGtVc5hzOE85z48RmQCBGbYlBpNUZ_Mjf0YYetv6eDpzUa3rWJD5k1koCYJ6DwGc_jlhxRx7_kPcsYCP1HooFFim4scOSM0lRRZz9fZxx7UyqgA9ir1LwcHgAWEpAuSyP0oaZ9o82g5pczKUOvk75XtJfB7kFLiuSuLy5F6GbCog')" }}></div>
                            </div>
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-primary z-20 hidden md:block group-hover:scale-150 transition-transform"></div>
                        <div className="w-full md:w-5/12 pl-0 md:pl-12 order-2 mt-6 md:mt-0">
                            <h3 className="font-serif text-4xl text-gold mb-4">1996</h3>
                            <h4 className="font-bold text-xl mb-3">The Quiet Years</h4>
                            <p className="text-white/60 leading-relaxed">As the scene goes underground, Jack keeps the flame alive. Cultivating strains that would become legendary for their terpene profiles.</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between relative group">
                        <div className="w-full md:w-5/12 text-right pr-0 md:pr-12 order-2 md:order-1 mt-6 md:mt-0">
                            <h3 className="font-serif text-4xl text-gold mb-4">2024</h3>
                            <h4 className="font-bold text-xl mb-3">The Grand Re-Opening</h4>
                            <p className="text-white/60 leading-relaxed">Legalization brings Jack's vision into the light. A flagship store that honors the past while setting the standard for the future.</p>
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-primary z-20 hidden md:block group-hover:scale-150 transition-transform"></div>
                        <div className="w-full md:w-5/12 pl-0 md:pl-12 order-1 md:order-2">
                            <div className="aspect-[4/3] bg-white/5 border border-white/10 p-2 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCL8sFeCJMRQ62nzU7idAVMAb9OwiO4tX9EwNKotpoVHRltlMAHt6Qa14OGVaB4Wi2bjV5RDqSGIe4xEGmMhzPjQj36F2GQ2k0U7oAf90IgTBMaXVtQ-IHt-G7UIfuh5z_zs_9BPU1WFcoV5nozdAVGHwrGJfhx4i0_4m9w762BCl4IVRoPit5CnVv3HiVVT8r99Ues8vRH8e_cC-L84WhP_n9dEY2yO0it9hQcRG1vwP-RFfsJKUJpOTE5DoSP5wMXUZEHgc--HdY')" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
