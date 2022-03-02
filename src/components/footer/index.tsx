import React from "react"
import { Link } from "gatsby"
import styles from "./index.module.css"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.links}>
          <li>
            <span>BLOG SITE &copy; 2021</span>
          </li>
          <li>
            <Link to="">TWITTER</Link>
          </li>
          <li>
            <Link to="">YOUTUBE</Link>
          </li>
          <li>
            <Link to="">INSTAGRAM</Link>
          </li>
          <li>
            <Link to="">FLICKR</Link>
          </li>
          <li>
            <Link to="">LINKEDIN</Link>
          </li>
          <li>
            <span>PRIVACY POLICY</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
