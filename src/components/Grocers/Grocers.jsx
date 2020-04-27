import React from 'react'
import GrocersList from './GrocerList'
import { useStaticQuery, graphql } from 'gatsby'

const getGrocers = graphql`
  query {
    grocers: allContentfulGreenGrocer {
      edges {
        node {
          id: contentful_id
          name
          price
          description {
            description
          }
          image {
            fixed(width: 270, height: 210) {
              src
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
          category
        }
      }
    }
  }
`

const Grocers = () => {
  const { grocers } = useStaticQuery(getGrocers)

  return <GrocersList grocers={grocers} />
}

export default Grocers
