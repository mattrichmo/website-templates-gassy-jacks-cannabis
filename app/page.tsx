

import HomeHero from '../components/Home/HomeHero';
import WeeklyPicks from '../components/Home/WeeklyPicks';
import VibeSection from '../components/Home/VibeSection';
import LegendTeaser from '../components/Home/LegendTeaser';
import StudyTeaser from '../components/Home/StudyTeaser';
import VisitTeaser from '../components/Home/VisitTeaser';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col animate-fade-in">
      <HomeHero />
      <WeeklyPicks />
      <VibeSection />
      <LegendTeaser />
      <StudyTeaser />
      <VisitTeaser />
    </div>
  );
}
