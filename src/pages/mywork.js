import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Head from '../components/head/Head'

import myworkStyles from './mywork.module.scss'

const MyWorkPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                filter: { frontmatter: { place: { eq: "project" } } }
                sort: { fields: [frontmatter___tag], order: ASC }
            ) {
                edges {
                    node {
                        frontmatter {
                            place
                            title
                            live
                            source
                            stack
                            description
                            image {
                                extension
                                publicURL
                            }
                        }
                    }
                }
            }
        }
    `)

    return (
        <>
            <Head title="My Work" />
            <div className="content-work">
                <div className={myworkStyles.contentMywork}>
                    <h2
                        className={`${myworkStyles.headingPortfolio} heading-2`}
                    >
                        Portfolio
                    </h2>
                    {data.allMarkdownRemark.edges.map((edge, index) => {
                        if (index % 2 === 0) {
                            return (
                                <div className={myworkStyles.project}>
                                    <h3
                                        className={`${myworkStyles.projectHeading} heading-3 heading-3__cover`}
                                    >
                                        {edge.node.frontmatter.title}
                                    </h3>
                                    <div
                                        className={
                                            myworkStyles.project__details
                                        }
                                    >
                                        <img
                                            src={
                                                edge.node.frontmatter.image
                                                    .publicURL
                                            }
                                            alt="Project 1"
                                            className={
                                                myworkStyles.imageDescription
                                            }
                                        />
                                        <div
                                            className={
                                                myworkStyles.descriptionBox
                                            }
                                        >
                                            <p
                                                className={`${myworkStyles.descriptionBox__item} paragraph-description`}
                                            >
                                                {
                                                    edge.node.frontmatter
                                                        .description
                                                }
                                            </p>
                                            <h4
                                                className={`${myworkStyles.descriptionBox__item}  heading-4`}
                                            >
                                                {edge.node.frontmatter.stack}
                                            </h4>
                                            <div
                                                className={
                                                    myworkStyles.descriptionButtons
                                                }
                                            >
                                                <a
                                                    href={
                                                        edge.node.frontmatter
                                                            .live
                                                    }
                                                    target="_blank"
                                                    className="button button__red-round"
                                                    rel="noopener noreferrer"
                                                >
                                                    <svg
                                                        className={
                                                            myworkStyles.descriptionLink
                                                        }
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 18 18.018"
                                                    >
                                                        <path
                                                            id="Icon_awesome-link"
                                                            data-name="Icon awesome-link"
                                                            d="M11.482,6.518a5.341,5.341,0,0,1,.013,7.544l-.013.013L9.12,16.437a5.524,5.524,0,0,1-3.47,1.554,5.173,5.173,0,0,1-4.087-1.554,5.349,5.349,0,0,1,0-7.557l1.3-1.3a.562.562,0,0,1,.96.373A6.478,6.478,0,0,0,4.167,9.8a.566.566,0,0,1-.133.584l-.46.46a2.531,2.531,0,1,0,3.557,3.6l2.363-2.362a2.531,2.531,0,0,0,0-3.58,2.633,2.633,0,0,0-.364-.3.564.564,0,0,1-.244-.443A1.4,1.4,0,0,1,9.3,6.714l.74-.74a.565.565,0,0,1,.724-.061,5.361,5.361,0,0,1,.721.6Zm4.955-4.955a5.35,5.35,0,0,0-7.557,0L6.517,3.925,6.5,3.938a5.345,5.345,0,0,0,.734,8.149.565.565,0,0,0,.724-.061l.74-.74a1.4,1.4,0,0,0,.411-1.048.564.564,0,0,0-.244-.443,2.634,2.634,0,0,1-.364-.3,2.531,2.531,0,0,1,0-3.58l2.363-2.362a2.531,2.531,0,1,1,3.557,3.6l-.46.46a.566.566,0,0,0-.133.584,6.478,6.478,0,0,1,.341,1.853.562.562,0,0,0,.96.373l1.3-1.3a5.349,5.349,0,0,0,0-7.557Z"
                                                            transform="translate(0 0)"
                                                        />
                                                    </svg>
                                                    Preview
                                                </a>
                                                <a
                                                    href={
                                                        edge.node.frontmatter
                                                            .source
                                                    }
                                                    target="_blank"
                                                    className="button button__grey-round"
                                                    rel="noopener noreferrer"
                                                >
                                                    <svg
                                                        className={
                                                            myworkStyles.descriptionGithub
                                                        }
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
                                                    Source
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div className={myworkStyles.project}>
                                    <h3
                                        className={`${myworkStyles.projectHeading2} heading-3 heading-3__cover`}
                                    >
                                        {edge.node.frontmatter.title}
                                    </h3>
                                    <div
                                        className={
                                            myworkStyles.project__details
                                        }
                                    >
                                        <img
                                            src={
                                                edge.node.frontmatter.image
                                                    .publicURL
                                            }
                                            alt="Project 1"
                                            className={
                                                myworkStyles.imageDescription
                                            }
                                        />
                                        <div
                                            className={`${myworkStyles.descriptionBox} ${myworkStyles.descriptionBox__2}`}
                                        >
                                            <p
                                                className={`${myworkStyles.descriptionBox__item} paragraph-description`}
                                            >
                                                {
                                                    edge.node.frontmatter
                                                        .description
                                                }
                                            </p>
                                            <h4
                                                className={`${myworkStyles.descriptionBox__item}  heading-4`}
                                            >
                                                {edge.node.frontmatter.stack}
                                            </h4>
                                            <div
                                                className={
                                                    myworkStyles.descriptionButtons
                                                }
                                            >
                                                <a
                                                    href={
                                                        edge.node.frontmatter
                                                            .live
                                                    }
                                                    target="_blank"
                                                    className="button button__red-round"
                                                    rel="noopener noreferrer"
                                                >
                                                    <svg
                                                        className={
                                                            myworkStyles.descriptionLink
                                                        }
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 18 18.018"
                                                    >
                                                        <path
                                                            id="Icon_awesome-link"
                                                            data-name="Icon awesome-link"
                                                            d="M11.482,6.518a5.341,5.341,0,0,1,.013,7.544l-.013.013L9.12,16.437a5.524,5.524,0,0,1-3.47,1.554,5.173,5.173,0,0,1-4.087-1.554,5.349,5.349,0,0,1,0-7.557l1.3-1.3a.562.562,0,0,1,.96.373A6.478,6.478,0,0,0,4.167,9.8a.566.566,0,0,1-.133.584l-.46.46a2.531,2.531,0,1,0,3.557,3.6l2.363-2.362a2.531,2.531,0,0,0,0-3.58,2.633,2.633,0,0,0-.364-.3.564.564,0,0,1-.244-.443A1.4,1.4,0,0,1,9.3,6.714l.74-.74a.565.565,0,0,1,.724-.061,5.361,5.361,0,0,1,.721.6Zm4.955-4.955a5.35,5.35,0,0,0-7.557,0L6.517,3.925,6.5,3.938a5.345,5.345,0,0,0,.734,8.149.565.565,0,0,0,.724-.061l.74-.74a1.4,1.4,0,0,0,.411-1.048.564.564,0,0,0-.244-.443,2.634,2.634,0,0,1-.364-.3,2.531,2.531,0,0,1,0-3.58l2.363-2.362a2.531,2.531,0,1,1,3.557,3.6l-.46.46a.566.566,0,0,0-.133.584,6.478,6.478,0,0,1,.341,1.853.562.562,0,0,0,.96.373l1.3-1.3a5.349,5.349,0,0,0,0-7.557Z"
                                                            transform="translate(0 0)"
                                                        />
                                                    </svg>
                                                    Preview
                                                </a>
                                                <a
                                                    href={
                                                        edge.node.frontmatter
                                                            .source
                                                    }
                                                    target="_blank"
                                                    className="button button__grey-round"
                                                    rel="noopener noreferrer"
                                                >
                                                    <svg
                                                        className={
                                                            myworkStyles.descriptionGithub
                                                        }
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
                                                    Source
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>

            {/* <div className={myworkStyles.contentArrows}>
                <div className={myworkStyles.arrows}>
                    <svg
                        className={`${myworkStyles.arrow} ${myworkStyles.arrow_up}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30 37.366"
                    >
                        <path
                            id="Icon_awesome-angle-double-up"
                            data-name="Icon awesome-angle-double-up"
                            d="M16.59,22.638,29.336,35.384a2.24,2.24,0,0,1,0,3.177L27.218,40.68a2.24,2.24,0,0,1-3.177,0L15,31.654,5.962,40.689a2.24,2.24,0,0,1-3.177,0L.657,38.571a2.24,2.24,0,0,1,0-3.177L13.4,22.648A2.243,2.243,0,0,1,16.59,22.638ZM13.4,4.644.657,17.39a2.24,2.24,0,0,0,0,3.177l2.118,2.118a2.24,2.24,0,0,0,3.177,0l9.035-9.035,9.035,9.035a2.24,2.24,0,0,0,3.177,0l2.118-2.118a2.24,2.24,0,0,0,0-3.177L16.571,4.644a2.229,2.229,0,0,0-3.168,0Z"
                            transform="translate(0.003 -3.983)"
                        />
                    </svg>
                    <svg
                        className={`${myworkStyles.arrow} ${myworkStyles.arrow_up}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30 37.356"
                    >
                        <path
                            id="Icon_awesome-angle-double-down"
                            data-name="Icon awesome-angle-double-down"
                            d="M13.4,22.692.657,9.946a2.24,2.24,0,0,1,0-3.177L2.775,4.651a2.24,2.24,0,0,1,3.177,0l9.035,9.035,9.035-9.035a2.24,2.24,0,0,1,3.177,0L29.336,6.76a2.24,2.24,0,0,1,0,3.177L16.59,22.683A2.243,2.243,0,0,1,13.4,22.692ZM16.59,40.687,29.336,27.941a2.24,2.24,0,0,0,0-3.177l-2.118-2.118a2.24,2.24,0,0,0-3.177,0L15,31.671,5.962,22.636a2.24,2.24,0,0,0-3.177,0L.657,24.754a2.24,2.24,0,0,0,0,3.177L13.4,40.677A2.243,2.243,0,0,0,16.59,40.687Z"
                            transform="translate(0.003 -3.99)"
                        />
                    </svg>
                </div>
            </div> */}
        </>
    )
}

export default MyWorkPage
