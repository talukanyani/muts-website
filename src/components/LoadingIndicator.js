import React from 'react';
import styles from './LoadingIndicator.module.css';

export default function LoadingIndicator({ message }) {
  return (
    <div className={styles.loading_indicator}>
      <div className={styles.spinner}></div>
      <p>{message}</p>
    </div>
  );
}