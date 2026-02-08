

import TransitionLink from '../Common/TransitionLink';
import { BLOG_POSTS } from '../../constants';

const FeaturedPost = () => {
    const featured = BLOG_POSTS[0];

    return (
        <section className="px-6 md:px-12 py-16 border-b border-primary/5">
            <div className="max-w-[1400px] mx-auto text-left">
                <TransitionLink className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" href={`/study/${featured.id}`}>
                    <div className="relative overflow-hidden aspect-[16/10] lg:aspect-[4/3] bg-primary/5">
                        <div
                            className="absolute inset-0 bg-cover bg-center sepia-effect transform group-hover:scale-105 transition-transform duration-700"
                            style={{ backgroundImage: `url('${featured.image}')` }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                        <div className="absolute top-6 left-6 bg-gold text-primary text-xs font-bold px-3 py-1 uppercase tracking-wider">Latest Post</div>
                    </div>
                    <div className="lg:pr-12">
                        <div className="flex items-center gap-3 text-gold text-xs font-bold uppercase tracking-widest mb-4">
                            <span>{featured.category}</span>
                            <span className="text-primary/20">•</span>
                            <span>{featured.readTime}</span>
                        </div>
                        <h2 className="font-serif text-4xl lg:text-5xl lg:leading-tight text-primary font-bold mb-6 group-hover:text-gold transition-colors">
                            {featured.title}
                        </h2>
                        <p className="font-serif italic text-2xl text-primary/50 mb-6">&quot;Listen to your elders.&quot;</p>
                        <p className="text-charcoal/70 text-lg leading-relaxed mb-8 font-light line-clamp-3">
                            {featured.excerpt}
                        </p>
                        <span className="inline-flex items-center gap-2 text-primary font-bold border-b border-primary pb-1 group-hover:text-gold group-hover:border-gold transition-colors">
                            Read Full Article <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </span>
                    </div>
                </TransitionLink>
            </div>
        </section>
    );
};

export default FeaturedPost;
