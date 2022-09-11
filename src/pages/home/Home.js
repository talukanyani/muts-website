import React from 'react';
import Footer from '../main-components/Footer';
import Navbar from '../main-components/Navbar';
import Body from './componets/Body';

function Home(props) {
    return (
        <>
            <Navbar whiteBg={false} />
            <Body />
            <Footer />
        </>
    );
}

export default Home;