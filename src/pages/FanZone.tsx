import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Eyebrow } from '../components/Shared';
import { ScrollReveal } from '../components/ScrollReveal';
import { fanDestinations, site } from '../data/site';

export default function FanZone() {
  const destinations = fanDestinations.filter((item) => item.number !== '02');

  return (
    <div className="inner-page fan-zone-page">
      <section className="fanzone-intro">
        <div className="fanzone-intro-content">
          <Eyebrow>COMMUNITY / IN DEVELOPMENT</Eyebrow>
          <span className="coming-soon">
            COMING SOON <i />
          </span>
          <h1>
            YOUR FANDOM.
            <br />
            <em>YOUR GRID.</em>
          </h1>
          <p>
            A crossover community for K-pop and motorsport fans. Explore the projects
            already here while a bigger experience takes shape.
          </p>
        </div>

        <a href="#fanzone-item-01" className="fanzone-scroll">
          SCROLL TO EXPLORE <ArrowDown size={16} />
        </a>
      </section>

      {destinations.map((item, index) => (
        <section
          className={`fanzone-full-item ${item.feature ? 'fanzone-feature' : ''}`}
          id={`fanzone-item-${item.number}`}
          key={item.number}
          style={{ '--fanzone-image': `url("${item.asset}")` } as CSSProperties}
        >
          <div className="fanzone-image-backdrop" aria-hidden="true">
            <img src={item.asset} alt="" loading={index === 0 ? 'eager' : 'lazy'} />
          </div>
          <div className="fanzone-overlay" />

          <div className="fanzone-content">
            <h2>
              {item.title.split(' ').map((word, wordIndex) => (
                <span key={`${word}-${wordIndex}`}>{word} </span>
              ))}
            </h2>
            <p>{item.description}</p>
            <a
              className="button button-cyan"
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              {item.action} <ArrowUpRight size={18} />
            </a>
          </div>

          <span className="fanzone-index">
            {String(index + 1).padStart(2, '0')} / {String(destinations.length).padStart(2, '0')}
          </span>
        </section>
      ))}

      <section className="fan-zone-note">
        <ScrollReveal>
          <Eyebrow>MORE IN THE WORKS</Eyebrow>
          <h2>
            MADE FOR THE FANS
            <br />
            WHO FOLLOW <em>BOTH.</em>
          </h2>
          <p>
            Future community experiences will be added when they're ready. Until then,
            follow along for the next crossover.
          </p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="button button-cyan"
          >
            Follow on Instagram <ArrowUpRight size={16} />
          </a>
          <Link to="/" className="back-link">
            <ArrowLeft size={14} /> Back to home
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
