import React from 'react';
import styles from './Body.module.css'
import { createPortal } from 'react-dom';
import { useHandlePortal } from '../../../hooks/useHandlePortal'
import Devices from './Devices'
import DownloadInfoModal from '../modals/DownloadInfo'
import playStoreImage from '../../../assets/images/play_store.svg'
import appStoreImage from '../../../assets/images/app_store.svg'

export default function Body() {
    const [
        isDownloadInfoPortal,
        isDownloadInfoModal,
        openDownloadInfoModal,
        closeDownloadInfoModal,
    ] = useHandlePortal()

    return (
        <div className={styles.body}>
            <div className={styles.body_content}>
                <header>
                    <h1>Student Calendar</h1>
                    <p className={styles.big_text}>
                        Stay Organized and on Track.
                        Manage your Academic Activities.
                    </p>
                    <DownloadButtons />
                </header>
                <div className={styles.showcase}>
                    <p className={styles.big_text}>
                        Beautiful and Easy to Use Mobile App.
                    </p>
                    <Devices />
                </div>
                <div className={styles.features}>
                    <h2>Not Just a Calendar</h2>
                    <p className={styles.big_text}>
                        More and More Features to Help you Stay Organised.
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

    var playStoreLink = '/' // TODO: Play Store Link

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