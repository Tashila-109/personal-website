const path = require('path')

module.exports.onCreatePage = ({ page, actions }) => {
    const { createPage } = actions

    if (page.path.match(/404/)) {
        page.context.layout = '404'
        createPage(page)
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const blogTemplate = path.resolve('./src/templates/blogItem.js')
    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    res.data.allContentfulBlogPost.edges.forEach(edge => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug,
            },
        })
    })
}
