import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import Grocers from '../components/Grocers/Grocers'
import SEO from '../components/SEO'

const GrocersPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Grocer" />
      <StyledHero img={data.defaultBcg.childImageSharp.fluid}>
        <h2 style={{ color: 'white' }}>Shop Aisles</h2>
      </StyledHero>

      <Grocers />
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
export default GrocersPage
