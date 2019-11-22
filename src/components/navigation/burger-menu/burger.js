import React, { useContext } from 'react'
import BurgerContext from '../../../context/burger/burgerContext'

import burgerStyles from './burger.module.scss'

import useLockBodyScroll from '../../../utils/LockScroll'

const Burger = () => {
    const burgerContext = useContext(BurgerContext)
    const { toggleMenu, showMenu } = burgerContext

    const onToggle = () => {
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

    const burgerActive = showMenu ? burgerStyles.toggle : ''

    return (
        <div
            className={`${burgerStyles.burger} ${burgerActive}`}
            onClick={onToggle}
        >
            <div className={burgerStyles.line1}></div>
            <div className={burgerStyles.line2}></div>
            <div className={burgerStyles.line3}></div>
        </div>
    )
}

export default Burger
