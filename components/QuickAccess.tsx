/**
 * ============================================================================
 * Project        : NIGAB Official Web Portal (PARC, Islamabad)
 * Agency         : Website Pakistan (https://websitepakistan.com)
 * Author / Dev   : Website Pakistan Development Team
 * Copyright      : © 2026 Website Pakistan. All Rights Reserved.
 * License        : Proprietary / Client Delivery
 * Description    : Quick Access Services & Fast-Path Portal Navigation Links
 * ============================================================================
 */

import { Icon, type IconName } from './Icons';
import Reveal from './Reveal';
import { quickAccess } from '@/lib/content';

export default function QuickAccess() {
  return (
    <div className="quickaccess">
      <div className="container">
        <div className="quickaccess__grid">
          {quickAccess.map((item, i) => (
            <Reveal as="a" className="qa" href={item.href} key={item.title} delay={i as 0 | 1 | 2 | 3}>
              <Icon name={item.icon as IconName} size={30} className="qa__icon" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="qa__go">
                {item.cta} <Icon name="arrow-right" size={13} />
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
