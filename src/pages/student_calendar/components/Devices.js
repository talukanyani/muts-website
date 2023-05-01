import React, { useState, useEffect } from "react";
import styles from './Devices.module.css';

export default function Devices() {
    const [date, setDate] = useState(new Date());

    const pad = n => ((n < 10) && '0') + n;

    var hour = pad(date.getHours())
    var minute = pad(date.getMinutes())

    useEffect(() => {
        const updateTime = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(updateTime);
    })

    return (
        <div className={styles.devices_container}>
            <div className={styles.devices}>
                <PhoneScreen
                    hour={hour}
                    minute={minute}
                >
                    {/* // TODO: App pictures */}
                </PhoneScreen>
                <TabletScreen
                    hour={hour}
                    minute={minute}
                >
                    {/* // TODO: App pictures */}
                </TabletScreen>
            </div>
        </div>
    );
}


function PhoneScreen({ children, hour, minute }) {
    return (
        <div className={styles.phone_screen}>
            <span className={styles.time}>
                {hour}:{minute}
            </span>
            {children}
        </div>
    )
}

function TabletScreen({ children, hour, minute }) {
    return (
        <div className={styles.tablet_screen}>
            <span className={styles.time}>
                {hour}:{minute}
            </span>
            {children}
        </div>
    )
}