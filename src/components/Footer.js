import React from 'react';
import styles from './Footer.module.css'
import { Link } from 'react-router-dom';

export default function Footer() {
    const scrollToTop = () => window.scrollTo(0, 0)

    var date = new Date()

    return (
        <div className={styles.footer}>
            <div className={styles.footer_content}>
                <p>
                    &copy; {date.getFullYear()} Muts. All rights reserved.
                </p>
                <Link to='/terms' onClick={scrollToTop}>
                    Terms
                </Link>
                <Link to='/privacy' onClick={scrollToTop}>
                    Privacy
                </Link>
            </div>
        </div>
    );
}