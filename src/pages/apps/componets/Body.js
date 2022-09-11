import React, { useRef } from 'react';
import styles from './body.module.css'

import SmallHeading from '../elements/SmallHeading'

import sclogo from './assets/sc-logo.svg'
import appstore from './assets/appstore.svg'
import googleplay from './assets/googleplay.svg'
import appgallery from './assets/appgallery.svg'
import sc_app_illustration from './assets/sc_app_illustration.png'

function Body(props) {
    const emailInput = useRef(null)

    return (
        <div className={styles.body_overlay}>
            <div className={styles.body}>
                <SmallHeading text='Apps' />
                <div className={styles.container}>
                    <div className={styles.app_photos}>
                        <img
                            src={sc_app_illustration}
                            alt='illustration'
                        />
                    </div>
                    <div className={styles.app_content}>
                        <div className={styles.app_heading}>
                            <img
                                src={sclogo}
                                alt="SC App logo"
                            />
                            <section>
                                <h1>
                                    Student Calender -{' '}
                                    <abbr title='Student Calender'>SC</abbr>
                                </h1>
                                <p>Manage assessments and activities.</p>
                            </section>
                        </div>
                        <div className={styles.app_download}>
                            <ul>
                                <li>
                                    <span onClick={() => emailInput.current.focus()} >
                                        <img
                                            src={appstore}
                                            alt='downlod on app store'
                                        />
                                    </span>
                                </li>
                                <li>
                                    <span onClick={() => emailInput.current.focus()}>
                                        <img
                                            src={googleplay}
                                            alt='downlod on google play'
                                        />
                                    </span>
                                </li>
                                <li>
                                    <span onClick={() => emailInput.current.focus()}>
                                        <img
                                            src={appgallery}
                                            alt='downlod on app gallery'
                                        />
                                    </span>
                                </li>
                            </ul>
                            <section>
                                <p>
                                    <abbr title='Student Calender'>SC</abbr> is not yet available,
                                    leave your email below to get notified when it's available.
                                </p>
                                <form>
                                    <input
                                        type='email'
                                        placeholder='Email Address'
                                        name='queemail'
                                        required
                                        ref={emailInput}
                                    />
                                    <input type='submit' value='Notify me' />
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Body;