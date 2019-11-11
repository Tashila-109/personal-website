import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import navlogoStyles from './navlogo.module.scss'
import Logo from '../../../images/logo-nav.svg'

const NavLogo = () => {
    return (
        <AniLink
            swipe
            direction="left"
            duration={1}
            entryOffset={80}
            hex="#1D1D1D"
            to="/"
            className={navlogoStyles.logoNav}
        >
            <img
                src={Logo}
                alt="logo"
                className={navlogoStyles.logoNav__logo}
            />
            <span className={navlogoStyles.logoNav__text}>TASHILA</span>
        </AniLink>
    )
}

export default NavLogo
