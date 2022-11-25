import React, { useState, useEffect } from 'react';
import styles from './SCdownloadModal.module.css'

import Banner from './Banner';
import Modal from '../elements/Modal';

import closeimg from '../assets/icon-close.svg'

export default function SCdownloadModal({ isDownloadModal, close }) {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(null);

    const [isLoading, setIsLoading] = useState(false)
    const [isBanner, setIsBanner] = useState(false)
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
        if (isDownloadModal) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'visible'
        }
    }, [isDownloadModal])

    useEffect(() => {
        const dismissBanner = setTimeout(() => {
            setIsBanner(false)
        }, 10000)

        return () => clearTimeout(dismissBanner);
    }, [isBanner])

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
            <Banner
                open={isBanner}
                close={() => setIsBanner(false)}
                bannerType={bannerType}
                bannerTitle={bannerTitle}
                bannerBody={bannerBody}
            />
        </>
    )
}