import React, { useState } from 'react';
import styles from './SCapp.module.css'

import Phone from './PhoneDrawing';
import SCdownloadModal from './SCdownloadModal';

import sc_app_icon from '../assets/sc_app_icon.svg'
import appstore from '../assets/appstore.svg'
import googleplay from '../assets/googleplay.svg'
import appgallery from '../assets/appgallery.svg'

export default function SCapp() {
    return (
        <div className={styles.sc}>
            <div className={styles.heading}>
                <h1>
                    <img
                        src={sc_app_icon}
                        alt="SC App logo"
                    />
                    <span>
                        Student Calender - {' '}
                        <abbr title='Student Calender'>SC</abbr>
                    </span>
                </h1>
                <p>Manage assessments and activities.</p>
            </div>
            <div className={styles.content}>
                <Phone />
                <DownloadButtons />
            </div>
        </div>
    )
}

function DownloadButtons() {
    const [isDownloadModal, setIsDownlodModal] = useState(false)

    const showDownloadModal = () => setIsDownlodModal(true)

    return (
        <>
            <ul className={styles.download_btns}>
                <li>
                    <span onClick={showDownloadModal} >
                        <img
                            src={appstore}
                            alt='downlod on app store'
                        />
                    </span>
                </li>
                <li>
                    <span onClick={showDownloadModal}>
                        <img
                            src={googleplay}
                            alt='downlod on google play'
                        />
                    </span>
                </li>
                <li>
                    <span onClick={showDownloadModal}>
                        <img
                            src={appgallery}
                            alt='downlod on app gallery'
                        />
                    </span>
                </li>
            </ul>
            <SCdownloadModal
                isDownloadModal={isDownloadModal}
                close={() => setIsDownlodModal(false)}
            />
        </>
    )
}