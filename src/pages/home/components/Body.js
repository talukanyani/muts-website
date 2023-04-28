import React from 'react';
import styles from './Body.module.css'
import FilledButton from '../../../components/FilledButton';

export default function Body() {
    return (
        <div className={styles.body}>
            <div className={styles.body_content}>
                <div className={styles.sc_app_card}>
                    <div className={styles.sc_app_card_content}>
                        <h1>
                            <span>Mobile App</span>
                        </h1>
                        <h2>Student Calendar</h2>
                        <FilledButton
                            text='Show More'
                            link='/student_calendar'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}