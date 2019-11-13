import React, { Fragment } from 'react'

import formStyles from './form.module.scss'
import indexStyles from '../../pages/index.module.scss'
import contactStyles from '../../pages/contact.module.scss'

const Form = () => {
    return (
        <Fragment>
            <div className={indexStyles.mainHeading__align}>
                <form className={formStyles.contactForm} id="contact">
                    <div className={formStyles.formRow}>
                        <div className={formStyles.formName}>
                            <input
                                className={formStyles.formInput}
                                type="text"
                                name="name"
                                placeholder="Name"
                            />
                            <label className="name-label" htmFor="name"></label>
                        </div>
                        <div className={formStyles.formEmail}>
                            <input
                                className={formStyles.formInput}
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
                            <label
                                className="email-label"
                                htmFor="email"
                            ></label>
                        </div>
                    </div>
                    <div className={formStyles.formSubject}>
                        <input
                            className={formStyles.formInput}
                            type="text"
                            name="subject"
                            placeholder="Subject"
                        />
                        <label
                            className="subject-label"
                            htmFor="subject"
                        ></label>
                    </div>
                    <div className={formStyles.formMessage}>
                        <textarea
                            className={`${formStyles.formInput} ${formStyles.messageInput}`}
                            name="message"
                            placeholder="Message"
                        ></textarea>
                        <label
                            className="subject-label"
                            htmFor="subject"
                        ></label>
                    </div>
                </form>
            </div>

            <div
                className={`${indexStyles.mainHeading__align} ${contactStyles.buttonsContact}`}
            >
                <a
                    href=""
                    className="button button__outline-red button__contact"
                >
                    Send
                </a>
            </div>
        </Fragment>
    )
}

export default Form
