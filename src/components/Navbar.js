import React, { useState } from 'react';
import styles from './Navbar.module.css'
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import Navigations from './Navigations'
import NewsLetterModal from './NewsletterModal'
import logo from '../assets/images/logo.svg'
import letterIcon from '../assets/icons/letter.svg'
import twitterIcon from '../assets/icons/twitter.svg'
import instagramIcon from '../assets/icons/instagram.svg'

export default function Navbar() {
    const [isNavigationsPortal, setIsNavigationsPortal] = useState(false)
    const [isNavigationsVisible, setIsNavigationsVisible] = useState(false)
    const [isNewsletterModalPortal, setIsNewsletterModalPortal] = useState(false)
    const [isNewsletterModalVisible, setIsNewsletterModalVisible] = useState(false)

    const openNavigations = () => {
        setIsNavigationsPortal(true)
        setTimeout(() => {
            setIsNavigationsVisible(true)
        }, 100);
    }

    const closeNavigations = () => {
        setIsNavigationsVisible(false)
        setTimeout(() => {
            setIsNavigationsPortal(false)
        }, 1000);
    }

    const openNewsletterModal = () => {
        setIsNewsletterModalPortal(true)
        setTimeout(() => {
            setIsNewsletterModalVisible(true)
        }, 100);
    }

    const closeNewsletterModal = () => {
        setIsNewsletterModalVisible(false)
        setTimeout(() => {
            setIsNewsletterModalPortal(false)
        }, 1000);
    }

    const menuToogle = () => {
        if (isNavigationsPortal !== isNavigationsVisible) return;

        if (isNavigationsVisible) {
            closeNavigations()
        } else {
            openNavigations()
        }
    }

    return (
        <>
            <div className={styles.navbar} id='navbar'>
                <section
                    onClick={menuToogle}
                    className={[
                        styles.hamburger_button,
                        isNavigationsVisible ? styles.cross_button : undefined,
                    ].join(' ')}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </section>
                <section className={styles.logo}>
                    <Link to='/'>
                        <img src={logo} alt='Tmlab Logo' />
                    </Link>
                </section>
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
                    isVisible={isNavigationsVisible}
                    hide={closeNavigations}
                />,
                document.getElementById('navbar'),
            )}
            {isNewsletterModalPortal && createPortal(
                <NewsLetterModal
                    isOpen={isNewsletterModalVisible}
                    close={closeNewsletterModal}
                />,
                document.body,
            )}
        </>
    );
}