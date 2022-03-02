import React from "react"
import { Link } from "gatsby"
import Layout from "../../Layout/Layout"
import styles from "./index.module.css"

const indexPage = () => {
  return (
    <div className={styles.home}>
      <Layout>
        <div className={styles.container}>
          <p>Hello! Welcome to</p>
          <h1>Blog Site</h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <Link className={styles.btn} to="/blog/">
            Start Reading
          </Link>
        </div>
      </Layout>
    </div>
  )
}

export default indexPage
