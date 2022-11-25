import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css'

import ContModal from './ContModal';
import Banner from './Banner';

import twitter from '../assets/icon-twitter.svg'
import instagram from '../assets/icon-instagram.svg'

export default function Footer() {
    return (
        <div className={styles.footer_overlay}>
            <div className={styles.footer}>
                <Connect />
                <Links />
            </div>
        </div>
    );
}

function Connect() {
    const [isBanner, setIsBanner] = useState(false)

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(null);

    const [isLoading, setIsLoading] = useState(false)
    const [bannerType, setBannerType] = useState('')
    const [bannerTitle, setBannerTitle] = useState('')
    const [bannerBody, setBannerBody] = useState('')

    const handleResponse = resData => {
        setBannerType(resData.type)
        setBannerTitle(resData.title)
        setBannerBody(resData.message)
        setIsBanner(true)
        setIsLoading(false)
        setEmail('')
    }

    const handleError = error => {
        console.error(error)
        setBannerType("error")
        setBannerTitle("Something Went Wrong")
        setBannerBody("There was an error while processing your request, try again.")
        setIsBanner(true)
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

    useEffect(() => {
        const dismissBanner = setTimeout(() => {
            setIsBanner(false)
        }, 10000)

        return () => clearTimeout(dismissBanner);
    }, [isBanner])

    return (
        <div className={styles.connect}>
            <form
                onSubmit={handleSubmit}
                onBlur={() => setEmailError(null)}
            >
                <input
                    type='email'
                    placeholder='Email'
                    id='subs_email'
                    name='email'
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
                            ? 'Getting Email...'
                            : 'Join Our Newsletters'
                    }
                    disabled={isLoading}
                />
                <span>{emailError}</span>
            </form>
            <ul>
                <li>
                    <a
                        target='_blank'
                        rel="noopener noreferrer"
                        href='https://twitter.com/tmlab_dot_tech'
                    >
                        <img
                            src={twitter}
                            alt="twitter icon"
                        />
                    </a>
                </li>
                <li>
                    <a
                        target='_blank'
                        rel="noopener noreferrer"
                        href='https://instagram.com/tmlab.tech'
                    >
                        <img
                            src={instagram}
                            alt="instagram icon"
                        />
                    </a>
                </li>
            </ul>
            <Banner
                open={isBanner}
                close={() => setIsBanner(false)}
                bannerType={bannerType}
                bannerTitle={bannerTitle}
                bannerBody={bannerBody}
            />
        </div>
    )
}

function Links() {
    const [isContModal, setIsContModal] = useState(false)

    const scrollTop = () => window.scrollTo(0, 0)

    var date = new Date()

    useEffect(() => {
        if (isContModal) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'visible'
        }
    }, [isContModal])

    return (
        <>
            <div className={styles.links}>
                <p>
                    &copy; {date.getFullYear()} Tmlab. All rights reserved.
                </p>
                <ul>
                    <li>
                        <Link to='/terms' onClick={scrollTop}>
                            Terms
                        </Link>
                    </li>
                    <li>
                        <Link to='/privacy' onClick={scrollTop}>
                            Privacy
                        </Link>
                    </li>
                    <li>
                        <span onClick={() => setIsContModal(true)}>
                            Contact
                        </span>
                    </li>
                </ul>
            </div>
            <ContModal
                isContModal={isContModal}
                close={() => setIsContModal(false)}
            />
        </>
    )
}