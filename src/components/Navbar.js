import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css'
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg'
import expandIcon from '../assets/icons/expand_down.svg'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <Menu />
            <div className={styles.logo}>
                <Link to='/'>
                    <img src={logo} alt='Tmlab Logo' />
                </Link>
            </div>
        </div>
    );
}

function Menu() {
    const [isMenu, setIsMenu] = useState(false)
    const [isAppsExpand, setIsAppsExpand] = useState(false)

    let navigate = useNavigate()

    const navigateTo = (url) => {
        window.scrollTo(0, 0)
        setIsMenu(false)
        navigate(url)
    }

    useEffect(() => {
        if (isMenu) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'visible'
            setIsAppsExpand(false)
        }
    }, [isMenu])

    return (
        <>
            <div
                onClick={() => setIsMenu(!isMenu)}
                className={[
                    styles.menu_toggle_button,
                    isMenu ? styles.menu_toggle_button_cross : undefined,
                ].join(' ')}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav
                onClick={() => setIsMenu(false)}
                className={[
                    styles.navigations,
                    isMenu ? styles.navigations_visible : undefined,
                    isAppsExpand ? styles.navigations_apps_visible : undefined,
                ].join(' ')}
            >
                <ul onClick={event => event.stopPropagation()}>
                    <li onClick={() => navigateTo('/')}>Home</li>
                    <li onClick={() => setIsAppsExpand(!isAppsExpand)}>
                        Apps <img src={expandIcon} alt='expond icon' />
                    </li>
                    <ul>
                        <li onClick={() => navigateTo('/student_calendar')}>
                            Student Calendar
                        </li>
                    </ul>
                </ul>
            </nav>
        </>
    )
}