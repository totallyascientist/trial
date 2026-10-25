export type SocialLink = {
  label: string;
  href: string;
};

export type PortfolioItem = {
  id: string;
  category: string;
  title: string;
  description: string;
  asset: string;
  href: string;
  status: 'placeholder' | 'verified';
};

export type FanDestination = {
  number: string;
  title: string;
  description: string;
  action: string;
  href: string;
  asset: string;
  feature?: boolean;
};

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  category?: string;
};

export const site = {
  name: 'T.A.S.',
  fullName: 'Totally A Scientist',
  domain: 'https://totallyascientist.com',
  creator: 'Ernest',
  location: 'Singapore',
  instagram: 'https://www.instagram.com/totallyascientist/',
  email: 'totallyascientist@gmail.com',
  tagline: 'Where K-pop meets motorsport.',
  description:
    'A Singapore-based creator-led media brand connecting K-pop and motorsport through original short-form content, crossover culture, event storytelling and fan participation.',
  socials: [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/totallyascientist/',
    },
    {
      label: 'TikTok',
      href: 'https://www.tiktok.com/@totallyascientist',
    },
    {
      label: 'Twitch',
      href: 'https://www.twitch.tv/totallyascientist',
    },
    {
      label: 'Linktree',
      href: 'https://linktr.ee/totallyascientist',
    },
  ] satisfies SocialLink[],
};

/**
 * Owner-supplied channel metrics, October 2026.
 * Update these values here and the Home, About and Partnerships pages update together.
 */
export const metrics = {
  updatedAt: 'OWNER-SUPPLIED · OCTOBER 2026',
  followers: 34_500,
  monthlyReach: 2_000_000,
  averageLikes: 10_000,
  engagementRate: 17.8,
  posts: 1_064,
};

export const fanDestinations: FanDestination[] = [
  {
    number: '01',
    title: 'Idol of the Week',
    description:
      "A K-pop twist on Formula 1's Driver of the Day. Cast your vote for your favourite idol.",
    action: 'Vote now',
    href: 'https://totallyascientist.com/vote/',
    asset: '/assets/media/idol-of-the-week-cover.webp',
  },
  {
    number: '02',
    title: 'Crossover resources',
    description:
      'Explore fan-made resources and projects built where K-pop and racing culture meet.',
    action: 'Explore resources',
    href: 'https://totallyascientist.com/resources',
    asset: '/assets/media/featured-7.webp',
  },
  {
    number: '03',
    title: 'TWICE × F1 car mod',
    description:
      'A TWICE-inspired Assetto Corsa livery project. Visit the existing resources page for its description and available links.',
    action: 'View the mod',
    href: 'https://totallyascientist.com/twice-f1-mod',
    asset: '/assets/media/car-8.webp',
    feature: true,
  },
];

/**
 * Replace href values with the public URL of the relevant post when ready.
 * The supplied artwork is real; a blank href simply means the card is not clickable yet.
 */
export const portfolio: PortfolioItem[] = [
  {
    id: 'explainer',
    category: 'K-pop × F1',
    title: 'F1 explained for Kpop fans.',
    description:
      'A crossover explainer format that makes motorsport culture approachable to a new audience.',
    asset: '/assets/media/featured-1.webp',
    href: '',
    status: 'placeholder',
  },
  {
    id: 'crossover',
    category: 'Culture crossover',
    title: 'What if Kpop groups were F1 teams?',
    description:
      'Fan-first concepts that translate the language of one fandom into another.',
    asset: '/assets/media/featured-10.webp',
    href: '',
    status: 'placeholder',
  },
  {
    id: 'event',
    category: 'Event storytelling',
    title: 'Culture, on location.',
    description:
      'Behind-the-scenes moments and event-led storytelling from the crossover community.',
    asset: '/assets/media/williams-tzuyu-press-conference.webp',
    href: '',
    status: 'placeholder',
  },
  {
    id: 'community',
    category: 'Community project',
    title: 'A grid built for fans.',
    description:
      'Fan participation, original projects and ideas that bring both communities together.',
    asset: '/assets/media/featured-7.webp',
    href: '',
    status: 'placeholder',
  },
];

