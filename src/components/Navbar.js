import React from 'react';
import styles from './Navbar.module.css'
import { createPortal } from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import { useHandlePortal } from '../hooks/useHandlePortal';
import Menu from './Menu'

import logo from '../assets/images/logo.svg'
import menu_icon from '../assets/icons/menu.svg'
import arrow_icon from '../assets/icons/arrow.svg'

export default function Navbar() {
    const [
        isMenuPortal,
        isMenu,
        openMenu,
        closeMenu,
    ] = useHandlePortal();

    let navigate = useNavigate();

    const navigateTo = (url) => {
        window.scrollTo(0, 0);
        closeMenu();
        navigate(url)
    }

    return (
        <>
            <div className={styles.navbar}>
                <section className={styles.logo}>
                    <Link to='/' onClick={() => window.scrollTo(0, 0)}>
                        <img src={logo} alt='Muts logo' />
                    </Link>
                </section>
                <nav className={styles.navigations}>
                    <ul>
                        <li onClick={() => navigateTo('/')}>
                            Home
                        </li>
                        <li>
                            Products
                            <img src={arrow_icon} alt='expand arrow' />
                            <ul>
                                <li onClick={() => navigateTo('/student_calendar')}>
                                    Student calendar
                                </li>
                            </ul>
                        </li>
                        <li onClick={() => navigateTo('/contact')}>
                            Contact
                        </li>
                    </ul>
                </nav>
                <img
                    className={styles.menu_button}
                    src={menu_icon}
                    alt='Open menu icon button'
                    onClick={openMenu}
                />
            </div>
            {isMenuPortal && createPortal(
                <Menu isOpen={isMenu} close={closeMenu} />,
                document.body,
            )}
        </>
    );
}
