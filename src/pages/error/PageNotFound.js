import React, { useEffect } from 'react';
// import Navbar from "../../components/Navbar";
// import Body from "./components/PageNotFoundBody";

export default function PageNotFoundPage() {
    useEffect(() => {
        document.title = '404'
    }, [])

    return (
        <>
            {/* <Navbar /> */}
            {/* <Body /> */}
            <h1>Page Not Found</h1>
        </>
    )
}