export const channelGallery: GalleryImage[] = [
  {
    src: '/assets/media/featured-1.webp',
    alt: 'F1 explained for Kpop fans content cover',
    caption: 'F1 explained for Kpop fans',
    category: 'Explainer',
  },
  {
    src: '/assets/media/featured-2.webp',
    alt: 'Korean Grand Prix and Kpop crossover content cover',
    caption: 'Kpop meets the Korean Grand Prix',
    category: 'Crossover',
  },
  {
    src: '/assets/media/featured-3.webp',
    alt: 'Red-themed motorsport and Kpop content cover',
    caption: 'The details behind the grid',
    category: 'Editorial',
  },
  {
    src: '/assets/media/featured-4.webp',
    alt: 'Driver of the Day crossover content cover',
    caption: 'Driver of the Day',
    category: 'Series',
  },
  {
    src: '/assets/media/featured-5.webp',
    alt: 'Kpop idols and racing teams graphic',
    caption: 'Idols on the grid',
    category: 'Crossover',
  },
  {
    src: '/assets/media/featured-6.webp',
    alt: 'Kpop meets Formula 1 content cover',
    caption: 'Kpop meets F1',
    category: 'Crossover',
  },
  {
    src: '/assets/media/featured-7.webp',
    alt: 'Korean Grand Prix starting line up crossover graphic',
    caption: 'The starting line up',
    category: 'Fan project',
  },
  {
    src: '/assets/media/featured-8.webp',
    alt: 'Kpop and Formula 1 grid comparison graphic',
    caption: 'The grid, reimagined',
    category: 'Editorial',
  },
  {
    src: '/assets/media/featured-9.webp',
    alt: 'Korean Grand Prix starting line up with idols and drivers',
    caption: 'A crossover line up',
    category: 'Fan project',
  },
  {
    src: '/assets/media/featured-10.webp',
    alt: 'What if Kpop groups were Formula 1 teams graphic',
    caption: 'What if Kpop groups were F1 teams?',
    category: 'Explainer',
  },
  {
    src: '/assets/media/featured-11.webp',
    alt: 'Idol of the Week fanvoting content cover',
    caption: 'Idol of the Week',
    category: 'Fan project',
  },
];

/**
 * Images supplied by Ernest from the Williams × Tzuyu / Fan Zone campaign context.
 * Captions describe the image itself and do not imply a paid or official partnership.
 */
export const campaignHighlights: GalleryImage[] = [
  {
    src: '/assets/media/williams-tzuyu-portrait.webp',
    alt: 'Tzuyu at the Williams Fan Zone event',
    caption: 'Tzuyu at the Fan Zone',
    category: 'Event',
  },
  {
    src: '/assets/media/williams-tzuyu-press-graphic.webp',
    alt: 'Williams, Tzuyu and DAN DA DAN event graphic',
    caption: 'The crossover announcement',
    category: 'Campaign',
  },
  {
    src: '/assets/media/williams-tzuyu-press-conference.webp',
    alt: 'Tzuyu and guests during the event press conference',
    caption: 'On stage conversation',
    category: 'Event',
  },
  {
    src: '/assets/media/williams-fanzone-event.webp',
    alt: 'Williams Fan Zone event with Tzuyu and event host',
    caption: 'Inside the Williams Fan Zone',
    category: 'Fan Zone',
  },
  {
    src: '/assets/media/williams-tzuyu-panel.webp',
    alt: 'Tzuyu and guests seated during the Williams event',
    caption: 'A moment from the panel',
    category: 'Event',
  },
  {
    src: '/assets/media/williams-tzuyu-event-poster.webp',
    alt: 'Tzuyu × Williams F1 Fanmeet event poster',
    caption: 'The Fanmeet',
    category: 'Campaign',
  },
  {
    src: '/assets/media/williams-fanzone-mascot.webp',
    alt: 'DAN DA DAN character mascot displayed at the event',
    caption: 'The world of DAN DA DAN',
    category: 'Fan Zone',
  },
];

export const capabilities = [
  {
    number: '01',
    title: 'Crossover storytelling',
    text: 'Creative concepts that captures the target audience.',
  },
  {
    number: '02',
    title: 'Social first content',
    text: 'Short-form ideas shaped around strong hooks, platform-native pacing and audience engagement.',
  },
  {
    number: '03',
    title: 'Community insight',
    text: 'A fan led perspective on what makes content feel natural, specific and worth sharing.',
  },
  {
    number: '04',
    title: 'Event led storytelling',
    text: 'On-site or remote coverage concepts',
  },
];
