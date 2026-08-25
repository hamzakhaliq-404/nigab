'use client';

/**
 * ============================================================================
 * Project        : NIGAB Official Web Portal (PARC, Islamabad)
 * Agency         : Website Pakistan (https://websitepakistan.com)
 * Author / Dev   : Website Pakistan Development Team
 * Copyright      : © 2026 Website Pakistan. All Rights Reserved.
 * License        : Proprietary / Client Delivery
 * Description    : Institutional Contact, Map, Enquiry Form & Directory Section
 * ============================================================================
 */

import { useState } from 'react';
import { Icon } from './Icons';
import Reveal from './Reveal';
import { enquiryTypes, institute } from '@/lib/content';

type Fields = { name: string; organisation: string; email: string; phone: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, boolean>>;

const EMPTY: Fields = { name: '', organisation: '', email: '', phone: '', subject: '', message: '' };

export default function Contact() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<{ text: string; tone: 'ok' | 'error' } | null>(null);

  const validate = (field: keyof Fields, value: string): boolean => {
    const v = value.trim();
    switch (field) {
      case 'name':
      case 'subject':
        return v.length > 0;
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
      case 'message':
        return v.length >= 10;
      default:
        return true;
    }
  };

  const set = (field: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.value;
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: !validate(field, value) }));
  };

  const blur = (field: keyof Fields) => () => {
    setErrors((prev) => ({ ...prev, [field]: !validate(field, values[field]) }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const required: (keyof Fields)[] = ['name', 'email', 'subject', 'message'];
    const next: Errors = {};
    required.forEach((f) => { if (!validate(f, values[f])) next[f] = true; });
    setErrors(next);

    if (Object.keys(next).length > 0) {
      setStatus({ text: 'Please correct the highlighted fields and try again.', tone: 'error' });
      return;
    }

    const subject = `NIGAB Enquiry — ${values.subject}`;
    const body =
      `Name: ${values.name}\n` +
      `Organisation: ${values.organisation || '—'}\n` +
      `Email: ${values.email}\n` +
      `Telephone: ${values.phone || '—'}\n` +
      `Enquiry type: ${values.subject}\n\n` +
      `Message:\n${values.message}`;

    setStatus({ text: 'Opening your email client to send this enquiry to NIGAB…', tone: 'ok' });
    window.location.href =
      `mailto:${institute.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const errorStyle = status?.tone === 'error'
    ? { background: '#FDF1EF', borderColor: '#F0C9C3', color: '#B4453A' }
    : undefined;

  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Contact</span>
          <h2>Get in touch with NIGAB</h2>
          <p>For research collaboration, commercial testing services, admissions or general enquiries.</p>
        </Reveal>

        <div className="contact__grid">
          <Reveal>
            <div className="contact-list">
              <div className="contact-item">
                <span className="contact-item__icon"><Icon name="pin" size={20} /></span>
                <div>
                  <b>Address</b>
                  <p>
                    {institute.nameFull} ({institute.shortName})<br />
                    {institute.address.line1}<br />
                    {institute.address.line2}, {institute.address.city} — {institute.address.postcode}, {institute.address.country}
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-item__icon"><Icon name="phone" size={20} /></span>
                <div>
                  <b>Telephone</b>
                  <p>
                    <a href="tel:+925190733812">{institute.phones[0]}</a>
                    {' · '}
                    <a href="tel:+925190733814">{institute.phones[1]}</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-item__icon"><Icon name="printer" size={20} /></span>
                <div><b>Fax</b><p>{institute.fax}</p></div>
              </div>

              <div className="contact-item">
                <span className="contact-item__icon"><Icon name="mail" size={20} /></span>
                <div>
                  <b>Email</b>
                  <p>
                    <a href={`mailto:${institute.email}`}>{institute.email}</a><br />
                    <span style={{ fontSize: 'var(--fs-2xs)', color: 'var(--ink-400)' }}>{institute.emailNote}</span>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-item__icon"><Icon name="clock" size={20} /></span>
                <div><b>Office Hours</b><p>{institute.officeHours}</p></div>
              </div>
            </div>

            <div className="map-card">
              <div className="map-card__canvas">
                <svg viewBox="0 0 600 210" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                  <rect width="600" height="210" fill="#06290D" />
                  <g stroke="#0B7020" strokeWidth="1" opacity=".35">
                    <path d="M0 40h600M0 80h600M0 120h600M0 160h600M60 0v210M160 0v210M260 0v210M360 0v210M460 0v210M560 0v210" />
                  </g>
                  <path d="M-20 150 L200 92 L420 118 L620 60" stroke="#168A2E" strokeWidth="7" fill="none" opacity=".55" />
                  <path d="M-20 150 L200 92 L420 118 L620 60" stroke="#DCB556" strokeWidth="1.5" fill="none" strokeDasharray="8 9" opacity=".8" />
                  <path d="M120 -20 L180 210" stroke="#168A2E" strokeWidth="5" fill="none" opacity=".4" />
                  <path d="M470 -20 L410 210" stroke="#168A2E" strokeWidth="5" fill="none" opacity=".4" />
                  <g fill="#0B7020" opacity=".5">
                    <rect x="220" y="130" width="46" height="30" rx="2" />
                    <rect x="330" y="140" width="34" height="24" rx="2" />
                    <rect x="248" y="42" width="60" height="26" rx="2" />
                    <rect x="410" y="40" width="38" height="22" rx="2" />
                  </g>
                  <text x="24" y="196" fill="#6BC583" fontFamily="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" fontSize="11" opacity=".8">PARK ROAD · CHAK SHAHZAD</text>
                  <text x="470" y="30" fill="#6BC583" fontFamily="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" fontSize="11" opacity=".7">NARC</text>
                </svg>
                <span className="map-card__pin"><Icon name="pin" size={30} /></span>
              </div>
              <div className="map-card__bar">
                <span>
                  <strong style={{ color: 'var(--ink-800)' }}>NIGAB, NARC</strong> — Park Road, Islamabad{' '}
                  <code>{institute.coordinates}</code>
                </span>
                <a
                  className="link-arrow"
                  href="https://www.google.com/maps/search/?api=1&query=National+Agricultural+Research+Centre+Park+Road+Islamabad"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Maps <Icon name="external" size={13} />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="panel">
              <div className="panel__head">
                <Icon name="mail" size={24} />
                <div>
                  <small>Enquiry form</small>
                  <h3>Send us a message</h3>
                </div>
              </div>

              <form className="form" onSubmit={onSubmit} noValidate>
                <div className="form__row">
                  <div className={`field${errors.name ? ' has-error' : ''}`}>
                    <label htmlFor="cf-name">Full name <span className="req">*</span></label>
                    <input id="cf-name" type="text" autoComplete="name" placeholder="Your name"
                      value={values.name} onChange={set('name')} onBlur={blur('name')} />
                    <span className="field__err">Please enter your name.</span>
                  </div>
                  <div className="field">
                    <label htmlFor="cf-org">Organisation</label>
                    <input id="cf-org" type="text" autoComplete="organization" placeholder="Company, university or department"
                      value={values.organisation} onChange={set('organisation')} />
                  </div>
                </div>

                <div className="form__row">
                  <div className={`field${errors.email ? ' has-error' : ''}`}>
                    <label htmlFor="cf-email">Email address <span className="req">*</span></label>
                    <input id="cf-email" type="email" autoComplete="email" placeholder="name@example.com"
                      value={values.email} onChange={set('email')} onBlur={blur('email')} />
                    <span className="field__err">Please enter a valid email address.</span>
                  </div>
                  <div className="field">
                    <label htmlFor="cf-phone">Telephone</label>
                    <input id="cf-phone" type="tel" autoComplete="tel" placeholder="+92 300 0000000"
                      value={values.phone} onChange={set('phone')} />
                  </div>
                </div>

                <div className={`field${errors.subject ? ' has-error' : ''}`}>
                  <label htmlFor="cf-subject">Enquiry type <span className="req">*</span></label>
                  <select id="cf-subject" value={values.subject} onChange={set('subject')} onBlur={blur('subject')}>
                    <option value="">Select an enquiry type…</option>
                    {enquiryTypes.map((t) => <option key={t}>{t}</option>)}
                  </select>
                  <span className="field__err">Please select an enquiry type.</span>
                </div>

                <div className={`field${errors.message ? ' has-error' : ''}`}>
                  <label htmlFor="cf-message">Message <span className="req">*</span></label>
                  <textarea id="cf-message" placeholder="Tell us briefly how we can help…"
                    value={values.message} onChange={set('message')} onBlur={blur('message')} />
                  <span className="field__err">Please enter a message (at least 10 characters).</span>
                </div>

                {status && (
                  <div className="form__status is-visible" role="status" aria-live="polite" style={errorStyle}>
                    {status.text}
                  </div>
                )}

                <button type="submit" className="btn btn--lg btn--block">
                  Send Enquiry <Icon name="arrow-right" size={17} className="arrow" />
                </button>

                <p className="form__note">
                  This form currently opens your email client. To receive enquiries directly on the
                  website, a server-side handler needs to be connected — see the deployment notes.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
