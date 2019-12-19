import React from "react"
import { Link } from "gatsby"
import { Location } from "@reach/router"
import headerStyles from "./header.module.scss"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            allSitePage {
                edges {
                    node {
                        path
                    }
                }
            }
        }
    `)

    const pages = data.allSitePage.edges.map(edge => edge.node.path.replace(/\/$/, ""))
    const location = (
        <Location>
            {({ navigate, location }) => {
                if (location.pathname !== "/") {
                    if (location.pathname.includes("/blog")) {
                        return (
                            <span className={headerStyles.titleAfter}>
                                /blog
                            </span>
                        )
                    } else if(pages.includes(location.pathname.replace(/\/$/, ""))) {
                        console.log('@@@@@',pages);
                        console.log('@@@@@',location.pathname.replace(/\/$/, ""));
                        
                        pages.includes(location.pathname.replace(/\/$/, ""))

                        return (
                            <span className={headerStyles.titleAfter}>
                                {location.pathname.replace(/\/$/, "")}
                            </span>
                        )
                    }
                }
            }}
        </Location>
    )

    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/">
                    marc.dev
                </Link>
                {location}
            </h1>

            <ul className={headerStyles.navList}>
                <li>
                    <Link
                        className={headerStyles.navItem}
                        activeClassName={headerStyles.activeNavItem}
                        to="/"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        className={headerStyles.navItem}
                        activeClassName={headerStyles.activeNavItem}
                        to="/blog"
                    >
                        Blog
                    </Link>
                </li>
                <li>
                    <Link
                        className={headerStyles.navItem}
                        activeClassName={headerStyles.activeNavItem}
                        to="/about"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        className={headerStyles.navItem}
                        activeClassName={headerStyles.activeNavItem}
                        to="/contact"
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header
