import React from 'react';
import styles from './Navbar.module.css'
import logo from './assets/Tmlab-Logo.svg'

function Navbar(props) {
    return (
        <div className={styles.navbar}>
            <Menu />
            <div className={styles.logo}>
                <img src={logo} alt='Tmlab Logo' />
            </div>
            <div></div>
        </div>
    );
}

function Menu(pros) {
    return (
        <div className={styles.menu}>
            <section className={styles.hamburger}>
                <input type='checkbox' />
                <span></span>
                <span></span>
                <span></span>
            </section>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>Apps</a>
                </li>
                <li>
                    <a href='/'>Contact</a>
                </li>
                <li>
                    <a href='/'>Connect</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;