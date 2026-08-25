/**
 * ============================================================================
 * Project        : NIGAB Official Web Portal (PARC, Islamabad)
 * Agency         : Website Pakistan (https://websitepakistan.com)
 * Author / Dev   : Website Pakistan Development Team
 * Copyright      : © 2026 Website Pakistan. All Rights Reserved.
 * License        : Proprietary / Client Delivery
 * Description    : Visual Media Placeholder & Architectural Wireframe Helper
 * ============================================================================
 */

import { Icon, type IconName } from './Icons';

/**
 * Branded image placeholder.
 *
 * Used everywhere final photography will go. It is deliberately designed rather
 * than a grey box, so the client reviews layout and hierarchy without judging
 * the interim assets. Every instance states the intended subject and crop, so
 * whoever supplies the final images knows exactly what is needed.
 *
 * `fill` places it absolutely inside a positioned parent (hero, cards, gallery);
 * otherwise it sizes itself from `ratio`.
 */
export default function Placeholder({
  label,
  note,
  icon = 'flask',
  tone = 'light',
  ratio = '16 / 9',
  fill = false,
  compact = false,
}: {
  label: string;
  note?: string;
  icon?: IconName;
  tone?: 'light' | 'dark';
  ratio?: string;
  fill?: boolean;
  compact?: boolean;
}) {
  return (
    <div
      className={`ph ph--${tone}${fill ? ' ph--fill' : ''}${compact ? ' ph--compact' : ''}`}
      style={fill ? undefined : { aspectRatio: ratio }}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      <svg className="ph__motif" viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <pattern id={`ph-dots-${tone}`} width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" opacity=".5" />
          </pattern>
        </defs>
        <rect width="400" height="260" fill={`url(#ph-dots-${tone})`} />
        <g stroke="currentColor" strokeWidth="1.4" fill="none" opacity=".55">
          <path d="M-20 200c60 0 60-140 120-140s60 140 120 140 60-140 120-140 60 140 120 140" />
          <path d="M-20 60c60 0 60 140 120 140s60-140 120-140 60 140 120 140 60-140 120-140" />
        </g>
      </svg>

      <div className="ph__body">
        <span className="ph__icon"><Icon name={icon} size={compact ? 20 : 26} /></span>
        <b className="ph__label">{label}</b>
        {note && <span className="ph__note">{note}</span>}
      </div>

      <span className="ph__tag">Placeholder</span>
    </div>
  );
}
