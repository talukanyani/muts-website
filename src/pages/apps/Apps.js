import React from 'react';
import Navbar from '../main-components/Navbar'
import Footer from '../main-components/Footer'
import Body from './componets/Body';

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