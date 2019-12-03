import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import mainStyle from "../styles/main.module.scss"

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <p>
                Hi, I'm Marc, a happily married, 30-something-year-old
                full-stack web developer 💻 and freelancer 🚀 based in
                Luxembourg 🇱🇺
            </p>
            <p>
                For a long time I've worked focused with PHP / jQuery & friends.
                But I'm interested in the whole "modern" web development.
                Therefore I am currently focusing on the JavaScript ecosystem
                including, but not limited to{" "}
                <strong>Vue.js, Node.js, Gatsby, React.js</strong>, etc.
            </p>
            <p>
                I do contracting work for developing software, consulting on
                software architecture, and train employees in web technologies.
            </p>
            <p>
                <Link to="/contact" className={mainStyle.link}>
                    Need a developer?
                </Link>
            </p>
        </Layout>
    )
}

export default AboutPage
