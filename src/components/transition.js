import React from 'react'
import {
    TransitionGroup,
    Transition as ReactTransition,
} from 'react-transition-group'

const timeout = 400
const getTransitionStyles = {
    entering: {
        transform: 'translateX(80%)',
        position: `absolute`,
        opacity: 0,
        overflow: 'hidden',
    },
    entered: {
        transform: 'translateX(0%)',
        transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
        opacity: 1,
    },
    exiting: {
        transform: 'translateX(-80%)',
        transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
        opacity: 0,
        overflow: 'hidden',
    },
}
const Transition = props => {
    const { children, location } = props

    return (
        <TransitionGroup>
            <ReactTransition
                key={location.pathname}
                timeout={{
                    enter: 400,
                    exit: 400,
                }}
            >
                {status => (
                    <div
                        style={{
                            ...getTransitionStyles[status],
                        }}
                    >
                        {children}
                    </div>
                )}
            </ReactTransition>
        </TransitionGroup>
    )
}
export default Transition
