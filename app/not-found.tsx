

import NotFoundHero from '../components/NotFound/NotFoundHero';
import NotFoundSuggestions from '../components/NotFound/NotFoundSuggestions';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col animate-fade-in bg-primary">
            <NotFoundHero />
            <NotFoundSuggestions />
        </div>
    );
}
