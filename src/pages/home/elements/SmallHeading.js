import React from 'react';
import styles from './small-heading.module.css'

function SmallHeading(props) {
    return (
        <h1 className={styles.heading}>
            <span>{props.text}</span>
        </h1>
    );
}

export default SmallHeading;