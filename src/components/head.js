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
        <>
            <Helmet
                title={`${title} | ${data.site.siteMetadata.title}`}
                link={
                    canonicalUrl
                        ? [
                              {
                                  rel: "canonical",
                                  key: canonicalUrl,
                                  href: canonicalUrl,
                              },
                          ]
                        : []
                }
            >
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@_marcba" />
                <meta name="twitter:title" content="Test Title" />
                <meta name="twitter:description" content="Test Description" />
                <meta
                    name="twitter:image"
                    content="https://marc.dev/images/seo.jpg"
                />
            </Helmet>
        </>
    )
}

export default Head
