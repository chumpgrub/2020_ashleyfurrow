import React, {useState} from "react"
import {Link, useStaticQuery, graphql} from "gatsby"

import styles from "./Nav.module.css"

const NavItem = ({item}) => {

    const [collapse, setCollapse] = useState(true)

    return (
        <>
            <Link to={item.url} alt={item.name} className={styles.link}>
                {item.name}
            </Link>
            { item.menuLinks && <span className={styles.toggle} onClick={() => setCollapse(!collapse)}></span> }
            { item.menuLinks && <NavSubMenu children={item.menuLinks} collapse={collapse}/> }
        </>
    )
}

const NavSubMenu = ({children, collapse}) => {

    const collapseState = collapse ? styles.subMenu : styles.subMenuExpanded

    return (
        <ul className={`subMenu ${collapseState}`}>
            {
                children.map(
                    item => {
                        return (
                            <li key={item.object_id} className={styles.li}>
                                <Link to={item.url} alt={item.name} className={styles.link}>
                                    {item.name}
                                </Link>
                            </li>
                        )
                    }
                )
            }
        </ul>
    )
}

const Nav = ({menu, offset}) => {

    const data = useStaticQuery(graphql`
    query NavQuery {
      site {
        siteMetadata {
          menuLinks {
            name
            link
            menuLinks {
              name
              link
            }
          }
        }
      }
    }
    `)

    const menuLinks = data.site.siteMetadata.menuLinks
    const menuState = menu ? styles.menuActive : ''

    return (
        <nav className={`col ${styles.nav} ${menuState}`} style={{top: offset}}>
            <ul className={styles.ul}>
                {menuLinks && menuLinks.map((item) => {
                    return (
                        <li className={styles.li}>
                            <NavItem item={item}/>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Nav
