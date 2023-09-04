import React, { useState } from 'react';
import styles from './Menu.module.css'
import { useNavigate } from 'react-router-dom';

import close_icon from '../assets/icons/close.svg';
import arrow_icon from '../assets/icons/arrow.svg'

export default function Menu({ isOpen, close }) {
    const [isProductsExpand, setIsProductsExpand] = useState(false);

    let navigate = useNavigate();

    const navigateTo = (url) => {
        window.scrollTo(0, 0);
        close();
        navigate(url)
    }

    return (
        <div className={isOpen ? styles.is_menu : undefined}>
            <div className={styles.menu_overlay} onClick={close}></div>
            <div className={styles.menu_content}>
                <section>
                    <img
                        src={close_icon}
                        alt='Close menu icon button'
                        onClick={close}
                    />
                </section>
                <nav>
                    <ul>
                        <li onClick={() => navigateTo('/')}>
                            Home
                        </li>
                        <li onClick={() => {
                            setIsProductsExpand((currentValue) => !currentValue);
                        }}>
                            Products
                            <img
                                src={arrow_icon}
                                alt='expand arrow'
                                className={isProductsExpand ? styles.arrow_rotate : undefined}
                            />
                        </li>
                        <ul className={[
                            styles.nested_ul,
                            isProductsExpand ? styles.products_expand : undefined,
                        ].join(' ')}>
                            <li onClick={() => navigateTo('/student_calendar')}>
                                Student calendar
                            </li>
                        </ul>
                        <li onClick={() => navigateTo('/contact')}>
                            Contact
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
