/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"
import Helmet from "react-helmet"

import Header from "./Header"
import Footer from "./Footer"

import favicon from "../images/favicon.png"

const Layout = ({children}) => {

    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
    `)

    return (
        <>
            <Helmet>
                <link rel="icon" href={favicon}/>
            </Helmet>
            <Header siteTitle={data.site.siteMetadata.title}/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
