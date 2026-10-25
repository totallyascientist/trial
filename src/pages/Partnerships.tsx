import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check, Send } from 'lucide-react';
import { AnimatedNumber } from '../components/AnimatedNumber';
import { Eyebrow } from '../components/Shared';
import { ScrollReveal } from '../components/ScrollReveal';
import { metrics, site } from '../data/site';

const offerings = [
  {
    number: '01',
    title: 'Content collaborations',
    detail: 'Short-form video · Social-first storytelling · Crossover concepts',
    copy: 'Native-feeling content that connects the references, personalities and audiences of K-pop and motorsport.',
  },
  {
    number: '02',
    title: 'Event coverage',
    detail: 'Event anticipation · Approved on-site coverage · Recaps',
    copy: 'Story-led event content, subject to confirmed access, permissions, schedule and agreed scope.',
  },
  {
    number: '03',
    title: 'Crossover concepts',
    detail: 'Creative ideation · Campaign angles · Audience bridges',
    copy: 'Original concepts that help a campaign travel between culture communities without forcing the connection.',
  },
  {
    number: '04',
    title: 'Community activations',
    detail: 'Polls · Fan participation · Engagement ideas',
    copy: 'Fan-aware mechanics and participation formats designed to invite a community into the story.',
  },
  {
    number: '05',
    title: 'Racing sponsorships',
    detail: 'Karting · Track experience · Equipment and travel support',
    copy:
      'Support genuine racing development through financial sponsorship, equipment, travel or in-kind support. Proposed benefits and deliverables are discussed transparently and agreed before any commitment.',
  },
];

const collaborators = [
  {
    name: 'Sector Zero',
    src: '/assets/logos/logo-sectorzero.png',
  },
  {
    name: 'Williams Racing',
    src: '/assets/logos/Williams_F1_logo_2026_(Corrigindo).png',
  },
  {
    name: 'Legion of Racers',
    src: '/assets/logos/67491d8dd21558f07d0b8af1_Logo_Legion of Racers - White.png',
  },
  {
    name: 'CHIJMES',
    src: '/assets/logos/logo.webp',
  },
  {
    name: 'Ray-Ban',
    src: '/assets/logos/Ray-Ban_logo.svg',
  },
  {
    name: 'CQ@Clarke Quay',
    src: '/assets/logos/images (6).png',
  },
  {
    name: 'Singa.pole',
    src: '/assets/logos/p2.png',
  },
  {
    name: 'F1 Exhibition',
    src: '/assets/logos/images (7).png',
  },
];

type EnquiryForm = {
  name: string;
  organisation: string;
  email: string;
  type: string;
  brief: string;
  timeline: string;
  budget: string;
};

const initialForm: EnquiryForm = {
  name: '',
  organisation: '',
  email: '',
  type: 'Content collaboration',
  brief: '',
  timeline: '',
  budget: '',
};

type FormStatus = 'idle' | 'sending' | 'success' | 'error' | 'fallback';

