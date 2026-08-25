'use client';

/**
 * ============================================================================
 * Project        : NIGAB Official Web Portal (PARC, Islamabad)
 * Agency         : Website Pakistan (https://websitepakistan.com)
 * Author / Dev   : Website Pakistan Development Team
 * Copyright      : © 2026 Website Pakistan. All Rights Reserved.
 * License        : Proprietary / Client Delivery
 * Description    : Interactive Hero Carousel & Media Banner Component
 * ============================================================================
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Icon } from './Icons';
import { slides } from '@/lib/content';

const SLIDE_MS = 4000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [pct, setPct] = useState(0);
  const [hovered, setHovered] = useState(false);

  const raf = useRef(0);
  const startedAt = useRef(0);
  const touchStart = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setPlaying(false);
  }, []);

  const goTo = useCallback((i: number) => {
    setIndex((prev) => (i + slides.length) % slides.length);
    setPct(0);
    startedAt.current = performance.now();
  }, []);

  /* Autoplay: a single rAF loop drives both the timer and the progress bar. */
  useEffect(() => {
    if (!playing || hovered) {
      window.cancelAnimationFrame(raf.current);
      return;
    }
    startedAt.current = performance.now() - (pct / 100) * SLIDE_MS;

    const tick = (now: number) => {
      const elapsed = now - startedAt.current;
      const p = Math.min(elapsed / SLIDE_MS, 1);
      setPct(p * 100);
      if (p >= 1) {
        setIndex((prev) => (prev + 1) % slides.length);
        setPct(0);
        startedAt.current = now;
      }
      raf.current = window.requestAnimationFrame(tick);
    };

    raf.current = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(raf.current);
    // `pct` is intentionally omitted: including it would restart the loop every frame.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, hovered, index]);

  useEffect(() => {
    const onVisibility = () => {
      if (document.hidden) window.cancelAnimationFrame(raf.current);
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  return (
    <section
      className="hero"
      id="home"
      aria-roledescription="carousel"
      aria-label="NIGAB highlights"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') goTo(index - 1);
        if (e.key === 'ArrowRight') goTo(index + 1);
      }}
      onTouchStart={(e) => {
        touchStart.current = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
      }}
      onTouchEnd={(e) => {
        const dx = e.changedTouches[0].clientX - touchStart.current.x;
        const dy = e.changedTouches[0].clientY - touchStart.current.y;
        if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy)) goTo(index + (dx < 0 ? 1 : -1));
      }}
    >
      <svg className="helix-deco" viewBox="0 0 300 620" fill="none" aria-hidden="true">
        <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <path d="M70 10c0 80 160 100 160 190S70 300 70 400s160 110 160 200" />
          <path d="M230 10c0 80-160 100-160 190s160 110 160 210-160 110-160 200" />
        </g>
        <g stroke="currentColor" strokeWidth="1.5" opacity=".8">
          <path d="M84 60h132M74 110h152M72 160h156M80 210h140M100 260h100M80 310h140M72 360h156M74 410h152M84 460h132M104 510h92M84 560h132" />
        </g>
        <g fill="currentColor" opacity=".9">
          <circle cx="84" cy="60" r="4" /><circle cx="216" cy="60" r="4" />
          <circle cx="72" cy="160" r="4" /><circle cx="228" cy="160" r="4" />
          <circle cx="80" cy="310" r="4" /><circle cx="220" cy="310" r="4" />
          <circle cx="84" cy="460" r="4" /><circle cx="216" cy="460" r="4" />
        </g>
      </svg>

      <div className="hero__slides">
        {slides.map((slide, i) => {
          const Tag = i === 0 ? 'h1' : 'h2';
          return (
            <article
              className={`hero__slide${i === index ? ' is-active' : ''}`}
              key={slide.label}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
              aria-hidden={i !== index}
            >
              <div className="hero__media">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={i === 0}
                  quality={82}
                  sizes="100vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div className="container hero__inner">
                <div className="hero__content">
                  <span className="hero__tag">{slide.tag}</span>
                  <Tag className="hero__title">
                    {slide.title}
                    <em>{slide.highlight}</em>
                    {slide.titleAfter}
                  </Tag>
                  <p className="hero__text">{slide.text}</p>
                  <div className="hero__actions">
                    <a className="btn btn--gold btn--lg" href={slide.primary.href}>
                      {slide.primary.label} <Icon name="arrow-right" size={17} className="arrow" />
                    </a>
                    <a className="btn btn--ghost-light btn--lg" href={slide.secondary.href}>
                      {slide.secondary.label}
                    </a>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="hero__chrome">
        <div className="container hero__chrome-inner">
          <div className="hero__tabs" role="tablist" aria-label="Choose highlight">
            {slides.map((slide, i) => (
              <button
                type="button"
                key={slide.label}
                role="tab"
                aria-selected={i === index}
                className={`hero__tab${i === index ? ' is-active' : ''}`}
                style={{ ['--p' as string]: i === index ? `${pct}%` : '0%' }}
                onClick={() => goTo(i)}
              >
                <i>0{i + 1}</i>
                {slide.label}
              </button>
            ))}
          </div>

          <div className="hero__dots">
            {slides.map((slide, i) => (
              <button
                type="button"
                key={slide.label}
                className={i === index ? 'is-active' : ''}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>

          <div className="hero__controls">
            <button type="button" className="hero__ctrl" onClick={() => goTo(index - 1)} aria-label="Previous slide">
              <Icon name="chev-left" size={18} />
            </button>
            <button
              type="button"
              className="hero__ctrl"
              onClick={() => setPlaying((v) => !v)}
              aria-pressed={playing}
              aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
            >
              <Icon name={playing ? 'pause' : 'play'} size={16} />
            </button>
            <button type="button" className="hero__ctrl" onClick={() => goTo(index + 1)} aria-label="Next slide">
              <Icon name="chev-right" size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
