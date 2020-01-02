import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import notFoundStyle from "./404.module.scss"
import mainStyles from "../styles/main.module.scss"
import Head from "../components/head"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

const NotFound = props => {
    return (
        <Layout>
            <Head title="404 - Page Not Found" path={props.path} />
            <div className={notFoundStyle.container}>
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>
                    <Link className={mainStyles.button} to="/">
                        Head home <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                </p>
            </div>
        </Layout>
    )
}

export default NotFound