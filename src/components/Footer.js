import styles from "../css/footer.module.css"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => (
          <AniLink
            fade
            key={index}
            to={item.path}
            aria-label="navigate the page"
          >
            {item.text}
          </AniLink>
        ))}
      </div>
      <div className={styles.icons}>
        {socialIcons.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="navigate to social media"
            >
              {item.icon}
            </a>
          )
        })}
      </div>
      <div className={styles.copyright}>
        copyright &copy; backroads travel company {new Date().getFullYear()}.
        all rights reserved
      </div>
    </footer>
  )
}
