import React from 'react';
import styles from './cont-modal.module.css'
import closeimg from './assets/icon-close.svg'

function ContModal(props) {
    const class1 = props.isContModal
        ? styles.modal_open
        : 'undifined';

    return (
        <div className={`${styles.modal_overlay} ${class1}`}>
            <div className={styles.modal}>
                <img
                    src={closeimg}
                    alt='closing button-icon'
                    onClick={props.close}
                />
                <form>
                    <input type='text' id='names' required />
                    <label htmlFor='names'>Names</label>
                    <input type='email' id='email' required />
                    <label htmlFor='email'>Email</label>
                    <textarea id='message' rows='3' required></textarea>
                    <label htmlFor='message'>Message</label>
                    <input type='submit' value='Send' />
                </form>
                <p>
                    You can either email us at{' '}
                    <a href='mailto:1905talu@gmail.com'>
                        hello@tmlab.tech
                    </a>
                </p>
            </div>
        </div>
    );
}

export default ContModal;