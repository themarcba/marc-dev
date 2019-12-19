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
        }
    `)

    res.data.allContentfulBlogPost.edges.forEach(({ node }) => {
        console.log('@@@@@@@@@@@@@@@@@@@@@', node);
        
        createPage({
            component: blogTemplate,
            path: `/blog/${node.slug}`,
            context: {
                slug: node.slug,
            },
        })
    })
}
