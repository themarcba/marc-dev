import React from "react"
import mainStyles from "../styles/main.module.scss"
import blogStyles from "../templates/blog.module.scss"
import Layout from "../components/layout"
import Head from "../components/head"
import Img from "gatsby-image"
import { Link } from "gatsby"

export const query = graphql`
    query {
        file(relativePath: { eq: "images/mentorship.jpg" }) {
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

const MentorshipIndex = props => {
    const socialCardMeta = [
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@_marcba" },
        {
            name: "twitter:title",
            content: "Apply for  free mentorship",
        },
        {
            name: "twitter:description",
            content: "Mentorship for aspiring web developers",
        },
        {
            name: "twitter:image",
            content: "https://marc.dev/images/mentorship.jpg",
        },

        {
            name: "og:title",
            content: "Apply for  free mentorship",
        },
        {
            name: "og:description",
            content: "Mentorship for aspiring web developers",
        },
        {
            name: "og:image",
            content: "https://marc.dev/images/mentorship.jpg",
        },
        {
            name: "og:url",
            content: "https://marc.dev/mentorship",
        },
    ]

    return (
        <Layout>
            <Head
                title="Apply to mentorship"
                path="/mentorship"
                socialCardMeta={socialCardMeta}
            />

            {/* <Img
                className={blogStyles.coverImage}
                fluid={props.data.file.childImageSharp.fluid}
            /> */}

            <div style={{ textAlign: "center" }}>
                <h1>Web Developer Mentorship</h1>
                <p>
                    I'm sorry, you missed it.
                    <br />
                    The application deadline is already over 😞
                </p>
                <p>
                    Follow me on <a className={mainStyles.link} href="https://twitter.com/_marcba">Twitter</a> to know about future opportunities.
                </p>
            </div>
        </Layout>
    )
}

export default MentorshipIndex
