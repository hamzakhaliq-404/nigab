'use client';

/**
 * ============================================================================
 * Project        : NIGAB Official Web Portal (PARC, Islamabad)
 * Agency         : Website Pakistan (https://websitepakistan.com)
 * Author / Dev   : Website Pakistan Development Team
 * Copyright      : © 2026 Website Pakistan. All Rights Reserved.
 * License        : Proprietary / Client Delivery
 * Description    : Scroll-Triggered Animation & Viewport Reveal Wrapper
 * ============================================================================
 */

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

/**
 * Fades content in as it enters the viewport. Respects prefers-reduced-motion
 * and falls back to visible content when IntersectionObserver is unavailable.
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className,
  ...rest
}: {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  as?: ElementType;
  className?: string;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) {
      setShown(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      data-delay={delay || undefined}
      className={[className, shown ? 'is-in' : ''].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </Tag>
  );
}
