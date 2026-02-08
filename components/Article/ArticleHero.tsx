

import { Post } from '../../types';

interface ArticleHeroProps {
    post: Post;
}

const ArticleHero = ({ post }: ArticleHeroProps) => {
    return (
        <header className="relative w-full h-[60vh] flex items-end justify-center overflow-hidden bg-primary border-b-8 border-gold">
            <div
                className="absolute inset-0 bg-cover bg-center grayscale contrast-125 opacity-40"
                style={{ backgroundImage: `url('${post.image}')` }}
            ></div>
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pb-16 md:pb-24">
                <span className="inline-block py-1 px-3 border border-gold text-gold text-xs font-bold uppercase tracking-[0.2em] mb-6">From The Study</span>
                <h1 className="font-serif text-4xl md:text-6xl text-gold font-bold leading-tight mb-6">
                    {post.title}
                </h1>
                <p className="font-serif italic text-2xl text-hemp/80 font-light">&quot;Listen to your elders.&quot;</p>
            </div>
        </header>
    );
};

export default ArticleHero;
