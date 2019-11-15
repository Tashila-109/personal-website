module.exports = {
    siteMetadata: {
        title: 'Full-stack Developer',
        author: 'Tashila Fernando',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        'gatsby-plugin-dark-mode',
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/layouts/index.js`),
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
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/content/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/content`,
            },
        },
    ],
}
