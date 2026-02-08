
'use client';



const ContactPostcard = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-[#e8e4db] text-charcoal relative overflow-hidden">
            <div className="absolute inset-0 bg-wood opacity-30 mix-blend-multiply pointer-events-none"></div>
            <div className="max-w-5xl mx-auto relative z-10 text-left">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-4xl md:text-5xl text-primary font-bold mb-4">Drop Us a Line</h2>
                    <p className="font-body text-primary/70 max-w-lg mx-auto">Have a specific question about our menu or just want to say hello? Send us a note the old fashioned way (digitally).</p>
                </div>
                <div className="bg-hemp p-8 md:p-12 postcard-shadow relative transform rotate-1 border border-[#d6d0c4]">
                    <div className="absolute top-8 right-8 w-24 h-32 border-2 border-dotted border-primary/20 flex flex-col items-center justify-center p-2 hidden md:flex">
                        <div className="w-full h-full bg-primary/10 flex items-center justify-center relative overflow-hidden">
                            <span className="material-symbols-outlined text-4xl text-primary/40">spa</span>
                            <div className="absolute inset-0 border-4 border-double border-primary/20"></div>
                        </div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-4/5 bg-primary/10 hidden md:block"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
                        <div className="space-y-6">
                            <div className="relative">
                                <label className="block font-serif italic text-primary/60 text-lg mb-2" htmlFor="message">Dearest Jack,</label>
                                <textarea className="w-full bg-transparent border-0 border-b border-primary/20 focus:border-gold focus:ring-0 p-0 text-xl font-serif leading-loose resize-none placeholder:text-primary/20" id="message" placeholder="Write your message here..." rows={8}></textarea>
                                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_31px,#1b3b2f20_32px)] bg-[size:100%_32px] mt-9"></div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center space-y-8 pt-8 md:pt-24">
                            <div className="space-y-6">
                                <div>
                                    <label className="sr-only" htmlFor="name">Name</label>
                                    <input className="w-full bg-transparent border-0 border-b border-primary/20 focus:border-gold focus:ring-0 px-0 py-2 font-serif text-lg" id="name" placeholder="Full Name" type="text" />
                                </div>
                                <div>
                                    <label className="sr-only" htmlFor="email">Email</label>
                                    <input className="w-full bg-transparent border-0 border-b border-primary/20 focus:border-gold focus:ring-0 px-0 py-2 font-serif text-lg" id="email" placeholder="Email Address" type="email" />
                                </div>
                                <div>
                                    <label className="sr-only" htmlFor="subject">Subject</label>
                                    <select className="w-full bg-transparent border-0 border-b border-primary/20 focus:border-gold focus:ring-0 px-0 py-2 font-serif text-lg text-primary/80" id="subject">
                                        <option>General Inquiry</option>
                                        <option>Product Question</option>
                                        <option>Press / Media</option>
                                    </select>
                                </div>
                            </div>
                            <div className="pt-8 flex justify-end md:justify-start">
                                <button className="group relative inline-flex items-center justify-center px-8 py-3 bg-rust text-hemp font-bold uppercase tracking-widest text-sm shadow-lg transform hover:-translate-y-1 transition-all duration-200 overflow-hidden">
                                    <span className="absolute inset-0 border-2 border-dashed border-white/30"></span>
                                    <span className="relative z-10 flex items-center gap-2">
                                        Send Postcard <span className="material-symbols-outlined">send</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPostcard;
