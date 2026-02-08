
'use client';

import React from 'react';

const LocationDetails: React.FC = () => {
    return (
        <section className="relative z-10 -mt-10 px-6 md:px-12 pb-24">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7 h-[600px] lg:h-auto bg-[#e8e4db] rounded-sm overflow-hidden border-8 border-white/5 shadow-2xl relative group">
                    <div className="absolute top-6 left-6 z-10 bg-primary text-gold px-4 py-2 font-bold uppercase tracking-widest text-xs shadow-lg border border-gold">
                        Find Us
                    </div>
                    <div className="map-container w-full h-full bg-gray-200">
                        <iframe
                            allowFullScreen={true}
                            height="100%"
                            loading="lazy"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.436496662763!2d-79.39493868450204!3d43.67114497912076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34af2a47291f%3A0x6295777176161741!2sYorkville%20Ave%2C%20Toronto%2C%20ON!5e0!3m2!1sen!2sca!4v1620000000000!5m2!1sen!2sca"
                            style={{ border: 0 }}
                            width="100%"
                        ></iframe>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none drop-shadow-2xl">
                        <span className="material-symbols-outlined text-6xl text-primary drop-shadow-md">location_on</span>
                    </div>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-8">
                    <div className="bg-primary border border-gold/20 p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <span className="material-symbols-outlined text-9xl text-gold">storefront</span>
                        </div>
                        <div className="relative z-10 space-y-10 text-left">
                            <div>
                                <h3 className="text-gold font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-base">pin_drop</span> Location
                                </h3>
                                <p className="font-serif text-3xl md:text-4xl text-hemp leading-tight">
                                    123 Yorkville Ave,<br />Toronto, ON M5R 1C4
                                </p>
                                <a className="inline-flex items-center gap-2 text-gold/80 hover:text-gold mt-4 text-sm font-bold uppercase tracking-wider transition-colors border-b border-gold/30 pb-1" href="#">
                                    Get Directions <span className="material-symbols-outlined text-base">arrow_outward</span>
                                </a>
                            </div>
                            <div className="h-px w-full bg-gold/20"></div>
                            <div>
                                <h3 className="text-gold font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-base">schedule</span> Hours of Operation
                                </h3>
                                <ul className="space-y-3 text-hemp/90 font-body text-lg">
                                    <li className="flex justify-between border-b border-white/5 pb-2">
                                        <span>Mon - Wed</span>
                                        <span className="font-medium">10am - 8pm</span>
                                    </li>
                                    <li className="flex justify-between border-b border-white/5 pb-2">
                                        <span>Thu - Sat</span>
                                        <span className="font-medium text-gold">10am - 10pm</span>
                                    </li>
                                    <li className="flex justify-between pb-2">
                                        <span>Sunday</span>
                                        <span className="font-medium">11am - 6pm</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="h-px w-full bg-gold/20"></div>
                            <div>
                                <h3 className="text-gold font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-base">call</span> Contact
                                </h3>
                                <p className="text-2xl text-hemp font-serif mb-1">(416) 555-0199</p>
                                <a className="text-white/60 hover:text-white transition-colors" href="mailto:hello@gassyjacks.com">hello@gassyjacks.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationDetails;
