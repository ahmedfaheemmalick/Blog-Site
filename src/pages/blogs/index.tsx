import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../../Layout/Layout"
import styles from "./index.module.css"

const Blog = () => {
  const query = useStaticQuery(
    graphql`
      {
        allContentfulPost {
          edges {
            node {
              author
              excerpt {
                json
              }
              image {
                fluid {
                  src
                }
              }
              slug
              title
              publishedDate(formatString: "Do MMM YYYY")
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <div className={styles.blog}>
        <div className={styles.container}>
          {query.allContentfulPost.edges.map((edge, index) => (
            <Link
              to={`/blog/${edge.node.slug}`}
              key={index}
              className={styles.card}
            >
              <img src={edge.node.image.fluid.src} alt="" />
              <h1>{edge.node.title}</h1>
              <p>{documentToReactComponents(edge.node.excerpt.json)}</p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Blog
