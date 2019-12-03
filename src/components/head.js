import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title, canonicalUrl }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <Helmet
            title={`${title} | ${data.site.siteMetadata.title}`}
            link={
                canonicalUrl
                    ? [{ rel: "canonical", key: canonicalUrl, href: canonicalUrl }]
                    : []
            }
        />
    )
}

export default Head
