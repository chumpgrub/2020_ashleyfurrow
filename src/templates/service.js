import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicePage = ({data}) => {

    const {title, intro} = data.markdownRemark.frontmatter
    const html = data.markdownRemark.html

    return (
        <Layout>
            <SEO title={`${title} | Ashley Alexander Furrow`} />
            <h1>{title}</h1>
            <h4>{intro}</h4>
            <div className="entry"
                 dangerouslySetInnerHTML={{__html: html}}
            />
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
