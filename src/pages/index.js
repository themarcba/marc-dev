import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { Link } from "gatsby"
import indexStyles from "./index.module.scss"
import mainStyles from "../styles/main.module.scss"
import Typist from "react-typist"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <div className={mainStyles.container}>
                <h1 className={indexStyles.typing}>
                    <Typist
                        avgTypingDelay={130}
                        stdTypingDelay={30}
                    >
                        <span>Hello!</span>
                        <Typist.Backspace count={6} delay={3000} />
                        <span>Ahoy!</span>
                        <Typist.Backspace count={5} delay={3000} />
                        <span>Bonjour!</span>
                        <Typist.Backspace count={8} delay={3000} />
                        <span>Moien!</span>
                        <Typist.Backspace count={6} delay={3000} />
                        <span>Hola!</span>
                        <Typist.Backspace count={5} delay={3000} />
                        <span>Hallo!</span>
                        <Typist.Backspace count={6} delay={3000} />
                        <span>Hello!</span>
                    </Typist>
                </h1>

                <h2>
                    I'm Marc and
                    <br />
                    I&nbsp;
                    <FontAwesomeIcon
                        icon={faHeart}
                        className={indexStyles.heart}
                    />
                    &nbsp;web development!
                </h2>
                <p>
                    I am a freelancing <strong>full-stack developer</strong>{" "}
                    living in beautiful Luxembourg 🇱🇺, right in the heart of
                    Europe.
                </p>
                <p>
                    I mostly work with <strong>JavaScript</strong> (Node.js
                    &amp; Vue.js), but have also experience with{" "}
                    <strong>Ruby on Rails</strong>, <strong>PHP</strong>, and
                    others.
                </p>

                <p>
                    If you have any web development needs, feel free to{" "}
                    <Link to="/contact" className={mainStyles.link}>
                        contact
                    </Link>{" "}
                    me.
                </p>
            </div>
        </Layout>
    )
}

export default IndexPage
