import React, { useEffect } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Body from '../components/TermsBody';

export default function Terms() {
    useEffect(() => {
        document.title = 'Terms of Service'
    }, [])

    return (
        <>
            <Navbar color='white' />
            <Body />
            <Footer />
        </>
    );
}