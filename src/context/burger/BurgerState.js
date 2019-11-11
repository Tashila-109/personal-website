import React, { useReducer } from 'react'
import BurgerContext from './burgerContext'
import burgerReducer from './burgerReducer'
import { TOGGLE_MENU } from '../types'

const BurgerState = props => {
    const initialState = {
        showMenu: false,
    }

    const [state, dispatch] = useReducer(burgerReducer, initialState)

    // Toggle Menu
    const toggleMenu = () => {
        dispatch({ type: TOGGLE_MENU })
    }

    return (
        <BurgerContext.Provider
            value={{ showMenu: state.showMenu, toggleMenu }}
        >
            {props.children}
        </BurgerContext.Provider>
    )
}

export default BurgerState
