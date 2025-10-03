import React from 'react';
import styles from './ProductCard.module.scss';

type Props = { image:string; alt?:string; title?:string; price?:string; url?:string };
export default function ProductCard({ image, alt, title, price, url }: Props) {
  return (
    <article className={styles.card}>
      <img className={styles.img} src={image} alt={alt || ''} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.price}>{price}</p>
      <a className="btn btnGhost" href={url || '#'}>View</a>
    </article>
  );
}
