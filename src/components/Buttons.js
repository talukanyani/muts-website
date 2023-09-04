import React from 'react';
import styles from './Buttons.module.css'

export function FilledButton({ children, onClick, type, disabled }) {
    return (
        <button
            className={styles.filled_button}
            onClick={onClick}
            type={type ? type : 'button'}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
