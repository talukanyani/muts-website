import React from 'react';
import styles from './DownloadInfo.module.css'
import Modal from '../../../components/Modal';
import FilledButton from '../../../components/FilledButton'

export default function DownloadInfoModal({ isOpen, close }) {
    var playStoreLink = '/' // TODO: Play Store Link

    return (
        <Modal isOpen={isOpen} close={close}>
            <div className={styles.download_info}>
                <h1>Download</h1>
                <p>
                    For now, Student Calendar is only available on
                    {' '}<a href={playStoreLink}>Play Store</a>.{' '}
                    It will be available on App Store soon.
                    {' '}<b>Please leave your email below to get notified
                        when it is available on App Store.</b>
                </p>
                <form>
                    <input
                        type='email'
                        placeholder='Email'
                        name='email'
                    />
                    <FilledButton type='submit'>
                        Submit
                    </FilledButton>
                    {/* <span>{emailError}</span> */}
                </form>
            </div>
        </Modal>
    )
}