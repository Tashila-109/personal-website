import React, { useContext } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import BurgerContext from '../../../context/burger/burgerContext'

import navlinksStyles from './navlinks.module.scss'

const NavLinks = () => {
    const burgerContext = useContext(BurgerContext)
    const { showMenu } = burgerContext

    const menuActive = showMenu ? navlinksStyles.navActive : ''

    return (
        <ul className={`${navlinksStyles.sideNav} ${menuActive}`}>
            <li className={`${navlinksStyles.sideNav__item} nav-links`}>
                <AniLink
                    cover
                    direction="left"
                    duration={2}
                    to="/"
                    bg="#1D1D1D"
                    className={navlinksStyles.sideNav__link}
                    activeClassName={navlinksStyles.linkActive}
                >
                    Home
                </AniLink>
            </li>
            <li className={`${navlinksStyles.sideNav__item} nav-links`}>
                <AniLink
                    cover
                    direction="left"
                    duration={2}
                    to="/mywork"
                    bg="#1D1D1D"
                    className={navlinksStyles.sideNav__link}
                    activeClassName={navlinksStyles.linkActive}
                >
                    My Work
                </AniLink>
            </li>
            <li className={`${navlinksStyles.sideNav__item} nav-links`}>
                <AniLink
                    cover
                    direction="left"
                    duration={2}
                    to="/aboutme"
                    bg="#1D1D1D"
                    className={navlinksStyles.sideNav__link}
                    activeClassName={navlinksStyles.linkActive}
                >
                    About me
                </AniLink>
            </li>
            <li className={`${navlinksStyles.sideNav__item} nav-links`}>
                <AniLink
                    cover
                    direction="left"
                    duration={2}
                    to="/contact"
                    bg="#1D1D1D"
                    className={navlinksStyles.sideNav__link}
                    activeClassName={navlinksStyles.linkActive}
                >
                    Contact
                </AniLink>
            </li>
            <li className={`${navlinksStyles.sideNav__item} nav-links`}>
                <AniLink
                    cover
                    direction="left"
                    duration={2}
                    to="/blog"
                    bg="#1D1D1D"
                    className={navlinksStyles.sideNav__link}
                    activeClassName={navlinksStyles.linkActive}
                >
                    Blog
                </AniLink>
            </li>
        </ul>
    )
}

export default NavLinks
