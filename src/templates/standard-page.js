import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql} from "gatsby";

import AntiRacistToolkit from "../components/AntiRacistToolkit"
import AboutExtra from "../components/About/AboutExtra"
import ClassroomPortfolio from "../components/ClassroomPortfolio"
import Services from "../components/ServiceListing"
import ContactForm from "../components/ContactForm"

import styles from "./standard-page.module.css"

const StandardPage = ({data}) => {

    const {title, pageID, intro} = data.markdownRemark.frontmatter
    const html = data.markdownRemark.html

    let extraContent = null
    switch(pageID) {
        case 'about':
            extraContent = <div><AntiRacistToolkit/><AboutExtra/></div>
            break;
        case 'about-portfolio':
            extraContent = <ClassroomPortfolio/>
            break;
        case 'services':
            extraContent = <Services/>
            break;
        case 'contact':
            extraContent = <ContactForm/>
            break;
        default:
            break;
    }

    const h1Style = (pageID == 'contact') ? {maxWidth: 800, margin: '0 auto 1.8rem auto'} : null

    return (
        <Layout>
            <SEO title={`${title} | Ashley Alexander Furrow`} />
            <div className={styles.main}>
                <div className={styles.content}>
                    <h1 style={h1Style}>{title}</h1>
                    {intro && <h4 className={`intro`}>{intro}</h4>}
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
      intro
    }
    html
  }
}
`

