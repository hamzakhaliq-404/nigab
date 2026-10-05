'use client';

/**
 * ============================================================================
 * Project        : NIGAB Official Web Portal (PARC, Islamabad)
 * Agency         : Website Pakistan (https://websitepakistan.com)
 * Author / Dev   : Website Pakistan Development Team
 * Copyright      : © 2026 Website Pakistan. All Rights Reserved.
 * License        : Proprietary / Client Delivery
 * Description    : Global Site Chrome (Header, Navigation, Search, Drawer, Footer)
 * ============================================================================
 */

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { Icon, type IconName } from './Icons';
import { institute, navItems, searchTargets, tickerItems } from '@/lib/content';

type FontScale = 'sm' | 'base' | 'lg';

export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname() || '/';
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [fontScale, setFontScale] = useState<FontScale>('base');
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openAcc, setOpenAcc] = useState<string | null>(null);
  const [tick, setTick] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  const closeTimer = useRef<number | null>(null);
  const searchInput = useRef<HTMLInputElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  /* ---------------- scroll state ---------------- */
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        const y = window.scrollY;
        const h = document.documentElement.scrollHeight - window.innerHeight;
        setScrolled(y > 160);
        setShowTop(y > 700);
        setProgress(h > 0 ? (y / h) * 100 : 0);
        raf = 0;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  /* ---------------- text-size preference ---------------- */
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('nigab:fontscale') as FontScale | null;
      if (saved) setFontScale(saved);
    } catch {
      /* storage unavailable — keep the default */
    }
  }, []);

  useEffect(() => {
    if (fontScale === 'base') document.documentElement.removeAttribute('data-fontscale');
    else document.documentElement.setAttribute('data-fontscale', fontScale);
    try {
      window.localStorage.setItem('nigab:fontscale', fontScale);
    } catch {
      /* ignore */
    }
  }, [fontScale]);

  /* ---------------- body scroll lock ---------------- */
  useEffect(() => {
    const locked = drawerOpen || searchOpen;
    document.body.style.overflow = locked ? 'hidden' : '';
    document.body.classList.toggle('drawer-open', drawerOpen);
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen, searchOpen]);

  useEffect(() => {
    document.body.classList.toggle('is-scrolled', scrolled);
  }, [scrolled]);

  /* ---------------- news ticker ---------------- */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => setTick((t) => (t + 1) % tickerItems.length), 5000);
    return () => window.clearInterval(id);
  }, []);

  /* ---------------- scrollspy ---------------- */
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const ids = navItems.map((n) => n.href).filter(Boolean).map((h) => h!.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  /* ---------------- keyboard ---------------- */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (searchOpen) setSearchOpen(false);
        else if (drawerOpen) setDrawerOpen(false);
        else setOpenMenu(null);
      }
      const tag = (document.activeElement?.tagName || '').toUpperCase();
      if (e.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(tag)) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [searchOpen, drawerOpen]);

  useEffect(() => {
    if (searchOpen) window.setTimeout(() => searchInput.current?.focus(), 60);
  }, [searchOpen]);

  /* ---------------- close menus on outside click ---------------- */
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest?.('[data-dropdown]')) setOpenMenu(null);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  /* ---------------- viewport back to desktop ---------------- */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1080) setDrawerOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const hoverOpen = useCallback((label: string) => {
    if (window.innerWidth < 1081) return;
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpenMenu(label);
  }, []);

  const hoverClose = useCallback(() => {
    if (window.innerWidth < 1081) return;
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 160);
  }, []);

  const filteredTargets = searchTargets.filter((t) =>
    !query.trim() || t.label.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />

      {/* ============ TOP UTILITY BAR ============ */}
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__gov">
            <strong>Government of Pakistan</strong>
            <span className="topbar__sep" />
            <span className="topbar__parent">{institute.parent}</span>
            <span className="topbar__sep" />
            <span className="topbar__urdu">{institute.parentUrdu}</span>
          </div>

          <div className="topbar__tools">
            <a className="topbar__link" href={institute.parcUrl} target="_blank" rel="noopener noreferrer" data-optional="">
              PARC <Icon name="external" size={11} />
            </a>
            <a className="topbar__link" href="#contact" data-optional="">Directory</a>
            <a className="topbar__link" href="#academics" data-optional="">Admissions</a>

            <div className="fontsize" role="group" aria-label="Adjust text size">
              {(['sm', 'base', 'lg'] as FontScale[]).map((s) => (
                <button
                  key={s}
                  type="button"
                  aria-pressed={fontScale === s}
                  title={s === 'sm' ? 'Decrease text size' : s === 'lg' ? 'Increase text size' : 'Default text size'}
                  onClick={() => setFontScale(s)}
                >
                  A
                </button>
              ))}
            </div>

            <button type="button" className="topbar__link" onClick={() => setSearchOpen(true)} aria-label="Open search">
              <Icon name="search" size={13} /> Search
            </button>
          </div>
        </div>
      </div>

      {/* ============ MASTHEAD ============ */}
      <header className="masthead">
        <div className="container masthead__inner">
          <a className="lockup" href="/" aria-label={`${institute.shortName} — ${institute.nameFull}, home`}>
            <Image className="lockup__emblem" src="/img/nigab-logo-512.png" alt="NIGAB emblem" width={66} height={72} priority />
            <span className="lockup__rule" aria-hidden="true" />
            <span className="lockup__text">
              <span className="lockup__wordmark">NIGAB</span>
              <span className="lockup__full">{institute.name}</span>
              <span className="lockup__parent">NARC · Park Road, Islamabad — 45500</span>
            </span>
          </a>

          <div className="masthead__actions">
            <div className="masthead__parc">
              <div className="masthead__parc-text">
                <b>An Institute of PARC</b>
                <span>{institute.ministry}</span>
              </div>
            </div>
            <a className="btn btn--outline btn--sm" href="/services">
              Research Services <Icon name="arrow-right" size={15} className="arrow" />
            </a>
            <a className="btn btn--sm" href="/contact">Contact Us</a>
          </div>
        </div>
      </header>

      {/* ============ PRIMARY NAV ============ */}
      <nav className="nav" aria-label="Primary">
        <div className="container nav__inner">
          <a className="nav__brand" href="/">
            <Image src="/img/nigab-logo-192.png" alt="" width={30} height={33} aria-hidden="true" />
            <span>NIGAB</span>
          </a>

          <ul className="nav__list">
            {navItems.map((item) => {
              if (item.href) {
                const isActive = item.href === '/' ? pathname === '/' : pathname === item.href || (item.href.length > 1 && pathname.startsWith(item.href));
                return (
                  <li className="nav__item" key={item.label}>
                    <a
                      className={`nav__link${isActive ? ' is-active' : ''}`}
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              }
              const isOpen = openMenu === item.label;
              return (
                <li
                  className={`nav__item${isOpen ? ' is-open' : ''}`}
                  data-dropdown=""
                  key={item.label}
                  onMouseEnter={() => hoverOpen(item.label)}
                  onMouseLeave={hoverClose}
                >
                  <button
                    className="nav__link"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenMenu(isOpen ? null : item.label);
                    }}
                  >
                    {item.label} <Icon name="chev-down" size={13} className="chev" />
                  </button>

                  <div className={`mega${item.wide ? ' mega--wide' : ''}`}>
                    <div className="mega__grid">
                      {item.columns?.map((c) => (
                        <span className="mega__col-title" key={c}>{c}</span>
                      ))}
                      {item.links?.map((link) => (
                        <a className="mega__link" href={link.href} key={link.title} onClick={() => setOpenMenu(null)}>
                          <Icon name={link.icon as IconName} size={17} />
                          <span>
                            <b>{link.title}</b>
                            <small>{link.sub}</small>
                          </span>
                        </a>
                      ))}
                    </div>
                    {item.foot && (
                      <div className="mega__foot">
                        <span>{item.foot.note}</span>
                        <a className="link-arrow" href={item.foot.href} onClick={() => setOpenMenu(null)}>
                          {item.foot.label} <Icon name="arrow-right" size={14} />
                        </a>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="nav__cta">
            <button
              type="button"
              className="icon-btn nav__search"
              onClick={() => setSearchOpen(true)}
              aria-label="Search the website"
            >
              <Icon name="search" size={17} />
            </button>
          </div>

          <button
            className="nav__burger"
            ref={burgerRef}
            aria-expanded={drawerOpen}
            aria-controls="drawer"
            onClick={() => setDrawerOpen((v) => !v)}
          >
            <span className="burger-box" aria-hidden="true"><i /><i /><i /></span>
            Menu
          </button>
        </div>
      </nav>

      {/* ============ TICKER ============ */}
      <div
        className="ticker"
        onMouseEnter={() => { /* pausing is handled by the interval reset below */ }}
      >
        <div className="container ticker__inner">
          <span className="ticker__label"><span className="ticker__dot" /><span>Latest News</span></span>
          <div className="ticker__viewport">
            <div className="ticker__track">
              {tickerItems.map((item, i) => (
                <p className={`ticker__item${i === tick ? ' is-active' : ''}`} key={item.text}>
                  <time>{item.kicker}</time>
                  <a href="/news">{item.text}</a>
                </p>
              ))}
            </div>
          </div>
          <div className="ticker__nav">
            <button
              type="button"
              aria-label="Previous announcement"
              onClick={() => setTick((t) => (t - 1 + tickerItems.length) % tickerItems.length)}
            >
              <Icon name="chev-left" size={13} />
            </button>
            <button
              type="button"
              aria-label="Next announcement"
              onClick={() => setTick((t) => (t + 1) % tickerItems.length)}
            >
              <Icon name="chev-right" size={13} />
            </button>
          </div>
        </div>
      </div>

      <main id="main">{children}</main>

      {/* ============ FOOTER ============ */}
      <footer className="footer">
        <div className="container">
          <div className="footer__top">
            <div className="footer__brand">
              <div className="footer__lockup">
                <Image src="/img/nigab-logo-192.png" alt="NIGAB emblem" width={56} height={61} />
                <div>
                  <b>NIGAB</b>
                  <span>National Institute for Genomics<br />&amp; Advanced Biotechnology</span>
                </div>
              </div>
              <p>
                An institute of the Pakistan Agricultural Research Council, undertaking agricultural
                research across plants, animals and microbes from the National Agricultural Research
                Centre, Islamabad.
              </p>
              <div className="footer__urdu">{institute.parentUrdu}</div>
              <div className="social">
                <a href={institute.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="NIGAB on Facebook"><Icon name="facebook" size={17} /></a>
                <a href={institute.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="NIGAB on X (Twitter)"><Icon name="twitter" size={16} /></a>
                <a href={institute.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="NIGAB on LinkedIn"><Icon name="linkedin" size={17} /></a>
              </div>
            </div>

            <div>
              <h4>Important Links</h4>
              <nav className="footer__links">
                <a href={institute.parcUrl} target="_blank" rel="noopener noreferrer">PARC Official</a>
                <a href="/">NIGAB Home</a>
                <a href="/about">About Institute</a>
                <a href="/laboratories">28 Laboratories</a>
                <a href="/publications">Research Publications</a>
                <a href="/contact">Staff &amp; Directory</a>
              </nav>
            </div>

            <div>
              <h4>Resources &amp; Services</h4>
              <nav className="footer__links">
                <a href="/programmes">Research Programmes</a>
                <a href="/services">Commercial Services &amp; Testing</a>
                <a href="/services#facilities">Diagnostic Facilities</a>
                <a href="/academics">Internship &amp; Fellowships</a>
                <a href="/news">Newsroom &amp; Events</a>
                <a href="/contact">Location &amp; Inquiries</a>
              </nav>
            </div>

            <div>
              <h4>Contact</h4>
              <div className="footer__contact">
                <div>
                  <Icon name="pin" size={15} />
                  <span>NIGAB, NARC, Park Road,<br />Chak Shahzad, Islamabad — 45500</span>
                </div>
                <div>
                  <Icon name="phone" size={15} />
                  <span>
                    <a href="tel:+925190733812">{institute.phones[0]}</a><br />
                    <a href="tel:+925190733814">{institute.phones[1]}</a>
                  </span>
                </div>
                <div>
                  <Icon name="printer" size={15} />
                  <span>Fax: {institute.fax}</span>
                </div>
                <div>
                  <Icon name="mail" size={15} />
                  <span><a href={`mailto:${institute.email}`}>{institute.email}</a></span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <span>© {new Date().getFullYear()} {institute.nameFull}, PARC. All rights reserved.</span>
            <nav>
              <a href="/sitemap.xml">Sitemap</a>
              <a href="/contact">Accessibility</a>
              <a href="/contact">Privacy Policy</a>
              <a href="/contact">Terms of Use</a>
            </nav>
            <a href="https://websitepakistan.com/" target="_blank" rel="noopener noreferrer">Powered by Website Pakistan</a>
          </div>
        </div>
      </footer>

      {/* ============ MOBILE DRAWER ============ */}
      <div className="drawer" id="drawer" role="dialog" aria-modal="true" aria-label="Site menu">
        <div className="drawer__scrim" onClick={() => setDrawerOpen(false)} />
        <div className="drawer__panel">
          <div className="drawer__head">
            <div className="lockup__text">
              <span className="lockup__wordmark">NIGAB</span>
              <span className="lockup__full">Genomics &amp; Advanced Biotechnology</span>
            </div>
            <button className="drawer__close" type="button" onClick={() => setDrawerOpen(false)} aria-label="Close menu">
              <Icon name="close" size={22} />
            </button>
          </div>

          <div className="drawer__body">
            {navItems.map((item) =>
              item.href ? (
                <a className="acc__trigger" href={item.href} key={item.label} onClick={() => setDrawerOpen(false)}>
                  {item.label}
                </a>
              ) : (
                <div key={item.label}>
                  <button
                    className="acc__trigger"
                    type="button"
                    aria-expanded={openAcc === item.label}
                    onClick={() => setOpenAcc(openAcc === item.label ? null : item.label)}
                  >
                    {item.label} <Icon name="chev-down" size={17} />
                  </button>
                  <div className="acc__panel">
                    <div>
                      {item.links?.map((l) => (
                        <a href={l.href} key={l.title} onClick={() => setDrawerOpen(false)}>{l.title}</a>
                      ))}
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>

          <div className="drawer__foot">
            <a className="btn btn--block" href="/contact" onClick={() => setDrawerOpen(false)}>Contact the Institute</a>
            <a className="btn btn--outline btn--block" href={institute.parcUrl} target="_blank" rel="noopener noreferrer">
              Visit PARC <Icon name="external" size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* ============ SEARCH OVERLAY ============ */}
      <div
        className={`search-overlay${searchOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        onClick={(e) => { if (e.target === e.currentTarget) setSearchOpen(false); }}
      >
        <button className="search-overlay__close" type="button" onClick={() => setSearchOpen(false)} aria-label="Close search">
          <Icon name="close" size={22} />
        </button>
        <div className="search-overlay__box">
          <label htmlFor="siteSearch">Search NIGAB</label>
          <input
            type="search"
            id="siteSearch"
            ref={searchInput}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Laboratories, programmes, projects…"
            autoComplete="off"
          />
          <p className="search-overlay__hint">
            Type to jump to a section of this page. Press <kbd>Esc</kbd> to close.
          </p>
          <div className="search-overlay__chips">
            {filteredTargets.map((t) => (
              <a href={t.href} key={t.href + t.label} onClick={() => setSearchOpen(false)}>{t.label}</a>
            ))}
            {filteredTargets.length === 0 && (
              <span style={{ color: 'rgba(255,255,255,.5)', fontSize: 'var(--fs-sm)' }}>
                No sections match “{query}”.
              </span>
            )}
          </div>
        </div>
      </div>

      {/* ============ BACK TO TOP ============ */}
      <button
        className={`to-top${showTop ? ' is-visible' : ''}`}
        type="button"
        aria-label="Back to top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
          })
        }
      >
        <Icon name="arrow-up" size={19} />
      </button>
    </>
  );
}
