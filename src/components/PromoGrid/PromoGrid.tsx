import React from 'react';
import styles from './PromoGrid.module.scss';

type Item = { image: string; alt?: string; eyebrow?: string; title?: string; caption?: string; cta?: string };
type Props = { items: Item[] };

export default function PromoGrid({ items }: Props) {
  return (
    <section className={`container ${styles.grid}`}>
      {items.map((it, i) => (
        <article key={i} className={styles.card}>
          <img className={styles.img} src={it.image} alt={it.alt || ''} />
          <div className={styles.content}>
            {it.eyebrow && <p className={styles.eyebrow}>{it.eyebrow}</p>}
            {it.title && <h2 className={styles.title}>{it.title}</h2>}
            {it.caption && <p className={styles.caption}>{it.caption}</p>}
            {it.cta && <a className={styles.link} href={it.cta}>Shop now</a>}
          </div>
        </article>
      ))}
    </section>
  );
}
