import React from 'react';
import styles from './Footer.module.css'
import { Link } from 'react-router-dom';

import twitter_icon from '../assets/icons/twitter.svg'
import facebook_icon from '../assets/icons/facebook.svg'
import instagram_icon from '../assets/icons/instagram.svg'

export default function Footer() {
    const scrollToTop = () => window.scrollTo(0, 0)

    var date = new Date()

    return (
        <div className={styles.footer}>
            <section className={styles.legal}>
                <p>
                    &copy; {date.getFullYear()} Muts. All rights reserved.
                </p>
                <Link to='/terms' onClick={scrollToTop}>
                    Terms
                </Link>
                <Link to='/privacy' onClick={scrollToTop}>
                    Privacy
                </Link>
            </section>
            <section className={styles.socials}>
                <a
                    target='_blank'
                    rel="noopener noreferrer"
                    href='https://twitter.com/muts_dev'
                >
                    <img src={twitter_icon} alt="twitter icon button" />
                </a>
                <a
                    target='_blank'
                    rel="noopener noreferrer"
                    href='https://facebook.com/muts_dev'
                >
                    <img src={facebook_icon} alt="facebook icon button" />
                </a>
                <a
                    target='_blank'
                    rel="noopener noreferrer"
                    href='https://instagram.com/muts.dev'
                >
                    <img src={instagram_icon} alt="instagram icon button" />
                </a>
            </section>
        </div>
    );
}

