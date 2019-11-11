import React from 'react'

import '../../styles/main.scss'

import Navigation from '../navigation/Navigation'

const Layout = props => {
    return (
        <div className="container">
            <Navigation />
            {props.children}
        </div>
    )
}

export default Layout
