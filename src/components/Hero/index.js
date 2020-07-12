import React from 'react'
import Img from 'gatsby-image'

import styles from './Hero.module.css'

const Hero = ({data}) => data && (
    <div className={styles.heroWrapper}>
        <div className={`container ${styles.heroContainer}`}>
            <div className={`row ${styles.hero}`}>
                <div className={`col ${styles.hero__content}`}>

                    {data.heading && <h1>{data.heading}</h1>}
                    {data.subheading && <p>{data.subheading}</p>}
                </div>
                <div className={`col ${styles.hero__image}`}>
                    {
                        data.heroImage &&
                        data.heroImage.childImageSharp &&
                        data.heroImage.childImageSharp.fluid &&
                        <Img fluid={data.heroImage.childImageSharp.fluid}/>
                    }
                </div>
            </div>
        </div>
    </div>
)

export default Hero;
