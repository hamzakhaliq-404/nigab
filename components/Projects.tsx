'use client';

/**
 * ============================================================================
 * Project        : NIGAB Official Web Portal (PARC, Islamabad)
 * Agency         : Website Pakistan (https://websitepakistan.com)
 * Author / Dev   : Website Pakistan Development Team
 * Copyright      : © 2026 Website Pakistan. All Rights Reserved.
 * License        : Proprietary / Client Delivery
 * Description    : Research Projects & Patents Showcase Component
 * ============================================================================
 */

import { useMemo, useState } from 'react';
import { Icon } from './Icons';
import Reveal from './Reveal';
import { completedProjects, ongoingProjects, patents, type Project } from '@/lib/content';

/** Italicises the genus name that appears in one project title. */
function ProjectTitle({ title }: { title: string }) {
  const genus = 'Oropetium';
  if (!title.includes(genus)) return <>{title}</>;
  const [before, after] = title.split(genus);
  return <>{before}<em>{genus}</em>{after}</>;
}

function ProjectTable({
  rows,
  status,
  footNote,
  footMeta,
}: {
  rows: Project[];
  status: string;
  footNote: string;
  footMeta: string;
}) {
  return (
    <div className="table-wrap">
      <div className="table-scroll">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Project Title</th>
              <th scope="col">Funding</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((p, i) => (
              <tr key={p.title}>
                <td className="table__idx">{String(i + 1).padStart(2, '0')}</td>
                <td className="table__title"><ProjectTitle title={p.title} /></td>
                <td><span className={`badge badge--${p.tone}`}>{p.funding}</span></td>
                <td>
                  <span className={`badge badge--${status === 'On-going' ? 'ongoing' : 'done'}`}>{status}</span>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={4} style={{ textAlign: 'center', color: 'var(--ink-500)', padding: '2.5rem 1rem' }}>
                  No projects match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="table-foot"><span>{footNote}</span><span>{footMeta}</span></div>
    </div>
  );
}

export default function Projects() {
  const [tab, setTab] = useState<'ongoing' | 'completed'>('ongoing');
  const [query, setQuery] = useState('');

  const filter = (rows: Project[]) => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((r) => `${r.title} ${r.funding}`.toLowerCase().includes(q));
  };

  const ongoing = useMemo(() => filter(ongoingProjects), [query]);
  const completed = useMemo(() => filter(completedProjects), [query]);

  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal className="section-head section-head--split">
          <div>
            <span className="eyebrow">Research Portfolio</span>
            <h2>Projects funded through national research programmes</h2>
            <p>Supported by PSDP, ALP, RADP and PSF funding streams across plant and animal biotechnology.</p>
          </div>
          <div className="section-head__aside">
            <div className="searchfield">
              <Icon name="search" size={16} />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects…"
                aria-label="Search projects"
              />
            </div>
          </div>
        </Reveal>

        <Reveal className="tabs" role="tablist" aria-label="Project status" style={{ marginBottom: '1.5rem' }}>
          <button type="button" role="tab" aria-selected={tab === 'ongoing'} onClick={() => setTab('ongoing')}>
            On-Going <span className="count">{ongoingProjects.length}</span>
          </button>
          <button type="button" role="tab" aria-selected={tab === 'completed'} onClick={() => setTab('completed')}>
            Completed <span className="count">{completedProjects.length}</span>
          </button>
        </Reveal>

        {tab === 'ongoing' ? (
          <ProjectTable
            rows={ongoing}
            status="On-going"
            footNote={`${ongoing.length} active project${ongoing.length === 1 ? '' : 's'}`}
            footMeta="PSDP · ALP funding streams"
          />
        ) : (
          <ProjectTable
            rows={completed}
            status="Completed"
            footNote={`${completed.length} completed project${completed.length === 1 ? '' : 's'}`}
            footMeta="PSDP · RADP · PSF · ALP"
          />
        )}

        <div id="patents" style={{ marginTop: 'clamp(2.5rem,2rem + 2vw,4rem)' }}>
          <Reveal className="section-head" style={{ marginBottom: '1.5rem' }}>
            <span className="eyebrow">Intellectual Property</span>
            <h2 style={{ fontSize: 'var(--fs-h3)' }}>Patents filed</h2>
          </Reveal>

          <div className="table-wrap">
            <div className="table-scroll">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Invention Title</th>
                    <th scope="col">Date Filed</th>
                    <th scope="col">Application No.</th>
                    <th scope="col">Type</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {patents.map((p) => (
                    <tr key={p.application}>
                      <td className="table__title">{p.title}</td>
                      <td>{p.filed}</td>
                      <td className="text-mono">{p.application}</td>
                      <td>{p.type}</td>
                      <td><span className="badge badge--review">{p.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="table-foot">
              <span>{patents.length} national patents filed</span>
              <span>Intellectual Property Organization of Pakistan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
