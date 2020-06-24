import React from "react"
import mainStyles from "../styles/main.module.scss"
import blogStyles from "../templates/blog.module.scss"
import Layout from "../components/layout"
import Head from "../components/head"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSadTear } from "@fortawesome/free-regular-svg-icons"

export const query = graphql`
    query {
        file(relativePath: { eq: "images/book.png" }) {
            childImageSharp {
                fluid {
                    sizes
                    src
                    srcSet
                }
            }
        }
    }
`

const BookIndex = props => {
    const socialCardMeta = [
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@_marcba" },
        {
            name: "twitter:title",
            content: "How To Become A Developer in 10 Days",
        },
        {
            name: "twitter:description",
            content:
                "Get some untold secrets to how to learn how to code in this book.",
        },
        {
            name: "twitter:image",
            content: "https://marc.dev/images/book.png",
        },

        {
            name: "og:title",
            content: "How To Become A Developer in 10 Days",
        },
        {
            name: "og:description",
            content:
                "Get some untold secrets to how to learn how to code in this book.",
        },
        {
            name: "og:image",
            content: "https://marc.dev/images/book.png",
        },
        {
            name: "og:url",
            content: "https://marc.dev/book",
        },
    ]

    return (
        <Layout>
            <Head
                title="How To Become A Developer in 10 Days"
                path="/mentorship"
                socialCardMeta={socialCardMeta}
            />

            <Img
                className={blogStyles.coverImage}
                fluid={props.data.file.childImageSharp.fluid}
            />
            <h1 style={{ textAlign: "center", color: "var(--lighterText)" }}>
                How To Become A Developer in 10 Days
            </h1>

            <div style={{ textAlign: "center" }}>
                <h1 style={{ fontSize: "5rem" }}>YOU CAN'T</h1>
                <p>
                    I'm sorry to be the one to tell you this, but you{" "}
                    <strong>CAN'T</strong> decome a developer in 10 days. You
                    need to go step by step. Learning how to code takes time,
                    and there are <strong>NO</strong> shortcuts.
                </p>
                <p>
                    You need to put in a lot of effort to learn this new skill
                    and <strong>practice, practice, practice!</strong>. You will
                    become a little bit better every time, but there is no way
                    you can become a developer in such a short time. Everyone
                    who tells you is lying to you.
                </p>
            </div>
        </Layout>
    )
}

export default BookIndex
