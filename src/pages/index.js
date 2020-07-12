import React from "react"
import {graphql} from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import ServiceListing from "../components/ServiceListing"

import styles from "./index.module.css"

const IndexPage = ({data}) => {

    const {frontmatter} = data.markdownRemark
    const {testimony, testimonialImage} = frontmatter.testimonial
    const {heading, content} = frontmatter.services

    return (
        <Layout>
            <SEO title="Home"/>
            {
                frontmatter &&
                frontmatter.hero &&
                <Hero data={frontmatter.hero}/>
            }
            <section className={styles.homeContainer}>
                <div className="container">
                    <div className={`row ${styles.row}`}>
                        {
                            testimonialImage &&
                            testimonialImage.childImageSharp &&
                            testimonialImage.childImageSharp.fixed &&
                                <Img className={styles.testimonyImage}
                                     fixed={testimonialImage.childImageSharp.fixed}
                                />
                        }
                        <div className={`col ${styles.body}`}>
                            <p>{testimony}</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className={styles.servicesWrapper}>
                <ServiceListing heading={heading} content={content}/>
            </div>
        </Layout>
    )
}

export default IndexPage

export const HomePageQuery = graphql`
query HomeQuery {
  markdownRemark(frontmatter: {templateKey: {eq: "home-page"}}) {
    frontmatter {
      title
      slug
      hero {
        heading
        subheading
        heroImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      testimonial {
        testimony
        testimonialImage {
          childImageSharp {
            fixed(width: 200) {
              base64
              tracedSVG
              aspectRatio
              srcWebp
              srcSetWebp
              originalName
            }
          }
        }
      }
      services {
        heading
        content
      }
    }
    html
  }
}
`
