import React from "react"
import { Link } from "gatsby"
import { Location } from "@reach/router"
import headerStyles from "./header.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                    version
                    hostname
                }
            }

            allSitePage {
                edges {
                    node {
                        path
                    }
                }
            }
        }
    `)
    const metadata = data.site.siteMetadata

    const pages = data.allSitePage.edges.map(edge =>
        edge.node.path.replace(/\/$/, "")
    )
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
                    } else if (
                        pages.includes(location.pathname.replace(/\/$/, ""))
                    ) {
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
            <div className={headerStyles.starArea}>
                <div className={headerStyles.smallStars}></div>
                <div className={headerStyles.mediumStars}></div>
                <div className={headerStyles.largeStars}></div>
            </div>
            <h1>
                <Link className={headerStyles.title} to="/">
                    {metadata.hostname}
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

                <li>
                    <ThemeToggler>
                        {({ theme, toggleTheme }) => {
                            const button =
                                theme === "dark" ? (
                                    <span>
                                        <FontAwesomeIcon icon={faSun} />
                                    </span>
                                ) : (
                                    <span>
                                        <FontAwesomeIcon icon={faMoon} />
                                    </span>
                                )
                            return (
                                <label
                                    className={headerStyles[`${theme}Mode`]}
                                >
                                    <input
                                        type="checkbox"
                                        onChange={e =>
                                            toggleTheme(
                                                e.target.checked
                                                    ? "dark"
                                                    : "light"
                                            )
                                        }
                                        checked={theme === "dark"}
                                        className={headerStyles.darkModeInput}
                                    />
                                    {button}
                                    <span className={headerStyles.invisible}>Toggle dark mode</span>

                                </label>
                            )
                        }}
                    </ThemeToggler>
                </li>
            </ul>
        </header>
    )
}

export default Header
