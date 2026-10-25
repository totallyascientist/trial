import { ArrowLeft, ArrowUpRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Eyebrow } from '../components/Shared';
import { site } from '../data/site';

export default function Contact() {
  return (
    <div className="inner-page contact-page">
      <section className="contact-main">
        <Eyebrow>CONTACT / OPEN CHANNEL</Eyebrow>
        <h1>
          GOOD IDEAS
          <br />
          START WITH
          <br />
          <em>A HELLO.</em>
        </h1>
        <p>
          For creative collaborations, media enquiries, event opportunities or anything
          that brings K-pop and motorsport a little closer together.
        </p>

        <div className="contact-links">
          <a className="contact-link-primary" href={`mailto:${site.email}`}>
            <span>
              <Mail size={19} />
              <span>
                <small>EMAIL</small>
                {site.email}
              </span>
            </span>
            <ArrowUpRight size={21} />
          </a>

          {site.socials.map((social) => (
            <a
              key={social.label}
              className="contact-link"
              href={social.href}
              target="_blank"
              rel="noreferrer"
            >
              <span>{social.label}</span>
              <ArrowUpRight size={16} />
            </a>
          ))}
        </div>

        <Link to="/partnerships" className="button button-light">
          Partnership enquiries <ArrowUpRight size={16} />
        </Link>
        <Link to="/" className="back-link">
          <ArrowLeft size={14} /> Back to home
        </Link>
      </section>

      <div className="contact-art" aria-hidden="true">
        <div className="contact-art-lines" />
        <span className="contact-art-x">×</span>
        <span className="contact-art-caption">
          TWO WORLDS.
          <br />
          ONE CROSSOVER.
        </span>
        <span className="contact-art-number">T.A.S. / 001</span>
      </div>
    </div>
  );
}
