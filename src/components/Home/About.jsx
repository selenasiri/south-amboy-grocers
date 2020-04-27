import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)

  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="awesome landscape"
            />
          </div>
        </article>

        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            sapiente id sit ut soluta quam.
          </p>
          <p>
            lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            sapiente id sit ut soluta quam sdl.
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
