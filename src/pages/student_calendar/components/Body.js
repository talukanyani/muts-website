import React from 'react';
import styles from './Body.module.css'
import { createPortal } from 'react-dom';
import { useHandlePortal } from '../../../hooks/useHandlePortal'
import DownloadInfoModal from '../modals/DownloadInfo'

import playStoreImage from '../../../assets/images/play_store.svg'
import appStoreImage from '../../../assets/images/app_store.svg'
import sc_home_screen from '../../../assets/images/sc_home_screen.png'

export default function Body() {
    return (
        <div className={styles.body}>
            <header>
                <h1>Student Calendar</h1>
                <h2>
                    Stay Organised and on Track.
                    Manage your Academic Activities.
                </h2>
                <DownloadButtons />
            </header>
            <div className={styles.efficient_app}>
                <section>
                    <img
                        alt='Student Calendar home screen'
                        src={sc_home_screen}
                    />
                </section>
                <section>
                    <h2>Efficient App</h2>
                    <h3>
                        Developed to revolutionise the way students
                        manage their assessments and activities.
                    </h3>
                    <p>
                        Student Calendar simplifies the process of organising, tracking,
                        and prioritising tasks.
                        Seamlessly integrate your assessments, exams, project due dates,
                        and extracurricular activities all in one place.
                        Visualise your academic schedule in table, list and calendar views.
                    </p>
                </section>
            </div>
            <div className={styles.download}>
                <h2>Download</h2>
                <DownloadButtons />
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