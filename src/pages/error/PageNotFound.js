import React, { useEffect } from 'react';
import styles from './PageNotFound.module.css'
import Navbar from '../../components/Navbar'
import FilledButton from '../../components/FilledButton'

export default function PageNotFoundPage() {
    useEffect(() => {
        document.title = '404'
    }, [])

    return (
        <>
            <Navbar />
            <div className={styles.body}>
                <div>
                    <h1>404</h1>
                    <h2>Ooops! Page Not Found</h2>
                    <p>We can not find the page you are looking for.</p>
                    <FilledButton link='/' onClick={() => window.screenTop}>
                        Home Page
                    </FilledButton>
                </div>
            </div>
        </>
    )
}