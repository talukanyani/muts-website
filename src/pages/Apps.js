import React, { useEffect } from 'react';

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Body from '../components/AppsBody';

export default function Apps() {
    useEffect(() => {
        document.title = 'Tmlab - Apps'
    }, [])

    return (
        <>
            <Navbar color='white' />
            <Body />
            <Footer />
        </>
    );
}