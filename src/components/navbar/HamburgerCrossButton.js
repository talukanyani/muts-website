import React from 'react'
import styles from './HamburgerCrossButton.module.css'

export default function HamburgerCrossButton({ onClick, isCross }) {
    return (
        <section
            onClick={onClick}
            className={[
                styles.hamburger_button,
                isCross ? styles.cross_button : undefined,
            ].join(' ')}
        >
            <span></span>
            <span></span>
            <span></span>
        </section>
    )
}
