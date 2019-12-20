import React from "react"
import Layout from "../components/layout"
import mainStyles from "../styles/main.module.scss"
import Head from "../components/head"

const UsesPage = () => {
    return (
        <Layout>
            <Head title="Uses" />
            <div className={mainStyles.postContent}>
                <p>
                    Sometimes, people ask me what IDE, theme, font, etc I use.
                    So I decided to write up a little post that sums up. This
                    page is inspired by{" "}
                    <a href="https://wesbos.com/uses">Wes Bos' uses page</a>.
                </p>

                <h1>Editor + Terminal</h1>
                <ul>
                    <li>
                        <strong>Code Editor</strong>:{" "}
                        <a href="https://code.visualstudio.com">VS Code</a>
                    </li>
                    <li>
                        <strong>Code Editor Theme</strong>:{" "}
                        <a href="https://marketplace.visualstudio.com/items?itemName=RobbOwen.synthwave-vscode">
                            Synthwave '84 by Robb Owen
                        </a>
                    </li>
                    <li>
                        <strong>Code Editor Font</strong>:{" "}
                        <a href="https://dank.sh">Dank Mono</a>. It support
                        common ligatures and has a sexy italic look, similar to
                        Operator Mono.
                    </li>
                    <li>
                        <strong>Console App</strong>: Usually the VS Code
                        integrated terminal during coding, for other uses,
                        <a href="https://iterm2.com/">iTerm2</a> with ZSH.
                    </li>
                </ul>

                <h1>Desktop Apps</h1>

                <ul>
                    <li>
                        <strong>Email</strong>:{" "}
                        <a href="https://superhuman.com">Superhuman</a> (I've
                        got invites if you're interested)
                    </li>
                    <li>
                        <strong>Browser</strong>:{" "}
                        <a href="https://www.google.com/chrome">
                            Google Chrome
                        </a>{" "}
                        for most things.{" "}
                        <a href="https://www.mozilla.org/firefox">Firefox</a> to
                        counter-checking some things.
                    </li>
                    <li>
                        <strong>Office Suite</strong>: I am a big fan of the{" "}
                        <a href="https://www.apple.com/iwork/">Apple iWork</a>
                    </li>
                    <li>
                        <strong>VPN Client (for custom connections)</strong>:{" "}
                        <a href="https://www.sparklabs.com/viscosity/">
                            Viscosity
                        </a>
                    </li>
                    <li>
                        <strong>VPN Client</strong> (for privacy/safety):{" "}
                        <a href="https://www.expressvpn.com/">ExpressVPN</a>
                    </li>
                    <li>
                        <strong>Todo App</strong>:{" "}
                        <a href="https://any.do/">Any.do</a>
                    </li>
                </ul>

                <h1>Hosting & Co.</h1>
                <ul>
                    <li>
                        <strong>Hosting Front-End Sites</strong>:{" "}
                        <a href="https://www.netlify.com/">Netlify</a>
                    </li>
                    <li>
                        <strong>Hosting Backend</strong>:{" "}
                        <a href="https://www.heroku.com/">Heroku</a>
                    </li>
                    <li>
                        <strong>Other cloud needs</strong>:{" "}
                        <a href="https://www.digitalocean.com/">
                            Digital Ocean
                        </a>
                    </li>
                    <li>
                        <strong>Email provide</strong>:{" "}
                        <a href="https://gsuite.google.com/">GSuite</a>
                    </li>
                    <li>
                        <strong>Domain provider</strong>:{" "}
                        <a href="https://www.onlydomains.com/">OnlyDomains</a>
                    </li>
                </ul>

                <h1>Workstation Setup</h1>
                <ul>
                    <li>
                        <strong>Laptop</strong>: Macbook Pro 16", i9, 64GB. This
                        is all I work on. No desktop computer.
                    </li>
                    <li>
                        <strong>Laptop stand</strong>:{" "}
                        <a href="https://www.amazon.co.uk/kalibri-Wooden-Laptop-Stand-Vertical/dp/B01JRUR5B0">
                            kalibri Wooden Laptop Stand
                        </a>
                    </li>
                    <li>
                        <strong>External screen</strong>:{" "}
                        <a href="https://www.lg.com/us/monitors/lg-34UM88-P-ultrawide-monitor">
                            34" 21:9 UltraWide® QHD IPS LED
                        </a>
                    </li>
                    <li>
                        <strong>USB-C Docking Station</strong>:{" "}
                        <a href="https://i-tec.cz/en/produkt/c31dualdockpd-2/">
                            i-tec USB-C Dual Display MST Docking Station + Power
                            Delivery 60W
                        </a>
                    </li>
                    <li>
                        <strong>Office Chair</strong>:{" "}
                        <a href="https://www.noblechairs.com/epic-series">
                            Noblechairs Epic
                        </a>
                    </li>
                </ul>
            </div>
        </Layout>
    )
}

export default UsesPage
