'use client';

/**
 * ============================================================================
 * Project        : NIGAB Official Web Portal (PARC, Islamabad)
 * Agency         : Website Pakistan (https://websitepakistan.com)
 * Author / Dev   : Website Pakistan Development Team
 * Copyright      : © 2026 Website Pakistan. All Rights Reserved.
 * License        : Proprietary / Client Delivery
 * Description    : About NIGAB Section & Director's Institutional Mandate
 * ============================================================================
 */

import { Fragment, useState } from 'react';
import Image from 'next/image';
import { Icon } from './Icons';
import Reveal from './Reveal';
import { aboutIntro, aboutMore, institute } from '@/lib/content';

/** Renders the `**bold**` spans used in the content file. */
function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith('**') && part.endsWith('**') ? (
          <strong key={i}>{part.slice(2, -2)}</strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about__grid">
          <Reveal>
            <span className="eyebrow">About the Institute</span>
            <h2 style={{ fontSize: 'var(--fs-h2)', marginBottom: '1.25rem' }}>
              A national platform for agricultural genomics
            </h2>

            <div className="prose">
              {aboutIntro.map((para, i) => (
                <p key={i} className={i === 0 ? 'lead' : undefined}>
                  <RichText text={para} />
                </p>
              ))}

              <div className={`readmore${open ? ' is-open' : ''}`}>
                <div>
                  {aboutMore.map((para, i) => (
                    <p key={i} style={i === 0 ? { marginTop: '1.15rem' } : { marginTop: '1.15rem' }}>
                      <RichText text={para} />
                    </p>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="btn btn--outline btn--sm readmore-toggle"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? 'Show less' : 'Read the full message'}
                <Icon
                  name="chev-down"
                  size={14}
                  style={{ transform: open ? 'rotate(180deg)' : undefined, transition: 'transform .3s' }}
                />
              </button>
            </div>

            <div className="signature">
              <div className="signature__avatar" aria-hidden="true">SA</div>
              <div className="signature__meta">
                <b>{institute.director}</b>
                <span>{institute.directorTitle}</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="about__visual" delay={2}>
            <figure className="about__figure">
              <Image
                src="/img/nigab-building.jpg"
                alt="The National Institute for Genomics and Advanced Biotechnology building at NARC, Islamabad"
                width={1800}
                height={1012}
                sizes="(max-width: 980px) 100vw, 45vw"
                priority
              />
              <figcaption>NIGAB, National Agricultural Research Centre — Park Road, Islamabad</figcaption>
            </figure>

            <div className="mandate">
              <div className="mandate__item">
                <Icon name="leaf" size={24} />
                <b>Plants</b><span>Crops &amp; horticulture</span>
              </div>
              <div className="mandate__item">
                <Icon name="cow" size={24} />
                <b>Animals</b><span>Livestock &amp; poultry</span>
              </div>
              <div className="mandate__item">
                <Icon name="microbe" size={24} />
                <b>Microbes</b><span>Probiotics &amp; pathogens</span>
              </div>
            </div>

            <div className="factbox">
              <h4>Institute Profile</h4>
              <dl>
                <div><dt>Established</dt><dd>{institute.established}</dd></div>
                <div><dt>Parent body</dt><dd>{institute.parentShort}</dd></div>
                <div><dt>Campus</dt><dd>NARC, Islamabad</dd></div>
                <div><dt>Director</dt><dd>{institute.director}</dd></div>
                <div><dt>Research domains</dt><dd>Plant · Animal · Microbial</dd></div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
