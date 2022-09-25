import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Body from '../components/HomeBody';

function Home(props) {
    return (
        <>
            <Navbar />
            <Body />
            <Footer />
        </>
    );
}

export default Home;