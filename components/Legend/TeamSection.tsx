

import { TEAM } from '../../constants';

const TeamSection = () => {
    return (
        <section className="py-24 px-6 md:px-12">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <span className="text-gold font-bold tracking-[0.2em] text-xs uppercase mb-2 block">The Curators</span>
                        <h2 className="font-serif text-5xl text-primary font-bold">Meet The Team</h2>
                    </div>
                    <p className="md:max-w-md text-charcoal/60 mt-4 md:mt-0 text-right md:text-left">
                        No tie-dye here. Just professional guidance from people who know their terpenes from their tannins.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {TEAM.map((member) => (
                        <div key={member.name} className="group">
                            <div className="relative overflow-hidden mb-4 border-b-4 border-gold bg-[#e8e4db]">
                                <div className="aspect-[3/4] w-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: `url('${member.image}')` }}></div>
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-primary/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-white text-xs italic">&quot;{member.quote}&quot;</p>
                                </div>
                            </div>
                            <h3 className="font-serif text-xl font-bold text-primary">{member.name}</h3>
                            <p className="text-gold text-xs font-bold uppercase tracking-wider mt-1">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
