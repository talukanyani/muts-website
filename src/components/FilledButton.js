import React from 'react';
import styles from './FilledButton.module.css'
import { Link } from 'react-router-dom'

export default function Button({ children, link, onClick, type }) {
    if (link) {
        return (
            <Link to={link}>
                <button className={styles.button}>
                    {children}
                </button>
            </Link>
        )
    }

    return (
        <button
            className={styles.button}
            onClick={onClick}
            type={type ? type : 'button'}
        >
            {children}
        </button>
    );
}