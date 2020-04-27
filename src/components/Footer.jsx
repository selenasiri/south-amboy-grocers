import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styles from '../css/footer.module.css'
import links from '../constants/links'
import socialIcons from '../constants/social-icons'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* internal links use Link component */}
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <AniLink
              fade
              key={index}
              to={item.path}
              activeStyle={{ color: 'red' }}
            >
              {item.text}
            </AniLink>
          )
        })}
      </div>

      {/* external links use a tag */}
      <div className={styles.icons}>
        {socialIcons.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </div>

      {/* copyright */}
      <div className={styles.copyright}>
        copyright &copy; backroads company {new Date().getFullYear()} all right
        reserved
      </div>
    </footer>
  )
}

export default Footer
