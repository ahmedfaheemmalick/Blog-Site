import { graphql } from "gatsby";

const getRecentPost = graphql`{
    allContentfulPost(sort: {fields: createdAt, order: ASC}, limit: 5) {
      nodes {
        title
        authorName
        createdAt
      }
    }
  }`

export default getRecentPost