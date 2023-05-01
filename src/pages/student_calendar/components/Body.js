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

    var playStoreLink = '/' // TODO: Play Store Link

    return (
        <>
            <div className={styles.body}>
                <div className={styles.body_content}>
                    <header>
                        <div>
                            <p>Student Calendar</p>
                            <h1>
                                Stay Organized and on Track.
                                Manage your Academic Activities
                            </h1>
                            <section>
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
                        </div>
                        <Devices />
                    </header>
                </div>
            </div>
            {isDownloadInfoPortal && createPortal(
                <DownloadInfoModal
                    isOpen={isDownloadInfoModal}
                    close={closeDownloadInfoModal}
                />,
                document.body,
            )}
        </>
    );
}