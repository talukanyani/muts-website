import React, { useState, useEffect } from 'react';
import styles from './HomeBody.module.css'
import { useNavigate } from 'react-router-dom';

import ContModal from './ContModal';
import Alert from './Alert';

import Button from '../elements/Button1';
import SmallHeading from '../elements/SmallHeading';

import twitter from '../assets/icon-twitter.svg'
import instagram from '../assets/icon-instagram.svg'

function Body() {
    const [isContModal, setIsContModal] = useState(false)
    const [isAlert, setIsAlert] = useState(false)

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(null);

    const [isLoading, setIsLoading] = useState(false)
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

        fetch('/newsletter', {
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

    let navigate = useNavigate()

    const goToApps = () => {
        window.scrollTo(0, 0)
        navigate('/apps')
    }

    useEffect(() => {
        if (isContModal || isAlert) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'visible'
        }
    }, [isContModal, isAlert])

    return (
        <div className={styles.body_overlay}>
            <div className={styles.body}>
                <div className={styles.container_apps}>
                    <SmallHeading text='Apps' />
                    <h2>Explore apps engineered and developed for you.</h2>
                    <Button
                        text='Show all apps'
                        onClick={goToApps}
                    />
                </div>
                <div className={styles.container_contact}>
                    <SmallHeading text='Contact us' />
                    <p>Get in touch with related information.</p>
                    <Button
                        text='Contact us'
                        onClick={() => setIsContModal(true)}
                    />
                </div>
                <div className={styles.container_connect}>
                    <SmallHeading text='Connect with us' />
                    <p>
                        Never miss updates, subscribe to our newsletter or
                        follow us in our social media.
                    </p>
                    <section>
                        <form
                            onSubmit={handleSubmit}
                            onBlur={() => setEmailError(null)}
                        >
                            <input
                                type='email'
                                placeholder='Email'
                                id='subs_email'
                                name='subs_email'
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
                                    isLoading ? 'Subscribing...' : 'Subscribe'
                                }
                                disabled={isLoading}
                            />
                            <span>{emailError}</span>
                        </form>
                        <ul>
                            <li>
                                <a
                                    target='_blank'
                                    rel='noreferrer'
                                    href='https://twitter.com/tmlab_dot_app'
                                >
                                    <img
                                        src={twitter}
                                        alt="twitter icon" />
                                </a>
                            </li>
                            <li>
                                <a
                                    target='_blank'
                                    rel='noreferrer'
                                    href='https://instagram.com/tmlab.app'
                                >
                                    <img
                                        src={instagram}
                                        alt="instagram icon"
                                    />
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
                <ContModal
                    isContModal={isContModal}
                    close={() => setIsContModal(false)}
                />
                <Alert
                    isAlert={isAlert}
                    close={() => setIsAlert(false)}
                    alertTitle={alertTitle}
                    alertBody={alertBody}
                />
            </div>
        </div>
    );
}

export default Body;