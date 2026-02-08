
import { NavItem, Product, Post, TeamMember } from './types';

export const NAVIGATION_ITEMS: NavItem[] = [
    { label: 'The Legend', href: '/legend' },
    { label: 'The Stash', href: '/#stash' },
    { label: 'The Study', href: '/study' },
    { label: 'Visit Us', href: '/visit' }
];

export const WEEKLY_PICKS: Product[] = [
    {
        id: '1',
        name: "The Gentleman's Sativa",
        tag: "Top Shelf",
        specs: "Citrus • Energetic • 24% THC",
        quote: "Perfect for a Sunday morning read. Keeps the mind sharp and the mood light.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL8sFeCJMRQ62nzU7idAVMAb9OwiO4tX9EwNKotpoVHRltlMAHt6Qa14OGVaB4Wi2bjV5RDqSGIe4xEGmMhzPjQj36F2GQ2k0U7oAf90IgTBMaXVtQ-IHt-G7UIfuh5z_zs_9BPU1WFcoV5nozdAVGHwrGJfhx4i0_4m9w762BCl4IVRoPit5CnVv3HiVVT8r99Ues8vRH8e_cC-L84WhP_n9dEY2yO0it9hQcRG1vwP-RFfsJKUJpOTE5DoSP5wMXUZEHgc--HdY"
    },
    {
        id: '2',
        name: "Midnight Velvet",
        tag: "Staff Pick",
        specs: "Pine • Deep Relax • 28% THC",
        quote: "Best enjoyed with jazz on the turntable and the lights dimmed low.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzKMnbWI91Epu71XAzzzsZDZaNMlP5tlJYYeY-Uj0HKDT4yk6jclEErqwWwcfAU1LSEps_kCq2VfoUoegcfOrwi1to95dbQ_bqGtVc5hzOE85z48RmQCBGbYlBpNUZ_Mjf0YYetv6eDpzUa3rWJD5k1koCYJ6DwGc_jlhxRx7_kPcsYCP1HooFFim4scOSM0lRRZz9fZxx7UyqgA9ir1LwcHgAWEpAuSyP0oaZ9o82g5pczKUOvk75XtJfB7kFLiuSuLy5F6GbCog"
    },
    {
        id: '3',
        name: "Golden Hour Pre-Rolls",
        tag: "Limited",
        specs: "Balanced • Smooth • 22% THC",
        quote: "Convenience shouldn't cost quality. A smooth draw for a busy gentleman.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgoiIie8SeJKGa_MVqyjG5FXKYtKvSTb4dZkrIpm5OHdqZyXBaMTz9NW-8fD8LWY7BCxgrRFKCbX4tsBusB78paE7ECMkzHBxISf4Wall-WvoOrlu0ZW9czNYE7G1oXPB2HmXlO6c0HKvL5eFcPmmUuIEnv9nKbXpKiUr55y0ZnF386J4Kbrw09R3pXGwBZV4R1TjOfCnREc-YNfxbF9bhLNoI_gRDx6rlBs5Iu7Cr5Io8Pi4I4p3uPPVvrPwznTBs0C7iDgSH3MQ"
    }
];

