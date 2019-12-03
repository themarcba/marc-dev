import React from "react"
import { Link } from "gatsby"
import { Location } from "@reach/router"
import headerStyles from "./header.module.scss"

const Header = () => {
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
                    } else {
                        return (
                            <span className={headerStyles.titleAfter}>
                                {location.pathname}
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
