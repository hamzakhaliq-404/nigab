/**
 * ============================================================================
 * Project        : NIGAB Official Web Portal (PARC, Islamabad)
 * Agency         : Website Pakistan (https://websitepakistan.com)
 * Author / Dev   : Website Pakistan Development Team
 * Copyright      : © 2026 Website Pakistan. All Rights Reserved.
 * License        : Proprietary / Client Delivery
 * Description    : Four National Research Programmes Section Component
 * ============================================================================
 */

import Image from 'next/image';
import { Icon } from './Icons';
import Reveal from './Reveal';
import { programmes } from '@/lib/content';

export default function Programmes() {
  return (
    <section className="section section--tint" id="programmes">
      <div className="container">
        <Reveal className="section-head section-head--split">
          <div>
            <span className="eyebrow">Research Programmes</span>
            <h2>Four national programmes, one integrated mandate</h2>
            <p>
              Each programme is led by a Principal Scientific Officer and operates across dedicated
              laboratories, from gene discovery through to field-ready technology.
            </p>
          </div>
          <div className="section-head__aside">
            <a className="btn btn--outline" href="#laboratories">
              Browse laboratories <Icon name="arrow-right" size={15} className="arrow" />
            </a>
          </div>
        </Reveal>

        <div className="grid grid--2">
          {programmes.map((p, i) => (
            <Reveal as="article" className="card prog" key={p.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <div className="prog__top">
                <span className="prog__index">{p.index} · {p.cluster}</span>
                <h3>{p.title}</h3>
                {p.image && (
                  <div className="prog__media">
                    <Image
                      src={p.image}
                      alt={p.alt || p.title}
                      width={600}
                      height={320}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                    />
                  </div>
                )}
                <div className="prog__lead">
                  <Icon name="users" size={17} />
                  <span>Programme Leader: <b>{p.leader}</b>, {p.leaderRole}</span>
                </div>
              </div>

              <div className="prog__body">
                <ul className="prog__list">
                  {p.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
                <div className="prog__meta">
                  <span>
                    <Icon name="mail" size={13} />
                    <a href={`mailto:${p.email}`}>{p.email}</a>
                  </span>
                  <span><Icon name="phone" size={13} />{p.phone}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
