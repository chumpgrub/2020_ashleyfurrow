import React from 'react'

import CTA from "../CTA"

import styles from './footer.module.css'

const Footer = () => {

    return (
        <>
            <CTA/>
            <footer className={`${styles.footer}`}>
                <small>&copy; Ashley Alexander Furrow {new Date().getFullYear()}</small>
            </footer>
        </>
    )
}

export default Footer
