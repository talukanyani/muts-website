import React, { useEffect } from 'react';
// import Navbar from '../../components/Navbar'
// import Footer from '../../components/Footer'
// import Body from '../components/Body';

export default function StudentCalendarPage() {
    useEffect(() => {
        document.title = 'Tmlab - Student Calendar'
    }, [])

    return (
        <>
            {/* <Navbar /> */}
            {/* <Body /> */}
            {/* <Footer /> */}
            <h1>Student Calendar</h1>
        </>
    );
}