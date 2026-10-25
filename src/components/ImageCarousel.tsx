import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { GalleryImage } from '../data/site';

type ImageCarouselProps = {
  images: GalleryImage[];
  label: string;
  className?: string;
};

export function ImageCarousel({ images, label, className = '' }: ImageCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollTrack(direction: -1 | 1) {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const firstCard = track.querySelector<HTMLElement>('.image-carousel-card');
    const cardWidth = firstCard?.getBoundingClientRect().width ?? track.clientWidth * 0.75;
    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap || '18');

    track.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
    });
  }

  return (
    <div className={`image-carousel ${className}`}>
      <div className="image-carousel-controls">
        <span>DRAG OR SWIPE TO EXPLORE</span>
        <div>
          <button
            type="button"
            onClick={() => scrollTrack(-1)}
            aria-label={`Previous image in ${label}`}
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => scrollTrack(1)}
            aria-label={`Next image in ${label}`}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div
        className="image-carousel-track"
        ref={trackRef}
        aria-label={label}
        tabIndex={0}
      >
        {images.map((image, index) => (
          <figure className="image-carousel-card" key={image.src}>
            <div className="image-carousel-image-wrap">
              <img
                src={image.src}
                alt={image.alt}
                loading={index < 3 ? 'eager' : 'lazy'}
                decoding="async"
              />
              <span className="image-carousel-index">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <figcaption>
              <span>{image.category ?? 'T.A.S. / ARCHIVE'}</span>
              <strong>{image.caption}</strong>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
