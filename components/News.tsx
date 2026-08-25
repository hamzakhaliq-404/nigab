/**
 * ============================================================================
 * Project        : NIGAB Official Web Portal (PARC, Islamabad)
 * Agency         : Website Pakistan (https://websitepakistan.com)
 * Author / Dev   : Website Pakistan Development Team
 * Copyright      : © 2026 Website Pakistan. All Rights Reserved.
 * License        : Proprietary / Client Delivery
 * Description    : Newsroom, Press Releases & Institutional Events Component
 * ============================================================================
 */

import Image from 'next/image';
import { Icon } from './Icons';
import Reveal from './Reveal';
import { news } from '@/lib/content';

export default function News() {
  return (
    <section className="section section--tint" id="news">
      <div className="container">
        <Reveal className="section-head section-head--split">
          <div>
            <span className="eyebrow">Newsroom</span>
            <h2>News, events and institutional activity</h2>
          </div>
          <div className="section-head__aside">
            <a className="btn btn--outline" href="#gallery">
              Photo gallery <Icon name="arrow-right" size={15} className="arrow" />
            </a>
          </div>
        </Reveal>

        <div className="news__grid">
          {news.map((item, i) => (
            <Reveal as="article" className="news-card" key={item.title} delay={(i % 6) as 0 | 1 | 2 | 3 | 4 | 5}>
              <div className="news-card__media">
                <span className="badge news-card__cat">{item.category}</span>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="news-card__body">
                <time>{item.kicker}</time>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <a className="link-arrow" href="#news">
                  Read more <Icon name="arrow-right" size={14} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
