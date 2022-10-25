import React, { useRef, useState, useEffect } from 'react';
import styles from './AppsBody.module.css'

import Alert from './Alert';
import Phone from './PhoneDrawing';

import SmallHeading from '../elements/SmallHeading'

import sc_app_icon from '../assets/sc_app_icon.svg'
import appstore from '../assets/appstore.svg'
import googleplay from '../assets/googleplay.svg'
import appgallery from '../assets/appgallery.svg'

function Body(props) {
    const emailInput = useRef(null)

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
        if (isAlert) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'visible'
        }
    }, [isAlert])

    return (
        <div className={styles.body_overlay}>
            <div className={styles.body}>
                <SmallHeading text='Apps' />
                <div className={styles.container}>
                    <div className={styles.app_photos}>
                        <Phone />
                    </div>
                    <div className={styles.app_content}>
                        <div className={styles.app_heading}>
                            <img
                                src={sc_app_icon}
                                alt="SC App logo"
                            />
                            <section>
                                <h1>
                                    Student Calender -{' '}
                                    <abbr title='Student Calender'>SC</abbr>
                                </h1>
                                <p>Manage assessments and activities.</p>
                            </section>
                        </div>
                        <div className={styles.app_download}>
                            <ul>
                                <li>
                                    <span onClick={() => emailInput.current.focus()} >
                                        <img
                                            src={appstore}
                                            alt='downlod on app store'
                                        />
                                    </span>
                                </li>
                                <li>
                                    <span onClick={() => emailInput.current.focus()}>
                                        <img
                                            src={googleplay}
                                            alt='downlod on google play'
                                        />
                                    </span>
                                </li>
                                <li>
                                    <span onClick={() => emailInput.current.focus()}>
                                        <img
                                            src={appgallery}
                                            alt='downlod on app gallery'
                                        />
                                    </span>
                                </li>
                            </ul>
                            <section>
                                <p>
                                    <abbr title='Student Calender'>SC</abbr> is not yet available,
                                    leave your email below to get notified when it's available.
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
                                        ref={emailInput}
                                        value={email}
                                        className={
                                            emailError !== null
                                                ? styles.error_input
                                                : undefined
                                        }
                                        onChange={e => setEmail(e.target.value)}
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
                            </section>
                        </div>
                    </div>
                </div>
                <Alert
                    isAlert={isAlert}
                    close={() => setIsAlert(false)}
                    alertTitle={alertTitle}
                    alertBody={alertBody}
                />
            </div>
        </div >
    );
}

export default Body;