export default function Partnerships() {
  const [form, setForm] = useState<EnquiryForm>(initialForm);
  const [status, setStatus] = useState<FormStatus>('idle');

  function updateForm(field: keyof EnquiryForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }


  return (
    <div className="inner-page partnership-page">
      <section className="partnership-hero">
        <div className="partnership-hero-copy">
          <Eyebrow>PARTNERSHIPS / 001</Eyebrow>
          <h1>
            LETS CREATE
            <br />
            SOMETHING
            <br />
            <em>MAGICAL.</em>
          </h1>
          <p>
            A Singapore-based creator focused on the worlds of K-pop and motorsport.
          </p>
          <div className="partnership-hero-actions">
            <Link to="/media-kit" className="button button-light">
              View Media Kit <ArrowUpRight size={16} />
            </Link>
            <a href="#enquiry" className="button button-outline">
              Start a conversation <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="partnership-hero-side">
          <span className="hero-side-cross">×</span>
          <span>
            CREATIVE
            <br />
            PARTNERSHIPS
          </span>
          <span>
            01 — 05
            <br />
            FORMATS
          </span>
        </div>
      </section>

      <section className="partner-statistics section" id="statistics">
        <div>
          <Eyebrow number="01">CHANNEL SNAPSHOT</Eyebrow>
          <h2>
            THE AUDIENCE
            <br />
            <em>AT A GLANCE.</em>
          </h2>
          <p>
            The audience is there, and its growing!
          </p>
          <small className="statistics-updated">Accurate as of October 2026</small>
        </div>

        <div className="partner-stat-grid">
          <div>
            <span>INSTAGRAM FOLLOWERS</span>
            <AnimatedNumber value={metrics.followers / 1_000} suffix="K" decimals={1} label={`${(metrics.followers / 1_000).toFixed(1)}K followers`} />
            <small>Instagram audience</small>
          </div>
          <div>
            <span>MONTHLY ACCOUNTS REACHED</span>
            <AnimatedNumber value={metrics.monthlyReach / 1_000_000} suffix="M+" label={`${(metrics.monthlyReach / 1_000_000).toFixed(0)} million accounts reached monthly`} />
            <small>Monthly discovery</small>
          </div>
          <div>
            <span>AVERAGE LIKES</span>
            <AnimatedNumber value={metrics.averageLikes} prefix="~" label={`Approximately ${metrics.averageLikes.toLocaleString('en-SG')} average likes`} />
            <small>Typical post response</small>
          </div>
          <div>
            <span>ENGAGEMENT RATE</span>
            <AnimatedNumber
              value={metrics.engagementRate}
              suffix="%"
              decimals={1}
              label={`${metrics.engagementRate.toFixed(1)} percent engagement rate`}
            />
            <small>Channel snapshot</small>
          </div>
          <div>
            <span>Posts till date</span>
            <AnimatedNumber value={metrics.posts}/>
            <small>Experience</small>
          </div>
        </div>
      </section>

      <section className="offerings-section section-light">
        <div className="section-heading-row">
          <div>
            <Eyebrow number="02">WAYS TO WORK TOGETHER</Eyebrow>
            <h2>
              THE RIGHT IDEA
              <br />
              FOR THE <em>RIGHT AUDIENCE.</em>
            </h2>
          </div>
          <p className="section-copy">
            Flexible creative formats, shaped around a partner's goals and confirmed
            together before work begins.
          </p>
        </div>

        <div className="offering-list">
          {offerings.map((offering, index) => (
            <ScrollReveal
              className="offering-row"
              key={offering.number}
              delay={index * 0.05}
              id={offering.number === '05' ? 'racing-sponsorships' : undefined}
            >
              <span className="offering-number">{offering.number}</span>
              <div className="offering-title">
                <h3>{offering.title}</h3>
                <span>{offering.detail}</span>
              </div>
              <p>{offering.copy}</p>
              <ArrowUpRight size={20} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="partner-work section">
        <h2>
          THE CHANNEL
          <br />
          <em>IN ACTION.</em>
        </h2>

        <div className="partner-examples">
          <div>
            <span>01 / CREATIVE FORMAT</span>
            <h3>
              Kpop explained
              <br />
              in F1 terms.
            </h3>
            <p>
              A crossover explainer format designed to make one fandom legible through the
              language of the other.
            </p>
          </div>
          <div>
            <h3>
              Fan participation
              <br />
              with a racing twist.
            </h3>
            <p>
              Idol of the Week brings the familiar Driver of the Day idea into a K-pop fan
              context, engaging audiences consistently over long spans of time.
            </p>
          </div>
          <div>
            <h3>
              Culture, in the
              <br />
              real world.
            </h3>
            <p>
              Event coverage concepts can be developed around a confirmed brief, access
              permissions and available production resources.
            </p>
          </div>
        </div>
      </section>

      <section className="collaborator-section section-light">
        <Eyebrow>PAST COLLABORATIONS</Eyebrow>
        <h2>
          PAST STORIES TOLD
        </h2>
        <p>
          Organisations that I have collaborated with in the past.
        </p>

        <div className="collaborator-logo-grid">
          {collaborators.map((collaborator) => (
            <div className="collaborator-logo" key={collaborator.name}>
              <img
                src={collaborator.src}
                alt={`${collaborator.name} logo`}
                loading="lazy"
              />
              <span>{collaborator.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="collaborator-section section-light" id="enquiry">
        <span
          id="racing-sponsorships-anchor"
          className="anchor-alias"
          aria-hidden="true"
        />

        <div className="enquiry-intro">
          <Eyebrow>TELL ME WHAT YOU'RE THINKING</Eyebrow>
          <h2>
            LETS START
            <br />
            WITH AN <em>IDEA.</em>
          </h2>
          <p>
            Have a campaign, event or crossover idea in mind? Tell me what
            you're thinking and let's explore where it could go.
          </p>
        </div>

        <div className="enquiry-email-panel">
          <span className="enquiry-email-label">
            DIRECT CONTACT / PARTNERSHIPS <br />
          </span>
          <a href={`mailto:${site.email}`} className="enquiry-email-link">
            <span>{site.email}</span>
            <ArrowUpRight size={27} aria-hidden="true" />
          </a>
          <p>
            For content collaborations, event coverage, media enquiries
            and racing sponsorship discussions.
          </p>
        </div>
      </section>
    </div>
  );
}
