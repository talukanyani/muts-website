import React, { useState } from 'react';
import styles from './ContModal.module.css'

import SmallHeading from '../elements/SmallHeading'

import closeimg from '../assets/icon-close.svg'
import emailicon from '../assets/icon-email.svg'

function ContModal(props) {
    const [radioBtnValue, setRadioBtnValue] = useState('sendhere')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [nameError, setNameError] = useState(null)
    const [emailError, setEmailError] = useState(null)
    const [messageError, setMessageError] = useState(null)

    const validateName = value => {
        var nameRegEx = /^[a-zA-Z]{2,20}(\s[a-zA-Z]{2,20})?$/
        return nameRegEx.test(value)
    }

    const validateEmail = value => {
        var emailRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,5})+$/
        return emailRegEx.test(value)
    }

    const validateMessage = value => {
        var messageRegEx = /^.{30,250}$/
        return messageRegEx.test(value)
    }

    const handleNameBlur = () => {
        var value = name.trim()
        setName(value)
        if (validateName(value)) return;
        if (value.length !== 0) showNameError(value)
    }

    const handleEmailBlur = () => {
        var value = email.trim()
        setEmail(value)
        if (validateEmail(value)) return;
        if (value.length !== 0) showEmailError(value)
    }

    const handleMessageBlur = () => {
        var value = message.trim()
        setMessage(value)
        if (validateMessage(value)) return;
        if (value.length !== 0) showMessageError(value)
    }

    const handleSubmit = event => {
        var isValidName = validateName(name)
        var isValidEmail = validateEmail(email)
        var isValidMessage = validateMessage(message)

        if (isValidName & isValidEmail & isValidMessage) return;

        event.preventDefault()

        if (!isValidName) showNameError(name)
        if (!isValidEmail) showEmailError(email)
        if (!isValidMessage) showMessageError(message)
    }

    const showNameError = value => {
        if (/^$/.test(value)) {
            setNameError('Name is required!')
        } else if (value.split(' ').length > 2) {
            setNameError('Enter one or two names!')
        } else {
            setNameError('Enter a valid name!')
        }
    }

    const showEmailError = value => {
        if (/^$/.test(value)) {
            setEmailError('Email is required!')
        } else {
            setEmailError('Enter a valid email!')
        }
    }

    const showMessageError = value => {
        if (/^$/.test(value)) {
            setMessageError('Enter a message!')
        } else if (value.length < 30) {
            setMessageError('Message is too short.')
        } else if (value.length > 250) {
            setMessageError('Keep your message short.')
        } else {
            setMessageError('Enter a valid text!')
        }
    }

    return (
        <div
            className={[
                styles.modal_overlay,
                props.isContModal ? styles.modal_open : undefined
            ].join(' ')}
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
                    <section onClick={() => setRadioBtnValue('sendhere')}>
                        Send here
                    </section>
                    <input
                        type='radio'
                        name='tabs'
                        value='sendhere'
                        checked={radioBtnValue === 'emails'}
                        readOnly
                    />
                    <section onClick={() => setRadioBtnValue('emails')}>
                        Email
                    </section>
                    <input
                        type='radio'
                        name='tabs'
                        value='emails'
                        checked={radioBtnValue === 'emails'}
                        readOnly
                    />
                    <span></span>
                </div>
                <form
                    className={[
                        styles.contact_form,
                        radioBtnValue === 'emails'
                            ? styles.contact_form_hide
                            : undefined
                    ].join(' ')}
                    onSubmit={handleSubmit}
                >
                    <section>
                        <input
                            type='text'
                            id='name'
                            placeholder=' '
                            className={
                                nameError !== null
                                    ? styles.error_input
                                    : undefined
                            }
                            value={name}
                            onChange={event => setName(event.target.value)}
                            onFocus={() => setNameError(null)}
                            onBlur={handleNameBlur}
                        />
                        <label htmlFor='names'>Name</label>
                        <p>{nameError}</p>
                    </section>
                    <section>
                        <input
                            type='email'
                            id='email'
                            placeholder=' '
                            className={
                                emailError !== null
                                    ? styles.error_input
                                    : undefined
                            }
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            onFocus={() => setEmailError(null)}
                            onBlur={handleEmailBlur}
                        />
                        <label htmlFor='email'>Email</label>
                        <p>{emailError}</p>
                    </section>
                    <section>
                        <textarea
                            id='message'
                            rows='6'
                            placeholder=' '
                            className={
                                messageError !== null
                                    ? styles.error_input
                                    : undefined
                            }
                            value={message}
                            onChange={event => setMessage(event.target.value)}
                            onFocus={() => setMessageError(null)}
                            onBlur={handleMessageBlur}
                        ></textarea>
                        <label
                            htmlFor='message'
                            className={[
                                styles.textarea_label,
                                message.length > 250
                                    ? styles.textarea_label_error
                                    : undefined
                            ].join(' ')}
                        >
                            Message
                            {message.length !== 0 &&
                                <span>{message.length} / 250</span>
                            }
                        </label>
                        <p>{messageError}</p>
                    </section>
                    <input type='submit' value='Send' />
                </form>
                <ul
                    className={[
                        styles.emails,
                        radioBtnValue === 'sendhere'
                            ? styles.emails_hide
                            : undefined
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