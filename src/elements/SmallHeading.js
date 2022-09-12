import React from 'react';
import styles from './SmallHeading.module.css'

function SmallHeading(props) {
    return (
        <h1 className={styles.heading}>
            <span>{props.text}</span>
        </h1>
    );
}

export default SmallHeading;