import React from 'react';
import styles from './Body.module.css'
import { createPortal } from 'react-dom';
import { useHandlePortal } from '../../../hooks/useHandlePortal'
import Description from './Description'
import DownloadInfoModal from '../modals/DownloadInfo'
import playStoreImage from '../../../assets/images/play_store.svg'
import appStoreImage from '../../../assets/images/app_store.svg'

export default function Body() {
    return (
        <div className={styles.body}>
            <div className={styles.body_content}>
                <header>
                    <h1>Student Calendar</h1>
                    <p className={styles.big_text}>
                        Stay Organised and on Track.
                        Manage your Academic Activities.
                    </p>
                    <DownloadButtons />
                </header>
                <Description />
                <div className={styles.download}>
                    <h2>Download</h2>
                    <p className={styles.big_text}>
                        Unleash the power of your mobile device.
                    </p>
                    <DownloadButtons />
                </div>
            </div>
        </div>
    );
}

function DownloadButtons() {
    const [
        isDownloadInfoPortal,
        isDownloadInfoModal,
        openDownloadInfoModal,
        closeDownloadInfoModal,
    ] = useHandlePortal()

    const playStoreLink = 'https://play.google.com/store/apps/details?id=com.muts.studentcalendar'

    return (
        <>
            <section className={styles.download_buttons}>
                <a href={playStoreLink}>
                    <img
                        alt='Play Store icon buttton'
                        src={playStoreImage}
                    />
                </a>
                <span onClick={openDownloadInfoModal}>
                    <img
                        alt='App Store icon buttton'
                        src={appStoreImage}
                    />
                </span>
            </section>
            {isDownloadInfoPortal && createPortal(
                <DownloadInfoModal
                    isOpen={isDownloadInfoModal}
                    close={closeDownloadInfoModal}
                />,
                document.body,
            )}
        </>
    )
}