import React, { useState } from 'react';
import styles from './ContModal.module.css'

import SmallHeading from '../elements/SmallHeading'

import closeimg from '../assets/icon-close.svg'
import emailicon from '../assets/icon-email.svg'

function ContModal(props) {
    const [radioBtnValue, setRadioBtnValue] = useState('sendhere')

    return (
        <div
            className={[
                styles.modal_overlay,
                props.isContModal ? styles.modal_open : 'undifined'
            ].join(' ')}
            onClick={props.close}
        >
            <div
                className={styles.modal}
                onClick={e => e.stopPropagation()}
            >
                <img
                    className={styles.closingicon}
                    src={closeimg}
                    alt='closing button-icon'
                    onClick={props.close}
                />
                <SmallHeading text='Contact us' />
                <div className={styles.tabs}>
                    <section onClick={() => setRadioBtnValue('sendhere')}>
                        Send here
                    </section>
                    <input
                        type='radio'
                        name='tabs'
                        value='sendhere'
                        checked={radioBtnValue === 'emails'}
                    />
                    <section onClick={() => setRadioBtnValue('emails')}>
                        Email
                    </section>
                    <input
                        type='radio'
                        name='tabs'
                        value='emails'
                        checked={radioBtnValue === 'emails'}
                    />
                    <span></span>
                </div>
                <form
                    className={[
                        styles.contact_form,
                        radioBtnValue === 'emails'
                            ? styles.contact_form_hide
                            : 'undifined'
                    ].join(' ')}
                >
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
                <ul
                    className={[
                        styles.emails,
                        radioBtnValue === 'sendhere'
                            ? styles.emails_hide
                            : 'undifined'
                    ].join(' ')}
                >
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
            </div>
        </div >
    );
}

export default ContModal;