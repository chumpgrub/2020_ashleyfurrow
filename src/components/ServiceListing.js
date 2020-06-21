import React from "react"
import {Link, useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

const ServiceTeaser = ({title, slug, excerpt, teaserImage}) => (
    <div className="row">
        <Link to={slug}>
            <div className={`serviceImage`}>
            {
                teaserImage &&
                teaserImage.childImageSharp &&
                teaserImage.childImageSharp.fluid &&
                <Img fluid={teaserImage.childImageSharp.fluid}/>
            }
            </div>
            <div className={`serviceContent`}>
                <h3>{title}</h3>
                <p>{excerpt}</p>
            </div>
        </Link>
    </div>
)


const ServiceListing = () => {

    const data = useStaticQuery(graphql`
        query ServicesQuery {
          allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "service"}}}, sort: {fields: frontmatter___order, order: ASC}) {
            nodes {
              frontmatter {
                title
                order
                excerpt
                slug
                teaserImage {
                  id
                  childImageSharp {
                    fluid(maxWidth: 600) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
    `)

    const services = data.allMarkdownRemark.nodes

    return (
        <section className="pageblock">
        {
            services &&
            services.map((service, index) => {
                const {title, slug, excerpt, teaserImage} = service.frontmatter
                console.log(service)
                return(
                <ServiceTeaser
                    key={index}
                    {...service.frontmatter}
                />
                )
            })
        }
        </section>
    )
}

export default ServiceListing
