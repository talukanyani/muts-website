import React from 'react';
import styles from './Body.module.css'
import { Link } from 'react-router-dom';
import { FilledButton } from '../../../components/Buttons';
import sc_app_logo from '../../../assets/images/sc_app_logo.svg';

export default function Body() {
    return (
        <div className={styles.body}>
            <header>
                <section>
                    <h1>Unleash the power of your devices</h1>
                    <p>We have developed right applications for you.</p>
                    <a href='#apps'>
                        <FilledButton>See all Apps</FilledButton>
                    </a>
                </section>
                <section></section>
            </header>
            <div id='apps' className={styles.apps}>
                <h2>Applications</h2>
                <div className={styles.sc_app}>
                    <section>
                        <img src={sc_app_logo} alt='Student Calendar logo' />
                    </section>
                    <h3>Student Calendar</h3>
                    <p>A mobile application</p>
                    <Link
                        to='/student_calendar'
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        <FilledButton>Show More</FilledButton>
                    </Link>
                </div>
            </div>
        </div>
    );
}