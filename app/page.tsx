'use client';

import { useState, type FormEvent } from 'react';

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const year = new Date().getFullYear();

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Convert FormData to x-www-form-urlencoded body
    const entries = Array.from(formData.entries()).map(([key, value]) => [
      key,
      String(value),
    ]);
    const body = new URLSearchParams(entries).toString();

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });

      if (response.ok) {
        setSubmitMessage(
          'Thank you. Your details have been received. You will be contacted shortly.'
        );
        form.reset();
      } else {
        setSubmitMessage(
          'Something went wrong. Please try again or contact us on Phone / WhatsApp.'
        );
      }
    } catch (error) {
      setSubmitMessage(
        'Something went wrong. Please try again or contact us on Phone / WhatsApp.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Header / Navigation */}
      <header className="site-header" id="top">
        <div className="container nav-wrapper">
          <a href="#top" className="logo">
            <span className="logo-mark">ॐ</span>
            <span className="logo-text">
              Bala Ji Jyotish Kendra <strong>| Astrologer GN Swami</strong>
            </span>
          </a>

          <nav className={`main-nav ${navOpen ? 'open' : ''}`} id="mainNav">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#process">How It Works</a>
            <a href="#contact">Contact</a>
          </nav>

          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span />
            <span />
          </button>

          <a href="tel:+919478566963" className="btn btn-small btn-outline">
            Call Now
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src="/img/hero-temple.jpg"
            alt="Puja setup and home temple at Bala Ji Jyotish Kendra"
          />
          <div className="hero-overlay" />
        </div>

        <div className="container hero-content">
          <div className="hero-text">
            <p className="hero-kicker">
              Vedic Astrology • Spiritual Guidance • Remedies
            </p>
            <h1>
              Get <span className="highlight">Instant Guidance</span>
              <br />
              for Love, Marriage &amp; Life Problems
            </h1>
            <p className="hero-subtitle">
              At <strong>Bala Ji Jyotish Kendra</strong>, Astrologer{' '}
              <strong>GN Swami</strong> offers trusted consultation for love
              marriage, relationship issues, family disputes, career confusion,
              health concerns and more – with time-tested Vedic remedies and
              spiritual rituals.
            </p>

            <div className="hero-cta">
              <a
                href="https://wa.me/919478566963"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Consultation
              </a>
              <a href="#contact" className="btn btn-secondary">
                Book Appointment
              </a>
            </div>

            <div className="hero-badges">
              <div className="badge">
                <span className="badge-title">Experienced</span>
                <span className="badge-label">
                  Vedic Astrologer in Chandigarh*
                </span>
              </div>
              <div className="badge">
                <span className="badge-title">Personalised</span>
                <span className="badge-label">Kundli-based Remedies</span>
              </div>
              <div className="badge">
                <span className="badge-title">Phone / Online</span>
                <span className="badge-label">Consultations Available</span>
              </div>
            </div>

            <p className="disclaimer">
              *Update years of experience / details as per actual profile.
            </p>
          </div>

          <div className="hero-card">
            <div className="hero-card-header">
              <img
                src="/img/deity-closeup.jpg"
                alt="Deity and divine blessings"
              />
              <div className="hero-card-label">
                Daily Puja &amp; Remedies Performed
              </div>
            </div>
            <div className="hero-card-body">
              <p className="hero-card-title">Get Your Problem Analysed Now</p>
              <ul className="hero-card-list">
                <li>Send Name, Date of Birth, Place &amp; Problem</li>
                <li>Detailed analysis of Kundli, numerology &amp; palm</li>
                <li>Simple, doable remedies as per your belief</li>
              </ul>
              <a
                href="https://wa.me/919478566963?text=Namaste%20Guruji,%20I%20need%20guidance%20for..."
                className="btn btn-primary btn-block"
                target="_blank"
                rel="noreferrer"
              >
                Message on WhatsApp
              </a>
              <p className="hero-card-note">
                Available 24×7 for emergency cases (subject to availability).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" id="services">
        <div className="container">
          <header className="section-header">
            <h2>Astrology Services</h2>
            <p>
              Complete solutions for love, marriage, family, career, health and
              spiritual growth.
            </p>
          </header>

          <div className="grid services-grid">
            {/* Card 1 */}
            <article className="service-card">
              <div className="service-image">
                <img
                  src="/img/deity-closeup.jpg"
                  alt="Kundli and horoscope chart"
                />
              </div>
              <h3>Astrology &amp; Kundli Reading</h3>
              <p>
                Detailed birth-chart (janam kundli) analysis for life path,
                personality, strengths, weaknesses and upcoming opportunities.
                Get clarity on love, career, health and finances.
              </p>
              <ul className="service-list">
                <li>Personal horoscope reading</li>
                <li>Yearly prediction &amp; guidance</li>
                <li>Gemstone &amp; mantra suggestions</li>
              </ul>
            </article>

            {/* Card 2 */}
            <article className="service-card">
              <div className="service-image">
                <img
                  src="/img/whatsapp-contact.jpg"
                  alt="Love marriage problem solution banner"
                />
              </div>
              <h3>Love Problem &amp; Relationship Solution</h3>
              <p>
                Powerful astrological remedies and counselling to heal
                misunderstandings, one-sided love, breakups and trust issues
                between partners.
              </p>
              <ul className="service-list">
                <li>Re-union of separated partners*</li>
                <li>Increase harmony &amp; understanding</li>
                <li>Remove negativity &amp; third-person issues</li>
              </ul>
              <p className="service-note">
                *Results depend on individual efforts and circumstances.
              </p>
            </article>

            {/* Card 3 */}
            <article className="service-card">
              <div className="service-image">
                <img
                  src="/img/lp.jpg"
                  alt="Numerology and number 1 importance"
                />
              </div>
              <h3>Love Marriage &amp; Inter-Caste Marriage</h3>
              <p>
                Guidance for love marriage approval, inter-caste marriage
                issues, and family pressure. Special puja and remedies to reduce
                obstacles.
              </p>
              <ul className="service-list">
                <li>Match-making &amp; guna milan</li>
                <li>Delay in marriage solutions</li>
                <li>Family approval &amp; peace rituals</li>
              </ul>
            </article>

            {/* Card 4 */}
            <article className="service-card">
              <div className="service-image">
                <img src="/img/b.WEBP" alt="Puja and bhog arrangement" />
              </div>
              <h3>Husband-Wife Dispute &amp; Family Problems</h3>
              <p>
                Resolve daily fights, ego clashes, in-laws problems and lack of
                understanding using astrology, counselling and spiritual
                practices.
              </p>
              <ul className="service-list">
                <li>Domestic peace &amp; harmony</li>
                <li>Children &amp; parenting issues</li>
                <li>Joint family disputes</li>
              </ul>
            </article>

            {/* Card 5 */}
            <article className="service-card">
              <div className="service-image">
                <img src="/img/palmistry.jpg" alt="Palmistry hand chart" />
              </div>
              <h3>Career, Business &amp; Finance Guidance</h3>
              <p>
                Stuck in job or business? Get guidance on right profession,
                promotion, foreign travel, business partnerships and financial
                stability.
              </p>
              <ul className="service-list">
                <li>Job change &amp; promotion timing</li>
                <li>Business growth &amp; profit remedies</li>
                <li>Foreign travel / PR indications</li>
              </ul>
            </article>

            {/* Card 6 */}
            <article className="service-card">
              <div className="service-image">
                <img src="/img/navgrah-yantra.jpg" alt="Navgrah yantra" />
              </div>
              <h3>Vastu, Numerology &amp; Navgrah Shanti</h3>
              <p>
                Balancing energies of home, shop or office using Vastu tips,
                lucky numbers, yantras, and Navgrah puja for long-term
                stability.
              </p>
              <ul className="service-list">
                <li>Home / shop Vastu consultation</li>
                <li>Lucky name &amp; number suggestion</li>
                <li>Navgrah, Mahamrityunjay &amp; other puja</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section section-alt" id="about">
        <div className="container about-grid">
          <div className="about-text">
            <header className="section-header left">
              <h2>About Bala Ji Jyotish Kendra</h2>
              <p>Traditional wisdom with a modern, practical approach.</p>
            </header>
            <p>
              <strong>Bala Ji Jyotish Kendra</strong> in Mohali is led by
              Astrologer <strong>GN Swami</strong>, a devoted Vedic astrologer
              and spiritual guide helping people overcome challenges in love,
              marriage, career, finances and family life. Combining astrology,
              numerology, palmistry and spiritual rituals, GN Swami provides
              customised guidance that is easy to follow in daily life.
            </p>
            <p>
              Every case is handled with complete privacy, honesty and
              compassion. The focus is not only on prediction, but also on
              practical solutions and inner healing.
            </p>

            <div className="about-highlights">
              <div>
                <span className="about-number">Many Clients</span>
                <span className="about-label">Guided across India*</span>
              </div>
              <div>
                <span className="about-number">Phone &amp; Online</span>
                <span className="about-label">Convenient consultations</span>
              </div>
              <div>
                <span className="about-number">Multi-Discipline</span>
                <span className="about-label">
                  Astrology • Palmistry • Vastu
                </span>
              </div>
            </div>

            <p className="disclaimer">
              *Update exact years / number of consultations as per real data.
            </p>

            <a href="#contact" className="btn btn-primary">
              Schedule Your Consultation
            </a>
          </div>

          <div className="about-side">
            <div className="trophy-grid">
              <figure className="trophy-card">
                <img src="/img/trophy-1.jpg" alt="Astrology award trophy 1" />
                <figcaption>
                  Honoured for contribution in Jyotish &amp; spiritual services.
                </figcaption>
              </figure>
              <figure className="trophy-card">
                <img src="/img/trophy-2.jpg" alt="Astrology award trophy 2" />
                <figcaption>
                  Recognised at Vedic Astrology Sammelan* (example text).
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Process / How It Works */}
      <section className="section" id="process">
        <div className="container">
          <header className="section-header">
            <h2>Simple 3-Step Consultation Process</h2>
            <p>Connect quickly and get clear guidance with easy remedies.</p>
          </header>

          <div className="process-grid">
            <div className="process-step">
              <span className="step-number">1</span>
              <h3>Share Your Details</h3>
              <p>
                Send your name, date of birth, time of birth, place of birth and
                a short description of your problem via WhatsApp or the form
                below.
              </p>
            </div>
            <div className="process-step">
              <span className="step-number">2</span>
              <h3>Astrological Analysis</h3>
              <p>
                GN Swami analyses your kundli, dasha, gochar, numerology and
                palm (if photos shared) to understand root causes.
              </p>
            </div>
            <div className="process-step">
              <span className="step-number">3</span>
              <h3>Guidance &amp; Remedies</h3>
              <p>
                Receive personalised guidance, mantras, puja, yantra or simple
                lifestyle changes – all explained in easy language.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section section-alt" id="gallery">
        <div className="container">
          <header className="section-header">
            <h2>Puja, Remedies &amp; Spiritual Space</h2>
            <p>
              A glimpse of the sacred space where daily puja, sadhana and
              remedies are performed.
            </p>
          </header>

          <div className="gallery-grid">
            <figure className="gallery-item">
              <img
                src="/img/deity-closeup.jpg"
                alt="Decorated deity with garlands"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src="/img/hero-temple.jpg"
                alt="Home temple setup with deities"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src="/img/puja-bhog.jpg"
                alt="Naivedya and bhog thali arrangement"
              />
            </figure>
            <figure className="gallery-item tall">
              <img
                src="/img/navgrah-yantra.jpg"
                alt="Navgrah yantra for remedies"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src="/img/palmistry.jpg"
                alt="Palmistry and hand reading"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src="/img/numerology.jpg"
                alt="Numerology numbers and chart"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src="/img/cakar.jpg"
                alt="Palmistry and hand reading"
              />
            </figure>
            <figure className="gallery-item">
              <img
                src="/img/havan.jpg"
                alt="Numerology numbers and chart"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section" id="contact">
        <div className="container contact-grid">
          <div className="contact-text">
            <header className="section-header left">
              <h2>Contact &amp; Appointment</h2>
              <p>Call or message now to discuss your problem in full privacy.</p>
            </header>

            <div className="contact-options">
              <div className="contact-option">
                <h3>Call Now</h3>
                <a href="tel:+919478566963" className="contact-link">
                  +91-94785-66963
                </a>
                <p>Available for urgent and scheduled consultations.</p>
              </div>
              <div className="contact-option">
                <h3>WhatsApp</h3>
                <a
                  href="https://wa.me/919478566963"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  Chat on WhatsApp
                </a>
                <p>Send your birth details and problem description anytime.</p>
              </div>
              <div className="contact-option">
                <h3>Email</h3>
                <a
                  href="mailto:balajijyotishkendra92@gmail.com"
                  className="contact-link"
                >
                  balajijyotishkendra92@gmail.com
                </a>
                <p>
                  All inquiries are handled personally by Astrologer GN Swami.
                </p>
              </div>
            </div>

            <div className="contact-note">
              <p>
                <strong>Address:</strong> Guru Nanak Enclave, 10075, Old Sunny
                Enclave, Back Side, Mohali, Punjab 140603
              </p>
              <p>
                <strong>Note:</strong> All consultations are confidential.
                Personal details are never shared with anyone.
              </p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <input type="hidden" name="form-name" value="contact" />

              <div className="form-field">
                <label htmlFor="name">Full Name*</label>
                <input type="text" id="name" name="Name" required />
              </div>

              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="dob">Date of Birth*</label>
                  <input
                    type="date"
                    id="dob"
                    name="Date of Birth"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="tob">Time of Birth</label>
                  <input
                    type="text"
                    id="tob"
                    name="Time of Birth"
                    placeholder="e.g. 3:45 PM"
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="place">Place of Birth</label>
                <input
                  type="text"
                  id="place"
                  name="Place of Birth"
                  placeholder="City, Country"
                />
              </div>

              <div className="form-field">
                <label htmlFor="phone">Phone / WhatsApp Number*</label>
                <input type="tel" id="phone" name="Phone" required />
              </div>

              <div className="form-field">
                <label htmlFor="service">Type of Problem*</label>
                <select id="service" name="Service" required>
                  <option value="">Select an option</option>
                  <option value="Love problem">
                    Love / Relationship Problem
                  </option>
                  <option value="Love marriage">
                    Love / Inter-caste Marriage
                  </option>
                  <option value="Husband-wife dispute">
                    Husband-Wife Dispute
                  </option>
                  <option value="Family issue">
                    Family / In-laws Issue
                  </option>
                  <option value="Career">Career / Job / Business</option>
                  <option value="Health">Health / Mental Stress</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="message">Describe Your Problem*</label>
                <textarea id="message" name="Message" rows={4} required />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Details'}
              </button>

              <p className="form-footnote">
                By submitting, you agree to be contacted via phone / WhatsApp
                for consultation scheduling.
              </p>

              {submitMessage && (
                <p
                  className="form-footnote"
                  style={{ marginTop: '0.4rem' }}
                >
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <p className="footer-brand">
              Bala Ji Jyotish Kendra | <strong>Astrologer GN Swami</strong>
            </p>
            <p className="footer-text">
              Vedic astrology, numerology, vastu and spiritual counselling for
              love, marriage, family, career and health issues in Chandigarh and
              across India.
            </p>
          </div>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-meta">
            <p>
              Call / WhatsApp:{' '}
              <a href="tel:+919478566963">+91-94785-66963</a>
            </p>
            <p className="footer-disclaimer">
              Disclaimer: Astrology is a matter of faith and belief. Results may
              vary person to person. This website does not guarantee any
              specific outcome.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <span>
              © {year} Bala Ji Jyotish Kendra. All Rights Reserved.
            </span>
            <span className="dev-credit">
              Website design &amp; development by Samridhi Kaura.
            </span>
          </div>
        </div>
        <a
          href="https://wa.me/919478566963"
          className="whatsapp-floating"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <span>WhatsApp</span>
        </a>
      </footer>
    </>
  );
}
