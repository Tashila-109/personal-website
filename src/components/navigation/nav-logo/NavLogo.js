import React from 'react'
import { Link } from 'gatsby'

import navlogoStyles from './navlogo.module.scss'
import Logo from '../../../images/logo-nav.svg'

const NavLogo = () => {
    return (
        <Link to="/" className={navlogoStyles.logoNav}>
            <img
                src={Logo}
                alt="logo"
                className={navlogoStyles.logoNav__logo}
            />
            <span className={navlogoStyles.logoNav__text}>TASHILA</span>
        </Link>
    )
}

export default NavLogo
