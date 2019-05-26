import React from "react"
import styles from "../css/banner.module.css"
const Banner = ({ children, title, info }) => {
  return (
    <div className={styles.banner}>
      <h1>{title}</h1>
      <p>{info}</p>
      {children}
    </div>
  )
}

export default Banner