export const TEAM: TeamMember[] = [
    {
        name: "James Sterling",
        role: "Head Sommelier",
        quote: "Try the Indica pre-rolls with a dark roast coffee.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDKewOrvyRjEDgtuFZl0QYfMSaQP6ww6Y0CgDtGiucwN6qnSILIRPNVaEM1rg8M-7N-Omtj5z02mKjG5sAa3M07a43Zq3vtcvJ4dQ2CgC7Hcm0ky5Q_MUCMU-0W1huFmA5vHUCk48NViIkXzCv2FzNtaxYlNvgE5-9mjRlawugsBiH0n85xzeImtVsL89LgqhCY9L4jBt--Y2fEq-9vAXYSR_gUcNDh6y1iZPY_QiFYEhHah68gfWrg-5TWFRz68u4ohLPvgK52YY"
    },
    {
        name: "Sarah Chen",
        role: "Store Manager",
        quote: "Sativa is best enjoyed on a sunny patio.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgoiIie8SeJKGa_MVqyjG5FXKYtKvSTb4dZkrIpm5OHdqZyXBaMTz9NW-8fD8LWY7BCxgrRFKCbX4tsBusB78paE7ECMkzHBxISf4Wall-WvoOrlu0ZW9czNYE7G1oXPB2HmXlO6c0HKvL5eFcPmmUuIEnv9nKbXpKiUr55y0ZnF386J4Kbrw09R3pXGwBZV4R1TjOfCnREc-YNfxbF9bhLNoI_gRDx6rlBs5Iu7Cr5Io8Pi4I4p3uPPVvrPwznTBs0C7iDgSH3MQ"
    },
    {
        name: "Marcus Thorne",
        role: "Lead Budtender",
        quote: "Looking for focus? Ask me about pinene.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIqHYsDsmFMVG0h9OP9oF1zuYNYp6YNQD67Dvu42ubFKeWlNSc7ik-Dw9Ysypkro5fxSXzwFs51YQ4J5mm9K3GzRF5qcRxysz9lzwMyvL4ssPBVvkmQpuKfqFhtSpmwGN42TS2CA4IjGFe4N4ELSlRtJ7aTBcMFG7Fk41QAZcDWH_UhPyADwQe2DjFlhOwyntgsPaR19Ua0471QfY7dQcmDvbiqS-t_HCL9SjpVUut5fbs4UMuj2GrHrRDVk2Z95q9qzyh7hX1_YU"
    },
    {
        name: "Eleanor Rigby",
        role: "Wellness Specialist",
        quote: "Wellness starts with the right strain.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAe0WcgirgEo9rGVlJZcUAL3brWzm7Mi8yG_Ni76T5-6nFb0IyPMObzumfDP0TE6cYDsvl-gsvypSeTPWfmwVIkqWtIpKiWcN_qqQ5Xe17Vbdbjss1mL6bmkE-fVxQrojJBbVBEqmyYpFkcq9tkT_faPdGiKwa4mvLPn2Cb2CY0xYCjlrrMdm2kOcF55JVDdW1cGcF3Jrmi-TQiaM0olLaxuEy9hONoq3PK4dRziFaGSlwdDlPjm2pI6NAJwxvrbsLtLdAY7VEAl7w"
    }
];

