import React, { useContext } from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import BurgerContext from '../../../context/burger/burgerContext'

import sliderStyles from './slider.module.scss'

const Slider = () => {
    const burgerContext = useContext(BurgerContext)
    const { showMenu } = burgerContext

    const menuActive = showMenu ? sliderStyles.navActive : ''

    return (
        <div
            className={`${sliderStyles.themeSwitchWrapper} ${menuActive} slider-link`}
        >
            <ThemeToggler>
                {({ theme, toggleTheme }) => (
                    <label className={`${sliderStyles.themeSwitch} `}>
                        <input
                            type="checkbox"
                            onChange={e =>
                                toggleTheme(e.target.checked ? 'light' : 'dark')
                            }
                            checked={theme === 'light'}
                            value="checked"
                            name="checked"
                        />{' '}
                        <div
                            className={`${sliderStyles.slider} ${sliderStyles.round}`}
                        ></div>
                    </label>
                )}
            </ThemeToggler>
        </div>
    )
}

export default Slider
