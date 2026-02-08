


const StudyHero = () => {
    return (
        <header className="pt-24 pb-16 px-6 md:px-12 text-center border-b border-primary/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="max-w-4xl mx-auto relative z-10">
                <span className="text-gold font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Editorial</span>
                <h1 className="font-serif text-6xl md:text-8xl text-primary font-bold mb-6">The Study</h1>
                <p className="font-serif italic text-2xl md:text-3xl text-primary/60 font-light max-w-2xl mx-auto">
                    Discourses on culture, history, and the finer things.
                </p>
                <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm uppercase tracking-widest font-medium text-primary/70">
                    <a className="border-b-2 border-gold text-primary pb-1" href="#">All</a>
                    <a className="border-b-2 border-transparent hover:border-gold hover:text-primary pb-1 transition-all" href="#">Culture</a>
                    <a className="border-b-2 border-transparent hover:border-gold hover:text-primary pb-1 transition-all" href="#">Education</a>
                    <a className="border-b-2 border-transparent hover:border-gold hover:text-primary pb-1 transition-all" href="#">History</a>
                    <a className="border-b-2 border-transparent hover:border-gold hover:text-primary pb-1 transition-all" href="#">Jack's Notes</a>
                </div>
            </div>
        </header>
    );
};

export default StudyHero;
