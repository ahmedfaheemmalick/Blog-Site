import React, { useState } from "react"
import { Link } from "gatsby"
import hamberger_1 from "../../Images/hamberger-1.svg"
import hamberger_2 from "../../Images/hamberger-2.svg"
import styles from "./index.module.css"

const Header = () => {
  const [nav, setNav] = useState("close")

  const toogleNav = () => {
    nav === "close" ? setNav("open") : setNav("close")
  }

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.big_nav}>
          <div
            className={`${
              nav === "close" ? styles.big_close_nav : styles.hide
            }`}
          >
            <div>
              <Link className={styles.logo} to="/#">
                My Bl<span>og</span>.
              </Link>
            </div>
            <div>
              <img
                className={styles.hamberger}
                src={hamberger_1}
                onClick={toogleNav}
                alt="hamberger"
              />
            </div>
          </div>
          <div
            className={`${nav === "open" ? styles.big_open_nav : styles.hide}`}
          >
            <div>
              <ul>
                <li>
                  <Link to="/#">HOME</Link>
                </li>
                <li>
                  <Link to="/blogs">BLOG</Link>
                </li>
              </ul>
            </div>
            <div>
              <img
                className={styles.hamberger}
                src={hamberger_2}
                onClick={toogleNav}
                alt="hamberger"
              />
            </div>
          </div>
        </div>
        <div className={styles.small_nav}>
          <div>
            <Link className={styles.logo} to="/#">
              My Bl<span>og</span>.
            </Link>
          </div>
          <div className={styles.small_nav_right}>
            <Link to="/#">HOME</Link>
            <Link to="/blogs">BLOG</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
