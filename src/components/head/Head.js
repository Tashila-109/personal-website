import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import appleIcon from '../../images/favicon/apple-touch-icon.png'
import faviconOne from '../../images/favicon/favicon-32x32.png'
import faviconTwo from '../../images/favicon/favicon-16x16.png'

const Head = ({ title }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                    siteUrl
                }
            }
        }
    `)

    return (
        <Helmet>
            <title>{`${title} | ${data.site.siteMetadata.title}`}</title>
            <link rel="apple-touch-icon" sizes="180x180" href={appleIcon} />
            <link rel="icon" type="image/png" sizes="32x32" href={faviconOne} />
            <link rel="icon" type="image/png" sizes="16x16" href={faviconTwo} />
            <link rel="manifest" href="/site.webmanifest" />

            <meta name="title" content={data.site.siteMetadata.title} />
            <meta
                name="description"
                content={data.site.siteMetadata.description}
            />
            <meta name="author" content={data.site.siteMetadata.author} />
            <meta
                name="keywords"
                content="Full-stack, developer, front end, back end, software"
            />
            <meta property="og:title" content={data.site.siteMetadata.title} />
            <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
            <meta
                property="og:description"
                content={data.site.siteMetadata.description}
            />
            <meta property="og:type" content="website" />
        </Helmet>
    )
}

export default Head
