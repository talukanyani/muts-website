import React, { useEffect } from 'react'
// import Navbar from '../../components/Navbar'
// import Footer from '../../components/Footer'
// import Body from './components/Body'

export default function ContactPage() {
    useEffect(() => {
        document.title = 'Tmlab - Contact'
    }, [])

    return (
        <>
            {/* <Navbar /> */}
            {/* <Body/> */}
            {/* <Footer /> */}
            <h1>Contact</h1>
        </>
    )
}