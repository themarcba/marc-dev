import React from "react"
import mainStyles from "../styles/main.module.scss"
import blogStyles from "../templates/blog.module.scss"
import Layout from "../components/layout"
import Head from "../components/head"
import Img from "gatsby-image"

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
    return (
        <Layout>
            <Head title="Apply to mentorship" path="/mentorship" />

            <Img
                className={blogStyles.coverImage}
                fluid={props.data.file.childImageSharp.fluid}
            />

            <div className={mainStyles.postContent}>
                <h1>Web Developer Mentorship</h1>
                <p>
                    As a part of my new year’s resolution I am going to mentor
                    at least 3 web developers this year. I will how applicants
                    fit to my expertise and available time with a little
                    application form, where I will receive responses until{" "}
                    <strong>January 31st 2020</strong>.
                </p>

                <h2>What to expect from me</h2>
                <ul>
                    <li>
                        I will guide you through the jungle of available
                        technology to learn web development technologies so that
                        at the end you can create real-world web applications
                    </li>
                    <li>
                        I will hold you accountable for goals we both set
                        together for you
                    </li>
                    <li>
                        I will have regular chats and video calls with you to
                        follow up on your progress
                    </li>
                    <li>I will help you when you get stuck</li>
                    <li>I will review your work and show you how to improve</li>
                </ul>

                <h2>What *not* to expect from me</h2>
                <ul>
                    <li>I will not do the work for you</li>
                    <li>I will not show you how to code 1:1</li>
                </ul>

                <blockquote>
                    I can only show you the door. You're the one that has to
                    walk through it
                </blockquote>

                <h2>What I expect from you</h2>
                <ul>
                    <li>
                        You have a clear idea what you want to become and why
                    </li>
                    <li>
                        You really want to put in the work to become a great web
                        developer
                    </li>
                    <li>
                        You accept that it will be difficult at times and you
                        should not just quit because of that
                    </li>
                    <li>You put in the work to reach the defined goals</li>
                </ul>

                <h2>What I hope from this?</h2>
                <p>
                    What I expect from this mentorship, or rather what I want to
                    get out of it is threefold:
                </p>
                <p>
                    First, I enjoyed teaching when I taught one year at college
                    level, and I miss it. This will hopefully give me a similar
                    experience.
                </p>
                <p>
                    Second, I hope to give enough insight to actually navigate
                    someone through the craziness which is the web development
                    ecosystem enough that they are able to pick what's best for
                    them and be able to build real apps and enjoy the process.
                </p>
                <p>
                    Third, I want to give back to the community. There are so
                    many people who helped me on my way to become a web
                    developer and I’d like to pay all of that forward in the
                    hope it multiplies.
                </p>

                <h2>Requirements</h2>
                <li>
                    You already have basic coding skills and are familiarised
                    with Git
                </li>
                <li>
                    Speak good enough English, Spanish, or German for me to
                    understand you
                </li>
                <li>You have a laptop to do programming on</li>
                <li>
                    Have a more or less fixed amount of time available every
                    week to get coding done
                </li>

                <h2>Other details</h2>
                <ul>
                    <li>Applications end 31/01/2020</li>
                    <li>The mentorship is open-ended</li>
                    <li>Once a month we make a mentorship evaluation</li>
                </ul>

                <h2>The application process</h2>
                <ul>
                    <li>You apply to the mentorship</li>
                    <li>
                        If get in the narrow selection, I will have a video call
                        with you
                    </li>
                    <li>
                        After evaluating the video calls, I'll announce the
                        "winners"
                    </li>
                </ul>
            </div>

            <p style={{ textAlign: "center" }}>
                <a
                    className={mainStyles.button}
                    href="https://marcbackes.typeform.com/to/fu7X5B"
                >
                    Apply now
                </a>
            </p>
        </Layout>
    )
}

export default MentorshipIndex
