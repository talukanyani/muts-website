import React, { useState } from 'react';
import styles from './DownloadInfo.module.css'
import Modal from '../../../components/Modal';
import { FilledButton } from '../../../components/Buttons'
import { Success, Error } from '../../../components/PostResponse';
import LoadingIndicator from '../../../components/LoadingIndicator';
import { useValidateEmail } from '../../../hooks/useFormValidations';
import usePost from '../../../hooks/usePost';
import { API_BASE_URL, SC_PLAY_STORE_LINK } from '../../../utils/constants';

export default function DownloadInfoModal({ isOpen, close }) {
    const [email, setEmail] = useState('')

    const [isValidEmail, emailError, validateEmail, resetEmailError] = useValidateEmail()
    const [submit, isLoading, isSent, isError] = usePost();

    const handleSubmit = event => {
        event.preventDefault();

        validateEmail(email)

        if (isValidEmail) {
            submit(
                `${API_BASE_URL}/mailing_list`,
                { email: email },
            );
        }
    }

    return (
        <Modal isOpen={isOpen} close={close}>
            <div className={styles.download_info}>
                <h1>Download For iOS</h1>
                <p>
                    For now, Student Calendar is only available on
                    {' '}<a href={SC_PLAY_STORE_LINK}>Play Store</a>.
                    It will be available on App Store soon.
                    {' '}<b>Please leave your email below to get notified when
                        it becomes available on App Store.</b>
                </p>
                {isLoading ?
                    <LoadingIndicator
                        message='Please wait while we submit your email...'
                    />
                    : isSent ? <Success
                        title='Successfully Sent'
                        message="We received your email, 
                        we'll email you when Student Calendar becomes available on App Store"
                    />
                        : isError ? <Error
                            message='An error occured while submitting your email.'
                        />
                            : <form onSubmit={handleSubmit}>
                                <input
                                    type='email'
                                    placeholder='Email'
                                    name='email'
                                    id='email'
                                    className={emailError ? styles.input_error : undefined}
                                    maxLength={50}
                                    onChange={event => setEmail((event.target.value).trim())}
                                    onFocus={resetEmailError}
                                    onBlur={() => { if (email) validateEmail(email) }}
                                />
                                <span>{emailError}</span>
                                <FilledButton type='submit'>Submit</FilledButton>
                            </form>
                }
            </div>
        </Modal>
    )
}