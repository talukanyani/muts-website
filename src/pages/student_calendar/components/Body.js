import React, { useState } from 'react';
import styles from './Body.module.css'
import Devices from './Devices'
import playStoreImage from '../../../assets/images/play_store.svg'
import appStoreImage from '../../../assets/images/app_store.svg'

export default function Body() {
    return (
        <div className={styles.body}>
            <div className={styles.body_content}>
                <header>
                    <div>
                        <p>Student Calendar</p>
                        <h1>
                            Stay Organized and on Track.
                            Manage your Academic Activities
                        </h1>
                        <section>
                            <a href='/'>
                                <img
                                    alt='Play Store icon buttton'
                                    src={playStoreImage}
                                />
                            </a>
                            <span>
                                <img
                                    alt='App Store icon buttton'
                                    src={appStoreImage}
                                />
                            </span>
                        </section>
                    </div>
                    <Devices />
                </header>
            </div>
        </div>
    );
}