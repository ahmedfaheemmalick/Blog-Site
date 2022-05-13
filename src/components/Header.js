import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    color: #fff;
    padding: 10px 30px;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
`

const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
`
const Li = styled.li`
    padding: 0 10px;
`

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <div>
                    <h1>Blog Site</h1>
                </div>
                <div>
                    <Ul>
                        <Li>Tech</Li>
                        <Li>Sports</Li>
                        <Li>Education</Li>
                        <Li>Photography</Li>
                    </Ul>
                </div>
            </Container>
        </Wrapper>
    )
}

export default Header