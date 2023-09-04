import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Body from './components/Body';

export default function StudentCalendarPage() {
    useEffect(() => {
        document.title = 'Muts - Student Calendar'
    }, [])

    return (
        <>
            <Navbar />
            <Body />
            <Footer />
        </>
    );
}