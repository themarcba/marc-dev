import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Img from "gatsby-image"
import moment from "moment"
import blogStyles from "./blog-index.module.scss"
import mainStyles from "../styles/main.module.scss"
import categoryStyles from "../pages/blog-categories.module.scss"
import Head from "../components/head"
import pluralize from "pluralize"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar, faClock } from "@fortawesome/free-regular-svg-icons"
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
import { faNodeJs, faJs, faHtml5 } from "@fortawesome/free-brands-svg-icons"

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
                className={blogStyles.coverImage}
                fluid={node.coverImage.fluid}
            />
        ) : (
            ""
        )

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
                    <div className={blogStyles.postDate}>
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
                        className={blogStyles.postLink}
                    >
                        <h2>{node.title}</h2>
                    </Link>
                    <p>{node.excerpt.childMarkdownRemark.rawMarkdownBody}</p>
                    {/* <p className={blogStyles.postDate}>
                        <FontAwesomeIcon icon={faCalendar} />
                        &nbsp;
                        {moment(node.publishedAt).format("MMMM Do, YYYY")}
                    </p> */}
                </div>
            </div>
        )
    }

    return (
        <Layout>
            <Head title="Blog" />

            <div>
                <div className={blogStyles.posts}>
                    {group.map(({ node }) => getPost(node))}
                </div>

                <div className={blogStyles.pageButtons}>
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
