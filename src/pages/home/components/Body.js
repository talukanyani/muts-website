import React from 'react';
import styles from './Body.module.css'
import FilledButton from '../../../components/FilledButton';
import arrow_icon from '../../../assets/icons/arrow.svg'

export default function Body() {
    return (
        <div className={styles.body}>
            <div className={styles.body_content}>
                <header>
                    <h1>Elevate your Digital Experience</h1>
                    <img
                        alt='arrow down icon'
                        src={arrow_icon}
                        onClick={() => window.scrollBy(0, 300)}
                    />
                </header>
                <div className={styles.sc_app_card}>
                    <section className={styles.sc_app_card_content}>
                        <h2>Student Calendar</h2>
                        <p>A mobile application</p>
                        <FilledButton link='/student_calendar'>
                            Show More
                        </FilledButton>
                    </section>
                </div>
            </div>
        </div>
    );
}