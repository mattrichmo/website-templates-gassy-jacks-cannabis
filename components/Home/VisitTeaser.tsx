
import React from 'react';

const VisitTeaser: React.FC = () => {
    return (
        <section className="py-0 flex flex-col lg:flex-row bg-primary text-hemp" id="visit">
            <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-primary relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
                <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-10">Pay Us a Visit</h2>
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-gold text-2xl mt-1">storefront</span>
                        <div>
                            <h3 className="font-bold text-xl mb-1 text-gold">The Shop</h3>
                            <p className="text-white/80 leading-relaxed">123 Yorkville Ave,<br />Toronto, ON M5R 1C4</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-gold text-2xl mt-1">schedule</span>
                        <div>
                            <h3 className="font-bold text-xl mb-1 text-gold">Open Hours</h3>
                            <p className="text-white/80">Monday - Wednesday: 10am - 8pm</p>
                            <p className="text-white/80">Thursday - Saturday: 10am - 10pm</p>
                            <p className="text-white/80">Sunday: 11am - 6pm</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-gold text-2xl mt-1">call</span>
                        <div>
                            <h3 className="font-bold text-xl mb-1 text-gold">Contact</h3>
                            <p className="text-white/80">(416) 555-0199</p>
                            <a className="text-gold/80 hover:text-gold underline decoration-1 underline-offset-4" href="mailto:hello@gassyjacks.com">hello@gassyjacks.com</a>
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <a
                        href="https://www.google.com/maps/dir/?api=1&destination=123+Yorkville+Ave+Toronto+ON+M5R+1C4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full sm:w-auto"
                    >
                        <button className="bg-gold hover:bg-white text-primary font-bold py-4 px-8 rounded shadow-lg transition-colors w-full uppercase tracking-wide">
                            Get Directions
                        </button>
                    </a>
                </div>
            </div>
            <div className="w-full lg:w-1/2 min-h-[400px] bg-[#e8e4db] relative group overflow-hidden">
                <div className="map-container absolute inset-0 w-full h-full bg-gray-200 grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-700">
                    <iframe
                        allowFullScreen={true}
                        height="100%"
                        loading="lazy"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.436496662763!2d-79.39493868450204!3d43.67114497912076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34af2a47291f%3A0x6295777176161741!2sYorkville%20Ave%2C%20Toronto%2C%20ON!5e0!3m2!1sen!2sca!4v1620000000000!5m2!1sen!2sca"
                        style={{ border: 0 }}
                        width="100%"
                        title="Gassy Jack's Location"
                    ></iframe>
                </div>
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay pointer-events-none group-hover:opacity-0 transition-opacity duration-700"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none drop-shadow-2xl z-10">
                    <span className="material-symbols-outlined text-6xl text-primary drop-shadow-xl transform group-hover:scale-110 transition-transform duration-500">location_on</span>
                    <span className="bg-primary text-gold text-xs font-bold px-4 py-2 rounded shadow-lg mt-2 border border-gold/30 backdrop-blur-sm">We are here</span>
                </div>
            </div>
        </section>
    );
};

export default VisitTeaser;
