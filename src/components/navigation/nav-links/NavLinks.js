import React, { useContext } from 'react'
import { Link } from 'gatsby'
import BurgerContext from '../../../context/burger/burgerContext'

import navlinksStyles from './navlinks.module.scss'

const NavLinks = () => {
    const burgerContext = useContext(BurgerContext)
    const { toggleMenu, showMenu } = burgerContext

    function getWidth() {
        if (window.self.innerWidth) {
            return window.self.innerWidth
        }

        if (document.documentElement && document.documentElement.clientWidth) {
            return document.documentElement.clientWidth
        }

        if (document.body) {
            return document.body.clientWidth
        }
    }

    const onToggle = () => {
        if (getWidth() < 700) {
            toggleMenu()
            const navLinks = document.querySelectorAll('.nav-links')
            const sliderLink = document.querySelector('.slider-link')

            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = ''
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index /
                        11 +
                        0.1}s`
                }
            })

            if (sliderLink.style.animation) {
                sliderLink.style.animation = ''
            } else {
                sliderLink.style.animation = `navLinkFade 0.5s ease forwards ${0.8}s`
            }
        }
    }

    const menuActive = showMenu ? navlinksStyles.navActive : ''

    return (
        <ul className={`${navlinksStyles.sideNav} ${menuActive}`}>
            <li className={`${navlinksStyles.sideNav__item} nav-links`}>
                <Link
                    to="/"
                    className={navlinksStyles.sideNav__link}
                    activeClassName={navlinksStyles.linkActive}
                    onClick={onToggle}
                >
                    Home
                </Link>
            </li>
            <li className={`${navlinksStyles.sideNav__item} nav-links`}>
                <Link
                    to="/mywork"
                    className={navlinksStyles.sideNav__link}
                    activeClassName={navlinksStyles.linkActive}
                    onClick={onToggle}
                >
                    My Work
                </Link>
            </li>
            <li className={`${navlinksStyles.sideNav__item} nav-links`}>
                <Link
                    to="/aboutme"
                    className={navlinksStyles.sideNav__link}
                    activeClassName={navlinksStyles.linkActive}
                    onClick={onToggle}
                >
                    About me
                </Link>
            </li>
            <li className={`${navlinksStyles.sideNav__item} nav-links`}>
                <Link
                    to="/contact"
                    className={navlinksStyles.sideNav__link}
                    activeClassName={navlinksStyles.linkActive}
                    onClick={onToggle}
                >
                    Contact
                </Link>
            </li>
            <li className={`${navlinksStyles.sideNav__item} nav-links`}>
                <Link
                    to="/blog"
                    className={navlinksStyles.sideNav__link}
                    activeClassName={navlinksStyles.linkActive}
                    onClick={onToggle}
                >
                    Blog
                </Link>
            </li>
        </ul>
    )
}

export default NavLinks
