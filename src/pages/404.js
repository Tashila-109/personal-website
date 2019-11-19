import React from 'react'
import { Link } from 'gatsby'

import notfoundStyles from './404.module.scss'

import LogoLarge from '../images/logo-large.svg'

const NotFound = () => {
    return (
        <main className="content-home">
            <div className={notfoundStyles.contentInside}>
                <div className={notfoundStyles.mainHeading}>
                    <span className="html-tags">&lt;h2&gt;</span>
                    <h1
                        className={`${notfoundStyles.mainHeading__align} heading-1 heading-1__grey`}
                    >
                        Page Not Found.
                    </h1>
                    <span className="html-tags">&lt;/h2&gt;</span>

                    <div
                        className={`${notfoundStyles.mainHeading__align} buttons-notfound`}
                    >
                        <Link
                            to="/"
                            className="button button__outline-red button__contact"
                        >
                            Home
                        </Link>
                    </div>
                </div>
            </div>
            <div className={notfoundStyles.imgLarge}>
                <img
                    src={LogoLarge}
                    alt="Logo large"
                    className={notfoundStyles.imgLarge__logo}
                />
            </div>
            <div className={notfoundStyles.numberLarge}>404</div>
        </main>
    )
}

export default NotFound
