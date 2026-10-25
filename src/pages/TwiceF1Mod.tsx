
import { useState } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Download,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const carImages = [
  {
    src: '/assets/media/car-1.webp',
    alt: 'TWICE × F1 Assetto Corsa car livery — image 1',
  },
  {
    src: '/assets/media/car-2.webp',
    alt: 'TWICE × F1 Assetto Corsa car livery — image 2',
  },
  {
    src: '/assets/media/car-3.webp',
    alt: 'TWICE × F1 Assetto Corsa car livery — image 3',
  },
  {
    src: '/assets/media/car-4.webp',
    alt: 'TWICE × F1 Assetto Corsa car livery — image 4',
  },
  {
    src: '/assets/media/car-5.webp',
    alt: 'TWICE × F1 Assetto Corsa car livery — image 5',
  },
  {
    src: '/assets/media/car-6.webp',
    alt: 'TWICE × F1 Assetto Corsa car livery — image 6',
  },
  {
    src: '/assets/media/car-7.webp',
    alt: 'TWICE × F1 Assetto Corsa car livery — image 7',
  },
  {
    src: '/assets/media/car-8.webp',
    alt: 'TWICE × F1 Assetto Corsa car livery — image 8',
  },
];

const downloadUrl =
  'https://drive.google.com/file/d/1ctYO4CJRcZ6gAzIzSMLGnff5uuNQqy3-/view?usp=sharing';

export default function TwiceF1Mod() {
  const [activeImage, setActiveImage] = useState(0);

  const previousImage = () => {
    setActiveImage((current) =>
      current === 0 ? carImages.length - 1 : current - 1,
    );
  };

  const nextImage = () => {
    setActiveImage((current) =>
      current === carImages.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <main
      style={{
        background: '#0b0c0e',
        color: '#f5f4f0',
        minHeight: '100vh',
      }}
    >
      <section
        style={{
          padding: 'clamp(80px, 12vw, 150px) var(--page)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
          gap: 'clamp(35px, 6vw, 90px)',
          alignItems: 'center',
        }}
      >
        <div>
          <p className="eyebrow">T.A.S. / COMMUNITY PROJECT 001</p>

          <h1
            style={{
              fontFamily: 'var(--display)',
              fontSize: 'clamp(56px, 9vw, 112px)',
              lineHeight: 0.88,
              letterSpacing: '-0.04em',
              margin: '0 0 28px',
            }}
          >
            TWICE
            <br />
            <span style={{ color: '#49c0ec' }}>×</span> F1
            <br />
            <span style={{ color: '#a7a7a7' }}>CAR MOD.</span>
          </h1>

          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.8,
              color: '#b9b8b3',
              maxWidth: '510px',
            }}
          >
            What happens when the world of K-pop meets the world of
            motorsport? This fan-made Assetto Corsa project brings
            TWICE-inspired liveries to the virtual racetrack.
          </p>

          <a
            href={downloadUrl}
            target="_blank"
            rel="noreferrer"
            className="button button-light"
            style={{ marginTop: '22px' }}
          >
            <Download size={17} />
            Download the mod
            <ArrowUpRight size={17} />
          </a>

          <p
            style={{
              color: '#858585',
              fontSize: '11px',
              lineHeight: 1.8,
              marginTop: '22px',
              maxWidth: '460px',
            }}
          >
            Designed for the RSS Formula Hybrid 2022 chassis, the
            project features custom liveries inspired by all nine
            TWICE members, plus a special white livery celebrating
            the group's 10th anniversary.
          </p>
        </div>

        <div>
          <div
            style={{
              position: 'relative',
              background: '#17191c',
              overflow: 'hidden',
              aspectRatio: '4 / 3',
            }}
          >
            <img
              src={carImages[activeImage].src}
              alt={carImages[activeImage].alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
              }}
            />

            <button
              type="button"
              onClick={previousImage}
              aria-label="Previous car image"
              style={carouselButtonStyle('left')}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              type="button"
              onClick={nextImage}
              aria-label="Next car image"
              style={carouselButtonStyle('right')}
            >
              <ChevronRight size={24} />
            </button>

            <span
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                background: 'rgba(11,12,14,.82)',
                padding: '8px 12px',
                fontSize: '10px',
                letterSpacing: '.1em',
              }}
            >
              IMAGE {String(activeImage + 1).padStart(2, '0')} /{' '}
              {String(carImages.length).padStart(2, '0')}
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: '8px',
              marginTop: '10px',
            }}
          >
            {carImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`Show car image ${index + 1}`}
                aria-pressed={activeImage === index}
                style={{
                  padding: 0,
                  border:
                    activeImage === index
                      ? '2px solid #49c0ec'
                      : '2px solid transparent',
                  background: '#17191c',
                  cursor: 'pointer',
                  aspectRatio: '4 / 3',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={image.src}
                  alt=""
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: '65px var(--page)',
          background: '#f5f4f0',
          color: '#0b0c0e',
        }}
      >
        <p className="eyebrow">ABOUT THE PROJECT</p>

        <h2
          style={{
            fontFamily: 'var(--display)',
            fontSize: 'clamp(38px, 6vw, 72px)',
            lineHeight: 0.95,
            margin: '0 0 24px',
          }}
        >
          TWO WORLDS.
          <br />
          ONE GRID.
        </h2>

        <div style={{ maxWidth: '760px' }}>
          <p style={{ fontSize: '15px', lineHeight: 1.9, color: '#555' }}>
            The TWICE × F1 Car Mod is a crossover fan project created
            for fans who love both K-pop and racing. It reimagines the
            visual identity of a Formula-style car through TWICE-inspired
            custom liveries, bringing music fandom into the sim-racing
            experience.
          </p>

          <p style={{ fontSize: '15px', lineHeight: 1.9, color: '#555' }}>
            The project includes designs inspired by the nine members
            of TWICE and an additional white anniversary livery. The
            mod is intended for Assetto Corsa and is based on the RSS
            Formula Hybrid 2022 chassis; check the original car's
            requirements and permissions before installing.
          </p>
        </div>

        <a
          href={downloadUrl}
          target="_blank"
          rel="noreferrer"
          className="button button-dark"
          style={{ marginTop: '18px' }}
        >
          Get the mod <ArrowUpRight size={17} />
        </a>

        <p
          style={{
            marginTop: '35px',
            fontSize: '11px',
            lineHeight: 1.8,
            color: '#777',
            maxWidth: '760px',
          }}
        >
          This is an unofficial fan-made project. T.A.S. is not
          affiliated with or endorsed by TWICE, JYP Entertainment,
          Formula 1, Assetto Corsa or RSS. All respective names and
          trademarks belong to their owners. Please respect the
          original creators' licensing and redistribution terms.
        </p>
      </section>

      <footer
        style={{
          padding: '30px var(--page)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        <Link to="/resources" className="text-link text-link-light">
          <ArrowLeft size={15} />
          Back to resources
        </Link>

        <Link to="/fan-zone" className="text-link text-link-light">
          Explore Fan Zone <ArrowUpRight size={15} />
        </Link>
      </footer>
    </main>
  );
}

function carouselButtonStyle(side: 'left' | 'right') {
  return {
    position: 'absolute' as const,
    top: '50%',
    [side]: '12px',
    transform: 'translateY(-50%)',
    width: '42px',
    height: '42px',
    display: 'grid',
    placeItems: 'center',
    border: '1px solid rgba(255,255,255,.3)',
    background: 'rgba(11,12,14,.75)',
    color: '#f5f4f0',
    cursor: 'pointer',
  };
}
