import React from 'react'
import Transition from '../components/transition'

import '../styles/main.scss'

import Navigation from '../components/navigation/Navigation'

const Layout = props => {
    if (props.pageContext.layout === '404') {
        return (
            <div className="container">
                <Transition location={props.location}>
                    {props.children}
                </Transition>
            </div>
        )
    }

    return (
        <div className="container">
            <Navigation />
            <Transition location={props.location}>{props.children}</Transition>
        </div>
    )
}

export default Layout
