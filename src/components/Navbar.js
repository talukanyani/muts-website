import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css'
import { useNavigate } from 'react-router-dom';

import ContModal from '../components/ContModal';

import logo from '../assets/Tmlab-Logo.svg'
import home from '../assets/icon-home.svg'
import apps from '../assets/icon-apps.svg'
import contact from '../assets/icon-contact.svg'
import connect from '../assets/icon-connect.svg'

function Navbar(props) {
    return (
        <div className={[
            styles.navbar,
            props.color === 'white'
                ? styles.white_bg
                : undefined
        ].join(' ')}
        >
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
    const [isMenu, setIsMenu] = useState(false)
    const [isContModal, setIsContModal] = useState(false)

    let navigate = useNavigate()

    const closeMenu = () => setIsMenu(false);

    const goToHome = () => {
        window.scrollTo(0, 0)
        closeMenu()
        navigate('/')
    }

    const goToApps = () => {
        window.scrollTo(0, 0)
        closeMenu()
        navigate('/apps')
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
            }, 300)
        }
    }

    const openContModal = () => {
        closeMenu()
        setIsContModal(true)
    }

    useEffect(() => {
        if (isMenu || isContModal) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'visible'
        }
    }, [isMenu, isContModal])

    return (
        <>
            <div className={styles.menu}>
                <input
                    type='checkbox'
                    checked={isMenu}
                    onChange={() => setIsMenu(!isMenu)}
                />
                <span></span>
                <span></span>
                <span></span>
                <nav onClick={closeMenu}>
                    <ul onClick={event => event.stopPropagation()}>
                        <li>
                            <i onClick={goToHome}>
                                Home
                                <img src={home} alt='home icon' />
                            </i>
                        </li>
                        <li>
                            <i onClick={goToApps} >
                                Apps
                                <img src={apps} alt='apps icon' />
                            </i>
                        </li>
                        <li>
                            <i onClick={openContModal}>
                                Contact
                                <img src={contact} alt='contact icon' />
                            </i>
                        </li>
                        <li>
                            <i onClick={goToConnect}>
                                Connect
                                <img src={connect} alt='connect icon' />
                            </i>
                        </li>
                    </ul>
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