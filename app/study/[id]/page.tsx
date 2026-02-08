

import { notFound } from 'next/navigation';
import ArticleHero from '../../../components/Article/ArticleHero';
import ArticleContent from '../../../components/Article/ArticleContent';
import { BLOG_POSTS } from '../../../constants';

interface ArticlePageProps {
    params: {
        id: string;
    };
}

export default function ArticlePage({ params }: ArticlePageProps) {
    const post = BLOG_POSTS.find(p => p.id === params.id);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen flex flex-col animate-fade-in bg-hemp">
            <ArticleHero post={post} />
            <ArticleContent post={post} />
        </div>
    );
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        id: post.id,
    }));
}
