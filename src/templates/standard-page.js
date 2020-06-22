import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql} from "gatsby";

import Services from "../components/ServiceListing"
import ContactForm from "../components/ContactForm"

import styles from "./standard-page.module.css"

const StandardPage = ({data}) => {

    const {title, pageID} = data.markdownRemark.frontmatter
    const html = data.markdownRemark.html

    let extraContent = null
    switch(pageID) {
        case 'services':
            extraContent = <Services/>
            break;
        case 'contact':
            extraContent = <ContactForm/>
            break;
    }

    return (
        <Layout>
            <SEO title={`${title} | Ashley Alexander Furrow`} />
            <div className={styles.main}>
                <div className={styles.content}>
                    <h1>{title}</h1>
                    <div className="entry"
                         dangerouslySetInnerHTML={{__html: html}}
                    />
                </div>
                {extraContent}
            </div>
        </Layout>
    )
}

export default StandardPage

export const StandardPageQuery = graphql`
query StandardPageQuery($id: String!) {
  markdownRemark(id: {eq: $id}) {
    frontmatter {
      pageID
      title
      slug
    }
    html
  }
}
`

