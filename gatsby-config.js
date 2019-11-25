module.exports = {
    siteMetadata: {
        title: 'Full-stack Developer',
        description: `I'm Tashila, a full-stack developer and an UI/UX Designer.`,
        author: 'Tashila Fernando',
        siteUrl: 'https://tashila.io',
        social: {
            twitter: 'Tashila_dev',
            instagram: 'tashila.io',
            facebook: 'tashila.fernando',
            github: 'Tashila-109',
            email: 'tashila.dev@gmail.com',
        },
        imageShare: 'twitter.png',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://tashila.io',
                sitemap: 'https://tashila.io/sitemap.xml',
                policy: [{ userAgent: '*', allow: '/' }],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Tashila | Full-stack Developer`,
                short_name: `Tashila`,
                icon: `src/images/Logo.png`,
                icons: [
                    {
                        src: `/favicon/android-chrome-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`,
                    },
                    {
                        src: `/favicon/android-chrome-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`,
                    },
                    {
                        src: `/favicon/favicon-16x16.png`,
                        sizes: `16x16`,
                        type: `image/png`,
                    },
                    {
                        src: `/favicon/favicon-32x32.png`,
                        sizes: `32x32`,
                        type: `image/png`,
                    },
                ],
                start_url: `/`,
                background_color: `#1D1D1D`,
                theme_color: `#E90016`,
                display: `standalone`,
            },
        },
        'gatsby-plugin-offline',
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.TRACKING_ID,
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        'gatsby-plugin-dark-mode',

        `gatsby-plugin-layout`,
        {
            resolve: `gatsby-source-ghost`,
            options: {
                apiUrl: process.env.GHOST_API_URL,
                contentApiKey: process.env.GHOST_API_KEY,
            },
        },

        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'content',
                path: `${__dirname}/src/content`,
            },
        },
        {
            resolve: 'gatsby-plugin-sass-resources',
            options: {
                resources: [
                    `${__dirname}/src/styles/abstracts/_mixins.scss`,
                    `${__dirname}/src/styles/abstracts/_variables.scss`,
                ],
            },
        },
        'gatsby-transformer-remark',

        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
    ],
}
