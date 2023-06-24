import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/Footer';
import Body from './components/Body';

export default function HomePage() {
    useEffect(() => {
        document.title = 'Muts'
    }, [])

    return (
        <>
            <Navbar />
            <Body />
            <Footer />
        </>
    );
}