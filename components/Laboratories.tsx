'use client';

/**
 * ============================================================================
 * Project        : NIGAB Official Web Portal (PARC, Islamabad)
 * Agency         : Website Pakistan (https://websitepakistan.com)
 * Author / Dev   : Website Pakistan Development Team
 * Copyright      : © 2026 Website Pakistan. All Rights Reserved.
 * License        : Proprietary / Client Delivery
 * Description    : 28 State-of-the-Art Laboratories Grid & Filter Component
 * ============================================================================
 */

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { Icon, type IconName } from './Icons';
import Reveal from './Reveal';
import { labs } from '@/lib/content';

type Filter = 'all' | 'plant' | 'animal';

/** Italicises the binomial names that appear inside laboratory activity text. */
const SPECIES = ['Agrobacterium', 'E. coli'];

function ActivityText({ text }: { text: string }) {
  const hit = SPECIES.find((s) => text.includes(s));
  if (!hit) return <>{text}</>;
  const [before, ...rest] = text.split(hit);
  return (
    <>
      {before}
      <em>{hit}</em>
      {rest.join(hit)}
    </>
  );
}

export default function Laboratories() {
  const [filter, setFilter] = useState<Filter>('all');
  const [query, setQuery] = useState('');

  const counts = useMemo(
    () => ({
      all: labs.length,
      plant: labs.filter((l) => l.cluster === 'plant').length,
      animal: labs.filter((l) => l.cluster === 'animal').length,
    }),
    [],
  );

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return labs.filter((lab) => {
      const matchesCluster = filter === 'all' || lab.cluster === filter;
      const haystack = `${lab.name} ${lab.clusterLabel} ${lab.activities.join(' ')} ${lab.email ?? ''}`.toLowerCase();
      return matchesCluster && (!q || haystack.includes(q));
    });
  }, [filter, query]);

  const tabs: { key: Filter; label: string }[] = [
    { key: 'all', label: 'All Laboratories' },
    { key: 'plant', label: 'Plant Biotechnology' },
    { key: 'animal', label: 'Animal Biotechnology' },
  ];

  return (
    <section className="section" id="laboratories">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Laboratories</span>
          <h2>State-of-the-art research laboratories</h2>
          <p>
            Dedicated facilities across plant and animal biotechnology, each with a defined research
            mandate and a named point of contact.
          </p>
        </Reveal>

        <Reveal className="filterbar">
          <div className="tabs" role="tablist" aria-label="Filter laboratories by cluster">
            {tabs.map((t) => (
              <button
                type="button"
                role="tab"
                key={t.key}
                aria-selected={filter === t.key}
                onClick={() => setFilter(t.key)}
              >
                {t.label} <span className="count">{counts[t.key]}</span>
              </button>
            ))}
          </div>

          <div className="searchfield">
            <Icon name="search" size={16} />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search laboratories…"
              aria-label="Search laboratories"
            />
          </div>
        </Reveal>

        <div className="labs__grid">
          {visible.map((lab, i) => (
            <Reveal as="article" className="lab" key={lab.name} delay={(i % 3) as 0 | 1 | 2}>
              <div className="lab__head">
                <span className="lab__icon"><Icon name={lab.icon as IconName} size={21} /></span>
                <div className="lab__titles">
                  <h3>{lab.name}</h3>
                  <span className="lab__cluster">{lab.clusterLabel}</span>
                </div>
              </div>

              {lab.image && (
                <div className="lab__media">
                  <Image
                    src={lab.image}
                    alt={lab.name}
                    width={500}
                    height={260}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                  />
                </div>
              )}

              <div className="lab__body">
                <ul className="lab__acts">
                  {lab.activities.map((a) => (
                    <li key={a}><ActivityText text={a} /></li>
                  ))}
                </ul>
              </div>

              <div className="lab__foot">
                {lab.email ? (
                  <a href={`mailto:${lab.email}`}><Icon name="mail" size={12} />{lab.email}</a>
                ) : (
                  <span><Icon name="pin" size={12} />NIGAB, NARC Islamabad</span>
                )}
                {lab.phone && <span><Icon name="phone" size={12} />{lab.phone}</span>}
              </div>
            </Reveal>
          ))}
        </div>

        {visible.length === 0 && (
          <div className="empty-state">No laboratories match your search. Try a different term.</div>
        )}
      </div>
    </section>
  );
}
