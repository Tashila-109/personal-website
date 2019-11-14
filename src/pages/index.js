import React from 'react'
import { Link } from 'gatsby'

import Head from '../components/head/Head'

import indexStyles from './index.module.scss'
import LogoLarge from '../images/logo-large.svg'

const IndexPage = () => {
    return (
        <>
            <Head title="Tashila" />
            <main className="content-home">
                <div className={indexStyles.contentInside}>
                    <div className={indexStyles.tagGroup__top}>
                        <span className="html-tags">&lt;html&gt;</span>

                        <span className="html-tags">&lt;body&gt;</span>
                    </div>
                    <div className={indexStyles.mainHeading}>
                        <span className="html-tags">&lt;h1&gt;</span>
                        <h1
                            className={`${indexStyles.mainHeading__align} heading-1 heading-1__grey`}
                        >
                            <span className="heading-break">Hey,</span>

                            <span className="heading-break">
                                I'm{' '}
                                <span className="heading-1 heading-1__red">
                                    T
                                </span>
                                ashila
                            </span>
                            <span className="heading-break">
                                Full-stack developer.{' '}
                                <span className="html-tags html-tags--inline">
                                    &lt;/ h1&gt;
                                </span>
                            </span>
                        </h1>
                        <p
                            className={`${indexStyles.mainHeading__align} paragraph-intro`}
                        >
                            Full-stack Developer | UI/UX Designer | Freelancer
                        </p>
                        <div
                            className={`${indexStyles.mainHeading__align} ${indexStyles.buttons}`}
                        >
                            <Link
                                to="/mywork"
                                className="button button__full-red"
                            >
                                View Projects
                            </Link>
                            <Link
                                to="/aboutme"
                                className="button button__outline-red"
                            >
                                About Me
                            </Link>
                        </div>
                    </div>
                    <div className={indexStyles.tagGroup__bottom}>
                        <span className="html-tags">&lt;/ body&gt;</span>
                        <span className="html-tags">&lt;/ html&gt;</span>
                    </div>
                </div>
                <div className={indexStyles.imgLarge}>
                    <img
                        src={LogoLarge}
                        alt="Logo large"
                        className={indexStyles.imgLarge__logo}
                    />
                </div>
                <div className={indexStyles.numberLarge}>01</div>
            </main>
        </>
    )
}

export default IndexPage
