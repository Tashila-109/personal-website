import { TOGGLE_MENU } from '../types'

export default (state, action) => {
    switch (action.type) {
        case TOGGLE_MENU:
            return {
                ...state,
                showMenu: !state.showMenu,
            }

        default:
            return state
    }
}
