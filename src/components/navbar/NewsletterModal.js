import React from 'react'
import styles from './NewsletterModal.module.css'
import FilledButton from '../FilledButton'
import Modal from '../Modal'

export default function NewsLetterModal({ isOpen, close }) {
    return (
        <Modal isOpen={isOpen} close={close}>
            <div className={styles.newsletter}>
                <h1>Newsletter</h1>
                <p>
                    Subscribe to our newsletter to receive weekly
                    or monthly updates, right in your inbox.
                </p>
                <form>
                    <input
                        type='email'
                        placeholder='Email'
                        name='email'
                    />
                    <FilledButton type='submit'>
                        Subscribe
                    </FilledButton>
                </form>
            </div>
        </ Modal>
    )
}