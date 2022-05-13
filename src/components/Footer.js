import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled.div`
    color: #fff;
    padding: 10px 0;
    text-decoration: none;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
`

const Ul = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
`
const Li = styled.li`
    padding: 0 10px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #fff;
`

const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <Ul>
                    <Li><span>BLOG SITE &copy; 2021</span></Li>
                    <Li><StyledLink to="">TWITTER</StyledLink></Li>
                    <Li><StyledLink to="">YOUTUBE</StyledLink></Li>
                    <Li><StyledLink to="">INSTAGRAM</StyledLink></Li>
                    <Li><StyledLink to="">FLICKR</StyledLink></Li>
                    <Li><StyledLink to="">LINKEDIN</StyledLink></Li>
                    <Li><span>PRIVACY POLICY</span></Li>
                </Ul>
            </Container>
        </Wrapper>
    )
}

export default Footer