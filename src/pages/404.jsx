import React from 'react'
import Layout from '../components/Layout'
import styles from '../css/error.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Banner from '../components/Banner'
import Images from '../examples/Images'
import SEO from '../components/SEO'

const ErrorPage = () => {
  return (
    <Layout>
      <SEO title="Error" />
      <header className={styles.error}>
        <Banner title="oops it's a dead end">
          <AniLink fade to="/" className="btn-white">
            back to home page
          </AniLink>
        </Banner>
      </header>
      <Images />
    </Layout>
  )
}

export default ErrorPage
