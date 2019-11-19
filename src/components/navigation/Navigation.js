import React from 'react'

import navigationStyles from './navigation.module.scss'

import NavLogo from './nav-logo/NavLogo'
import Slider from './slider/Slider'
import NavLinks from './nav-links/NavLinks'
import NavIcons from './nav-icons/NavIcons'
import Legal from './legal/Legal'
import Burger from './burger-menu/burger'

import BurgerState from '../../context/burger/BurgerState'

const Navigation = () => {
    return (
        <nav className={navigationStyles.sidebar}>
            <BurgerState>
                <NavLogo />
                <Slider />
                <NavLinks />
                <NavIcons />
                <Burger />
            </BurgerState>
        </nav>
    )
}

export default Navigation
