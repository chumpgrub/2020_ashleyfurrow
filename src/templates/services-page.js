import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ServiceListing from "../components/ServiceListing"

const ServicesPage = ({data}) => {
    console.log(data)

    const {title} = data.markdownRemark.frontmatter
    const html = data.markdownRemark.html

    return (
        <Layout>
            <SEO title={`${title} | Ashley Alexander Furrow`} />
            <h1>{title}</h1>
            <div className="entry"
                 dangerouslySetInnerHTML={{__html: html}}
            />
            <ServiceListing/>
        </Layout>
    )
}

export default ServicesPage

export const ServicesPageQuery = graphql`
query ServicesPageQuery($id: String!) {
  markdownRemark(id: {eq: $id}) {
    frontmatter {
      title
    }
    html
  }
}
`
