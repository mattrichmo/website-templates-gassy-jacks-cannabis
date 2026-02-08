

import StudyHero from '../../components/Study/StudyHero';
import FeaturedPost from '../../components/Study/FeaturedPost';
import PostGrid from '../../components/Study/PostGrid';
import NewsletterSection from '../../components/Study/NewsletterSection';

export default function StudyPage() {
    return (
        <div className="min-h-screen flex flex-col animate-fade-in bg-hemp text-charcoal">
            <StudyHero />
            <FeaturedPost />
            <PostGrid />
            <NewsletterSection />
        </div>
    );
}
