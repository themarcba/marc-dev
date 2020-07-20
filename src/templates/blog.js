import React from "react"
import { graphql } from "gatsby"
import moment from "moment"
import pluralize from "pluralize"
import Img from "gatsby-image"
import blogStyle from "./blog.module.scss"
import categoryStyles from "../pages/blog-categories.module.scss"
import mainStyles from "../styles/main.module.scss"
import Layout from "../components/layout"
import Head from "../components/head"
import { Link } from "gatsby"
import camelCase from "camelcase"
import { CategoryIcon } from "../templates/blog-index"
import getShareImage from "@jlengstorf/get-share-image"

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            publishedAt
            slug
            canonicalUrl
            categories
            md {
                childMarkdownRemark {
                    html
                    timeToRead
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
        file(relativePath: { eq: "images/profile.jpg" }) {
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

    const socialImageUrl = getShareImage({
        title: props.data.contentfulBlogPost.title,
        cloudName: 'marcba',
        imagePublicID: 'marc.dev/social_card_blank',
        font: 'Work Sans',
        titleBottomOffset: 0,
        titleFont: 'Work Sans',
        titleColor: '333',
        titleGravity: 'west',
        titleFontSize: 70,
        titleExtraConfig: '_bold',
    })
    
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
            { name: "twitter:site", content: "@themarcba" },
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
                content: socialImageUrl,
            },
            {
                name: "og:title",
                content: props.data.contentfulBlogPost.title,
            },
            {
                name: "og:description",
                content:
                    props.data.contentfulBlogPost.excerpt.childMarkdownRemark
                        .rawMarkdownBody,
            },
            {
                name: "og:image",
                content: socialImageUrl,
            },
        ]
    } else {
        socialCardMeta = [
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:site", content: "@themarcba" },
            {
                name: "twitter:title",
                content: props.data.contentfulBlogPost.title,
            },
            {
                name: "og:title",
                content: props.data.contentfulBlogPost.title,
            },
            {
                name: "twitter:description",
                content:
                    props.data.contentfulBlogPost.excerpt.childMarkdownRemark
                        .rawMarkdownBody,
            },
            {
                name: "og:description",
                content:
                    props.data.contentfulBlogPost.excerpt.childMarkdownRemark
                        .rawMarkdownBody,
            },
            {
                name: "twitter:image",
                content: "https://marc.dev/images/social_v3_blog.jpg",
            },
            {
                name: "og:image",
                content: "https://marc.dev/images/social_v3_blog.jpg",
            },
        ]
    }

    const canonicalUrl =
        props.data.contentfulBlogPost.canonicalUrl ||
        `https://marc.dev/blog/${props.data.contentfulBlogPost.slug}`

    return (
        <Layout>
            <Head
                title={props.data.contentfulBlogPost.title}
                canonicalUrl={canonicalUrl}
                socialCardMeta={socialCardMeta}
            />

            <h1 className={blogStyle.title}>
                {props.data.contentfulBlogPost.title}
            </h1>

            <p className={blogStyle.postInfo}>
                {moment(props.data.contentfulBlogPost.publishedAt).format(
                    "MMMM Do, YYYY"
                )}
                &nbsp;&middot;&nbsp;
                {pluralize(
                    "minutes",
                    props.data.contentfulBlogPost.md.childMarkdownRemark
                        .timeToRead,
                    true
                )}{" "}
                read &nbsp;&middot;&nbsp;
                <span>by Marc Backes</span>
                <Link to="/about">
                    <img
                        src={props.data.file.childImageSharp.fixed.src}
                        alt="Marc Backes"
                        className={blogStyle.authorImage}
                    />
                </Link>
            </p>
            <div className={categoryStyles.categories}>
                {props.data.contentfulBlogPost.categories.map(category => (
                    <div
                        className={
                            categoryStyles[camelCase(`category-${category}`)]
                        }
                    >
                        #{category} <CategoryIcon category={category} />
                    </div>
                ))}
            </div>

            {coverImage}

            <div
                className={mainStyles.postContent}
                dangerouslySetInnerHTML={{
                    __html:
                        props.data.contentfulBlogPost.md.childMarkdownRemark
                            .html,
                }}
            ></div>
        </Layout>
    )
}

export default Blog
