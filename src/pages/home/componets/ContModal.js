import React, { useState } from 'react';
import styles from './cont-modal.module.css'
import closeimg from './assets/icon-close.svg'
import emailicon from './assets/icon-email.svg'
import SmallHeading from '../elements/SmallHeading'

function ContModal(props) {
    const [isChecked, setIsChecked] = useState(true)

    return (
        <div
            className={
                `${styles.modal_overlay}
                 ${props.isContModal ? styles.modal_open : 'undifined'}`
            }
        >
            <div className={styles.modal}>
                <img
                    className={styles.closingicon}
                    src={closeimg}
                    alt='closing button-icon'
                    onClick={props.close}
                />
                <SmallHeading text='Contact us' />
                <div className={styles.tabs}>
                    <input
                        type='radio'
                        name='tabs'
                        id='sendhere'
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                    />
                    <label htmlFor='sendhere'>Send here</label>
                    <input
                        type='radio'
                        name='tabs'
                        id='emails'
                        checked={!isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                    />
                    <label htmlFor='emails'>Email</label>
                    <span></span>
                </div>
                {isChecked &&
                    <form className={styles.contact_form}>
                        <section>
                            <input
                                type='text'
                                id='names'
                                required
                                placeholder=' '
                            />
                            <label htmlFor='names'>Names</label>
                        </section>
                        <section>
                            <input
                                type='email'
                                id='email'
                                required
                                placeholder=' '
                            />
                            <label htmlFor='email'>Email</label>
                        </section>
                        <section>
                            <input
                                type='text'
                                id='names'
                                required
                                placeholder=' '
                            />
                            <label htmlFor='messagetitle'>Message Title</label>
                        </section>
                        <section>
                            <textarea
                                id='message'
                                rows='3'
                                required
                                placeholder=' '
                            ></textarea>
                            <label htmlFor='message'>Message</label>
                        </section>
                        <input type='submit' value='Send' />
                    </form>
                }
                {!isChecked &&
                    <ul className={styles.emails}>
                        <li>
                            <img
                                src={emailicon}
                                alt='email icon'
                            />
                            <a href='mailto:1905talu@gmail.com'>
                                hello@tmlab.tech
                            </a>
                        </li>
                        <li>
                            <img
                                src={emailicon}
                                alt='email icon'
                            />
                            <a href='mailto:1905talu@gmail.com'>
                                support@tmlab.tech
                            </a>
                        </li>
                    </ul>
                }
            </div>
        </div >
    );
}

export default ContModal;