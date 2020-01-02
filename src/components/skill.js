import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import skillStyles from "./skill.module.scss"

const Skill = ({ name, file, progress }) => {
    const data = useStaticQuery(graphql`
        query {
            allFile(
                filter: {
                    absolutePath: { regex: "/images/skills/" }
                    extension: { eq: "jpg" }
                }
            ) {
                edges {
                    node {
                        name
                        childImageSharp {
                            fixed(width: 130) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }
            }
        }
    `)

    const imageNode = data.allFile.edges
        .map(edge => {
            return {
                name: edge.node.name,
                fixed: edge.node.childImageSharp.fixed,
            }
        })
        .filter(imageNode => imageNode.name === file)[0]


    const image = (
        <div className={skillStyles.image}>
            <div className={skillStyles.details}>
                <div>{name}</div>
                <div className={skillStyles.progressBar}>
                    <div className={skillStyles.progress} style={{width: `${progress}%`}}></div>
                </div>
                <span className={skillStyles.progressNumber}>{progress}%</span>
            </div>
            <img src={imageNode.fixed.src} alt={`Logo for ${name}`}/>
        </div>
    )
    return <div className={skillStyles.skill}>{image}</div>
}

export default Skill
