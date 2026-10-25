
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatedNumber } from '../components/AnimatedNumber';
import {
  ArrowLink,
  DestinationCard,
  SectionIntro,
  WorkCard,
} from '../components/Shared';
import { ScrollReveal } from '../components/ScrollReveal';
import { fanDestinations, metrics, portfolio } from '../data/site';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLDivElement>(null);

  const scrollWorkRail = (direction: 'left' | 'right') => {
    const rail = railRef.current;
    if (!rail) return;

    rail.scrollBy({
      left:
        direction === 'right'
          ? rail.clientWidth * 0.8
          : -(rail.clientWidth * 0.8),
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        '.hero-line',
        { yPercent: 110, rotate: 1.5 },
        {
          yPercent: 0,
          rotate: 0,
          duration: 1,
          stagger: 0.13,
          ease: 'power4.out',
          delay: 0.08,
        },
      );

      gsap.fromTo(
        '.hero-visual',
        { scale: 1.08 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top 150%',
            end: 'bottom top',
            scrub: 0.8,
          },
        },
      );
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <>
      <section ref={heroRef} className="hero" aria-labelledby="hero-heading">
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-graphic">
            <div className="track-orbit orbit-one" />
            <div className="track-orbit orbit-two" />
            <div className="track-orbit orbit-three" />
            <div className="hero-cross">×</div>
            <div className="hero-stamp">
              K-POP
              <br />
              / MOTORSPORT
              <br />
              <span>EST. ONLINE</span>
            </div>
            <div className="hero-signal" />
          </div>
          <div className="hero-shade" />
        </div>

        <div className="hero-content">
          <h1 id="hero-heading">
            <span className="hero-line-wrap">
              <span className="hero-line">WHERE KPOP</span>
            </span>
            <span className="hero-line-wrap">
              <span className="hero-line">MEETS</span>
            </span>
            <span className="hero-line-wrap">
              <span className="hero-line hero-line-accent">
                MOTORSPORT<span className="hero-period">.</span>
              </span>
            </span>
          </h1>

          <div className="hero-bottom">
            <div>
              <p className="hero-sub">MIXX-ing your 2 worlds.</p>
            </div>

            <div className="hero-actions">
              <Link to="/fan-zone" className="button button-light">
                Explore the crossover <ArrowDown size={16} />
              </Link>
              <Link to="/partnerships" className="button button-outline">
                Work with me!. <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section fan-section" id="fan-zone">
        <div className="section-heading-row">
          <SectionIntro
            number=""
            label=""
            title={
              <>
                YOUR FANDOM.
                <br />
                <em>YOUR GRID.</em>
              </>
            }
            copy="Explore the fanzone!"
          />
        </div>

        <div className="destination-grid">
          {fanDestinations
            .filter((item) => item.number !== '02')
            .map((item, index) => (
              <DestinationCard item={item} index={index} key={item.number} />
            ))}
        </div>

        <div className="section-endline">
          <ArrowLink to="/fan-zone">Enter the Fan Zone</ArrowLink>
        </div>
      </section>

      <section className="crossover-section" id="crossover">
        <div className="crossover-head">
          <h2>
            WHY CHOOSE
            <br />
            <em>ONE?</em>
          </h2>
        </div>

        <div className="crossover-panels">
          <ScrollReveal className="crossover-panel panel-kpop">
            <span className="panel-symbol">✳</span>
            <h3>
              KPOP
              <br />
              <em>CULTURE</em>
            </h3>
            <p>
              Come for the music, stay for the fandom, the personalities and the
              moments everyone talks about.
            </p>
            <span className="panel-bottom">
              FANDOM / MUSIC / ENTERTAINMENT
            </span>
          </ScrollReveal>

          <ScrollReveal className="crossover-panel panel-racing" delay={0.1}>
            <span className="panel-symbol">↗</span>
            <h3>
              MOTOR
              <br />
              <em>SPORT</em>
            </h3>
            <p>Speed, strategy, rivalries and different personalities</p>
            <span className="panel-bottom">
              RACING / PEOPLE / PERFORMANCE
            </span>
          </ScrollReveal>

          <ScrollReveal className="crossover-panel panel-cross" delay={0.2}>
            <span className="panel-symbol">×</span>
            <h3>
              THE
              <br />
              <em>CROSSOVER.</em>
            </h3>
            <p>
              Where two passionate communities meet, and something neither world
              could make alone appears.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="work-section">
        <div className="work-section-top">
          <SectionIntro
            number=""
            label=""
            title={
              <>
                CULTURE IN
                <br />
                <em>MOTION.</em>
              </>
            }
            copy="Original content where music, motorsport and fandom collide."
          />

          <div className="work-side">
            <p>
              From crossover concepts to fan-made projects, this is a growing
              archive of ideas that live between the timelines.
            </p>
            <Link to="/about#selected-work" className="text-link">
              Explore selected work <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="work-gallery-controls">
          <span className="work-gallery-hint">SCROLL TO EXPLORE</span>

          <div className="work-gallery-arrows">
            <button
              type="button"
              className="work-gallery-arrow"
              aria-label="Scroll gallery left"
              onClick={() => scrollWorkRail('left')}
            >
              <ArrowLeft size={18} />
            </button>

            <button
              type="button"
              className="work-gallery-arrow"
              aria-label="Scroll gallery right"
              onClick={() => scrollWorkRail('right')}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div
          className="work-rail"
          ref={railRef}
          aria-label="Selected work gallery. Swipe or scroll horizontally to view more."
          tabIndex={0}
        >
          <div className="work-rail-track">
            {portfolio.map((item, index) => (
              <WorkCard item={item} index={index} key={item.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="audience-section">
        <div className="audience-left">
          <h2>
            A COMMUNITY
            <br />
            BETWEEN <em>WORLDS.</em>
          </h2>
          <p>
            A global audience brought together by the same unlikely
            intersection: K-pop and motorsport. These figures give a snapshot
            of the community.
          </p>
          <Link
            to="/about#channel-statistics"
            className="text-link text-link-light"
          >
            Full channel statistics <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="metrics-grid">
          <div className="metric-cell">
            <span className="metric-index">01 / INSTAGRAM</span>
            <AnimatedNumber
              value={metrics.followers / 1_000}
              suffix="K"
              decimals={1}
              label={`${(metrics.followers / 1_000).toFixed(1)}K followers`}
            />
            <span>FOLLOWERS</span>
          </div>

          <div className="metric-cell">
            <span className="metric-index">02 / MONTHLY REACH</span>
            <AnimatedNumber
              value={metrics.monthlyReach / 1_000_000}
              suffix="M+"
              label={`${(metrics.monthlyReach / 1_000_000).toFixed(0)} million accounts reached monthly`}
            />
            <span>
              ACCOUNTS REACHED <small>MONTHLY</small>
            </span>
          </div>

          <div className="metric-cell">
            <span className="metric-index">03 / AVERAGE LIKES</span>
            <AnimatedNumber
              value={metrics.averageLikes}
              prefix="~"
              label={`Approximately ${metrics.averageLikes.toLocaleString('en-SG')} average likes`}
            />
            <span>
              AVERAGE LIKES <small>PER POST</small>
            </span>
          </div>

          <div className="metric-cell">
            <span className="metric-index">04 / ENGAGEMENT</span>
            <AnimatedNumber
              value={metrics.engagementRate}
              suffix="%"
              decimals={1}
              label={`${metrics.engagementRate.toFixed(1)} percent engagement rate`}
            />
            <span>
              ENGAGEMENT RATE <small>CHANNEL SNAPSHOT</small>
            </span>
          </div>
        </div>

        <div className="section-endline">
          <span>{metrics.updatedAt}</span>
          <span>05 / 08</span>
        </div>
      </section>

      <section className="about-teaser">
        <div className="about-teaser-art">
          <img
            src="/assets/media/creator-portrait.webp"
            alt="Ernest standing beside a kart"
            loading="lazy"
          />
          <span className="portrait-caption">ERNEST / CREATOR, T.A.S.</span>
        </div>

        <div className="about-teaser-copy">
          <h2>
            THE PERSON
            <br />
            BEHIND THE
            <br />
            <em>CHANNEL</em>
          </h2>
          <p>
            Hi! I'm Ernest, a Singapore-based creator exploring the space where
            K-pop and motorsport meet. Through social-first storytelling, fan
            projects and event-led ideas, I'm building a distinct voice for a
            community that doesn't fit neatly into one category.
          </p>
          <ArrowLink to="/creator">More about me</ArrowLink>
        </div>
      </section>

      <section className="commercial-section">
        <div className="commercial-mark" aria-hidden="true">
          T.A.S.
        </div>
        <div className="commercial-content">
          <h2>
            YOUR NEXT CAMPAIGN
            <br />
            COULD BE SOMETHING
            <br />
            <em>UNIQUE</em>
          </h2>
          <p>
            Social-first content, storytelling and community experiences of the
            world of K-pop and motorsport.
          </p>
          <div className="commercial-actions">
            <Link to="/partnerships" className="button button-light">
              Partner with me! <ArrowRight size={16} />
            </Link>
            <Link to="/media-kit" className="button button-outline">
              View Media Kit <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="quick-links-section" aria-label="Quick links">
        <div className="quick-links-heading">
          <h2>
            FIND ME
            <br />
            <em>ELSEWHERE</em>
          </h2>
        </div>

        <div className="quick-links-list">
          <a
            href="https://www.instagram.com/totallyascientist/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram <ArrowUpRight size={22} />
          </a>
          <a
            href="https://www.twitch.tv/totallyascientist"
            target="_blank"
            rel="noreferrer"
          >
            Twitch <ArrowUpRight size={22} />
          </a>
          <a
            href="https://www.tiktok.com/@totallyascientist"
            target="_blank"
            rel="noreferrer"
          >
            TikTok <ArrowUpRight size={22} />
          </a>
          <Link to="/media-kit">
            Media Kit <ArrowUpRight size={22} />
          </Link>
        </div>
      </section>
    </>
  );
}
