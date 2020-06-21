import React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'

import styles from './CTA.module.css'

const CTA = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
      markdownRemark(frontmatter: {templateKey: {eq: "home-page"}}) {
        frontmatter {
          cta {
            headline
            content
            link {
              text
              url
            }
          }
          ctaImage {
            childImageSharp {
              fluid(maxWidth: 1000) {
                originalImg
              }
            }
          }
        }
      }
    }
    `)

    const {headline, content, link} = data.markdownRemark.frontmatter.cta
    const background = data.markdownRemark.frontmatter.ctaImage.childImageSharp.fluid.originalImg

    return (
        <section className="ctaWrapper" style={{backgroundColor : 'var(--color-light-gray)'}}>
            <div className="container">
                <div className={`row`}>
                    <div className={`col ${styles.ctaCol}`}>
                        <div style={{
                            backgroundImage: `url(${background})`,
                            backgroundSize: 'cover'
                        }}
                        >
                            <div className={`cta ${styles.cta}`}>
                                <h2>{headline}</h2>
                                <p dangerouslySetInnerHTML={{__html: content}}/>
                                <a href={link.url} className="button">{link.text}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA
