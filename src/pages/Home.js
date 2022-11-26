import React, { useEffect } from 'react';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Body from '../components/HomeBody';

export default function Home() {
    useEffect(() => {
        document.title = 'Tmlab'
    }, [])

    return (
        <>
            <Navbar />
            <Body />
            <Footer />
        </>
    );
}