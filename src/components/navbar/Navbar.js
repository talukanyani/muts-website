import React, { useState } from 'react';
import styles from './Navbar.module.css'
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { useHandlePortal } from '../../hooks/useHandlePortal';
import HamburgerCrossButton from './HamburgerCrossButton'
import Navigations from './Navigations'
import NewsLetterModal from './NewsletterModal'
import logo from '../../assets/images/logo.svg'
import letterIcon from '../../assets/icons/letter.svg'
import twitterIcon from '../../assets/icons/twitter.svg'
import instagramIcon from '../../assets/icons/instagram.svg'

export default function Navbar() {
    const [
        isNavigationsPortal,
        isNavigations,
        openNavigations,
        closeNavigations,
    ] = useHandlePortal()
    const [
        isNewsletterPortal,
        isNewsletterModal,
        openNewsletterModal,
        closeNewsletterModal,
    ] = useHandlePortal()

    const menuToogle = () => {
        if (isNavigationsPortal !== isNavigations) return;

        if (isNavigations) {
            closeNavigations()
        } else {
            openNavigations()
        }
    }

    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.hamburger_button}>
                    <HamburgerCrossButton
                        onClick={menuToogle}
                        isCross={isNavigations}
                    />
                </div>
                <div className={styles.logo}>
                    <Link to='/'>
                        <img src={logo} alt='Tmlab Logo' />
                    </Link>
                </div>
                <ul>
                    <li onClick={openNewsletterModal}>
                        <span>Newsletter</span>
                        <img src={letterIcon} alt="newsletter icon button" />
                    </li>
                    <li>
                        <a
                            target='_blank'
                            rel="noopener noreferrer"
                            href='https://twitter.com/tmlab_dot_tech'
                        >
                            <img src={twitterIcon} alt="twitter icon button" />
                        </a>
                    </li>
                    <li>
                        <a
                            target='_blank'
                            rel="noopener noreferrer"
                            href='https://instagram.com/tmlab.tech'
                        >
                            <img src={instagramIcon} alt="instagram icon button" />
                        </a>
                    </li>
                </ul>
            </div>
            {isNavigationsPortal && createPortal(
                <Navigations
                    isVisible={isNavigations}
                    hide={closeNavigations}
                />,
                document.body,
            )}
            {isNewsletterPortal && createPortal(
                <NewsLetterModal
                    isOpen={isNewsletterModal}
                    close={closeNewsletterModal}
                />,
                document.body,
            )}
        </>
    );
}