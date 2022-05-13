import React from 'react'
import { useStaticQuery } from "gatsby";
import styled from 'styled-components'
import getAllPosts from '../queries/getAllPosts';
import Layout from '../components/Layout'
import Blog from '../components/Blog'
import "../index.css"

const Blogs = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  min-height: 100vh;
  max-width: 1500px;
  margin: 0 auto;
  padding: 20px;
`

const Home = () => {
  // const allPosts = useStaticQuery(getAllPosts)

  return (
    <Layout>
      <Blogs>
        {/* {allPosts.allContentfulPost.nodes.map((post) => (
          <Blog
            key={post.contentful_id}
            post={post}
          />
        ))} */}
      </Blogs>
    </Layout>
  )
}

export default Home