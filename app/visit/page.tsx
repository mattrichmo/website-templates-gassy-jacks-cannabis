

import VisitHero from '../../components/Visit/VisitHero';
import LocationDetails from '../../components/Visit/LocationDetails';
import FAQSection from '../../components/Visit/FAQSection';
import ContactPostcard from '../../components/Visit/ContactPostcard';

export default function VisitPage() {
    return (
        <div className="min-h-screen flex flex-col animate-fade-in bg-primary text-hemp">
            <VisitHero />
            <LocationDetails />
            <FAQSection />
            <ContactPostcard />
        </div>
    );
}
