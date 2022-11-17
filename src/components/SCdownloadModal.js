import React, { useState, useEffect } from 'react';
import styles from './SCdownloadModal.module.css'

import Alert from './Alert';
import Modal from '../elements/Modal';

import closeimg from '../assets/icon-close.svg'

export default function SCdownloadModal({ isDownloadModal, close }) {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(null);

    const [isLoading, setIsLoading] = useState(false)
    const [isAlert, setIsAlert] = useState(false)
    const [alertTitle, setAlertTitle] = useState('')
    const [alertBody, setAlertBody] = useState('')

    const handleResponse = resData => {
        setAlertTitle(resData.title)
        setAlertBody(resData.message)
        setIsAlert(true)
        setIsLoading(false)
        setEmail('')
    }

    const handleError = error => {
        console.error(error)
        setAlertTitle("Something Went Wrong")
        setAlertBody("There was an error while processing your request, try again.")
        setIsAlert(true)
        setIsLoading(false)
        setEmail('')
    }

    const handleSubmit = event => {
        event.preventDefault()

        var emailRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,5})+$/

        if (!emailRegEx.test(email)) {
            showEmailError()
            return
        }

        setIsLoading(true)

        fetch('/sc/notify_me', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        })
            .then(res => res.json())
            .then(resData => handleResponse(resData))
            .catch(error => handleError(error))
    }

    const showEmailError = () => {
        if (/^$/.test(email)) {
            setEmailError('Enter email!')
        } else {
            setEmailError('Enter valid email!')
        }
    }

    useEffect(() => {
        if (isAlert || isDownloadModal) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'visible'
        }
    }, [isAlert, isDownloadModal])

    return (
        <>
            <Modal open={isDownloadModal} close={close}>
                <div className={styles.sc_download}>
                    <img
                        className={styles.closingicon}
                        src={closeimg}
                        alt='closing icon button'
                        onClick={close}
                    />
                    <h1>Download</h1>
                    <p>
                        <abbr title='Student Calender'>SC</abbr> is not yet available, leave your email below to get notified when it's available.
                    </p>
                    <form
                        onSubmit={handleSubmit}
                        onBlur={() => setEmailError(null)}
                    >
                        <input
                            type='email'
                            placeholder='Email Address'
                            id='sc_email'
                            name='sc_email'
                            value={email}
                            className={
                                emailError !== null
                                    ? styles.input_error
                                    : undefined
                            }
                            onChange={event => setEmail(event.target.value)}
                        />
                        <input
                            type='submit'
                            value={
                                isLoading
                                    ? 'Submiting...'
                                    : 'Notify Me'
                            }
                            disabled={isLoading}
                        />
                        <span>{emailError}</span>
                    </form>
                </div>
            </Modal>
            <Alert
                isAlert={isAlert}
                close={() => {
                    setIsAlert(false)
                    close()
                }}
                alertTitle={alertTitle}
                alertBody={alertBody}
            />
        </>
    )
}