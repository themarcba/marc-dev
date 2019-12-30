import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "./footer.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faCode } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                    version
                }
            }
        }
    `)

    return (
        <footer className={footerStyles.footer}>
            <p className={footerStyles.line}>
                <FontAwesomeIcon icon={faCode} /> with{" "}
                <FontAwesomeIcon
                    icon={faHeart}
                    className={footerStyles.heart}
                />{" "}
                by {data.site.siteMetadata.author} &copy;{" "}
                {new Date().getFullYear()}, built with
                <a href="https://www.gatsbyjs.org" alt="GatsbyJS">
                    <img
                        src="/images/gatsby-monogram.svg"
                        alt="GatsbyJS"
                        className={footerStyles.gatsbyLogo}
                    />
                </a>
            </p>
            <p className={footerStyles.small}>
                marc.dev v.{data.site.siteMetadata.version}
            </p>
        </footer>
    )
}

export default Footer
