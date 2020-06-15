import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Img from "gatsby-image"
import moment from "moment"
import blogIndexStyles from "./blog-index.module.scss"
import mainStyles from "../styles/main.module.scss"
import categoryStyles from "../pages/blog-categories.module.scss"
import Head from "../components/head"
import pluralize from "pluralize"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar, faClock, faLightbulb } from "@fortawesome/free-regular-svg-icons"
import camelCase from "camelcase"
import {
    faChevronRight,
    faChartLine,
    faStopwatch,
    faBookOpen,
    faGlasses,
    faCodeBranch,
    faTrain,
    faBullhorn,
} from "@fortawesome/free-solid-svg-icons"
import {
    faNodeJs,
    faJs,
    faHtml5,
    faCss3,
    faCodepen,
    faVuejs,
} from "@fortawesome/free-brands-svg-icons"

const NavLink = props => {
    if (!props.test) {
        return (
            <Link to={`/blog/${props.url}`} className={mainStyles.button}>
                {props.text}
            </Link>
        )
    } else {
        return null
    }
}

export const CategoryIcon = ({ category }) => {
    let icon
    switch (category) {
        case "node":
            icon = faNodeJs
            break
        case "javascript":
            icon = faJs
            break
        case "vue":
            icon = faVuejs
            break
        case "css":
            icon = faCss3
            break
        case "es6":
            icon = faJs
            break
        case "html":
            icon = faHtml5
            break
        case "seo":
            icon = faChartLine
            break
        case "productivity":
            icon = faStopwatch
            break
        case "anecdote":
            icon = faBookOpen
            break
        case "beginner":
            icon = faGlasses
            break
        case "git":
            icon = faCodeBranch
            break
        case "rails":
            icon = faTrain
            break
        case "announcement":
            icon = faBullhorn
            break
        case "codepen":
            icon = faCodepen
            break
        case "tip":
            icon = faLightbulb
            break
        default:
            break
    }
    return category ? <FontAwesomeIcon icon={icon} /> : null
}

const IndexPage = ({ pageContext }) => {
    const { group, index, first, last } = pageContext // {pageCount}
    const previousUrl = index - 1 === 1 ? "/" : (index - 1).toString()
    const nextUrl = (index + 1).toString()

    const getCoverImage = node =>
        node.coverImage ? (
            <Img
                className={blogIndexStyles.coverImage}
                fluid={node.coverImage.fluid}
            />
        ) : (
            ""
        )

    const getCodepen = node => {
        return (
            <div className={blogIndexStyles.post}>
                <Link
                    to={`/codepen/${node.slug}`}
                    className={blogIndexStyles.postLink}
                >
                    {getCoverImage(node)}
                </Link>
                <div className={blogIndexStyles.postContent}>
                    <div className={blogIndexStyles.postDate}>
                        <FontAwesomeIcon icon={faCalendar} />
                        &nbsp;
                        {moment(node.publishedAt).format("MMMM Do, YYYY")}
                    </div>

                    <div className={categoryStyles.categories}>
                        {node.categories.map(category => (
                            <div
                                className={
                                    categoryStyles[
                                        camelCase(`category-${category}`)
                                    ]
                                }
                            >
                                #{category} <CategoryIcon category={category} />
                            </div>
                        ))}
                    </div>

                    <Link
                        to={`/codepen/${node.slug}`}
                        className={blogIndexStyles.postLink}
                    >
                        <h2>{node.title}</h2>
                    </Link>
                    <p>{node.description.description}</p>
                </div>
            </div>
        )
    }
    const getPost = node => {
        const featuredRibbon = node.isFeatured ? (
            <div className={blogIndexStyles.featuredRibbon}>
                <span>Featured</span>
            </div>
        ) : null
        return (
            <div className={blogIndexStyles.post}>
                {featuredRibbon}
                <Link
                    to={`/blog/${node.slug}`}
                    className={blogIndexStyles.postLink}
                >
                    <div className={blogIndexStyles.readTime}>
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
                <div className={blogIndexStyles.postContent}>
                    <div className={blogIndexStyles.postDate}>
                        <FontAwesomeIcon icon={faCalendar} />
                        &nbsp;
                        {moment(node.publishedAt).format("MMMM Do, YYYY")}
                    </div>
                    <div className={categoryStyles.categories}>
                        {node.categories.map(category => (
                            <div
                                className={
                                    categoryStyles[
                                        camelCase(`category-${category}`)
                                    ]
                                }
                            >
                                #{category} <CategoryIcon category={category} />
                            </div>
                        ))}
                    </div>

                    <Link
                        to={`/blog/${node.slug}`}
                        className={blogIndexStyles.postLink}
                    >
                        <h2>{node.title}</h2>
                    </Link>
                    <p>{node.excerpt.childMarkdownRemark.rawMarkdownBody}</p>
                </div>
            </div>
        )
    }

    const socialCardMeta = [
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@_marcba" },
        {
            name: "twitter:title",
            content: "Web Developer Blog | by Marc Backes",
        },
        {
            name: "og:title",
            content: "Web Developer Blog | by Marc Backes",
        },
        {
            name: "twitter:description",
            content:
                "Tech blog about web development. JavaScript, Frontend, Backend & more",
        },
        {
            name: "og:description",
            content:
                "Tech blog about web development. JavaScript, Frontend, Backend & more",
        },
        {
            name: "twitter:image",
            content: "https://marc.dev/images/social_v2_blog.jpg",
        },
        {
            name: "og:image",
            content: "https://marc.dev/images/social_v2_blog.jpg",
        },
    ]

    return (
        <Layout>
            <Head title="Blog" socialCardMeta={socialCardMeta} />

            <div>
                <div className={blogIndexStyles.posts}>
                    <div className={blogIndexStyles.column}>
                        {group.map(({ node }, index) => {
                            if (index % 2 === 0) {
                                if (node.postType === "blog") {
                                    return getPost(node)
                                } else if (node.postType === "codepen") {
                                    return getCodepen(node)
                                }
                            }
                        })}
                    </div>
                    <div className={blogIndexStyles.column}>
                        {group.map(({ node }, index) => {
                            if (index % 2 !== 0) {
                                if (node.postType === "blog") {
                                    return getPost(node)
                                } else if (node.postType === "codepen") {
                                    return getCodepen(node)
                                }
                            }
                        })}
                    </div>
                </div>

                <div className={blogIndexStyles.pageButtons}>
                    <NavLink
                        test={first}
                        url={previousUrl}
                        text="Go to Previous Page"
                        icon={<FontAwesomeIcon icon={faChevronRight} />}
                    />
                    <NavLink
                        test={last}
                        url={nextUrl}
                        text="Go to Next Page"
                        icon={<FontAwesomeIcon icon={faChevronRight} />}
                    />
                </div>
            </div>
        </Layout>
    )
}
export default IndexPage
