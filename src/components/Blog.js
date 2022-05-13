import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

const Card = styled.div`
    width: 350px;
    height: 400px;
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 20px 15px;
    border-radius: 10px;
`

const Image = styled.img`
    width: 100%;
    height: 220px;
    object-fit: cover;
    margin-bottom: 10px;
`

const Title = styled(Link)`
    font-size: 1.3rem;
    font-weight: bold;
    color: #000;
    cursor: pointer;
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: #0173DE;
    }
`

const AuthorInfo = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`

const AuthorName = styled.h3`
    font-size: 1rem;
    font-weight: bold;
`

const AuthorImage = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
`

const CreatedDate = styled.h4`
    font-size: 0.8rem;
    font-weight: bold;
    color: #555;
`

const Blog = ({ post }) => {
    return (
        <Card>
            <Image
                src={post.postImage.file.url} alt={post.title}
            />
            <CreatedDate>{new Date(post.createdAt).toLocaleDateString()}</CreatedDate>
            <Title to={`blog/${post.slug}`}>{post.title}</Title>
            <AuthorInfo>
                <AuthorImage
                    src={post.authorImage.file.url} alt={post.authorName}
                />
                <AuthorName>{post.authorName}</AuthorName>
            </AuthorInfo>
        </Card>
    )
}

export default Blog