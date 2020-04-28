import React from 'react'
import Image from 'gatsby-image'
import styles from '../../css/grocer.module.css'
import { FaMap } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

const getImage = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const Grocer = ({ grocer }) => {
  const data = useStaticQuery(getImage)
  const img = data.defaultBcg.childImageSharp.fixed
  const { id, name, price, description, image } = grocer
  let mainImage = image ? image.fixed : img

  return (
    <article className={styles.grocer}>
      <div className={styles.imgContainer}>
        <Image fixed={mainImage} className={styles.img} alt="single grocer" />
      </div>

      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 style={{ marginBottom: '1rem' }}>
            ${price.toFixed(2)}
            {description && (
              <span style={{ marginLeft: '1rem' }}>
                {description.description}
              </span>
            )}
          </h4>
        </div>

        {/* https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css */}
        <button
          className="btn-primary snipcart-add-item"
          style={{ fontSize: '0.8rem', padding: '0.3rem 0.3rem' }}
          data-item-id={id}
          data-item-name={name}
          data-item-price={price}
          data-item-image={mainImage.src}
          data-item-url="http://localhost:8000/grocers"
        >
          Add To Cart
        </button>
      </div>
    </article>
  )
}

//name, price, country, days, slug, images
// Grocer.propTypes = {
//   grocer: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     image: PropTypes.arrayOf(PropTypes.object).isRequired,
//   }),
// }
export default Grocer
