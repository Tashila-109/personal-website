import React from 'react'

import Layout from '../components/layout/Layout'
import Form from '../components/form/Form'
import Head from '../components/head/Head'

import contactStyles from './contact.module.scss'
import indexStyles from './index.module.scss'
import LogoLarge from '../images/logo-large.svg'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact me" />
            <main className="content-home">
                <div className={contactStyles.contentContactme}>
                    <div className={indexStyles.tagGroup__top}>
                        <span className="html-tags">&lt;body&gt;</span>
                    </div>
                    <div className={indexStyles.mainHeading}>
                        <span className="html-tags">&lt;h1&gt;</span>
                        <h1
                            className={`${indexStyles.mainHeading__align} heading-1 heading-1__red`}
                        >
                            Contact me{' '}
                            <span className="html-tags html-tags--inline">
                                &lt;/ h1&gt;
                            </span>
                        </h1>
                        <p
                            className={`${indexStyles.mainHeading__align} paragraph-contactme`}
                        >
                            Please feel free to contact me using below form, for
                            freelance opportunities or even if you have other
                            requests or questions.
                        </p>
                        <p
                            className={`${indexStyles.mainHeading__align} paragraph-contactme`}
                        >
                            You could also contact me via:{' '}
                            <span className="color-tags">@ </span>
                            tashila.dev@gmail.com
                        </p>

                        <Form />
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
                <div className={indexStyles.numberLarge}>04</div>
            </main>
        </Layout>
    )
}

export default ContactPage
