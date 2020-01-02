const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve("./src/templates/blog.js")
    const redirectTemplate = path.resolve("./src/templates/redirect.js")

    const res = await graphql(`
        query {
            allContentfulBlogPost(sort: { fields: publishedAt, order: DESC }) {
                edges {
                    node {
                        title
                        slug
                        publishedAt(formatString: "MMMM Do, YYYY")
                        hideFromList
                    }
                }
            }
            allRedirectsJson {
                edges {
                    node {
                        path
                        url
                        text
                        timeout
                    }
                }
            }
        
        }
    `)



    // Create pages for blog posts
    res.data.allContentfulBlogPost.edges.forEach(({ node }) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${node.slug}`,
            context: {
                slug: node.slug,
            },
        })
    })

    // Create pages for redirects
    res.data.allRedirectsJson.edges.forEach(({ node }) => {
        createPage({
            component: redirectTemplate,
            path: `${node.path}`,
            context: {
                url: node.redirectTo,
                text: node.text,
                timeout: node.timeout
            },
        })
    })
}
