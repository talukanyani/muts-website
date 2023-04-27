import React, { useEffect } from 'react';
// import Navbar from '../../components/Navbar';
// import Footer from '../../components/Footer';
// import Body from './components/PrivacyBody';

export default function PrivacyPage() {
    useEffect(() => {
        document.title = 'Privacy Policy'
    }, [])

    return (
        <>
            {/* <Navbar /> */}
            {/* <Body /> */}
            {/* <Footer /> */}
            <h1>Privacy Policy</h1>
        </>
    );
}