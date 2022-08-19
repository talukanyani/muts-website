import React from 'react';
import styles from './body.module.css'

function Body(props) {
    return (
        <div className={styles.body_overlay}>
            <div className={styles.body}>
                <div className={`${styles.container} ${styles.container_st}`}>
                    <h1>Student Tables</h1>
                    <p>Manage assessments and activities.</p>
                    <ul>
                        <li>App Store</li>
                        <li>Google Play</li>
                        <li>App Gallery</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Body;