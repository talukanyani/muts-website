import React from 'react';
import styles from './AppsBody.module.css'

import SCapp from './SCapp';

export default function Body() {
    return (
        <div className={styles.body_overlay}>
            <div className={styles.body}>
                <header>
                    <h1>Apps</h1>
                </header>
                <div className={styles.apps}>
                    <SCapp />
                </div>
            </div>
        </div>
    );
}