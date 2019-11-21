import React, { Fragment } from 'react'

import formStyles from './form.module.scss'
import indexStyles from '../../pages/index.module.scss'
import contactStyles from '../../pages/contact.module.scss'

const Form = () => {
    return (
        <Fragment>
            <div className={indexStyles.mainHeading__align}>
                <form
                    name="contact"
                    className={formStyles.contactForm}
                    method="post"
                    netlify-honeypot="bot-field"
                    data-netlify="true"
                >
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />
                    <div className={formStyles.formRow}>
                        <div className={formStyles.formName}>
                            <input
                                className={formStyles.formInput}
                                type="text"
                                name="name"
                                placeholder="Name"
                            />
                            <label
                                className="name-label"
                                htmlFor="name"
                            ></label>
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
                                htmlFor="email"
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
                            htmlFor="subject"
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
                            htmlFor="subject"
                        ></label>
                    </div>

                    <button
                        className={`${formStyles.formSubmit} button button__outline-red button__contact`}
                        type="submit"
                        value="Send Message"
                    >
                        Send
                    </button>
                </form>
            </div>
        </Fragment>
    )
}

export default Form
