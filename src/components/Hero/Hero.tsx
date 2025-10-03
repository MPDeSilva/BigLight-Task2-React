import React from 'react';
import styles from './Hero.module.scss';

type Props = { image: string; alt: string; eyebrow?: string; title?: string; subtitle?: string; cta?: { text: string; url: string } };
export default function Hero({ image, alt, eyebrow, title, subtitle, cta }: Props) {
  return (
    <section className={styles.hero}>
      <div className={styles.media} role="img" aria-label={alt}>
        <img src={image} alt={alt} />
        <div className={styles.overlay} />
        <div className={`container ${styles.content}`}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          {title && <h1 className={styles.title}>{title}</h1>}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          {cta?.url && <a className="btn" href={cta.url}>{cta.text}</a>}
        </div>
      </div>
    </section>
  );
}
