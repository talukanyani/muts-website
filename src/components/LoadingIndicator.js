import React from 'react'
import styles from './LoadingIndicator.module.css'

export default function Spinner({ message }) {
    return (
        <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <p>{message}</p>
        </div>
    )
}