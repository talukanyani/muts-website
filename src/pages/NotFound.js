import React, { useEffect } from 'react';

import Body from "../components/NotFoundBody";
import Navbar from "../components/Navbar";

export default function NotFound() {
    useEffect(() => {
        document.title = '404'
    }, [])

    return (
        <>
            <Navbar color='white' />
            <Body />
        </>
    )
}