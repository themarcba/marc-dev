import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import mainStyle from "../styles/main.module.scss"
import contactStyle from "./contact.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
    faTwitter,
    faGithub,
    faDev,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const ContactPage = (props) => {
    return (
        <Layout>
            <Head title="Contact"  path={props.path} />

            <p>
                My preferred way of contact is via&nbsp;
                <a
                    href="https://www.twitter.com/_marcba"
                    class={mainStyle.link}
                >
                    Twitter <FontAwesomeIcon icon={faTwitter} />
                </a>
                &nbsp;or&nbsp;
                <a
                    className={mainStyle.link}
                    href="mailto:hello@marc.dev"
                    alt="Mail to hello@marc.dev"
                >
                    e-mail&nbsp;<FontAwesomeIcon icon={faEnvelope} />&nbsp;
                </a>. Feel free to check out my social media presence below to get to know me better.
            </p>
            <div className={contactStyle.icons}>
                <a
                    href="https://www.twitter.com/_marcba"
                    class={contactStyle.iconLink}
                >
                    <FontAwesomeIcon icon={faTwitter} />
                </a>

                <a
                    href="https://github.com/themarcba"
                    class={contactStyle.iconLink}
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>

                <a href="https://dev.to/_marcba" class={contactStyle.iconLink}>
                    <FontAwesomeIcon icon={faDev} />
                </a>

                <a
                    href="https://www.linkedin.com/in/themarcba"
                    class={contactStyle.iconLink}
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>

            <h1>Additional information</h1>
            <table className={mainStyle.table}>
                <tr>
                    <td><strong>EU VAT ID</strong></td>
                    <td>LU29433916</td>
                </tr>
                <tr>
                    <td><strong>Luxembourgish Trade Registry</strong></td>
                    <td>A41129</td>
                </tr>
            </table>
        </Layout>
    )
}

export default ContactPage
