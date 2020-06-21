import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ServiceListing from "../components/ServiceListing"
import CTA from "../components/CTA"

const IndexPage = ({data}) => {
    const {frontmatter} = data.markdownRemark
    console.log(frontmatter)

    return (
        <Layout>
            <SEO title="Home" />
            {frontmatter.title && <h1>{frontmatter.title}</h1>}
            {frontmatter.hero && frontmatter.hero.heading && <h1>{frontmatter.hero.heading}</h1>}
            {frontmatter.hero && frontmatter.hero.subheading && <h4>{frontmatter.hero.subheading}</h4>}
            {
                frontmatter.hero &&
                frontmatter.hero.heroImage &&
                frontmatter.hero.heroImage.childImageSharp &&
                frontmatter.hero.heroImage.childImageSharp.fixed &&
                <Img fixed={frontmatter.hero.heroImage.childImageSharp.fixed}/>
            }
            <ServiceListing/>
            <CTA/>
        </Layout>
    )
}

export default IndexPage

export const pageQuery = graphql`
query HomePageQuery {
  markdownRemark(frontmatter: {templateKey: {eq: "home-page"}}) {
    frontmatter {
      title
      slug
      hero {
        heading
        subheading
        heroImage {
          childImageSharp {
            fixed(width: 300) {
                ...GatsbyImageSharpFixed
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
    }
    html
  }
}
`
