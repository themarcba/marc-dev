import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import notFoundStyle from './404.module.scss'
import Head from '../components/head'

const NotFound = () => {
    return (
        <Layout>
            <Head title="404 - Page Not Found" />
            <div className={notFoundStyle.container}>
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>
                    <Link to="/">Head home</Link>
                </p>
            </div>
        </Layout>
    )
}

export default NotFound
