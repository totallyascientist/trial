import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowDownRight, ArrowUpRight, Menu, X } from 'lucide-react';
import { site } from '../data/site';

function BrandLogo({ onClick }: { onClick?: () => void }) {
  return (
    <Link to="/" className="wordmark" aria-label="T.A.S. home" onClick={onClick}>
      <img src="/assets/logo-no-bg.png" />
    </Link>
  );
}

const mobileNavigation = [
  { label: 'Home', to: '/' },
  { label: 'Fan Zone', to: '/fan-zone' },
  { label: 'About the channel', to: '/about' },
  { label: 'About the creator', to: '/creator' },
  { label: 'Partner', to: '/partnerships' },
  { label: 'Contact', to: '/contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);

    if (location.hash) {
      const targetId = decodeURIComponent(location.hash.slice(1));
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
            ? 'auto'
            : 'smooth',
        });
      }

      return;
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!open) {
      return;
    }

    previousFocusRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
        return;
      }

      if (event.key !== 'Tab') {
        return;
      }

      const focusable = overlayRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (!focusable?.length) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      (previousFocusRef.current ?? triggerRef.current)?.focus();
    };
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <BrandLogo />

        <nav className="desktop-nav" aria-label="Main navigation">
          <NavLink
            to="/fan-zone"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Fan Zone
          </NavLink>

          <div className="nav-dropdown">
            <Link to="/about" className="nav-link nav-about" aria-haspopup="true">
              About <span className="nav-caret"></span>
            </Link>
            <div className="nav-dropdown-menu">
              <Link to="/about">
                About the channel
                <small>The niche & selected work</small>
              </Link>
              <Link to="/creator">
                About the creator
                <small>Ernest & racing journey</small>
              </Link>
            </div>
          </div>

          <NavLink
            to="/partnerships"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Partner
          </NavLink>

          <Link to="/partnerships#enquiry" className="header-cta">
            Let's talk <ArrowUpRight size={14} />
          </Link>
        </nav>

        <button
          ref={triggerRef}
          className="menu-trigger"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={open}
        >
          <span>MENU</span>
          <Menu size={19} />
        </button>
      </header>

      {open && (
        <div
          ref={overlayRef}
          className="menu-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="menu-top">
            <BrandLogo onClick={() => setOpen(false)} />
            <button
              ref={closeRef}
              className="menu-close"
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
            >
              <X size={22} />
              <span>CLOSE</span>
            </button>
          </div>

          <div className="menu-content">
            <p className="eyebrow">NAVIGATE / T.A.S.</p>
            {mobileNavigation.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="menu-item"
              >
                <span className="menu-index">0{index + 1}</span>
                <span>{item.label}</span>
                <ArrowDownRight className="menu-arrow" />
              </Link>
            ))}
          </div>

          <div className="menu-bottom">
            <span>WHERE K-POP MEETS MOTORSPORT.</span>
            <a href={site.instagram} target="_blank" rel="noreferrer">
              INSTAGRAM <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-main">
        <Link to="/" className="footer-logo" aria-label="T.A.S. home">
          <img src="/assets/logo-no-bg.png" alt="T.A.S." />
        </Link>

        <div className="footer-col">
          <p className="eyebrow">EXPLORE</p>
          <Link to="/">Home</Link>
          <Link to="/fan-zone">Fan Zone</Link>
          <Link to="/about">About the channel</Link>
          <Link to="/creator">About the creator</Link>
          <Link to="/partnerships">Partner</Link>
        </div>

        <div className="footer-col">
          <p className="eyebrow">CONNECT</p>
          <Link to="/media-kit">Media Kit</Link>
          <Link to="/contact">Contact Me</Link>
          {site.socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
              {social.label} <ArrowUpRight size={12} />
            </a>
          ))}
        </div>

        <div className="footer-note">
          <p>Two worlds. One community.</p>
        </div>
      </div>

      <div className="footer-legal">
        <span>© {new Date().getFullYear()} T.A.S. / TOTALLY A SCIENTIST</span>
        <span>
          <Link to="/privacy">PRIVACY</Link>
          <span className="legal-dot">·</span> FAN PROJECTS ARE UNOFFICIAL UNLESS STATED OTHERWISE
        </span>
        <a
          href="#top"
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  );
}

export function PageShell({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <div id="top" className={light ? 'app app-light' : 'app'}>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}
