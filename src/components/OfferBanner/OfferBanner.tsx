import React from 'react';
import styles from './OfferBanner.module.scss';

type Props = { text: string; cta?: { text: string; url: string } };
export default function OfferBanner({ text, cta }: Props) {
  return (
    <section className={styles.offer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.text} dangerouslySetInnerHTML={{ __html: text }} />
          {cta?.url && <a className="btn btnLight" href={cta.url}>{cta.text}</a>}
        </div>
      </div>
    </section>
  );
}
