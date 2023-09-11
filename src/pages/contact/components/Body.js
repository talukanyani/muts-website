import React, { useState } from 'react';
import styles from './Body.module.css'
import { FilledButton } from '../../../components/Buttons';
import { Success, Error } from '../../../components/PostResponse';
import LoadingIndicator from '../../../components/LoadingIndicator'
import { API_BASE_URL, SUPPORT_EMAIL } from '../../../utils/constants';
import {
    useValidateName,
    useValidateEmail,
    useValidateMessage,
} from '../../../hooks/useFormValidations';
import usePost from '../../../hooks/usePost';
import email_icon from '../../../assets/icons/letter.svg';

export default function Body() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [isValidName, nameError, validateName, resetNameError] = useValidateName()
    const [isValidEmail, emailError, validateEmail, resetEmailError] = useValidateEmail()
    const [isValidMessage, messageError, validateMessage, resetMessageError] = useValidateMessage()

    const [submit, isLoading, isSent, isError] = usePost();

    const handleSubmit = event => {
        event.preventDefault();

        validateName(name)
        validateEmail(email)
        validateMessage(message)

        if (isValidName && isValidEmail && isValidMessage) {
            submit(
                `${API_BASE_URL}/contact`,
                { senderName: name, senderEmail: email, messageBody: message },
            );
        }
    }

    return (
        <div className={styles.body}>
            <h1>Contact Us</h1>
            <div>
                <div className={styles.email}>
                    <img alt='email icon' src={email_icon} />
                    <section>
                        <h2>Email Us</h2>
                        <a href={`mailto:${SUPPORT_EMAIL}`}>
                            {SUPPORT_EMAIL}
                        </a>
                    </section>
                </div>
                <div className={styles.message}>
                    <h2>Send Us A Message</h2>
                    {isLoading ?
                        <LoadingIndicator
                            message='Please wait while we send your message...'
                        />
                        : isSent ? <Success
                            title='Successfully Sent'
                            message="We received your message, we'll get back to you shortly."
                        />
                            : isError ? <Error
                                message='An error occured while sending your message.'
                            />
                                : <form onSubmit={handleSubmit}>
                                    <section>
                                        <input
                                            type='text'
                                            name='name'
                                            placeholder=' '
                                            id='name'
                                            className={nameError ? styles.input_error : undefined}
                                            maxLength={30}
                                            onChange={event => setName(
                                                (event.target.value).trim().replace(/[ ]{2,}/g, ' ')
                                            )}
                                            onFocus={resetNameError}
                                            onBlur={() => { if (name) validateName(name) }}
                                        />
                                        <label htmlFor='name'>Name</label>
                                        <span>{nameError}</span>
                                    </section>
                                    <section>
                                        <input
                                            type='email'
                                            name='email'
                                            placeholder=' '
                                            id='email'
                                            className={emailError ? styles.input_error : undefined}
                                            maxLength={50}
                                            onChange={event => setEmail((event.target.value).trim())}
                                            onFocus={resetEmailError}
                                            onBlur={() => { if (email) validateEmail(email) }}
                                        />
                                        <label htmlFor='email'>Email</label>
                                        <span>{emailError}</span>
                                    </section>
                                    <section>
                                        <textarea
                                            name='message'
                                            rows='6'
                                            placeholder=' '
                                            id='message'
                                            className={messageError ? styles.input_error : undefined}
                                            maxLength={250}
                                            onChange={event => setMessage((event.target.value).trim())}
                                            onFocus={resetMessageError}
                                            onBlur={() => { if (message) validateMessage(message) }}
                                        ></textarea>
                                        <label htmlFor='message'>
                                            Message
                                            {message && <span>{message.length} / 250</span>}
                                        </label>
                                        <span>{messageError}</span>
                                    </section>
                                    <FilledButton type='submit'>Send</FilledButton>
                                </form>
                    }
                </div>
            </div>
        </div >
    );
}

