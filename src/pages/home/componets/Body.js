import React, { useState } from 'react';
import styles from './body.module.css'
import twitter from './assets/icon-twitter.svg'
import instagram from './assets/icon-instagram.svg'

function Body(props) {
    const [isContBox, toogleContBox] = useState(true)
    const box_class = isContBox ? styles.container_contact_box : 'undifined';

    return (
        <div className={styles.cover}>
            <div className={styles.body}>
                <div className={`${styles.container} ${styles.container_apps}`}>
                    <h1>Apps</h1>
                    <p>Explore apps engineered and developed for you.</p>
                    <button>
                        <span>Show all apps</span>
                    </button>
                </div>
                <div
                    className={`${styles.container} ${styles.container_contact} ${box_class}`}
                >
                    <div>
                        <h1>Contact</h1>
                        <p>Get in touch with related information.</p>
                        <button
                        //  onClick={() => toogleContBox(!isContBox)}
                        >
                            <span>Contact us</span>
                        </button>
                    </div>
                    {/* <div>
                        <form>
                            <input type='text' id='names' required />
                            <label for='names'>Names</label>
                            <input type='email' id='email' required />
                            <label for='email'>Email</label>
                            <textarea id='message' rows='3' required></textarea>
                            <label for='message'>Message</label>
                            <input type='submit' value='Send' />
                        </form>
                        <p>
                            You can either email us at{' '}
                            <a href='mailto:1905talu@gmail.com'>
                                hello@tmlab.tech
                            </a>
                        </p>
                    </div> */}
                </div>
                <div className={`${styles.container} ${styles.container_connect}`}>
                    <h1>Connect with us</h1>
                    <p>Never miss updates, subscribe to our newsletter or follow us in our social media.</p>
                    <section>
                        <form>
                            <input type='email' placeholder='Email' />
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