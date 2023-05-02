import React from 'react'
import styles from './Modal.module.css'
import closeIcon from '../assets/icons/close.svg'

export default function Modal({ children, isOpen, close }) {
    return (
        <div
            onClick={close}
            className={[
                styles.modal,
                isOpen ? styles.modal_visible : undefined,
            ].join(' ')}
        >
            <div
                onClick={event => event.stopPropagation()}
                className={[
                    styles.modal_content,
                    isOpen ? styles.modal_content_visible : undefined
                ].join(' ')}
            >
                <img
                    src={closeIcon}
                    alt='close icon button'
                    onClick={close}
                />
                {children}
            </div>
        </div>
    )
}