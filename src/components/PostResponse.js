import React from 'react'
import styles from './PostResponse.module.css'
import doneIcon from '../assets/icons/done.svg'
import errorIcon from '../assets/icons/error.svg'

export function Success({ title, message }) {
    return (
        <div className={styles.success}>
            <span>
                <img alt='success icon' src={doneIcon} />
            </span>
            <h3>{title}</h3>
            <p>{message}</p>
        </div>
    )
}

export function Error({ message }) {
    return (
        <div className={styles.error}>
            <span>
                <img alt='error icon' src={errorIcon} />
            </span>
            <h3>Something Went Wrong</h3>
            <p>{message}</p>
            <button onClick={() => window.location.reload()}>
                Try Again
            </button>
        </div>
    )
}