import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

import styles from "./ClassroomPortfolio.module.css"

const ProjectTags = ({tags}) => {
    return (
        <div className={styles.projectTags}>
            {tags.join(', ')}
        </div>
    )
}

const ClassroomPortfolio = () => {

    const data = useStaticQuery(graphql`
    query ClassroomPortfolioQuery {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "portfolio"}}}) {
        edges {
          node {
            frontmatter {
              title
              tags
              pdf
              excerpt
              teaserImage {
                childImageSharp {
                  fixed(width: 160) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
    `)

    return (
        <div className={styles.row}>
            {
                data &&
                data.allMarkdownRemark &&
                data.allMarkdownRemark.edges &&
                data.allMarkdownRemark.edges &&
                data.allMarkdownRemark.edges.map((project) => {

                    const hasTags = (project.node.frontmatter.tags && project.node.frontmatter.tags.length) ? true : false

                    return (
                        <div className={styles.project}>
                            <a className={styles.projectInner}
                               href={project.node.frontmatter.pdf}
                               download
                            >
                                <div className={styles.projectImage}>
                                    {
                                        project.node.frontmatter &&
                                        project.node.frontmatter &&
                                        project.node.frontmatter.teaserImage &&
                                        project.node.frontmatter.teaserImage.childImageSharp &&
                                        project.node.frontmatter.teaserImage.childImageSharp.fixed &&
                                        <Img
                                            className={styles.projectImageShadow}
                                            fixed={project.node.frontmatter.teaserImage.childImageSharp.fixed}/>
                                    }
                                </div>
                                <div className={styles.projectContent}>
                                    {hasTags && <ProjectTags tags={project.node.frontmatter.tags}/>}
                                    <h3 className={styles.projectHeadline}>
                                        {project.node.frontmatter.title}
                                    </h3>
                                    <p className={styles.projectExcerpt}>{project.node.frontmatter.excerpt}</p>
                                </div>
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ClassroomPortfolio
