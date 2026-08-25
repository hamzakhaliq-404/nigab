/**
 * ============================================================================
 * Project        : NIGAB Official Web Portal (PARC, Islamabad)
 * Agency         : Website Pakistan (https://websitepakistan.com)
 * Author / Dev   : Website Pakistan Development Team
 * Copyright      : © 2026 Website Pakistan. All Rights Reserved.
 * License        : Proprietary / Client Delivery
 * Description    : SVG Icon Sprite System & Custom Graphical Symbol Set
 * ============================================================================
 */

export type IconName =
  | 'chev-down' | 'chev-left' | 'chev-right' | 'arrow-right' | 'arrow-up'
  | 'search' | 'close' | 'check' | 'menu'
  | 'mail' | 'phone' | 'printer' | 'pin' | 'clock' | 'external'
  | 'dna' | 'leaf' | 'flask' | 'microscope' | 'cow' | 'microbe' | 'cpu' | 'seedling'
  | 'book' | 'award' | 'briefcase' | 'users' | 'cap' | 'building' | 'shield'
  | 'play' | 'pause' | 'file' | 'globe'
  | 'facebook' | 'twitter' | 'linkedin';

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function Icon({
  name,
  size = 16,
  className,
  style,
}: {
  name: IconName;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg width={size} height={size} className={className} style={style} aria-hidden="true" focusable="false">
      <use href={`#i-${name}`} />
    </svg>
  );
}

