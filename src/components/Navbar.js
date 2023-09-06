import React from 'react';
import styles from './Navbar.module.css'
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
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
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <span>
                                Products
                                <img src={arrow_icon} alt='expand arrow' />
                            </span>
                            <ul>
                                <li>
                                    <a href='/student-calendar'>Student Calendar</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href='/contact'>Contact</a>
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
