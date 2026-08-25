/**
 * ============================================================================
 * Project        : NIGAB Official Web Portal (PARC, Islamabad)
 * Agency         : Website Pakistan (https://websitepakistan.com)
 * Author / Dev   : Website Pakistan Development Team
 * Copyright      : © 2026 Website Pakistan. All Rights Reserved.
 * License        : Proprietary / Client Delivery
 * Description    : Partnership & Collaboration Call-to-Action Band
 * ============================================================================
 */

import { Icon } from './Icons';
import Reveal from './Reveal';

export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <Reveal>
          <h2>Partner with Pakistan&rsquo;s national genomics institute</h2>
          <p>
            Whether you need reference-grade GMO testing, DNA fingerprinting for export quality
            assurance, or a research collaboration, NIGAB&rsquo;s laboratories and scientists are
            available to the public and private sector.
          </p>
        </Reveal>
        <Reveal className="cta-band__actions" delay={1}>
          <a className="btn btn--gold btn--lg" href="#contact">
            Contact the Institute <Icon name="arrow-right" size={17} className="arrow" />
          </a>
          <a className="btn btn--ghost-light btn--lg" href="#services">View Services</a>
        </Reveal>
      </div>
    </section>
  );
}
