import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'

const Index = ({ data }) => {
  console.log('YYYYY', data)

  return (
    <Layout>
      <SEO title="Home" />
      <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
        <Banner
          title="South Amboy GreenGrocer"
          info="Welcome to our online grocery store"
        >
          <AniLink fade to="/grocers" className="btn-white">
            online shopping grocers
          </AniLink>
        </Banner>
      </StyledHero>

      <About />
    </Layout>
  )
}

export const query = graphql`
  {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default Index