export function IconSprite() {
  return (
    <svg width={0} height={0} style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <symbol id="i-chev-down" viewBox="0 0 24 24" {...stroke} strokeWidth={2}><path d="M6 9l6 6 6-6" /></symbol>
      <symbol id="i-chev-left" viewBox="0 0 24 24" {...stroke} strokeWidth={2}><path d="M15 18l-6-6 6-6" /></symbol>
      <symbol id="i-chev-right" viewBox="0 0 24 24" {...stroke} strokeWidth={2}><path d="M9 18l6-6-6-6" /></symbol>
      <symbol id="i-arrow-right" viewBox="0 0 24 24" {...stroke} strokeWidth={1.9}><path d="M5 12h13M13 6l6 6-6 6" /></symbol>
      <symbol id="i-arrow-up" viewBox="0 0 24 24" {...stroke} strokeWidth={1.9}><path d="M12 19V6M6 11l6-6 6 6" /></symbol>

      <symbol id="i-search" viewBox="0 0 24 24" {...stroke} strokeWidth={1.8}><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></symbol>
      <symbol id="i-close" viewBox="0 0 24 24" {...stroke} strokeWidth={1.9}><path d="M18 6L6 18M6 6l12 12" /></symbol>
      <symbol id="i-check" viewBox="0 0 24 24" {...stroke} strokeWidth={2.1}><path d="M20 6L9 17l-5-5" /></symbol>
      <symbol id="i-menu" viewBox="0 0 24 24" {...stroke} strokeWidth={1.9}><path d="M3 6h18M3 12h14M3 18h18" /></symbol>

      <symbol id="i-mail" viewBox="0 0 24 24" {...stroke}><rect x="2.5" y="4.5" width="19" height="15" rx="2" /><path d="M3 6.5l9 6.5 9-6.5" /></symbol>
      <symbol id="i-phone" viewBox="0 0 24 24" {...stroke}><path d="M21.5 16.9v2.6a2 2 0 01-2.2 2 19.6 19.6 0 01-8.5-3 19.3 19.3 0 01-6-6 19.6 19.6 0 01-3-8.6A2 2 0 013.8 1.7h2.6a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L7.5 9.5a16 16 0 006 6l1.2-1.1a2 2 0 012.1-.5c.9.3 1.8.6 2.8.7a2 2 0 011.9 2.3z" /></symbol>
      <symbol id="i-printer" viewBox="0 0 24 24" {...stroke}><path d="M6 9V3h12v6" /><rect x="3" y="9" width="18" height="8" rx="2" /><path d="M6 15h12v6H6z" /></symbol>
      <symbol id="i-pin" viewBox="0 0 24 24" {...stroke}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1116 0z" /><circle cx="12" cy="10" r="3" /></symbol>
      <symbol id="i-clock" viewBox="0 0 24 24" {...stroke}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.2 1.9" /></symbol>
      <symbol id="i-external" viewBox="0 0 24 24" {...stroke}><path d="M14 4h6v6M20 4l-8.5 8.5" /><path d="M18 14v4.5a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 014 18.5v-11A1.5 1.5 0 015.5 6H10" /></symbol>

      <symbol id="i-dna" viewBox="0 0 24 24" {...stroke}><path d="M7 3c0 4.5 10 6 10 10.5S7 20 7 21" /><path d="M17 3c0 4.5-10 6-10 10.5S17 20 17 21" /><path d="M8.4 7h7.2M8 11h8M8.4 17h7.2" /></symbol>
      <symbol id="i-leaf" viewBox="0 0 24 24" {...stroke}><path d="M4 20s.5-8 5.5-12S20 4 20 4s.5 8-4 12-12 4-12 4z" /><path d="M9 15c1.5-3 4-5 7-6" /></symbol>
      <symbol id="i-flask" viewBox="0 0 24 24" {...stroke}><path d="M9.5 3v6.2L4.4 18a2 2 0 001.7 3h11.8a2 2 0 001.7-3l-5.1-8.8V3" /><path d="M8 3h8M7.2 14h9.6" /></symbol>
      <symbol id="i-microscope" viewBox="0 0 24 24" {...stroke}><path d="M6 21h15M9 21a7 7 0 006-10.5" /><path d="M11 5l3.5 6.1a3.5 3.5 0 01-6 3.5L5 8.5z" /><path d="M10.5 3.2l2.6 1.5" /></symbol>
      <symbol id="i-cow" viewBox="0 0 24 24" {...stroke} strokeWidth={1.6}>
        <path d="M4.5 8c-1.5 0-2.5-1.2-2.5-2.8C4 5.2 5.5 6 6.2 7" />
        <path d="M19.5 8c1.5 0 2.5-1.2 2.5-2.8-2 0-3.5.8-4.2 1.8" />
        <path d="M6 7c1.5-1 3.6-1.5 6-1.5S16.5 6 18 7c1.2.8 1.8 2.2 1.8 4 0 4.5-3.4 8-7.8 8s-7.8-3.5-7.8-8c0-1.8.6-3.2 1.8-4z" />
        <circle cx="9.3" cy="11.5" r=".9" /><circle cx="14.7" cy="11.5" r=".9" /><path d="M9.5 15.5h5" />
      </symbol>
      <symbol id="i-microbe" viewBox="0 0 24 24" {...stroke}><circle cx="12" cy="12" r="7" /><path d="M12 5V2M12 22v-3M5 12H2M22 12h-3M7 7L5 5M19 19l-2-2M17 7l2-2M5 19l2-2" /><circle cx="10" cy="10.5" r="1.3" /><circle cx="14.3" cy="13.8" r="1.1" /></symbol>
      <symbol id="i-cpu" viewBox="0 0 24 24" {...stroke}><rect x="5" y="5" width="14" height="14" rx="2" /><rect x="9" y="9" width="6" height="6" rx="1" /><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" /></symbol>
      <symbol id="i-seedling" viewBox="0 0 24 24" {...stroke}><path d="M12 22v-8" /><path d="M12 14c0-3.3-2.7-6-6-6H3c0 3.3 2.7 6 6 6z" /><path d="M12 14c0-3.9 3.1-7 7-7h2c0 3.9-3.1 7-7 7z" /></symbol>

      <symbol id="i-book" viewBox="0 0 24 24" {...stroke}><path d="M4 4.5A2.5 2.5 0 016.5 2H20v16H6.5A2.5 2.5 0 004 20.5z" /><path d="M4 20.5A2.5 2.5 0 016.5 18H20v4H6.5A2.5 2.5 0 014 19.5" /></symbol>
      <symbol id="i-award" viewBox="0 0 24 24" {...stroke}><circle cx="12" cy="9" r="6" /><path d="M8.6 14.2L7 22l5-2.6L17 22l-1.6-7.8" /></symbol>
      <symbol id="i-briefcase" viewBox="0 0 24 24" {...stroke}><rect x="2.5" y="7" width="19" height="13" rx="2" /><path d="M8.5 7V5a2 2 0 012-2h3a2 2 0 012 2v2M2.5 12.5h19" /></symbol>
      <symbol id="i-users" viewBox="0 0 24 24" {...stroke}><path d="M16 20v-1.5a4 4 0 00-4-4H6a4 4 0 00-4 4V20" /><circle cx="9" cy="7" r="3.5" /><path d="M22 20v-1.5a4 4 0 00-3-3.9M16.5 3.7a4 4 0 010 6.6" /></symbol>
      <symbol id="i-cap" viewBox="0 0 24 24" {...stroke}><path d="M12 3.5L22 9l-10 5.5L2 9z" /><path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5M22 9v5.5" /></symbol>
      <symbol id="i-building" viewBox="0 0 24 24" {...stroke}><path d="M3 21h18M5 21V5a2 2 0 012-2h6a2 2 0 012 2v16M15 21V10h4a2 2 0 012 2v9" /><path d="M8 7h2M8 11h2M8 15h2" /></symbol>
      <symbol id="i-shield" viewBox="0 0 24 24" {...stroke}><path d="M12 2.5l8 3v6c0 5-3.4 9.4-8 10.5C7.4 20.9 4 16.5 4 11.5v-6z" /><path d="M9 12l2.2 2.2L15.5 10" /></symbol>
      <symbol id="i-file" viewBox="0 0 24 24" {...stroke}><path d="M14 2.5H7a2 2 0 00-2 2v15a2 2 0 002 2h10a2 2 0 002-2V7.5z" /><path d="M14 2.5v5h5M8.5 13h7M8.5 17h5" /></symbol>
      <symbol id="i-globe" viewBox="0 0 24 24" {...stroke}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" /></symbol>

      <symbol id="i-play" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z" /></symbol>
      <symbol id="i-pause" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5h3v14H8zM13 5h3v14h-3z" /></symbol>

      <symbol id="i-facebook" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z" /></symbol>
      <symbol id="i-twitter" viewBox="0 0 24 24" fill="currentColor"><path d="M17.7 3H21l-7.2 8.3L22 21h-6.6l-5.2-6.8L4.3 21H1l7.7-8.9L1.6 3h6.8l4.7 6.2zm-1.2 16h1.8L7.6 4.8H5.7z" /></symbol>
      <symbol id="i-linkedin" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 102.5 6 2.5 2.5 0 004.98 3.5zM3 8.5h4V21H3zM10 8.5h3.8v1.7h.05a4.2 4.2 0 013.8-2.1c4 0 4.75 2.6 4.75 6V21h-4v-5.6c0-1.34-.02-3.06-1.9-3.06s-2.2 1.46-2.2 2.96V21h-4z" /></symbol>
    </svg>
  );
}
