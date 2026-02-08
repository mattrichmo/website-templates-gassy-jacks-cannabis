
'use client';

import React from 'react';
import Link from 'next/link';
import { BLOG_POSTS } from '../../constants';

const PostGrid: React.FC = () => {
    const gridPosts = BLOG_POSTS.slice(1);

    return (
        <section className="px-6 md:px-12 py-20 bg-hemp">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 text-left">
                    {gridPosts.map((post) => (
                        <article key={post.id} className="group flex flex-col h-full">
                            <Link className="block overflow-hidden mb-6 relative aspect-[3/2]" href={`/study/${post.id}`}>
                                <div
                                    className="w-full h-full bg-cover bg-center sepia-effect transform group-hover:scale-105 transition-transform duration-700"
                                    style={{ backgroundImage: `url('${post.image}')` }}
                                ></div>
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold px-2 py-1 uppercase tracking-wider">{post.category}</div>
                            </Link>
                            <div className="flex flex-col flex-grow">
                                <div className="flex items-center gap-2 text-primary/40 text-xs font-bold uppercase tracking-widest mb-3">
                                    <span className="material-symbols-outlined text-sm">schedule</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h3 className="font-serif text-2xl md:text-3xl text-primary font-bold leading-tight mb-3 group-hover:text-gold transition-colors">
                                    <Link href={`/study/${post.id}`}>{post.title}</Link>
                                </h3>
                                <p className="text-charcoal/60 leading-relaxed mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto pt-4 border-t border-primary/10">
                                    <span className="text-gold text-xs font-bold uppercase tracking-widest">Read More</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-24 flex justify-center border-t border-primary/5 pt-12">
                    <nav className="flex items-center gap-2">
                        <button className="w-10 h-10 flex items-center justify-center text-primary/40 hover:text-gold transition-colors">
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <span className="w-10 h-10 flex items-center justify-center bg-primary text-gold font-bold font-serif text-lg rounded-full shadow-lg">1</span>
                        <button className="w-10 h-10 flex items-center justify-center text-primary hover:text-gold hover:bg-white/50 rounded-full font-serif text-lg transition-colors">2</button>
                        <button className="w-10 h-10 flex items-center justify-center text-primary hover:text-gold hover:bg-white/50 rounded-full font-serif text-lg transition-colors">3</button>
                        <span className="w-10 h-10 flex items-center justify-center text-primary/40">...</span>
                        <button className="w-10 h-10 flex items-center justify-center text-primary/40 hover:text-gold transition-colors">
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default PostGrid;
