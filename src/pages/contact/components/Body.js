import React, { useState } from 'react';
import styles from './Body.module.css'
import { useFetcher } from 'react-router-dom';
import { FilledButton } from '../../../components/Buttons';
import { Success, Error } from '../../../components/PostResponse';
import {
    useValidateName,
    useValidateEmail,
    useValidateMessage,
} from '../../../hooks/useFormValidations';
import email_icon from '../../../assets/icons/letter.svg';


export default function Body() {
    let fetcher = useFetcher()

    const isLoading = fetcher.state !== 'idle'
    const isSent = fetcher.data && fetcher.data.ok
    const isError = fetcher.data && !fetcher.data.ok

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [isValidName, nameError, validateName, resetNameError] = useValidateName()
    const [isValidEmail, emailError, validateEmail, resetEmailError] = useValidateEmail()
    const [isValidMessage, messageError, validateMessage, resetMessageError] = useValidateMessage()

    const onNameInputBlur = event => {
        var value = (event.target.value).trim()

        setName(value)
        if (value) validateName(value)
    }

    const onEmailInputBlur = event => {
        var value = (event.target.value).trim()

        setEmail(value)
        if (value) validateEmail(value)
    }

    const onMessageInputBlur = event => {
        var value = (event.target.value).trim()

        setMessage(value)
        if (value) validateMessage(value)
    }

    const handleSubmit = event => {
        validateName(name)
        validateEmail(email)
        validateMessage(message)

        if (!(isValidName && isValidEmail && isValidMessage)) {
            event.preventDefault()
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
                        <a href='mailto:muts.dev@outlook.com'>
                            muts.dev@outlook.com
                        </a>
                    </section>
                </div>
                <div className={styles.message}>
                    <h2>Send Us A Message</h2>
                    {isSent ? <Success
                        title='Successfully Sent'
                        message="We received your message, we'll get back to you shortly."
                    />
                        : isError ? <Error
                            message='An error occured while sending your message.'
                        />
                            : <fetcher.Form
                                method='post'
                                onSubmit={(event) => handleSubmit(event)}
                            >
                                <section>
                                    <input
                                        type='text'
                                        name='name'
                                        placeholder=' '
                                        id='name'
                                        className={nameError ? styles.input_error : undefined}
                                        maxLength={30}
                                        value={name}
                                        onChange={event => setName(
                                            (event.target.value).trimStart().replace(/[ ]{2,}/g, ' ')
                                        )}
                                        onFocus={resetNameError}
                                        onBlur={event => onNameInputBlur(event)}
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
                                        value={email}
                                        onChange={event => setEmail((event.target.value).trimStart())}
                                        onFocus={resetEmailError}
                                        onBlur={event => onEmailInputBlur(event)}
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
                                        value={message}
                                        onChange={event => setMessage((event.target.value).trimStart())}
                                        onFocus={resetMessageError}
                                        onBlur={event => onMessageInputBlur(event)}
                                    ></textarea>
                                    <label htmlFor='message'>
                                        Message
                                        {message && <span>{message.length} / 250</span>}
                                    </label>
                                    <span>{messageError}</span>
                                </section>
                                <FilledButton type='submit' disabled={isLoading}>
                                    {isLoading ? 'Sending...' : 'Send'}
                                </FilledButton>
                            </fetcher.Form>
                    }
                </div>
            </div>
        </div >
    );
}

