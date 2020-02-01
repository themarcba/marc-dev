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
                <div style={{fontSize: '6rem', margin: '3rem 0', color: 'var(--lighterText)'}}>
                    <FontAwesomeIcon icon={faSadTear} />
                </div>
                <p>
                    I'm sorry, you missed it.
                    <br />
                    The application deadline has already passed.
                </p>
                <p>
                    Follow me on{" "}
                    <a
                        className={mainStyles.link}
                        href="https://twitter.com/_marcba"
                    >
                        Twitter
                    </a>{" "}
                    to know about future opportunities.
                </p>
            </div>
        </Layout>
    )
}

export default MentorshipIndex
