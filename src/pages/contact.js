import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ContactForm from "../components/ContactForm"

const ContactPage = () => {

    return (
        <Layout>
            <SEO title="Contact Page" />
            <h1>Contact Page</h1>
            <ContactForm/>
        </Layout>
    )
}

export default ContactPage
