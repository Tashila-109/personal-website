module.exports = {
    siteMetadata: {
        title: 'Full-stack Developer',
        author: 'Tashila Fernando',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        'gatsby-plugin-dark-mode',
        'gatsby-plugin-transition-link',
        {
            resolve: 'gatsby-plugin-sass-resources',
            options: {
                resources: [
                    `${__dirname}/src/styles/abstracts/_mixins.scss`,
                    `${__dirname}/src/styles/abstracts/_variables.scss`,
                ],
            },
        },
    ],
}
