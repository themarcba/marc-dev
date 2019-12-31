import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import moment from "moment"
import blogStyles from "./blog.module.scss"
import categoryStyles from "./blog-categories.module.scss"
import Head from "../components/head"
import pluralize from "pluralize"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar, faClock } from "@fortawesome/free-regular-svg-icons"
import camelCase from "camelcase"

const BlogPage = (props) => {
    const data = useStaticQuery(graphql`
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
        }
    `)

    const getCoverImage = node =>
        node.coverImage ? (
            <Img
                className={blogStyles.coverImage}
                fluid={node.coverImage.fluid}
            />
        ) : (
            ""
        )

    const isPublished = node => node.publishedAt <= new Date()

    const getPost = node => {
        return (
            <div className={blogStyles.post}>
                <Link to={`/blog/${node.slug}`} className={blogStyles.postLink}>
                    <div className={blogStyles.readTime}>
                        <FontAwesomeIcon icon={faClock} />
                        &nbsp;
                        {pluralize(
                            "minutes",
                            node.md.childMarkdownRemark.timeToRead,
                            true
                        )}
                        &nbsp;read
                    </div>
                    {getCoverImage(node)}
                </Link>
                <div className={blogStyles.postContent}>
                    <div className={categoryStyles.categories}>
                        {node.categories.map(category => (
                            <div
                                className={
                                    categoryStyles[
                                        camelCase(`category-${category}`)
                                    ]
                                }
                            >
                                #{category}
                            </div>
                        ))}
                    </div>
                    <Link
                        to={`/blog/${node.slug}`}
                        className={blogStyles.postLink}
                    >
                        <h2>{node.title}</h2>
                    </Link>
                    <p>{node.excerpt.childMarkdownRemark.rawMarkdownBody}</p>
                    <p className={blogStyles.postDate}>
                        <FontAwesomeIcon icon={faCalendar} />
                        &nbsp;
                        {moment(node.publishedAt).format("MMMM Do, YYYY")}
                    </p>
                </div>
            </div>
        )
    }
    return (
        <Layout>
            <Head title="Blog"  path={props.path} />
            <div className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map(({ node }) =>
                    getPost(node)
                )}
            </div>
        </Layout>
    )
}

export default BlogPage
