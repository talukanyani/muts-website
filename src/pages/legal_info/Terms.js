import React, { useEffect } from 'react';
// import Navbar from '../../components/Navbar';
// import Footer from '../../components/Footer';
// import Body from './components/TermsBody';

export default function TermsPage() {
    useEffect(() => {
        document.title = 'Terms of Use'
    }, [])

    return (
        <>
            {/* <Navbar /> */}
            {/* <Body /> */}
            {/* <Footer /> */}
            <h1>Terms of Use</h1>
        </>
    );
}