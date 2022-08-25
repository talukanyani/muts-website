import React, { useState } from 'react';
import styles from './navbar.module.css'
import { Link } from 'react-router-dom';

import logo from './assets/Tmlab-Logo.svg'
import home from './assets/icon-home.svg'
import apps from './assets/icon-apps.svg'
import contact from './assets/icon-contact.svg'
import connect from './assets/icon-connect.svg'

function Navbar() {
    return (
        <div className={styles.navbar}>
            <Menu />
            <div className={styles.logo}>
                <a href='/'>
                    <img src={logo} alt='Tmlab Logo' />
                </a>
            </div>
        </div>
    );
}

function Menu() {
    const [isChecked, setIsChecked] = useState(false)

    return (
        <div className={styles.menu}>
            <input
                type='checkbox'
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
            />
            <span></span>
            <span></span>
            <span></span>
            <nav>
                <ul>
                    <li>
                        <a
                            href='/'
                            onClick={() => setIsChecked(false)}
                        >
                            Home <img src={home} alt='icon' />
                        </a>
                    </li>
                    <li>
                        <Link
                            to='/apps'
                            onClick={() => setIsChecked(false)}
                        >
                            Apps <img src={apps} alt='icon' />
                        </Link>
                    </li>
                    <li>
                        <a
                            href='/#contact'
                            onClick={() => setIsChecked(false)}
                        >
                            Contact <img src={contact} alt='icon' />
                        </a>
                    </li>
                    <li>
                        <a
                            href='/#connect'
                            onClick={() => setIsChecked(false)}
                        >
                            Connect <img src={connect} alt='icon' />
                        </a>
                    </li>
                </ul>
                <div onClick={() => setIsChecked(false)}></div>
            </nav>
        </div>
    )
}

export default Navbar;