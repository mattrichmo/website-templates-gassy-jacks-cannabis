'use client';

import { AnchorHTMLAttributes, ReactNode, MouseEvent } from 'react';
import { useSmokeTransition } from './SmokeTransitionContext';

interface TransitionLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: ReactNode;
    className?: string;
}

const TransitionLink = ({ href, children, className, onClick, ...props }: TransitionLinkProps) => {
    const { navigateWithSmoke, isTransitioning } = useSmokeTransition();

    const handleClick = async (e: MouseEvent<HTMLAnchorElement>) => {
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
