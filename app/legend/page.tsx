

import LegendHero from '../../components/Legend/LegendHero';
import LegendBio from '../../components/Legend/LegendBio';
import TimelineSection from '../../components/Legend/TimelineSection';
import PhilosophySection from '../../components/Legend/PhilosophySection';
import TeamSection from '../../components/Legend/TeamSection';

export default function LegendPage() {
    return (
        <div className="min-h-screen flex flex-col animate-fade-in bg-hemp text-charcoal">
            <LegendHero />
            <LegendBio />
            <TimelineSection />
            <PhilosophySection />
            <TeamSection />
        </div>
    );
}
