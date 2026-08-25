/**
 * ============================================================================
 * Project        : NIGAB Official Web Portal (PARC, Islamabad)
 * Agency         : Website Pakistan (https://websitepakistan.com)
 * Author / Dev   : Website Pakistan Development Team
 * Copyright      : © 2026 Website Pakistan. All Rights Reserved.
 * License        : Proprietary / Client Delivery
 * Description    : Commercial Services, Diagnostic Facilities & Products Section
 * ============================================================================
 */

import Image from 'next/image';
import { Icon } from './Icons';
import Reveal from './Reveal';
import { commercialServices, products, researchFacilities } from '@/lib/content';

/** Italicises the `Bt` gene abbreviation where it appears in service copy. */
function ServiceText({ text }: { text: string }) {
  if (!text.startsWith('Bt ')) return <>{text}</>;
  return (
    <>
      <em>Bt</em>
      {text.slice(2)}
    </>
  );
}

export default function Services() {
  return (
    <section className="section section--tint" id="services">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Services &amp; Facilities</span>
          <h2>Reference testing and analytical services for industry</h2>
          <p>
            NIGAB operates as a credible national reference laboratory for molecular diagnostics,
            quality assurance and biotechnology services available to public and private sector clients.
          </p>
        </Reveal>

        <div className="svc__grid">
          <Reveal className="panel">
            <div className="panel__head">
              <Icon name="shield" size={26} />
              <div>
                <small>For industry &amp; exporters</small>
                <h3>Commercial Services</h3>
              </div>
            </div>
            <div className="panel__media">
              <Image
                src="/img/service-commercial.webp"
                alt="NIGAB Commercial Services and GMO testing"
                width={600}
                height={260}
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              />
            </div>
            <ul className="checklist">
              {commercialServices.map((s) => (
                <li key={s}><Icon name="check" size={17} /><ServiceText text={s} /></li>
              ))}
            </ul>
            <a className="btn btn--outline btn--sm" style={{ marginTop: '1.5rem' }} href="#contact">
              Request a service <Icon name="arrow-right" size={14} className="arrow" />
            </a>
          </Reveal>

          <Reveal className="panel" delay={1}>
            <div className="panel__head">
              <Icon name="microscope" size={26} />
              <div>
                <small>Infrastructure</small>
                <h3>Research Facilities</h3>
              </div>
            </div>
            <div className="panel__media">
              <Image
                src="/img/service-facilities.webp"
                alt="NIGAB Research Facilities and Laboratory Infrastructure"
                width={600}
                height={260}
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              />
            </div>
            <ul className="checklist">
              {researchFacilities.map((s) => (
                <li key={s}><Icon name="check" size={17} />{s}</li>
              ))}
            </ul>
            <a className="btn btn--outline btn--sm" style={{ marginTop: '1.5rem' }} href="#laboratories">
              See laboratories <Icon name="arrow-right" size={14} className="arrow" />
            </a>
          </Reveal>
        </div>

        <div id="products" style={{ marginTop: 'clamp(2.5rem,2rem + 2vw,4rem)' }}>
          <Reveal className="section-head" style={{ marginBottom: '1.75rem' }}>
            <span className="eyebrow">Technologies &amp; Products</span>
            <h2 style={{ fontSize: 'var(--fs-h3)' }}>Planting material released to farmers</h2>
          </Reveal>

          <div className="products">
            {products.map((p, i) => (
              <Reveal className="product" key={p.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div className="product__media">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="product__content">
                  <span className="product__tag">{p.tag}</span>
                  <h4>{p.title}</h4>
                  <p>{p.description}</p>
                  <div className="product__vars">
                    {p.badges.map((b) => (
                      <span className={`badge badge--${b.tone}`} key={b.label}>{b.label}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
