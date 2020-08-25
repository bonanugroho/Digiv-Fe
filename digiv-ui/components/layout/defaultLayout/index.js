import React from 'react'
import Header from '@components/element/navigation'
import Footer from '@components/element/footer'

export default function defaultLayout(props) {
    return (
        <>
            <Header/>
                {props.children}
            <Footer/>  
        </>
    )
}
