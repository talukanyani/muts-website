import React from "react";
import styles from './PhoneDrawing.module.css';
import sc_app_icon from '../assets/sc_app_icon.svg'

function Phone() {
    var date = new Date();

    return (
        <div className={styles.phone}>
            <div className={styles.screen}>
                <div className={styles.system_status_bar}>
                    <span className={styles.time}>
                        {date.getHours()}:{date.getMinutes()}
                    </span>
                    <span className={styles.camera}></span>
                    <section className={styles.network_bar}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </section>
                </div>
                <div className={styles.content}>
                    <img
                        src={sc_app_icon}
                        alt='sc app laucher screen'
                    />
                </div>
                <div className={styles.system_nav_bar}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
}

export default Phone;