import React, {useState, useEffect, useRef} from "react"
import {Link} from "gatsby"
import PropTypes from "prop-types"

import Nav from "../Nav"

import styles from "./Header.module.css"

const Header = () => {

    const [menuOpen, handleClick] = useState(false)
    const [height, setHeight] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
        setHeight(ref.current.clientHeight)
    }, [])

    return (
        <header ref={ref} className={styles.header}>
            <div className="container">
                <div className={`row ${styles.rowHeader}`}>
                    <div className="col">
                        <span className={styles.siteBrand}>
                            <Link className={styles.homeLink} to="/">Ashley <span>Alexander</span> Furrow, PhD</Link>
                        </span>
                        <div className={styles.siteDescription}>Education & Reading Specialist</div>
                    </div>
                    <Nav menu={menuOpen}
                         offset={height}/>
                    <button className={styles.menuTrigger}
                            onClick={() => handleClick(!menuOpen)}
                    ><span></span></button>
                </div>
            </div>
        </header>
    )

}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
