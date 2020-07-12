import React from "react"
import {useStaticQuery, graphql} from "gatsby"

import styles from "../../templates/standard-page.module.css"

const AboutExtra = () => {
    const data = useStaticQuery(graphql`
    query AboutExtraQuery {
      allMarkdownRemark(filter: {frontmatter: {pageID: {in: ["philosophy", "classroom"]}}}, sort: {fields: frontmatter___pageID, order: DESC}) {
        nodes {
          html
        }
      }
    }
    `)

    return (
        <div className={styles.content}>
            {
                data &&
                data.allMarkdownRemark &&
                data.allMarkdownRemark.nodes &&
                data.allMarkdownRemark.nodes.map((extra) => <div dangerouslySetInnerHTML={{__html: extra.html}}/>)
            }
        </div>
    )
}

export default AboutExtra
