import React from 'react';
import styles from './DownloadInfo.module.css'
import { useFetcher } from 'react-router-dom';
import Modal from '../../../components/Modal';
import FilledButton from '../../../components/FilledButton'
import LoadingIndicator from '../../../components/LoadingIndicator';
import { Success, Error } from '../../../components/PostResponse';

export default function DownloadInfoModal({ isOpen, close }) {
    var playStoreLink = '/' // TODO: Play Store Link

    let fetcher = useFetcher()

    const isLoading = fetcher.state !== 'idle'

    const res = fetcher.data

    const isSent = res && res.ok
    const isError = res && !res.ok

    return (
        <Modal isOpen={isOpen} close={close}>
            <div className={styles.download_info}>
                <h1>Download</h1>
                <p>
                    For now, Student Calendar is only available on
                    {' '}<a href={playStoreLink}>Play Store</a>.
                    It will be available on App Store soon.
                    <b>Please leave your email below to get notified
                        when it is available on App Store.</b>
                </p>
                {isLoading ? <LoadingIndicator
                    message='Loading...'
                />
                    : isSent ? <Success
                        title='Successfully Sent'
                        message="We received your email, 
                        we'll email you when Student Calendar becomes available on App Store"
                    />
                        : isError ? <Error
                            message='An error occured'
                            onTryAgain={() => window.location.reload()}
                        />
                            : <fetcher.Form method='post' action='/api/mailing_list_ios_app'>
                                <input
                                    type='email'
                                    placeholder='Email'
                                    name='email'
                                />
                                <FilledButton type='submit'>
                                    Submit
                                </FilledButton>
                                {/* <span>{emailError}</span> */}
                            </fetcher.Form>
                }
            </div>
        </Modal>
    )
}