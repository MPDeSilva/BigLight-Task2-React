import React from 'react';
import styles from './ProductGrid.module.scss';

type Item = { image: string; alt?: string; title?: string; price?: string; url?: string };
type Props = { title?: string; items: Item[] };

export default function ProductGrid({ title, items }: Props) {
  return (
    <section className="container">
      {title && <h2 className="sectionTitle">{title}</h2>}
      <div className={styles.row}>
        {items.map((it, i) => (
          <article key={i} className={styles.card}>
            <img className={styles.img} src={it.image} alt={it.alt || ''} />
            <h3 className={styles.title}>{it.title}</h3>
            <p className={styles.price}>{it.price}</p>
            <a className="btn btnGhost" href={it.url || '#'}>View</a>
          </article>
        ))}
      </div>
    </section>
  );
}
