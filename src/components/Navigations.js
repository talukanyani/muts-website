import React, { useState, useEffect } from 'react';
import styles from './Navigations.module.css'
import { useNavigate } from 'react-router-dom';
import expandIcon from '../assets/icons/expand_down.svg'

export default function Navigations({ isVisible, hide }) {
    const [isAppsExpand, setIsAppsExpand] = useState(false)

    let navigate = useNavigate()

    const navigateTo = (url) => {
        window.scrollTo(0, 0)
        hide()
        navigate(url)
    }

    useEffect(() => {
        if (isVisible) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'visible'
        }
    }, [isVisible])

    return (
        <nav
            onClick={hide}
            className={[
                styles.navigations,
                isVisible ? styles.navigations_visible : undefined,
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
                <li onClick={() => navigateTo('/contact')}>Contact</li>
            </ul>
        </nav>
    )
}