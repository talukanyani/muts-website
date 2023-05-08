import React from 'react';
import styles from './Body.module.css'
import FilledButton from '../../../components/FilledButton'
import emailIcon from '../../../assets/icons/letter.svg'

export default function Body() {
    return (
        <div className={styles.body}>
            <div>
                <h1>Contact Us</h1>
                <div>
                    <div className={styles.email}>
                        <img alt='email icon' src={emailIcon} />
                        <section>
                            <h2>Email Us</h2>
                            <a href="mailto:tmlab.tech@outlook.com">
                                tmlab.tech@outlook.com
                            </a>
                        </section>
                    </div>
                    <div className={styles.message}>
                        <h2>Send Us A Message</h2>
                        <form>
                            <section>
                                <input
                                    type='text'
                                    name='name'
                                    placeholder=' '
                                    id='name'
                                />
                                <label htmlFor='name'>Name</label>
                            </section>
                            <section>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder=' '
                                    id='email'
                                />
                                <label htmlFor='email'>Email</label>
                            </section>
                            <section>
                                <textarea
                                    rows='6'
                                    placeholder=' '
                                    id='message'
                                ></textarea>
                                <label htmlFor='message'>
                                    Message
                                    {/* {!message &&
                                <span>{message.length} / 250</span>
                            } */}
                                </label>
                            </section>
                            <FilledButton type='submit'>Send</FilledButton>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
}