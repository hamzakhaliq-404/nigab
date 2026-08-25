/**
 * ============================================================================
 * Project        : NIGAB Official Web Portal (PARC, Islamabad)
 * Agency         : Website Pakistan (https://websitepakistan.com)
 * Author / Dev   : Website Pakistan Development Team
 * Copyright      : © 2026 Website Pakistan. All Rights Reserved.
 * License        : Proprietary / Client Delivery
 * Description    : Scientific Publications, Journal Papers & Library Component
 * ============================================================================
 */

import { Icon } from './Icons';
import Reveal from './Reveal';
import { publications } from '@/lib/content';

/** Italicises binomials and gene abbreviations inside publication titles. */
const ITALIC_TERMS = ['Salicornia europaea', 'Bt'];

function PubTitle({ title }: { title: string }) {
  const hit = ITALIC_TERMS.find((t) => title.includes(t));
  if (!hit) return <>{title}</>;
  const [before, ...rest] = title.split(hit);
  return <>{before}<em>{hit}</em>{rest.join(hit)}</>;
}

export default function Publications() {
  return (
    <section className="section section--tint" id="publications">
      <div className="container">
        <Reveal className="section-head section-head--split">
          <div>
            <span className="eyebrow">Scientific Output</span>
            <h2>Peer-reviewed publications</h2>
            <p>
              NIGAB scientists publish across plant molecular biology, genomics, animal biotechnology
              and bioinformatics in national and international journals.
            </p>
          </div>
          <div className="section-head__aside">
            <a className="btn btn--outline" href="#contact">
              Full publication list <Icon name="arrow-right" size={15} className="arrow" />
            </a>
          </div>
        </Reveal>

        <Reveal className="pub-list">
          {publications.map((p) => (
            <article className="pub" key={p.title}>
              <div className="pub__year">{p.year}</div>
              <div>
                <p className="pub__title"><PubTitle title={p.title} /></p>
                <p className="pub__meta">{p.meta}<em>{p.journal}</em></p>
              </div>
            </article>
          ))}
        </Reveal>

        <div className="grid grid--3" style={{ marginTop: '2.5rem' }}>
          <Reveal className="card">
            <Icon name="book" size={26} style={{ color: 'var(--g-700)', marginBottom: '.9rem' }} />
            <h3 style={{ fontSize: '1.15rem' }}>500+ publication records</h3>
            <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--ink-600)' }}>
              Listed across NIGAB research programmes and individual scientist profiles, spanning 2005 to date.
            </p>
          </Reveal>
          <Reveal className="card" delay={1}>
            <Icon name="dna" size={26} style={{ color: 'var(--g-700)', marginBottom: '.9rem' }} />
            <h3 style={{ fontSize: '1.15rem' }}>Sequences at NCBI</h3>
            <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--ink-600)' }}>
              Novel gene sequences isolated at NIGAB are deposited with GenBank accession numbers for
              the international research community.
            </p>
          </Reveal>
          <Reveal className="card" delay={2}>
            <Icon name="globe" size={26} style={{ color: 'var(--g-700)', marginBottom: '.9rem' }} />
            <h3 style={{ fontSize: '1.15rem' }}>International collaboration</h3>
            <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--ink-600)' }}>
              Joint publications and breeding programmes with partners in China and beyond under the
              Sino-Pak initiative.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
