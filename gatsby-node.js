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
                        isFeatured
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

            allContentfulCodepenPost(
                sort: { fields: publishedAt, order: DESC }
            ) {
                edges {
                    node {
                        title
                        slug
                        categories
                        publishedAt
                        description {
                            description
                        }
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

    // Manipulate blog posts
    res.data.allContentfulBlogPost.edges.forEach(edge => {
        edge.node.postType = "blog"
    })

    // Manipulate codepen posts
    res.data.allContentfulCodepenPost.edges.forEach(edge => {
        edge.node.postType = "codepen"
        edge.node.categories.unshift("codepen")
    })

    const published = [
        ...res.data.allContentfulBlogPost.edges,
        ...res.data.allContentfulCodepenPost.edges,
    ].sort((a, b) => {
        return new Date(b.node.publishedAt) - new Date(a.node.publishedAt)
    })

    // Index page for blog posts, paginated
    createPaginatedPages({
        edges: published,
        createPage: createPage,
        pageTemplate: blogIndexTemplate,
        pageLength: 6,
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
