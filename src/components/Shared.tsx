import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import type { FanDestination, PortfolioItem } from '../data/site';

export function Eyebrow({
  children,
  number,
}: {
  children: ReactNode;
  number?: string;
}) {
  return (
    <p className="eyebrow">
      {number && <span className="eyebrow-number">{number}</span>}
      {children}
    </p>
  );
}

export function SectionIntro({
  number,
  label,
  title,
  copy,
  light = false,
}: {
  number: string;
  label: string;
  title: ReactNode;
  copy?: string;
  light?: boolean;
}) {
  return (
    <ScrollReveal className={`section-intro ${light ? 'intro-light' : ''}`}>
      <Eyebrow number={number}>{label}</Eyebrow>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </ScrollReveal>
  );
}

export function ArrowLink({
  to,
  children,
  light = false,
}: {
  to: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <Link to={to} className={`text-link ${light ? 'text-link-light' : ''}`}>
      {children}
      <ArrowUpRight size={16} />
    </Link>
  );
}

export function DestinationCard({
  item,
  index = 0,
}: {
  item: FanDestination;
  index?: number;
}) {
  return (
    <ScrollReveal
      delay={index * 0.07}
      className={`destination-card ${item.feature ? 'destination-feature' : ''}`}
    >
      <a
        href={item.href}
        className="destination-image-link"
        target="_blank"
        rel="noreferrer"
        aria-label={`${item.action}: ${item.title}`}
      >
        <img className="destination-image" src={item.asset} alt="" loading="lazy" />
        <span className="card-index">{item.number}</span>
        <span className="card-action-icon">
          <ArrowUpRight size={19} />
        </span>
      </a>

      <div className="destination-copy">
        <p className="eyebrow">FAN ZONE / {item.number}</p>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <a className="card-text-link" href={item.href} target="_blank" rel="noreferrer">
          {item.action} <ArrowRight size={15} />
        </a>
      </div>
    </ScrollReveal>
  );
}

export function WorkCard({
  item,
  index = 0,
}: {
  item: PortfolioItem;
  index?: number;
}) {
  const content = (
    <>
      <div className="work-art">
        <img className="work-image" src={item.asset} alt="" loading="lazy" />
        <span className="work-arrow">
          <ArrowUpRight size={19} />
        </span>
      </div>
      <div className="work-meta">
        <span>{item.category}</span>
        <span>{item.status === 'placeholder' ? 'LINK TO ADD' : 'VIEW WORK'}</span>
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </>
  );

  return (
    <ScrollReveal delay={index * 0.06} className="work-card">
      {item.href ? (
        <a href={item.href} target="_blank" rel="noreferrer" className="work-card-link">
          {content}
        </a>
      ) : (
        <div className="work-card-link work-card-placeholder">{content}</div>
      )}
    </ScrollReveal>
  );
}
