import React from 'react';
import styles from './body.module.css'

function Body(props) {
    return (
        <div className={styles.cover}>
            <div className={styles.body}>
                <div className={`${styles.container} ${styles.container_apps}`}>
                    <h1>Apps</h1>
                    <p>Explore apps engineered and developed for you.</p>
                    <button>Show all apps</button>
                </div>
                <div id="talu" className={`${styles.container} ${styles.container_contact}`}>
                    <h1>Contact</h1>
                    <p>Get in touch with related information.</p>
                    <button>Contact us</button>
                </div>
                <div className={`${styles.container} ${styles.container_connect}`}>
                    <h1>Connect with us</h1>
                    <p>Never miss updates, subscribe to our newsletter or follow us in our social medias</p>
                    <section>
                        <form>
                            <input type='email' />
                            <input type='submit' value='Subscribe' />
                        </form>
                        <ul>
                            <li>twitter</li>
                            <li>instagram</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Body;