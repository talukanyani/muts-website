import React, { useEffect } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Body from '../components/PrivacyBody';

export default function Privacy() {
    useEffect(() => {
        document.title = 'Privacy Policy'
    }, [])

    return (
        <>
            <Navbar color='white' />
            <Body />
            <Footer />
        </>
    );
}