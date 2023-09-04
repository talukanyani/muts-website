import React, { useEffect } from 'react';
import styles from './PageNotFound.module.css'
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar'
import { FilledButton } from '../../components/Buttons'

export default function PageNotFoundPage() {
    useEffect(() => {
        document.title = '404'
    }, [])

    return (
        <>
            <Navbar />
            <div className={styles.body}>
                <h1>404</h1>
                <h2>Ooops! Page Not Found</h2>
                <p>We can not find the page you are looking for.</p>
                <Link to='/' onClick={() => window.screenTop}>
                    <FilledButton>Home Page</FilledButton>
                </Link>
            </div>
        </>
    )
}