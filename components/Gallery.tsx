'use client';

/**
 * ============================================================================
 * Project        : NIGAB Official Web Portal (PARC, Islamabad)
 * Agency         : Website Pakistan (https://websitepakistan.com)
 * Author / Dev   : Website Pakistan Development Team
 * Copyright      : © 2026 Website Pakistan. All Rights Reserved.
 * License        : Proprietary / Client Delivery
 * Description    : Visual Media, Research Activities & Interactive Photo Gallery
 * ============================================================================
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Icon } from './Icons';
import Reveal from './Reveal';
import { gallery } from '@/lib/content';

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const touchStart = useRef({ x: 0, y: 0 });

  const move = useCallback((delta: number) => {
    setIndex((i) => (i === null ? i : (i + delta + gallery.length) % gallery.length));
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIndex(null);
      if (e.key === 'ArrowLeft') move(-1);
      if (e.key === 'ArrowRight') move(1);
    };

    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, move]);

  const current = index !== null ? gallery[index] : null;

  return (
    <section className="section" id="gallery">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Media</span>
          <h2>Picture gallery</h2>
          <p>
            Laboratories, field trials, events and visits at the National Institute for Genomics and
            Advanced Biotechnology.
          </p>
        </Reveal>

        <Reveal className="gallery">
          {gallery.map((img, i) => (
            <button
              type="button"
              className="gallery__item"
              key={img.src}
              onClick={() => setIndex(i)}
              aria-label={`View image: ${img.caption}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 700px) 50vw, 25vw"
                style={{ objectFit: 'cover' }}
              />
              <span className="gallery__cap">{img.caption}</span>
            </button>
          ))}
        </Reveal>
      </div>

      <div
        className={`lightbox${open ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Image viewer"
        onClick={(e) => { if (e.target === e.currentTarget) setIndex(null); }}
        onTouchStart={(e) => {
          touchStart.current = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
        }}
        onTouchEnd={(e) => {
          const dx = e.changedTouches[0].clientX - touchStart.current.x;
          const dy = e.changedTouches[0].clientY - touchStart.current.y;
          if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1);
        }}
      >
        <button className="lightbox__close" type="button" onClick={() => setIndex(null)} aria-label="Close image viewer">
          <Icon name="close" size={22} />
        </button>
        <button className="lightbox__prev" type="button" onClick={() => move(-1)} aria-label="Previous image">
          <Icon name="chev-left" size={22} />
        </button>
        <button className="lightbox__next" type="button" onClick={() => move(1)} aria-label="Next image">
          <Icon name="chev-right" size={22} />
        </button>

        {current && (
          <figure className="lightbox__figure">
            <Image
              src={current.src}
              alt={current.alt}
              width={1400}
              height={900}
              sizes="90vw"
              style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '76vh' }}
            />
            <figcaption className="lightbox__cap">
              {current.caption}
              <br />
              <span className="lightbox__count">{(index ?? 0) + 1} / {gallery.length}</span>
            </figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}