export const BLOG_POSTS: Post[] = [
    {
        id: '1',
        title: "Why 30% THC isn't everything",
        category: "Education",
        readTime: "8 Min Read",
        excerpt: "Chasing numbers is a young man's game. In a market obsessed with potency, we make the case for the entourage effect.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAe0WcgirgEo9rGVlJZcUAL3brWzm7Mi8yG_Ni76T5-6nFb0IyPMObzumfDP0TE6cYDsvl-gsvypSeTPWfmwVIkqWtIpKiWcN_qqQ5Xe17Vbdbjss1mL6bmkE-fVxQrojJBbVBEqmyYpFkcq9tkT_faPdGiKwa4mvLPn2Cb2CY0xYCjlrrMdm2kOcF55JVDdW1cGcF3Jrmi-TQiaM0olLaxuEy9hONoq3PK4dRziFaGSlwdDlPjm2pI6NAJwxvrbsLtLdAY7VEAl7w",
        date: "October 12, 2024"
    },
    {
        id: '2',
        title: "The Art of the Slow Burn",
        category: "Culture",
        readTime: "5 Min Read",
        excerpt: "Why rushing the ritual ruins the reward. A guide to properly lighting, pacing, and enjoying a premium pre-roll.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIqHYsDsmFMVG0h9OP9oF1zuYNYp6YNQD67Dvu42ubFKeWlNSc7ik-Dw9Ysypkro5fxSXzwFs51YQ4J5mm9K3GzRF5qcRxysz9lzwMyvL4ssPBVvkmQpuKfqFhtSpmwGN42TS2CA4IjGFe4N4ELSlRtJ7aTBcMFG7Fk41QAZcDWH_UhPyADwQe2DjFlhOwyntgsPaR19Ua0471QfY7dQcmDvbiqS-t_HCL9SjpVUut5fbs4UMuj2GrHrRDVk2Z95q9qzyh7hX1_YU",
        date: "October 5, 2024"
    },
    {
        id: '3',
        title: "Yorkville Nights: 1974",
        category: "History",
        readTime: "12 Min Read",
        excerpt: "An oral history of the neighborhood that started it all. From coffee houses to underground clubs.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDKewOrvyRjEDgtuFZl0QYfMSaQP6ww6Y0CgDtGiucwN6qnSILIRPNVaEM1rg8M-7N-Omtj5z02mKjG5sAa3M07a43Zq3vtcvJ4dQ2CgC7Hcm0ky5Q_MUCMU-0W1huFmA5vHUCk48NViIkXzCv2FzNtaxYlNvgE5-9mjRlawugsBiH0n85xzeImtVsL89LgqhCY9L4jBt--Y2fEq-9vAXYSR_gUcNDh6y1iZPY_QiFYEhHah68gfWrg-5TWFRz68u4ohLPvgK52YY",
        date: "September 28, 2024"
    },
    {
        id: '4',
        title: "A Note on Glassware",
        category: "Jack's Notes",
        readTime: "3 Min Read",
        excerpt: "Keep it clean, keep it classic. Jack shares his thoughts on maintaining your pieces and why Borosilicate is worth the investment.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmHM-oj6J33s4is_UnjhxjGEie2tTiPtSgMbKY6t0V0f2zhoHrjMP1wodmko_Fe1kq9XtOaLfRdiBX_DqxxZuHcEkER4h-fM_JBiJ1P0k52TJml2vtPS4u8Ke0XRmR4OhYBjS99ohFWokcx2X5Xd9P35q_enxbCnUm6t3us1RyWR8vtTkjCbNCRUHutE0ki9TjNkwxTxHX2liIgGJBu0J2Hbe8ORk5Qb47HXFjzOO4mZsuHEu6np7ICtSdgromylwoIz2l4I-1Ziw",
        date: "September 15, 2024"
    },
    {
        id: '5',
        title: "Terpenes 101: Myrcene",
        category: "Education",
        readTime: "6 Min Read",
        excerpt: "Understanding the 'couch-lock' molecule. We dive deep into the most common terpene found in modern cannabis.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzKMnbWI91Epu71XAzzzsZDZaNMlP5tlJYYeY-Uj0HKDT4yk6jclEErqwWwcfAU1LSEps_kCq2VfoUoegcfOrwi1to95dbQ_bqGtVc5hzOE85z48RmQCBGbYlBpNUZ_Mjf0YYetv6eDpzUa3rWJD5k1koCYJ6DwGc_jlhxRx7_kPcsYCP1HooFFim4scOSM0lRRZz9fZxx7UyqgA9ir1LwcHgAWEpAuSyP0oaZ9o82g5pczKUOvk75XtJfB7kFLiuSuLy5F6GbCog",
        date: "September 10, 2024"
    },
    {
        id: '6',
        title: "Sunday Morning Jazz",
        category: "Culture",
        readTime: "7 Min Read",
        excerpt: "Our curated playlist for a rainy Sunday. Featuring Miles Davis, John Coltrane, and perfect strain pairings.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmHM-oj6J33s4is_UnjhxjGEie2tTiPtSgMbKY6t0V0f2zhoHrjMP1wodmko_Fe1kq9XtOaLfRdiBX_DqxxZuHcEkER4h-fM_JBiJ1P0k52TJml2vtPS4u8Ke0XRmR4OhYBjS99ohFWokcx2X5Xd9P35q_enxbCnUm6t3us1RyWR8vtTkjCbNCRUHutE0ki9TjNkwxTxHX2liIgGJBu0J2Hbe8ORk5Qb47HXFjzOO4mZsuHEu6np7ICtSdgromylwoIz2l4I-1Ziw",
        date: "September 1, 2024"
    }
];
