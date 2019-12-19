import React from "react"
import Layout from "../components/layout"
import xmasStyles from "./xmas.module.scss"
import mainStyles from "../styles/main.module.scss"
import Head from "../components/head"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export const query = graphql`
    query {
        fileName: file(relativePath: { eq: "images/xmas.jpeg" }) {
            childImageSharp {
                fluid {
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                    originalImg
                    originalName
                    presentationWidth
                    presentationHeight
                }
            }
        }
    }
`

const XmasPage = props => {    
    console.log('@@@@@', props.data);
    
    return (
        <Layout>
            <Head title="🎄Christmas Give-Away" noHeaderTitle="true" />
            <div className={mainStyles.postContent}>
                <h1>🎄🎁 Christmas Giveaway 🎁🎄</h1>
                <p>
                    In the spirit of Christmas, I'm giving away my used{" "}
                    <strong>Macbook Pro 13"</strong>. I am looking for someone
                    who seeks to become a <strong>web developer</strong> and{" "}
                    <strong>cannot afford a computer</strong>.
                </p>

                <p><Img fluid={props.data.fileName.childImageSharp.fluid} /></p>

                <p>
                    <ul className={xmasStyles.list}>
                        <li className={xmasStyles.write}>
                            <a href="https://twitter.com/_marcba">
                                Write me a DM
                            </a>{" "}
                            on Twitter or mail me at{" "}
                            <a href="mailto:hello@marc.dev">hello@marc.dev</a>{" "}
                            explaining why you think you should be the one to
                            get the computer and what you plan on doing with it
                        </li>
                        <li className={xmasStyles.suggest}>
                            <strong>Suggest/mention</strong> people who might
                            need this
                        </li>
                        <li className={xmasStyles.please}>
                            <strong>PLEASE</strong> only apply or suggest people
                            if the person really cannot afford a computer on
                            their own
                        </li>
                        <li className={xmasStyles.shipping}>
                            I will it ship{" "}
                            <strong>anywhere in the world</strong>
                        </li>
                        <li className={xmasStyles.laptop}>
                            The laptop is fine. The only catch is, it's a{" "}
                            <strong>Spanish keyboard</strong>
                        </li>
                        <li className={xmasStyles.announce}>
                            I will announce the receiver{" "}
                            <strong>on Christmas day</strong>
                        </li>
                    </ul>
                </p>
                <p className={xmasStyles.endNote}>Merry Christmas</p>
            </div>
        </Layout>
    )
}

export default XmasPage
