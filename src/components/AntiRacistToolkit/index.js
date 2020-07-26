import React from "react"
import Img from "gatsby-image"
import {Link, useStaticQuery, graphql} from "gatsby"
import {OutboundLink} from "gatsby-plugin-google-analytics"

import styles from "./AntiRacistToolkit.module.css"

const AntiRacistToolkit = () => {

    const data = useStaticQuery(graphql`
    query ToolkitQuery {
      markdownRemark(frontmatter: {pageID: {eq: "toolkit"}}) {
        frontmatter {
          title
          link {
            text
            url
          }
          image {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
        }
        html
      }
    }
    `)

    const {frontmatter, html} = data.markdownRemark

    return (
        <section className={styles.section}>
            <div className={styles.box}>
                <div className={styles.row}>
                    <div style={{'flexGrow': '1'}}>
                        {frontmatter.title && <h3>{frontmatter.title}</h3>}
                        {html && <div dangerouslySetInnerHTML={{__html: html}}/>}
                        {frontmatter.link &&
                        <OutboundLink className={`cta`}
                                      href={frontmatter.link.url}>{frontmatter.link.text}</OutboundLink>
                        }
                    </div>
                    {
                        frontmatter.image &&
                        frontmatter.image.childImageSharp &&
                        frontmatter.image.childImageSharp.fluid &&
                        <div className={styles.image}>
                            {
                                frontmatter.link &&
                                frontmatter.link.url &&
                                <OutboundLink href={frontmatter.link.url}>
                                    <Img fluid={frontmatter.image.childImageSharp.fluid}/>
                                </OutboundLink>
                            }
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default AntiRacistToolkit
