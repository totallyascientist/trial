import { ArrowDownToLine, ArrowUpRight, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedNumber } from '../components/AnimatedNumber';
import { Eyebrow } from '../components/Shared';
import { metrics, portfolio, site } from '../data/site';

export default function MediaKit() {
  return (
    <div className="inner-page media-kit-page">
      <div className="media-kit-toolbar">
        <span>
          <i /> MEDIA KIT / LIVE EDITION
        </span>
        <button className="button button-light" onClick={() => window.print()}>
          <Printer size={15} /> Print / Save as PDF
        </button>
      </div>

      <section className="media-kit-cover">
        <div className="media-kit-cover-top">
          <span>T.A.S. / TOTALLY A SCIENTIST</span>
          <span>CREATOR PROFILE · {new Date().getFullYear()}</span>
        </div>

        <div className="media-kit-cover-main">
          <Eyebrow>INDEPENDENT CULTURE MEDIA / SINGAPORE</Eyebrow>
          <h1>
            WHERE K-POP
            <br />
            MEETS <em>MOTORSPORT.</em>
          </h1>
          <p>
            A creator-led media brand connecting two passionate worlds through short-form
            storytelling, event coverage and fan participation.
          </p>
          <div className="media-kit-cover-bottom">
            <span>
              CREATOR
              <br />
              <strong>ERNEST / T.A.S.</strong>
            </span>
            <span>
              FOCUS
              <br />
              <strong>K-POP × MOTORSPORT</strong>
            </span>
            <span>
              BASE
              <br />
              <strong>SINGAPORE / GLOBAL AUDIENCE</strong>
            </span>
          </div>
        </div>
        <div className="media-kit-cover-index">
          T.A.S.
          <br />
          MK—001
        </div>
      </section>

      <section className="media-kit-data">
        <div className="media-kit-section-heading">
          <Eyebrow>01 / PROFILE & AUDIENCE</Eyebrow>
          <h2>
            A COMMUNITY
            <br />
            BETWEEN <em>WORLDS.</em>
          </h2>
          <p>
            Owner-supplied audience figures for October 2026. Results vary by post and
            reporting window; metrics are a snapshot rather than a guarantee of campaign
            performance.
          </p>
        </div>

        <div className="media-kit-stat-grid">
          <div>
            <span>INSTAGRAM FOLLOWERS</span>
            <AnimatedNumber value={metrics.followers / 1_000} suffix="K" decimals={1} label={`${(metrics.followers / 1_000).toFixed(1)}K followers`} />
            <small>{metrics.updatedAt}</small>
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
        </div>

        <div className="media-kit-formats">
          <div>
            <span>01</span>
            <h3>Crossover storytelling</h3>
            <p>Connecting K-pop and motorsport through references fans recognise.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Social-first content</h3>
            <p>Short-form concepts shaped for platform-native storytelling.</p>
          </div>
          <div>
            <span>03</span>
            <h3>Event coverage</h3>
            <p>On-site or remote coverage, when access is approved.</p>
          </div>
          <div>
            <span>04</span>
            <h3>Community activations</h3>
            <p>Fan participation and crossover engagement ideas.</p>
          </div>
        </div>
      </section>

      <section className="media-kit-work">
        <Eyebrow>02 / SELECTED FORMATS</Eyebrow>
        <h2>
          IDEAS THAT
          <br />
          <em>CROSS OVER.</em>
        </h2>

        <div className="media-kit-work-list">
          {portfolio.slice(0, 3).map((item, index) => (
            <div key={item.id}>
              <span>
                0{index + 1} / {item.category.toUpperCase()}
              </span>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
              <small>
                Illustrative format · Add a verified public post URL and approved cover
                before distribution.
              </small>
            </div>
          ))}
        </div>

        <div className="media-kit-contact">
          <div>
            <Eyebrow>LET'S TALK</Eyebrow>
            <h3>
              Have a crossover
              <br />
              in mind?
            </h3>
          </div>
          <div>
            <a href={`mailto:${site.email}`}>
              {site.email} <ArrowUpRight size={14} />
            </a>
            <a href={site.instagram} target="_blank" rel="noreferrer">
              @totallyascientist <ArrowUpRight size={14} />
            </a>
            <Link to="/partnerships#enquiry">
              Partnership enquiries <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <div className="media-kit-print-note">
        <ArrowDownToLine size={16} /> To create a PDF: select “Print / Save as PDF”, choose A4
        paper, enable background graphics, and save. Confirm all links and figures before
        sending to partners.
      </div>
    </div>
  );
}
