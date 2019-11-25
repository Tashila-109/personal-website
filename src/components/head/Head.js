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
                    imageShare
                }
            }
        }
    `)

    const metaImage = `${data.site.siteMetadata.siteUrl}/${data.site.siteMetadata.imageShare}`

    return (
        <Helmet>
            <html lang="en" />
            <title>{`${title} | ${data.site.siteMetadata.title}`}</title>
            <link rel="apple-touch-icon" sizes="180x180" href={appleIcon} />
            <link rel="icon" type="image/png" sizes="32x32" href={faviconOne} />
            <link rel="icon" type="image/png" sizes="16x16" href={faviconTwo} />
            

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
            <meta property="og:image" content={metaImage} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta
                property="twitter:url"
                content={data.site.siteMetadata.siteUrl}
            />
            <meta
                property="twitter:title"
                content={data.site.siteMetadata.title}
            />
            <meta
                property="twitter:description"
                content={data.site.siteMetadata.description}
            />
            <meta property="twitter:image" content={metaImage} />
        </Helmet>
    )
}

export default Head
