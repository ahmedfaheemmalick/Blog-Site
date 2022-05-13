import { graphql } from "gatsby";

const getAllPosts = graphql`{
    allContentfulPost {
      nodes {
        authorName
        contentful_id
        authorImage {
          file {
            url
          }
        }
        createdAt
        postImage {
          file {
            url
          }
        }
        slug
        title
      }
    }
  }`

export default getAllPosts