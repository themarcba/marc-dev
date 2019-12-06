import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import blogStyle from "./blog.module.scss"
import Layout from "../components/layout"
import Head from "../components/head"
import { Link } from "gatsby"

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            publishedAt(formatString: "MMMM Do, YYYY")
            slug
            canonicalUrl
            md {
                childMarkdownRemark {
                    html
                }
            }
            coverImage {
                title
                fluid {
                    sizes
                    src
                    srcSet
                }
                fixed(width: 1200) {
                    src
                }
            }
            excerpt {
                childMarkdownRemark {
                    rawMarkdownBody
                }
            }
        }
        file(relativePath: { eq: "profile.jpg" }) {
            childImageSharp {
                fixed(width: 30) {
                    src
                }
            }
        }
    }
`

const Blog = props => {
    let coverImage
    let socialCardMeta
    if (props.data.contentfulBlogPost.coverImage) {
        coverImage = (
            <div>
                <Img
                    fluid={props.data.contentfulBlogPost.coverImage.fluid}
                    className={blogStyle.coverImage}
                />
            </div>
        )
        socialCardMeta = [
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:site", content: "@_marcba" },
            {
                name: "twitter:title",
                content: props.data.contentfulBlogPost.title,
            },
            {
                name: "twitter:description",
                content:
                    props.data.contentfulBlogPost.excerpt.childMarkdownRemark
                        .rawMarkdownBody,
            },
            {
                name: "twitter:image",
                content: `https:${props.data.contentfulBlogPost.coverImage.fixed.src}`,
            },
        ]
    } else {
        socialCardMeta = [
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:site", content: "@_marcba" },
            {
                name: "twitter:title",
                content: props.data.contentfulBlogPost.title,
            },
            {
                name: "twitter:description",
                content:
                    props.data.contentfulBlogPost.excerpt.childMarkdownRemark
                        .rawMarkdownBody,
            },
            {
                name: "twitter:image",
                content: "https://marc.dev/images/socialCard.jpg",
            },
        ]
    }

    return (
        <Layout>
            <Head
                title={props.data.contentfulBlogPost.title}
                canonicalUrl={props.data.contentfulBlogPost.canonicalUrl}
                socialCardMeta={socialCardMeta}
            />

            <h1 className={blogStyle.title}>
                {props.data.contentfulBlogPost.title}
            </h1>

            <p className={blogStyle.postInfo}>
                {props.data.contentfulBlogPost.publishedAt}
                &nbsp;&middot;&nbsp;
                <span>by Marc Backes</span>
                <Link to="/about">
                    <img
                        src={props.data.file.childImageSharp.fixed.src}
                        alt="Marc Backes"
                        className={blogStyle.authorImage}
                    />
                </Link>
            </p>

            {coverImage}

            <div
                className={blogStyle.md}
                dangerouslySetInnerHTML={{
                    __html:
                        props.data.contentfulBlogPost.md.childMarkdownRemark
                            .html,
                }}
            ></div>
            {/* {documentToReactComponents(
                props.data.contentfulBlogPost.body.json,
                options
            )} */}
        </Layout>
    )
}

export default Blog
