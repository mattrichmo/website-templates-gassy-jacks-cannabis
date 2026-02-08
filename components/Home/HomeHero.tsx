

import TransitionLink from '../Common/TransitionLink';

const HomeHero = () => {
    return (
        <section className="relative w-full min-h-[calc(100vh-80px)] flex flex-col lg:flex-row border-b border-primary/10">
            <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-auto bg-primary overflow-hidden group">
                <div
                    className="absolute inset-0 bg-cover bg-center grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDmHM-oj6J33s4is_UnjhxjGEie2tTiPtSgMbKY6t0V0f2zhoHrjMP1wodmko_Fe1kq9XtOaLfRdiBX_DqxxZuHcEkER4h-fM_JBiJ1P0k52TJml2vtPS4u8Ke0XRmR4OhYBjS99ohFWokcx2X5Xd9P35q_enxbCnUm6t3us1RyWR8vtTkjCbNCRUHutE0ki9TjNkwxTxHX2liIgGJBu0J2Hbe8ORk5Qb47HXFjzOO4mZsuHEu6np7ICtSdgromylwoIz2l4I-1Ziw')" }}
                ></div>
                <div className="absolute inset-0 bg-primary/30 mix-blend-multiply"></div>
                <div className="absolute bottom-8 left-8 z-10">
                    <p className="text-hemp/80 font-serif italic text-lg">Circa 1974</p>
                </div>
            </div>

            <div className="relative w-full lg:w-1/2 min-h-[50vh] lg:h-auto flex items-center justify-center bg-hemp p-8 lg:p-20 overflow-hidden">
                {/* Using local pattern variable if possible, or keeping remote for now until harvester runs */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div
                    className="absolute right-0 bottom-0 h-3/4 w-3/4 bg-contain bg-no-repeat bg-bottom opacity-10 mix-blend-multiply pointer-events-none"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAvi81qyMLhb8w3pZ9WNIL-YMVLxd5VWyBarkjtAZdOhG2f7EkdagMsko4Slo7x_8MNkT1nSqjan5b00UKTblmytABkM8gTYvf5WCg6LXMlpKPerENa-3fULc0GFVZ5CHWM0zSHTOdo8Xazm8ojsX87-y_So6l7cYGrQjYrugZgJIWE6k_p3XFIIf1IR_5XH8GSv_Suhaz-GyKdpXZhbp3ZFuSga6lPhd4tKASKOeGbQ9Fu-MDvdNY34rI-wVPYB3tBjCwB8xO_rz8')", filter: "grayscale(100%)" }}
                ></div>
                <div className="flex flex-col gap-6 max-w-lg z-10 relative">
                    <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-gold/30 hidden lg:block"></div>
                    <h1 className="font-serif text-5xl lg:text-7xl text-primary font-bold leading-[1.1]">
                        Welcome to<br />Gassy Jack's.
                    </h1>
                    <p className="font-serif italic text-3xl text-primary/70 font-light">
                        We kept a seat for you.
                    </p>
                    <div className="w-24 h-1 bg-gold mt-2 mb-4"></div>
                    <p className="font-body text-charcoal/80 text-lg leading-relaxed max-w-md">
                        Where heritage meets higher standards. Step into a world of curated cannabis for the modern gentleman.
                    </p>
                    <div className="pt-6">
                        <TransitionLink
                            className="inline-block bg-gold hover:bg-[#b08d4a] text-primary font-bold py-4 px-10 rounded shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 tracking-wide uppercase text-sm"
                            href="/visit"
                        >
                            Visit the Shop
                        </TransitionLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;
