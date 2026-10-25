import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Eyebrow } from '../components/Shared';
import { ScrollReveal } from '../components/ScrollReveal';

const racingGallery = [
  {
    src: '/assets/media/kart 1.JPG',
  },
  {
    src: '/assets/media/kart 2.JPG',
  },
  {
    src: '/assets/media/kart 3.JPG',
  },
  {
    src: '/assets/media/kart 4.JPG',
  },
  {
    src: '/assets/media/kart 5.png',
  },
  {
    src: '/assets/media/kart 6.png',
  },
  {
    src: '/assets/media/kart 7.png',
  },
  {
    src: '/assets/media/kart 8.jpg',
  },
  {
    src: '/assets/media/kart 9.jpg',
  },
  {
    src: '/assets/media/kart 10.jpg',
  },
];

export default function Creator() {
  return (
    <div className="inner-page creator-page">
      <section className="about-masthead creator-masthead">
        <div className="about-masthead-copy">
          <h1>
            HI, IM
            <br />
            <em>ERNEST.</em>
          </h1>
          <p>
            I'm the person behind @totallyascientist, a Singapore based account focused on the worlds of Kpop and Motorsports. Beyond content, I'm also a racer who loves to drive, be it in real life or the simulator! I'm also a massive Kpop fan myself!
          </p>
          <div className="masthead-meta">

          </div>
          <div className="creator-links">
            <Link className="button button-cyan" to="/about">
              About the channel <ArrowRight size={16} />
            </Link>
            <Link className="button button-outline" to="/partnerships#racing-sponsorships">
              Support the racing journey <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="about-masthead-art creator-portrait-frame">
          <img
            src="/assets/media/creator-portrait.webp"
            alt="Ernest standing beside a kart"
            fetchPriority="high"
          />
        </div>
      </section>

      <section className="creator-story section-light">
        <h2>
          CREATED AT THE
          <br />
          <em>INTERSECTION.</em>
        </h2>

        <div className="creator-story-grid">
          <ScrollReveal>
            <h3>Social first by instinct.</h3>
            <p>
              I started with the belief that fandoms are not isolated categories.
              Content can translate the references, rituals and energy of one world into
              another, all while making something special in the process.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h3>Passionate about many things.</h3>
            <p>
              My interest in motorsport and Kpop goes beyond content. Karting, sim racing and
              future on-track opportunities are distinct parts of the journey, and I
              want to keep learning through real experience. I am also a massive Kpop fan, helping me connect with audiences in that world.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="racing-journey section" id="racing-journey">
        <div className="racing-journey-art creator-racing-photo">
          <img src="/assets/media/kart 2.JPG" alt="Racing car driving through a circuit corner" loading="lazy" />
        </div>

        <div className="racing-journey-copy">
          <Eyebrow>THE RACING JOURNEY</Eyebrow>
          <h2>
            FROM THE
            <br />
            CONTENT TO
            <br />
            <em>THE COCKPIT.</em>
          </h2>
          <p>
            I'm building practical racing experience alongside the creator journey. This
            section is designed to grow as I add the karts and cars I've driven,
            track-day experience, sim-racing setup and more results!
          </p>

          <div className="cars-list">
            <div>
              <span>KARTS DRIVEN</span>
              <small>ROTAX - since 2023</small>
              <small>SODI WORLD SERIES (RT10) - since 2025</small>
              <small>ROK GP - since 2026</small>
            </div>
            <div>
              <span>CARS DRIVEN</span>
              <small>none... YET!</small>
            </div>
            <div>
              <span>EXPERIENCE & MILESTONES</span>
              <small>1 win in SWS Singapore</small>
              <small>4 podium finishes in SWS Singapore</small>
            </div>
          </div>

          <Link className="button button-cyan" to="/partnerships#racing-sponsorships">
            Fund the racing journey <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <section className="creator-photo-gallery section-light">
        <div>
          <h2>
            THE RACING JOURNEY,
            <br />
            <em>IN FRAMES.</em>
          </h2>
          <p>
           Image gallery of me racing!
          </p>
        </div>

        <div className="creator-gallery-grid">
          {racingGallery.map((image) => (
            <figure className="creator-gallery-card" key={image.src}>
              <img src={image.src} alt={image} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <section className="about-close section-light">
        <Eyebrow>THE STORY CONTINUES</Eyebrow>
        <h2>
          HELP ME GET
          <br />
          <em>ON TRACK.</em>
        </h2>
        <p>For racing support, brand collaborations or creator partnerships, let's start a conversation.</p>
        <div className="close-actions">
          <Link to="/partnerships#racing-sponsorships" className="button button-dark">
            Support the racing journey <ArrowRight size={16} />
          </Link>
          <Link to="/partnerships" className="text-link">
            Partner with me <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
