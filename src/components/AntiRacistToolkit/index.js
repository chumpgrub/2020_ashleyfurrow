import React from "react"
import Img from "gatsby-image"
import {Link, useStaticQuery, graphql} from "gatsby"

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

    console.log(frontmatter, html)

    return (
        <section className={styles.section}>
            <div className={styles.box}>
                <div className={styles.row}>
                    <div>
                        {frontmatter.title && <h3>{frontmatter.title}</h3>}
                        {html && <div dangerouslySetInnerHTML={{__html: html}}/>}
                        {frontmatter.link &&
                        <Link className={`cta`} to={frontmatter.link.url}>{frontmatter.link.text}</Link>}
                    </div>
                    {
                        frontmatter.image &&
                        frontmatter.image.childImageSharp &&
                        frontmatter.image.childImageSharp.fluid &&
                        <div className={styles.image}>
                            {
                                frontmatter.link &&
                                frontmatter.link.url &&
                                <Link to={frontmatter.link.url}>
                                    <Img fluid={frontmatter.image.childImageSharp.fluid}/>
                                </Link>
                            }
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default AntiRacistToolkit
