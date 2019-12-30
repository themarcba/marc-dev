import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                <div>{props.children}</div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout
