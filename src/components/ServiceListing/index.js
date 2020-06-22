import React from "react"
import {Link, useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

import styles from "./ServiceListing.module.css"

const ServiceTeaser = ({title, slug, excerpt, teaserImage}) => (
    <div className={styles.row}>
        <Link to={slug}>
            <div className={`col ${styles.colImage}`}>
                {
                    teaserImage &&
                    teaserImage.childImageSharp &&
                    teaserImage.childImageSharp.fluid &&
                    <Img fluid={teaserImage.childImageSharp.fluid}/>
                }
            </div>
            <div className={`col ${styles.colContent}`}>
                <h3>{title}</h3>
                <p>{excerpt}</p>
            </div>
        </Link>
    </div>
)


const ServiceListing = ({heading, content}) => {

    const data = useStaticQuery(graphql`
        query ServicesQuery {
          allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "service"}}}, sort: {fields: frontmatter___order, order: ASC}) {
            nodes {
              frontmatter {
                title
                order
                excerpt
                slug
                teaserImage {
                  id
                  childImageSharp {
                    fluid(maxWidth: 600) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
    `)

    const services = data.allMarkdownRemark.nodes

    return (
        <section className={styles.pageblock}>
            <div className={styles.container}>
                <header className={styles.sectionHeader}>
                    {heading && <h2>{heading}</h2>}
                    {content && <p>{content}</p>}
                </header>
                {
                    services &&
                    services.map((service, index) => {
                        return (
                            <ServiceTeaser
                                key={index}
                                {...service.frontmatter}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default ServiceListing
