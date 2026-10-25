import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Eyebrow } from '../components/Shared';
import { site } from '../data/site';

export function LegacyVote() {
  return (
    <div className="legacy-page">
      <Eyebrow>LEGACY DESTINATION / VOTING</Eyebrow>
      <h1>
        YOUR IDOL.
        <br />
        <em>YOUR VOTE.</em>
      </h1>
      <p>
        The original Idol of the Week voting experience needs to be migrated from the
        current website before the new site replaces it. This page deliberately does not
        simulate a vote or invent live results.
      </p>
      <div className="legacy-warning">
        MIGRATION CHECK REQUIRED — restore the existing voting integration and verify the
        live vote flow before switching the domain.
      </div>
      <Link to="/fan-zone" className="button button-dark">
        Return to Fan Zone <ArrowUpRight size={16} />
      </Link>
      <a href={site.instagram} target="_blank" rel="noreferrer" className="text-link">
        Follow T.A.S. <ArrowUpRight size={16} />
      </a>
    </div>
  );
}

export function LegacyResources() {
  return (
    <div className="resource-page">
      <section className="resource-ideas">
        <div>
          <Eyebrow>COMMUNITY / SEND AN IDEA</Eyebrow>
          <h1>
            WHAT SHOULD
            <br />
            WE MAKE <em>NEXT?</em>
          </h1>
          <p>
            Sometimes, I need more content ideas for what to post on my channels. So... what
            better way to get new ideas than to ask the viewers themselves?
          </p>
          <p>Send in your content ideas and stand a chance to be featured on the page.</p>
          <a
            className="button button-light"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdIsT5rbNLJqsNCyJ8bNOSvu3V6NSxvLoimLyDW-PxtZkoGTA/viewform?usp=send_form"
            target="_blank"
            rel="noreferrer"
          >
            Send in your ideas <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="resource-ideas-art resource-real-image">
          <img
            src="/assets/media/featured-7.webp"
            alt="K-pop and motorsport crossover line-up graphic"
            loading="lazy"
          />
        </div>
      </section>

      <section className="resource-mod" id="twice-f1-mod">
        <div className="resource-mod-art resource-real-image">
          <img
            src="/assets/media/car-8.webp"
            alt="Open-wheel racing car on circuit"
            loading="lazy"
          />
        </div>
        <div className="resource-mod-copy">
          <Eyebrow>ASSETTO CORSA / FAN PROJECT</Eyebrow>
          <h2>
            TWICE × F1
            <br />
            <em>CAR MOD.</em>
          </h2>
          <p>
            Based on the RSS Formula Hybrid 2022 chassis, this mod adds custom-designed
            skins to give the car a livery inspired by TWICE.
          </p>
          <p>
            The pack includes custom-designed liveries for each of the nine members, plus
            a special white livery celebrating TWICE's 10th anniversary.
          </p>
          <a
            className="button button-light"
            href="https://drive.google.com/file/d/1ctYO4CJRcZ6gAzIzSMLGnff5uuNQqy3-/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Download the mod <ArrowUpRight size={16} />
          </a>
          <p className="resource-disclaimer">
            Fan-made project. Assetto Corsa and RSS Formula Hybrid are referenced for
            compatibility/context; T.A.S. is not affiliated with or endorsed by the rights
            holders. Please check the relevant original mod requirements and permissions.
          </p>
        </div>
      </section>

      <section className="resource-footer-note">
        <Eyebrow>MORE CROSSOVER PROJECTS</Eyebrow>
        <h2>
          MADE FOR FANS
          <br />
          OF <em>BOTH WORLDS.</em>
        </h2>
        <p>Explore the Fan Zone for more K-pop × motorsport projects and community destinations.</p>
        <Link to="/fan-zone" className="button button-dark">
          Enter Fan Zone <ArrowUpRight size={16} />
        </Link>
      </section>
    </div>
  );
}

export function Privacy() {
  return (
    <div className="legacy-page">
      <Eyebrow>POLICY / 001</Eyebrow>
      <h1>
        PRIVACY,
        <br />
        <em>IN PLAIN TERMS.</em>
      </h1>
      <p>
        This starter site does not include analytics by default. If you use the partnership
        form, information is sent to the configured form provider; if no endpoint is
        configured, your browser opens an email draft instead. No submission is claimed
        unless the provider confirms it.
      </p>
      <p>
        Before production, identify the form provider, document its data handling, provide
        a retention contact, and update this page to reflect the actual setup. Do not
        collect unnecessary personal information.
      </p>
      <a className="text-link" href={`mailto:${site.email}`}>
        Privacy questions <ArrowUpRight size={15} />
      </a>
    </div>
  );
}
