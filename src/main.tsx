import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { PageShell } from './components/Layout';
import Home from './pages/Home';
import FanZone from './pages/FanZone';
import About from './pages/About';
import Creator from './pages/Creator';
import Partnerships from './pages/Partnerships';
import MediaKit from './pages/MediaKit';
import Contact from './pages/Contact';
import TwiceF1Mod from './pages/TwiceF1Mod';
import Voting from './pages/Voting';
import { Privacy } from './pages/Legacy';
import './styles.css';

function NotFound() {
  return (
    <div className="legacy-page">
      <p className="eyebrow">404 / OFF THE GRID</p>
      <h1>
        <br />
        THIS PAGE
        <br />
        <em>TOOK A PIT STOP.</em>
      </h1>
      <p>The address may have changed. Head back to the homepage to find your way around.</p>
      <a className="button button-dark" href="/">
        Back to home ↗
      </a>
    </div>
  );
}

const seo: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Where K-pop Meets Motorsport',
    description:
      'Two worlds. One community. Discover K-pop and motorsport culture, fan projects and social-first storytelling',
  },
  '/fan-zone': {
    title: 'Fan Zone',
    description:
      'A crossover community for K-pop and motorsport fans. Explore community engagement projects for fans!',
  },
  '/about': {
    title: 'About the K-pop × Motorsport Channel',
    description:
      'Explore the niche, selected content, channel statistics and event highlights.',
  },
  '/creator': {
    title: 'About the Creator',
    description: 'Meet Ernest, explore his creator story and racing journey.',
  },
  '/partnerships': {
    title: 'Partnerships',
    description:
      'Social-first content, event storytelling, crossover concepts and community activations connecting K-pop and motorsport.',
  },
  '/media-kit': {
    title: 'Media Kit',
    description:
      'Creator profile, audience metrics, partnership formats and contact details for T.A.S.',
  },
  '/contact': {
    title: 'Contact',
    description:
      'Contact T.A.S. for creative collaborations, media enquiries, event opportunities and K-pop × motorsport partnerships.',
  },
  '/resources': {
  title: 'TWICE × F1 Car Mod — K-pop × Motorsport',
  description:
    'Explore the TWICE-inspired Assetto Corsa Formula Hybrid car livery project, view all eight preview images and access the download.',
  },
  '/twice-f1-mod': {
  title: 'TWICE × F1 Car Mod — K-pop × Motorsport',
  description:
    'Explore the TWICE-inspired Assetto Corsa Formula Hybrid car livery project, view all eight preview images and access the download.',
  },
  '/privacy': {
    title: 'Privacy',
    description: 'Privacy information for the T.A.S. website and partnership enquiries.',
  },
  '/vote': {
  title: 'Idol of the Week — K-pop × Motorsport',
  description:
    'Vote for your favourite K-pop idol in the Idol of the Week fan poll and explore the current standings.',
  },
};

function Seo() {
  const location = useLocation();

  useEffect(() => {
    const page =
      seo[location.pathname] ?? {
        title: 'Page Not Found — T.A.S.',
        description: 'Find your way back to T.A.S., where K-pop meets motorsport.',
      };
    const canonicalUrl = `https://totallyascientist.com${
      location.pathname === '/' ? '/' : location.pathname
    }`;

    document.title = page.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', page.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', page.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute('content', page.description);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Seo />
      <PageShell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fan-zone" element={<FanZone />} />
          <Route path="/about" element={<About />} />
          <Route path="/creator" element={<Creator />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/media-kit" element={<MediaKit />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vote" element={<Voting />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/twice-f1-mod" element={<TwiceF1Mod />} />
        </Routes>
      </PageShell>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
