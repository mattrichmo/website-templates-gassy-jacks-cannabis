

import { Post } from '../../types';

interface ArticleContentProps {
    post: Post;
}

const ArticleContent = ({ post }: ArticleContentProps) => {
    return (
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
            <div className="flex items-center justify-center gap-4 text-sm text-primary/60 mb-12 font-medium uppercase tracking-wider border-b border-primary/10 pb-8">
                <span>By Jack Sr.</span>
                <span className="text-gold">•</span>
                <span>{post.date}</span>
                <span className="text-gold">•</span>
                <span>{post.readTime}</span>
            </div>

            <article className="prose prose-lg prose-primary mx-auto">
                <p className="drop-cap text-xl leading-relaxed text-charcoal/90 mb-8">
                    There was a time, before the lab tests and the regulated packaging, when you bought cannabis based on one thing: the smell. You'd walk into a dealer's living room, they'd open a mason jar, and the room would fill with the scent of pine, lemon, or skunk. Your nose knew before your brain did.
                </p>
                <h2 className="font-serif text-3xl font-bold text-primary mt-12 mb-6">The Entourage Effect</h2>
                <p className="text-charcoal/70 mb-8">
                    Imagine an orchestra. THC is the volume knob. It determines how loud the music is. But terpenes? Terpenes are the instruments. Do you want a soothing cello solo (Myrcene) to put you to sleep? Or do you want a bright, energetic trumpet section (Limonene) to wake you up?
                </p>
                <blockquote className="font-serif italic text-2xl text-gold border-l-4 border-gold pl-6 my-12">
                    &quot;Chasing numbers is a young man&apos;s game. The true connoisseur chases the terpene profile.&quot;
                </blockquote>
                <p className="text-charcoal/70">
                    Turning up the volume on a bad song doesn't make it a good song. Similarly, a 32% THC strain with zero terpene profile is a flat, one-dimensional experience. It's loud, but it lacks soul. It lacks character.
                </p>
            </article>
        </div>
    );
};

export default ArticleContent;
