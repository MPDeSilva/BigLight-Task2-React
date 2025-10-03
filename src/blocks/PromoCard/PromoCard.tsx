import React from 'react';
import styles from './PromoCard.module.scss';

type Props = { image: string; alt?: string; title?: string; caption?: string; cta?: string };
export default function PromoCard({ image, alt, title, caption, cta }: Props) {
  return (
    <article className={styles.card}>
      <img className={styles.img} src={image} alt={alt || ''} />
      <div className={styles.content}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {caption && <p className={styles.caption}>{caption}</p>}
        {cta && <a className={styles.link} href={cta}>Shop now</a>}
      </div>
    </article>
  );
}
