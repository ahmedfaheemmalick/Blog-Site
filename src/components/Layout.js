import React from 'react'
import styled from "styled-components"
import Header from './Header'
import Footer from './Footer'
import background from '../assets/bg.jpg'

const Wrapper = styled.div`
    background-image: url("${background}");
    background-size: cover;
    background-repeat: no-repeat;
`


const Layout = ({ children }) => {
    return (
        <Wrapper>
            <Header />
            {children}
            <Footer />
        </Wrapper>
    )
}

export default Layout