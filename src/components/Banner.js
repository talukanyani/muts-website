import React from "react";
import styles from './Banner.module.css'

export default function Banner({
    open,
    close,
    bannerType,
    bannerTitle,
    bannerBody,
}) {

    return (
        <div className={[
            styles.banner,
            open ? styles.banner_show : undefined,
            bannerType === 'success' ? styles.banner_green
                : bannerType === 'error' ? styles.banner_red
                    : styles.banner_yellow,
        ].join(' ')}>
            <span onClick={close}></span>
            <h1>{bannerTitle}</h1>
            <p>{bannerBody}</p>
        </div>
    )
}