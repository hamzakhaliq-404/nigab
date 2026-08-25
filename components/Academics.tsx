/**
 * ============================================================================
 * Project        : NIGAB Official Web Portal (PARC, Islamabad)
 * Agency         : Website Pakistan (https://websitepakistan.com)
 * Author / Dev   : Website Pakistan Development Team
 * Copyright      : © 2026 Website Pakistan. All Rights Reserved.
 * License        : Proprietary / Client Delivery
 * Description    : Academics, Degree Programs, Scholars & Capacity Building
 * ============================================================================
 */

import { Icon } from './Icons';
import Reveal from './Reveal';
import { affiliations, mphilScholars, phdScholars, trainingPoints } from '@/lib/content';

export default function Academics() {
  return (
    <section className="section" id="academics">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Academics &amp; Capacity Building</span>
          <h2>Research degrees, internships and national training</h2>
          <p>
            NIGAB hosts PhD and M.Phil scholars through affiliated universities and runs training
            workshops that build biotechnology capacity across Pakistan&rsquo;s agricultural research system.
          </p>
        </Reveal>

        <div className="academics__grid">
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <Reveal className="degree">
              <div className="degree__head">
                <div>
                  <small>Research Degree</small>
                  <h3>Doctor of Philosophy (PhD)</h3>
                </div>
                <span className="degree__count">{phdScholars.length}</span>
              </div>
              <ul className="scholars">
                {phdScholars.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </Reveal>

            <Reveal className="degree" delay={1}>
              <div className="degree__head">
                <div>
                  <small>Research Degree</small>
                  <h3>Master of Philosophy (M.Phil)</h3>
                </div>
                <span className="degree__count">{mphilScholars.length}</span>
              </div>
              <ul className="scholars">
                {mphilScholars.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </Reveal>
          </div>

          <div style={{ display: 'grid', gap: '1.5rem', alignContent: 'start' }} id="affiliations">
            <Reveal className="panel" delay={2}>
              <div className="panel__head">
                <Icon name="cap" size={24} />
                <div>
                  <small>Degree awarding</small>
                  <h3>Academic Affiliations</h3>
                </div>
              </div>
              <div className="affil">
                {affiliations.map((a) => (
                  <a className="affil__item" href={a.url} target="_blank" rel="noopener noreferrer" key={a.seal}>
                    <span className="affil__seal">{a.seal}</span>
                    <span>
                      <b>{a.name}</b>
                      <span>{a.role}</span>
                    </span>
                    <Icon name="external" size={15} style={{ marginLeft: 'auto', color: 'var(--ink-400)' }} />
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal className="panel" delay={3}>
              <div className="panel__head">
                <Icon name="users" size={24} />
                <div>
                  <small>Opportunities</small>
                  <h3>Training &amp; Internships</h3>
                </div>
              </div>
              <ul className="checklist">
                {trainingPoints.map((t) => (
                  <li key={t}><Icon name="check" size={17} />{t}</li>
                ))}
              </ul>
              <a className="btn btn--sm" style={{ marginTop: '1.5rem' }} href="#contact">
                Enquire about admissions <Icon name="arrow-right" size={14} className="arrow" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
