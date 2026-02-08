
export interface NavItem {
    label: string;
    href: string;
}

export interface Post {
    id: string;
    title: string;
    category: string;
    readTime: string;
    excerpt: string;
    image: string;
    date: string;
    content?: string;
}

export interface TeamMember {
    name: string;
    role: string;
    quote: string;
    image: string;
}

export interface Product {
    id: string;
    name: string;
    tag: string;
    specs: string;
    quote: string;
    image: string;
}
