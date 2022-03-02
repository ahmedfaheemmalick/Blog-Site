import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import React from "react"
import Layout from "../../Layout/Layout"
import styles from "./index.module.css"

const blogPost = ({ pageContext: { data } }) => {
  return (
    <Layout>
      <div className={styles.blog_post}>
        {data && (
          <div className={styles.container}>
            <h1>{data.title}</h1>
            <p>{data.author}</p>
            <p>{data.publishedDate}</p>
            <img src={data.image.fluid.src} alt="" />
            <div>
              {data.content.content &&
                documentToReactComponents(JSON.parse(data.content.content))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default blogPost
