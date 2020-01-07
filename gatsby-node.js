const path = require("path")
const createPaginatedPages = require("gatsby-paginate")

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogIndexTemplate = path.resolve("./src/templates/blog-index.js")
    const blogTemplate = path.resolve("./src/templates/blog.js")
    const redirectTemplate = path.resolve("./src/templates/redirect.js")

    const res = await graphql(`
        query {
            allContentfulBlogPost(
                sort: { fields: publishedAt, order: DESC }
                filter: { hideFromList: { ne: true } }
            ) {
                edges {
                    node {
                        title
                        hideFromList
                        slug
                        excerpt {
                            childMarkdownRemark {
                                rawMarkdownBody
                            }
                        }
                        md {
                            childMarkdownRemark {
                                timeToRead
                            }
                        }
                        categories
                        publishedAt
                        coverImage {
                            title
                            fluid {
                                sizes
                                src
                                srcSet
                            }
                        }
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

    // Index page for blog posts, paginated
    createPaginatedPages({
        edges: res.data.allContentfulBlogPost.edges,
        createPage: createPage,
        pageTemplate: blogIndexTemplate,
        pageLength: 5,
        pathPrefix: "/blog",
        context: {},
    })

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
            path: node.path,
            context: {
                url: node.url,
                text: node.text,
                timeout: node.timeout,
            },
        })
    })
}