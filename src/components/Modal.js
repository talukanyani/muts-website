import React, { useEffect } from 'react'
import styles from './Modal.module.css'

export default function Modal({ children, isOpen, close }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'visible'
        }
    }, [isOpen])

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
                {children}
            </div>
        </div>
    )
}