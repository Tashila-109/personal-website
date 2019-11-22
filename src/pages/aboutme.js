import React from 'react'
import { Link } from 'gatsby'

import Head from '../components/head/Head'

import aboutmeStyles from './aboutme.module.scss'
import indexStyles from './index.module.scss'
import Skills from '../images/skills-dark.svg'

const AboutMePage = () => {
    return (
        <>
            <Head title="About me" />
            <main className={aboutmeStyles.contentHomeSkills}>
                <div className={aboutmeStyles.contentAboutme}>
                    <div className={indexStyles.tagGroup__top}>
                        <span className="html-tags">&lt;html&gt;</span>

                        <span className="html-tags">&lt;body&gt;</span>
                    </div>
                    <div className={indexStyles.mainHeading}>
                        <span className="html-tags">&lt;h1&gt;</span>
                        <h1
                            className={`${indexStyles.mainHeading__align} heading-1 heading-1__red`}
                        >
                            About me{' '}
                            <span className="html-tags html-tags--inline">
                                &lt;/ h1&gt;
                            </span>
                        </h1>
                        <p
                            className={`${indexStyles.mainHeading__align} paragraph-aboutme`}
                        >
                            Im a Full-stack developer and UI / UX designer with
                            a great passion for building things with code.
                        </p>
                        <p
                            className={`${indexStyles.mainHeading__align} paragraph-aboutme`}
                        >
                            The main area of my expertise is in web
                            technologies. My main stack of technologies is the
                            MERN stack (MongoDB, Express, React and Node). For
                            back end development I mainly use Node Js or Python
                            (Flask & Django). I also use TypeScript in my
                            projects.
                        </p>
                        <p
                            className={`${indexStyles.mainHeading__align} paragraph-aboutme`}
                        >
                            Im currently working on mobile technologies, React
                            Native and Flutter and in the process of learning
                            Cloud technologies.
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
                            <a
                                href="https://github.com/Tashila-109?tab=repositories"
                                className="button button__grey-aboutme"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    className={aboutmeStyles.descriptionGithub}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 23.4"
                                >
                                    <path
                                        id="Icon_awesome-github"
                                        data-name="Icon awesome-github"
                                        d="M8.027,19.4c0,.1-.111.174-.252.174-.16.015-.271-.063-.271-.174s.111-.174.252-.174S8.027,19.293,8.027,19.4Zm-1.5-.218c-.034.1.063.208.208.237a.227.227,0,0,0,.3-.1c.029-.1-.063-.208-.208-.252A.248.248,0,0,0,6.523,19.187ZM8.661,19.1c-.14.034-.237.126-.223.237s.14.16.285.126.237-.126.223-.223S8.8,19.09,8.661,19.1ZM11.845.563A11.6,11.6,0,0,0,0,12.369,12.131,12.131,0,0,0,8.2,23.943c.619.111.837-.271.837-.585s-.015-1.955-.015-2.971c0,0-3.387.726-4.1-1.442,0,0-.552-1.408-1.345-1.771,0,0-1.108-.76.077-.745a2.554,2.554,0,0,1,1.868,1.248,2.558,2.558,0,0,0,3.527,1.011,2.689,2.689,0,0,1,.774-1.631c-2.7-.3-5.434-.692-5.434-5.347a3.667,3.667,0,0,1,1.142-2.85,4.572,4.572,0,0,1,.126-3.285C6.673,5.261,9,6.882,9,6.882a11.431,11.431,0,0,1,6.077,0S17.4,5.256,18.416,5.575a4.57,4.57,0,0,1,.126,3.285,3.761,3.761,0,0,1,1.248,2.85c0,4.669-2.85,5.042-5.555,5.347a2.862,2.862,0,0,1,.823,2.245c0,1.631-.015,3.648-.015,4.045,0,.315.223.7.837.585A12.019,12.019,0,0,0,24,12.369,11.864,11.864,0,0,0,11.845.563ZM4.7,17.251c-.063.048-.048.16.034.252s.189.111.252.048.048-.16-.034-.252S4.766,17.188,4.7,17.251Zm-.523-.392c-.034.063.015.14.111.189a.144.144,0,0,0,.208-.034c.034-.063-.015-.14-.111-.189C4.292,16.8,4.215,16.811,4.181,16.859Zm1.568,1.723c-.077.063-.048.208.063.3.111.111.252.126.315.048s.034-.208-.063-.3C5.956,18.519,5.811,18.5,5.748,18.582ZM5.2,17.871c-.077.048-.077.174,0,.285s.208.16.271.111a.221.221,0,0,0,0-.3C5.4,17.856,5.274,17.808,5.2,17.871Z"
                                        transform="translate(0 -0.563)"
                                    />
                                </svg>
                                All Projects
                            </a>
                        </div>
                    </div>
                    <div className={indexStyles.tagGroup__bottom}>
                        <span className="html-tags">&lt;/ body&gt;</span>
                        <span className="html-tags">&lt;/ html&gt;</span>
                    </div>
                </div>

                <div className={aboutmeStyles.contentSkills}>
                    <img
                        src={Skills}
                        alt="skills"
                        className={aboutmeStyles.skillsImg}
                    />
                </div>
            </main>
        </>
    )
}

export default AboutMePage
