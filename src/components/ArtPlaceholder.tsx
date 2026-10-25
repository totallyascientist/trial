import type { CSSProperties } from 'react';

type ArtPlaceholderProps = {
  src: string;
  alt: string;
  className?: string;
  label?: string;
};

export function ArtPlaceholder({
  src,
  alt,
  className = '',
  label = 'ART DIRECTION PLACEHOLDER',
}: ArtPlaceholderProps) {
  const style = {
    '--art-image': `url("${src}")`,
  } as CSSProperties;

  return (
    <div
      className={`art-placeholder ${className}`}
      style={style}
      role="img"
      aria-label={alt}
    >
      <div className="art-grid" aria-hidden="true" />
      <span className="art-label">{label}</span>
      <span className="art-corner" aria-hidden="true">
        T.A.S.
      </span>
    </div>
  );
}
