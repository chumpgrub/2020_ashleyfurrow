import React from "react"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicePage = ({data}) => {
    const {frontmatter} = data.markdownRemark
    console.log(frontmatter)

    return (
        <Layout>
            <SEO title="Service Test" />
            <h1>Service Test</h1>
        </Layout>
    )
}

export default ServicePage
