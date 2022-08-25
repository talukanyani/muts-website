import React from 'react';
import styles from './body.module.css'
import SmallHeading from '../elements/SmallHeading'
import stlogo from './assets/st-logo.svg'
import appstore from './assets/appstore.svg'
import googleplay from './assets/googleplay.svg'
import appgallery from './assets/appgallery.svg'

function Body(props) {
    return (
        <div className={styles.body_overlay}>
            <div className={styles.body}>
                <SmallHeading text='Apps' />
                <div className={styles.container}>
                    <h1>
                        <img
                            src={stlogo}
                            alt="ST App logo"
                        />
                        Student Tables
                    </h1>
                    <p>Manage assessments and activities.</p>
                    <ul>
                        <li>
                            <a href='/'>
                                <img
                                    src={appstore}
                                    alt='downlod on app store'
                                />
                            </a>
                        </li>
                        <li>
                            <a href='/'>
                                <img
                                    src={googleplay}
                                    alt='downlod on google play'
                                />
                            </a>
                        </li>
                        <li>
                            <a href='/'>
                                <img
                                    src={appgallery}
                                    alt='downlod on app gallery'
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Body;