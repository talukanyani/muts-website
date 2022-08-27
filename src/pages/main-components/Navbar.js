import React, { useState, useEffect } from 'react';
import styles from './navbar.module.css'
import { useNavigate } from 'react-router-dom';

import ContModal from '../home/componets/ContModal';

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
    const [isContModal, setIsContModal] = useState(false)

    let navigate = useNavigate()

    const closeMenu = () => {
        setIsChecked(false)
    }

    const goToHome = () => {
        closeMenu()
        navigate('/')
        window.scrollTo(0, 0)
    }

    const goToApps = () => {
        closeMenu()
        navigate('/apps')
        window.scrollTo(0, 0)
    }

    const goToConnect = () => {
        closeMenu()

        var pathname = window.location.pathname

        if (pathname === '/') {
            document.getElementById('subsInput').focus()
        } else {
            navigate('/')

            setTimeout(() => {
                document.getElementById('subsInput').focus()
            }, 500)
        }
    }

    const openContModal = () => {
        closeMenu()
        setIsContModal(true)
    }

    useEffect(() => {
        if (isChecked) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'visible'
        }
    }, [isChecked])

    return (
        <>
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
                            <a onClick={goToHome}>
                                Home
                                <img src={home} alt='home icon' />
                            </a>
                        </li>
                        <li>
                            <a onClick={goToApps} >
                                Apps
                                <img src={apps} alt='apps icon' />
                            </a>
                        </li>
                        <li>
                            <a onClick={openContModal}>
                                Contact
                                <img src={contact} alt='contact icon' />
                            </a>
                        </li>
                        <li>
                            <a onClick={goToConnect}>
                                Connect
                                <img src={connect} alt='connect icon' />
                            </a>
                        </li>
                    </ul>
                    <div onClick={closeMenu}></div>
                </nav>
            </div>
            <ContModal
                isContModal={isContModal}
                close={() => setIsContModal(false)}
            />
        </>
    )
}

export default Navbar;