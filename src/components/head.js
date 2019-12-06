import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title, excerpt, coverImage, canonicalUrl }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    let meta = [
        {name:"twitter:card", content:"summary_large_image"},
        {name:"twitter:site", content:"@_marcba"},
    ]

    if(title) meta.push({name:"twitter:title", content:title})
    if(excerpt) meta.push({name:"twitter:description", content:excerpt})
    if(coverImage) meta.push({name:"twitter:image", content:coverImage})

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
                
                meta={meta}
            >
            </Helmet>
        </>
    )
}

export default Head
