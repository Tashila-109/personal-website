import React, { useRef } from 'react'
import { useTransition, animated } from 'react-spring'

import '../../styles/main.scss'

import Navigation from '../navigation/Navigation'

function keyExistsInArray(key, arr) {
    return arr.some(function(el) {
        return el.key === key
    })
}

const Layout = ({ location, children }) => {
    const visitedRoutes = useRef([])

    const transitions = useTransition(location, location.pathname, {
        from: {
            position: 'absolute',
            opacity: 0.01,
            transform: 'translate3d(100%,0,0)',
        },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
        unique: true,
        reset: true,
    })

    const exists = keyExistsInArray(children.key, visitedRoutes.current)
    if (!exists) {
        visitedRoutes.current.push(children)
    }
    return (
        <div className="container">
            <Navigation />
            {transitions.map(({ item, props, key }) => {
                return (
                    <animated.div key={key} style={props}>
                        {item.pathname === children.key
                            ? // entering view
                              children
                            : // again, not sure if this is the best approach
                              // exiting view. or just render children if its the initial render
                              visitedRoutes.current.find(x => x.key === key) ||
                              children}
                    </animated.div>
                )
            })}
        </div>
    )
}

export default Layout
