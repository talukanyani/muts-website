import React from 'react';
import styles from './Navbar.module.css'
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { useHandlePortal } from '../../hooks/useHandlePortal';
import HamburgerCrossButton from './HamburgerCrossButton'
import Navigations from './Navigations'
import logo from '../../assets/images/logo.svg'
import twitterIcon from '../../assets/icons/twitter.svg'
import instagramIcon from '../../assets/icons/instagram.svg'

export default function Navbar() {
    const [
        isNavigationsPortal,
        isNavigations,
        openNavigations,
        closeNavigations,
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
            <div className={styles.blur_background}></div>
            <div className={styles.navbar}>
                <HamburgerCrossButton
                    onClick={menuToogle}
                    isCross={isNavigations}
                />
                <section className={styles.logo}>
                    <Link to='/' onClick={() => window.scrollTo(0, 0)}>
                        <img src={logo} alt='Tmlab Logo' />
                    </Link>
                </section>
                <section className={styles.socials}>
                    <a
                        target='_blank'
                        rel="noopener noreferrer"
                        href='https://twitter.com/tmlab_dot_tech'
                    >
                        <img src={twitterIcon} alt="twitter icon button" />
                    </a>
                    <a
                        target='_blank'
                        rel="noopener noreferrer"
                        href='https://instagram.com/tmlab.tech'
                    >
                        <img src={instagramIcon} alt="instagram icon button" />
                    </a>
                </section>
            </div>
            {isNavigationsPortal && createPortal(
                <Navigations
                    isVisible={isNavigations}
                    hide={closeNavigations}
                />,
                document.body,
            )}
        </>
    );
}