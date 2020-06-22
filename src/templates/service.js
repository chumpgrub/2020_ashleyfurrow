import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./standard-page.module.css";

const ServicePage = ({data}) => {

    const {title, intro} = data.markdownRemark.frontmatter
    const html = data.markdownRemark.html

    return (
        <Layout>
            <SEO title={`${title} | Ashley Alexander Furrow`}/>
            <div className={styles.main}>
                <div className={styles.content}>
                    <h1>{title}</h1>
                    <h4>{intro}</h4>
                    <div className="entry"
                         dangerouslySetInnerHTML={{__html: html}}
                    />
                </div>
            </div>
        </Layout>
    )
}

export default ServicePage

export const ServicePageQuery = graphql`
query ServiceQuery($id: String!) {
  markdownRemark(id: {eq: $id}) {
    frontmatter {
      title
      intro
    }
    html
  }
}
`
