import React, { useState } from 'react';
import styles from './Menu.module.css'

import close_icon from '../assets/icons/close.svg';
import arrow_icon from '../assets/icons/arrow.svg'

export default function Menu({ isOpen, close }) {
    const [isProductsExpand, setIsProductsExpand] = useState(false);

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
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li onClick={() => {
                            setIsProductsExpand((currentValue) => !currentValue);
                        }}>
                            <span>
                                Products
                                <img src={arrow_icon} alt='expand arrow' />
                            </span>
                        </li>
                        <ul className={[
                            styles.nested_ul,
                            isProductsExpand ? styles.products_expand : undefined,
                        ].join(' ')}>
                            <li>
                                <a href='/student-calendar'>Student Calendar</a>
                            </li>
                        </ul>
                        <li>
                            <a href='/contact'>Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
