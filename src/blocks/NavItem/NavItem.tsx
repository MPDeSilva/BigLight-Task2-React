import React from 'react';
import styles from './NavItem.module.scss';

export default function NavItem({ label, url }: { label:string; url:string }) {
  return <li className={styles.item}><a href={url}>{label}</a></li>;
}
