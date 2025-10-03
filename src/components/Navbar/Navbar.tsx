import React from 'react';
import styles from './Navbar.module.scss';

type Link = { label: string; url: string };
type Props = {
  utilityLinks: Link[];
  country?: string;
  logo: { text: string; url: string };
  categories: Link[];
  promo?: { left: string; right: string; rightUrl: string };
};

export default function Navbar({ utilityLinks, country, logo, categories, promo }: Props) {
  return (
    <header className={styles.nav}>
      <div className={styles.utility}>
        <div className={`container ${styles.utilityRow}`}>
          <nav aria-label="Utility">
            <ul className={styles.list}>
              {utilityLinks.map((l, i) => (<li key={i}><a href={l.url}>{l.label}</a></li>))}
            </ul>
          </nav>
          <div className={styles.locale}>
            {country && <><span aria-hidden>🇬🇧</span><span className="sr-only">{country}</span></>}
          </div>
        </div>
      </div>

      <div className={styles.brandbar}>
        <div className={`container ${styles.brandbarRow}`}>
          <a className={styles.logo} href={logo.url}>{logo.text}</a>

          <form className={styles.search} role="search" aria-label="Site search" onSubmit={e => e.preventDefault()}>
            <label className="sr-only" htmlFor="q">Search</label>
            <input id="q" name="q" type="search" placeholder="Search" />
            <button type="submit" aria-label="Search">🔍</button>
          </form>

          <ul className={styles.icons}>
            <li><a href="#" aria-label="Account">👤</a></li>
            <li><a href="#" aria-label="Wishlist">♡</a></li>
            <li><a href="#" aria-label="Bag/Cart">🛍️</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.cats}>
        <div className="container">
          <nav aria-label="Primary">
            <ul className={`${styles.list} ${styles.catsList}`}>
              {categories.map((c, i) => (<li key={i}><a href={c.url}>{c.label}</a></li>))}
            </ul>
          </nav>
        </div>
      </div>

      {promo && (
        <div className={styles.promo}>
          <div className={`container ${styles.promoRow}`}>
            <span>{promo.left}</span>
            <span className={styles.promoDot} aria-hidden>•</span>
            <a href={promo.rightUrl}>{promo.right}</a>
          </div>
        </div>
      )}
    </header>
  );
}
