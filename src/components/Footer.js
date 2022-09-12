import React from 'react';
import styles from './Footer.module.css'

function Footer() {
    var date = new Date()

    return (
        <div className={styles.footer}>
            <p> &copy; {date.getFullYear()} Tmlab. All rights reserved.</p>
            <ul>
                <li>
                    <a href='/'>Terms</a>
                </li>
                <li>
                    <a href='/'>Privacy</a>
                </li>
            </ul>
        </div>
    );
}

export default Footer;