import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { AnimatedNumber } from '../components/AnimatedNumber';
import { Eyebrow, SectionIntro, WorkCard } from '../components/Shared';
import { ImageCarousel } from '../components/ImageCarousel';
import { ScrollReveal } from '../components/ScrollReveal';
import {
  campaignHighlights,
  capabilities,
  channelGallery,
  metrics,
  portfolio,
} from '../data/site';

export default function About() {
  return (
    <div className="inner-page about-page">
      <section className="about-masthead channel-masthead">
        <div className="about-masthead-copy">
          <h1>
            ABOUT
            <br />
            THE CHANNEL
          </h1>
          <p>
            Totallyascientist is an independent creator-led channel connecting K-pop culture and
            motorsport through crossover content, fan projects and event
            storytelling. This page is about the channel, its niche and the work—not the
            person behind it.
          </p>
          <div className="masthead-meta">
          </div>
        </div>

        <div className="channel-masthead-art">
          <img
            src="/assets/cover.png"
            alt="A collage of T.A.S. K-pop, motorsport and event content"
            fetchPriority="high"
          />
          <span className="photo-note">THE TWO WORLDS / ONE CHANNEL</span>
        </div>
      </section>

      <section className="origin-section section-light">
        <SectionIntro
          number="01"
          label="THE ORIGIN STORY"
          title={
            <>
              A NICHE
              <br />
              <em>FOR THE FANS</em>
            </>
          }
          copy="Three chapters in the making of a crossover brand."
          light
        />

        <div className="origin-chapters">
          <ScrollReveal className="origin-chapter">
            <h3>
              Two interests.
              <br />
              One timeline.
            </h3>
            <p>
              @totallyascientist grew from the simple idea that one person can follow multiple worlds, to be specific the worlds of Kpop and F1 in this case.
            </p>
          </ScrollReveal>

          <ScrollReveal className="origin-chapter" delay={0.08}>
            <h3>
              When the worlds
              <br />
              start talking.
            </h3>
            <p>
              Crossover content creates a bridge between audiences who may not otherwise
              meet. It provides a platform for content that resonates with both niches.
            </p>
          </ScrollReveal>

          <ScrollReveal className="origin-chapter" delay={0.16}>
            <h3>
              From posts to
              <br />
              a media brand.
            </h3>
            <p>
              @totallyascientist consists of passionate fans from both worlds coming together, making it the perfect platform for content related to either worlds.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="channel-gallery-section">
        <div className="channel-gallery-heading">
          <div>
            <Eyebrow>THE CHANNEL ARCHIVE</Eyebrow>
            <h2>
              A FEW OF THE
              <br />
              <em>STORIES SO FAR</em>
            </h2>
            <p>
              A rotating look at the crossover formats, fan graphics and explainers that
              gives the channel its unique voice
              <br />
              Swipe to explore!
            </p>
          </div>
        </div>
        <ImageCarousel images={channelGallery} label="T.A.S. channel content carousel" />
      </section>

      <section className="campaign-highlights-section section-light">
        <div className="campaign-highlights-heading">
          <div>
            <Eyebrow>CAMPAIGN HIGHLIGHTS</Eyebrow>
            <h2>
              WILLIAMS × TZUYU
              <br />
              <em>IN FRAMES</em>
            </h2>
            <p>
              A personal visual archive from the Williams Fan Zone event and its K-pop ×
              motorsport crossover. 
            </p>
          </div>
        </div>
        <ImageCarousel
          images={campaignHighlights}
          label="Williams and Tzuyu event highlights"
          className="campaign-carousel"
        />
      </section>

      <section className="channel-statistics-section">
        <div className="channel-statistics-intro">
          <Eyebrow>CHANNEL STATISTICS</Eyebrow>
          <h2>
            THE AUDIENCE
            <br />
            <em>AT A GLANCE.</em>
          </h2>
          <span className="statistics-updated">Accurate as of October 2026</span>
        </div>

        <div className="channel-statistics-grid">
          <div className="channel-statistic">
            <span className="statistic-label">01 / INSTAGRAM COMMUNITY</span>
            <AnimatedNumber
              value={metrics.followers / 1_000}
              suffix="K"
              decimals={1}
              label="34.5 thousand followers"
            />
            <span className="statistic-description">FOLLOWERS</span>
          </div>

          <div className="channel-statistic">
            <span className="statistic-label">02 / MONTHLY DISCOVERY</span>
            <AnimatedNumber
              value={metrics.monthlyReach / 1_000_000}
              suffix="M+"
              decimals={0}
              label={`${(metrics.monthlyReach / 1_000_000).toFixed(0)} million accounts reached monthly`}
            />
            <span className="statistic-description">ACCOUNTS REACHED MONTHLY</span>
          </div>

          <div className="channel-statistic">
            <span className="statistic-label">03 / TYPICAL POST RESPONSE</span>
            <AnimatedNumber
              value={metrics.averageLikes}
              prefix="~"
              label={`Approximately ${metrics.averageLikes.toLocaleString('en-SG')} average likes`}
            />
            <span className="statistic-description">AVERAGE LIKES</span>
          </div>

          <div className="channel-statistic">
            <span className="statistic-label">04 / ENGAGEMENT</span>
            <AnimatedNumber
              value={metrics.engagementRate}
              suffix="%"
              decimals={1}
              label={`${metrics.engagementRate.toFixed(1)} percent engagement rate`}
            />
            <span className="statistic-description">ENGAGEMENT RATE</span>
          </div>
        </div>
      </section>

      <section className="capabilities-section section">
        <SectionIntro
          number = ""
          label = ""
          title={
            <>
              <h2><em>OUR DNA</em></h2>
            </>
          }
        />

        <div className="capability-list">
          {capabilities.map((capability) => (
            <ScrollReveal className="capability-row" key={capability.number}>
              <span>{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.text}</p>
              <ArrowUpRight size={19} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="selected-work-section section-light" id="selected-work">
        <div className="section-heading-row">
          <SectionIntro
            number = ""
            label = ""
            title={
              <>
                THE WORK, IN
                <br />
                <em>PROGRESS.</em>
              </>
            }
            copy="A curated space for crossover content, explainers, events and community projects."
            light
          />
          <div className="work-side">
            <span className="status-label">
            </span>
          </div>
        </div>

        <div className="portfolio-grid">
          {portfolio.map((item, index) => (
            <WorkCard item={item} index={index} key={item.id} />
          ))}
        </div>
      </section>

      <section className="channel-positioning section">
        <div className="channel-positioning-copy">
          <h2>
            MORE THAN
            <br />
            <em>A NICHE.</em>
          </h2>
          <p>
            @totallyascientist is growing into a recognisable media brand: original
            short-form formats, a home for community projects, and creative concepts that
            help K-pop and motorsport audiences discover each other.
          </p>
          <Link to="/partnerships" className="text-link text-link-light">
            Lets make magic together!<ArrowRight size={16} />
          </Link>
        </div>

        <div className="channel-positioning-art">
          <img
            src="/assets/media/featured-6.webp"
            alt="K-pop meets F1 channel artwork"
            loading="lazy"
          />
        </div>
      </section>

      <section className="about-close section-light">
        <Eyebrow>THE NEXT CHAPTER</Eyebrow>
        <h2>
          LETS MAKE IT
          <br />
          <em>HAPPEN</em>
        </h2>
        <p>Learn about the person behind the channel, or explore a collaboration.</p>

        <div className="close-actions">
          <Link to="/fan-zone" className="button button-dark">
            Explore the crossover <ArrowRight size={16} />
          </Link>
          <Link to="/creator" className="text-link">
            About the creator <ArrowUpRight size={16} />
          </Link>
          <Link to="/partnerships" className="text-link">
            Partner with me <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
