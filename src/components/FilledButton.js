import React from 'react';
import styles from './FilledButton.module.css'
import { Link } from 'react-router-dom'

export default function Button({ text, onClick, link }) {
    if (link) {
        return (
            <Link to={link}>
                <button className={styles.button}>
                    {text}
                </button>
            </Link>
        )
    }

    return (
        <button
            className={styles.button}
            onClick={onClick}
        >
            {text}
        </button>
    );
}