import React, { useContext } from 'react'
import { Link } from 'gatsby'
import BurgerContext from '../../../context/burger/burgerContext'

import navlinksStyles from './navlinks.module.scss'

const NavLinks = () => {
    const burgerContext = useContext(BurgerContext)
    const { showMenu } = burgerContext

    const menuActive = showMenu ? navlinksStyles.navActive : ''

    return (
        <ul className={`${navlinksStyles.sideNav} ${menuActive}`}>
            <li className={`${navlinksStyles.sideNav__item} nav-links`}>
                <Link
                    to="/"
                    className={navlinksStyles.sideNav__link}
                    activeClassName={navlinksStyles.linkActive}
                >
                    Home
                </Link>
            </li>
            <li className={`${navlinksStyles.sideNav__item} nav-links`}>
                <Link
                    to="/mywork"
                    className={navlinksStyles.sideNav__link}
                    activeClassName={navlinksStyles.linkActive}
                >
                    My Work
                </Link>
            </li>
            <li className={`${navlinksStyles.sideNav__item} nav-links`}>
                <Link
                    to="/aboutme"
                    className={navlinksStyles.sideNav__link}
                    activeClassName={navlinksStyles.linkActive}
                >
                    About me
                </Link>
            </li>
            <li className={`${navlinksStyles.sideNav__item} nav-links`}>
                <Link
                    to="/contact"
                    className={navlinksStyles.sideNav__link}
                    activeClassName={navlinksStyles.linkActive}
                >
                    Contact
                </Link>
            </li>
            <li className={`${navlinksStyles.sideNav__item} nav-links`}>
                <Link
                    to="/blog"
                    className={navlinksStyles.sideNav__link}
                    activeClassName={navlinksStyles.linkActive}
                >
                    Blog
                </Link>
            </li>
        </ul>
    )
}

export default NavLinks
