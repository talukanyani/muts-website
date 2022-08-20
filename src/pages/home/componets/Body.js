import React, { useState } from 'react';
import styles from './body.module.css'
import twitter from './assets/icon-twitter.svg'
import instagram from './assets/icon-instagram.svg'
import ContModal from './ContModal';
import Button from '../elements/Button';

function Body(props) {
    const [isContModal, setIsContModal] = useState(false)

    return (
        <div className={styles.body_overlay}>
            <div className={styles.body}>
                <div className={styles.container_apps}>
                    <h1>
                        <span>Apps</span>
                    </h1>
                    <h2>Explore apps engineered and developed for you.</h2>
                    <Button text='Show all apps' />
                </div>
                <div className={styles.container_contact}>
                    <h1>Contact</h1>
                    <p>Get in touch with related information.</p>
                    <Button
                        text='Contact us'
                        onClick={() => setIsContModal(true)}
                    />
                    <ContModal
                        isContModal={isContModal}
                        close={() => setIsContModal(false)}
                    />
                </div>
                <div className={styles.container_connect}>
                    <h1>Connect with us</h1>
                    <p>Never miss updates, subscribe to our newsletter or follow us in our social media.</p>
                    <section>
                        <form>
                            <input type='email' placeholder='Email' required />
                            <input type='submit' value='Subscribe' />
                        </form>
                        <ul>
                            <li>
                                <a target='_blank' href='https://twitter.com/tmlab_dot_app'>
                                    <img src={twitter} alt="twitter icon" />
                                </a>
                            </li>
                            <li>
                                <a target='_blank' href='https://instagram.com/tmlab.app'>
                                    <img src={instagram} alt="instagram icon" />
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div >
    );
}

export default Body;