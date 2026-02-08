'use client';

import React from 'react';
import { useSmokeTransition } from './SmokeTransitionContext';

interface TransitionLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: React.ReactNode;
    className?: string;
}

const TransitionLink: React.FC<TransitionLinkProps> = ({ href, children, className, onClick, ...props }) => {
    const { navigateWithSmoke, isTransitioning } = useSmokeTransition();

    const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
        // Only intercept if it's a normal click on an internal link
        if (
            !e.defaultPrevented &&
            e.button === 0 && // Left click
            !e.metaKey &&
            !e.ctrlKey &&
            !e.shiftKey &&
            !e.altKey &&
            href.startsWith('/') &&
            !href.startsWith('//')
        ) {
            e.preventDefault();
            if (!isTransitioning) {
                if (onClick) onClick(e);
                await navigateWithSmoke(href);
            }
        } else if (onClick) {
            onClick(e);
        }
    };

    return (
        <a
            href={href}
            className={className}
            onClick={handleClick}
            {...props}
        >
            {children}
        </a>
    );
};

export default TransitionLink;
