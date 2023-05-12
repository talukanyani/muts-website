import React from "react";
import styles from './Devices.module.css';
import { useTime } from '../../../hooks/useTime'

export default function Devices() {
    return (
        <div className={styles.devices}>
            <PhoneScreen>
                {/* // TODO: App pictures */}
            </PhoneScreen>
            <TabletScreen>
                {/* // TODO: App pictures */}
            </TabletScreen>
        </div>
    );
}


function PhoneScreen({ children }) {
    const [hour, minute] = useTime()

    return (
        <div className={styles.phone_screen}>
            <span className={styles.time}>
                {hour}:{minute}
            </span>
            {children}
        </div>
    )
}

function TabletScreen({ children }) {
    const [hour, minute] = useTime()

    return (
        <div className={styles.tablet_screen}>
            <span className={styles.time}>
                {hour}:{minute}
            </span>
            {children}
        </div>
    )
}