'use client';

/**
 * ============================================================================
 * Project        : NIGAB Official Web Portal (PARC, Islamabad)
 * Agency         : Website Pakistan (https://websitepakistan.com)
 * Author / Dev   : Website Pakistan Development Team
 * Copyright      : © 2026 Website Pakistan. All Rights Reserved.
 * License        : Proprietary / Client Delivery
 * Description    : Institutional Key Statistics & Animated Counter Component
 * ============================================================================
 */

import { useEffect, useRef, useState } from 'react';
import { stats, type Stat } from '@/lib/content';

function Counter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) {
      setValue(stat.value);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          obs.unobserve(entry.target);

          const duration = 1500;
          const t0 = performance.now();
          const step = (now: number) => {
            const p = Math.min((now - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.round(stat.value * eased));
            if (p < 1) window.requestAnimationFrame(step);
          };
          window.requestAnimationFrame(step);
        });
      },
      { threshold: 0.5 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [stat.value]);

  return <span ref={ref}>{stat.plain ? value : value.toLocaleString('en-US')}</span>;
}

export default function Stats() {
  return (
    <section className="stats section--tight" id="stats" aria-label="NIGAB at a glance">
      <div className="container">
        <div className="stats__grid">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <div className="stat__num">
                <Counter stat={stat} />
                {stat.suffix && <sup>{stat.suffix}</sup>}
              </div>
              <div className="stat__label">
                {stat.label.split('\n').map((line, i) => (
                  <span key={line}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
