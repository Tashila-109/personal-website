import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import appleIcon from '../../images/favicon/apple-touch-icon.png'
import faviconOne from '../../images/favicon/favicon-32x32.png'
import faviconTwo from '../../images/favicon/favicon-16x16.png'

const BlogHead = props => {
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
            <html lang="en" />
            <title>{props.title}</title>
            <link rel="apple-touch-icon" sizes="180x180" href={appleIcon} />
            <link rel="icon" type="image/png" sizes="32x32" href={faviconOne} />
            <link rel="icon" type="image/png" sizes="16x16" href={faviconTwo} />
            <link rel="manifest" href="/site.webmanifest" />

            <meta name="title" content={props.title} />
            <meta name="description" content={props.description} />
            <meta name="author" content={props.author} />
            <meta name="keywords" content={props.tag} />
            <meta
                property="og:site_name"
                content={data.site.siteMetadata.title}
            />
            <meta property="og:title" content={props.title} />
            <meta
                property="og:url"
                content={`https://tashila.io/${props.slug}`}
            />
            <meta property="og:description" content={props.description} />
            <meta property="og:type" content="article" />
            <meta property="og:image" content={props.image} />
            <meta
                property="article:publisher"
                content="https://www.facebook.com/tashila.fernando"
            />
            <meta
                property="article:author"
                content="https://www.facebook.com/tashila.fernando"
            />

            <meta name="twitter:card" content="summary_large_image" />
            <meta
                property="twitter:url"
                content={`https://tashila.io/${props.slug}`}
            />
            <meta property="twitter:title" content={props.title} />
            <meta property="twitter:description" content={props.description} />
            <meta property="twitter:image" content={props.image} />
            <meta name="twitter:site" content="@Tashila_dev" />
            <meta name="twitter:creator" content="@Tashila_dev" />
        </Helmet>
    )
}

export default BlogHead
