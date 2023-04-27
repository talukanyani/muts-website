import React from 'react'
import styles from './Modal.module.css'

export default function Modal(props) {
    return (
        <div
            className={[
                styles.modal_overlay,
                props.open ? styles.modal_open : undefined,
            ].join(' ')}
            onClick={props.close}
        >
            <div
                className={[
                    styles.modal,
                    props.open ? styles.modal_grow : undefined
                ].join(' ')}
                onClick={event => event.stopPropagation()}
            >
                {props.children}
            </div>
        </div>
    )
}