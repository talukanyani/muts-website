import React, { useState } from 'react';
import styles from './DownloadInfo.module.css'
import { useFetcher } from 'react-router-dom';
import Modal from '../../../components/Modal';
import FilledButton from '../../../components/FilledButton'
import LoadingIndicator from '../../../components/LoadingIndicator';
import { Success, Error } from '../../../components/PostResponse';
import { useValidateEmail } from '../../../hooks/useFormValidations';

export default function DownloadInfoModal({ isOpen, close }) {
    var playStoreLink = '/' // TODO: Play Store Link

    let fetcher = useFetcher()

    const isLoading = fetcher.state !== 'idle'
    const isSent = fetcher.data && fetcher.data.ok
    const isError = fetcher.data && !fetcher.data.ok

    const [email, setEmail] = useState('')
    const [isValidEmail, emailError, validateEmail, resetEmailError] = useValidateEmail()

    const onEmailInputBlur = event => {
        var value = (event.target.value).trim()

        setEmail(value)
        if (value) validateEmail(value)
    }

    const handleSubmit = event => {
        validateEmail(email)
        if (!isValidEmail) event.preventDefault()
    }

    return (
        <Modal isOpen={isOpen} close={close}>
            <div className={styles.download_info}>
                <h1>Download For iOS</h1>
                <p>
                    For now, Student Calendar is only available on
                    {' '}<a href={playStoreLink}>Play Store</a>.
                    It will be available on App Store soon.
                    {' '}<b>Please leave your email below to get notified when
                        it becomes available on App Store.</b>
                </p>
                {isLoading ? <LoadingIndicator
                    message='Submitting...'
                />
                    : isSent ? <Success
                        title='Successfully Sent'
                        message="We received your email, 
                        we'll email you when Student Calendar becomes available on App Store"
                    />
                        : isError ? <Error
                            message='An error occured while submitting your email.'
                            onTryAgain={() => window.location.reload()}
                        />
                            : <fetcher.Form
                                method='post'
                                action='/api/mailing_list_ios_app'
                                onSubmit={event => handleSubmit(event)}
                            >
                                <input
                                    type='email'
                                    placeholder='Email'
                                    name='email'
                                    id='email'
                                    className={emailError ? styles.input_error : undefined}
                                    maxLength={50}
                                    value={email}
                                    onChange={event => setEmail(
                                        (event.target.value).trimStart()
                                    )}
                                    onFocus={resetEmailError}
                                    onBlur={event => onEmailInputBlur(event)}
                                />
                                <span>{emailError}</span>
                                <FilledButton type='submit'>Submit</FilledButton>
                            </fetcher.Form>
                }
            </div>
        </Modal>
    )
}