import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Body from '../components/AppsBody';

function Apps() {
    return (
        <>
            <Navbar whiteBg={true} />
            <Body />
            <Footer />
        </>
    );
}

export default Apps;