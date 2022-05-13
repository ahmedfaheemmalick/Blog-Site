import React from 'react'
import { Link, useStaticQuery } from 'gatsby'
import getRecentPost from '../queries/getRecentPost'

const PostWidget = () => {
    const recentPost = useStaticQuery(getRecentPost)

    return (
        <Wrapper></Wrapper>
    )
}

export default PostWidget