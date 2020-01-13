import React from "react"
import Layout from "../components/layout"
import mainStyles from "../styles/main.module.scss"
import Head from "../components/head"

const UsesPage = props => {
    return (
        <Layout>
            <Head title="Uses" path={props.path} />
            <div className={mainStyles.postContent}>
                <p>
                    Sometimes, people ask me what IDE, theme, font, etc I use.
                    So I decided to write up a little post that sums up. This
                    page is inspired by{" "}
                    <a href="https://wesbos.com/uses">Wes Bos' uses page</a>.
                </p>

                <h1>Editor + Terminal</h1>

                <table className={mainStyles.table}>
                    <tr>
                        <td>Code Editor</td>
                        <td>
                            <a href="https://code.visualstudio.com">VS Code</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Code Editor Theme</td>
                        <td>
                            <a href="https://marketplace.visualstudio.com/items?itemName=RobbOwen.synthwave-vscode">
                                Synthwave '84 by Robb Owen
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Code Editor Font</td>
                        <td>
                            <a href="https://dank.sh">Dank Mono</a>. It support
                            common ligatures and has a sexy italic look, similar
                            to Operator Mono.
                        </td>
                    </tr>
                    <tr>
                        <td>Console App</td>
                        <td>
                            Usually the VS Code integrated terminal during
                            coding, for other uses,
                            <a href="https://iterm2.com/">iTerm2</a> with ZSH.
                        </td>
                    </tr>
                </table>

                <h1>Desktop Apps</h1>
                <table className={mainStyles.table}>
                    <tr>
                        <td>Email</td>
                        <td>
                            <a href="https://superhuman.com">Superhuman</a>{" "}
                            (I've got invites if you're interested)
                        </td>
                    </tr>
                    <tr>
                        <td>Browser</td>
                        <td>
                            <a href="https://www.google.com/chrome">
                                Google Chrome
                            </a>{" "}
                            for most things.{" "}
                            <a href="https://www.mozilla.org/firefox">
                                Firefox
                            </a>{" "}
                            to counter-checking some things.
                        </td>
                    </tr>
                    <tr>
                        <td>Office Suite</td>
                        <td>
                            I am a big fan of the{" "}
                            <a href="https://www.apple.com/iwork/">
                                Apple iWork
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>VPN Client (for custom connections)</td>
                        <td>
                            <a href="https://www.sparklabs.com/viscosity/">
                                Viscosity
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>VPN Client (for privacy/safety)</td>
                        <td>
                            <a href="https://www.expressvpn.com/">ExpressVPN</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Todo App</td>
                        <td>
                            <a href="https://any.do/">Any.do</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Window Management</td>
                        <td><a href="https://mizage.com/divvy/">Divvy</a></td>
                    </tr>
                </table>

                <h1>Hosting & Co.</h1>

                <table className={mainStyles.table}>
                    <tr>
                        <td>Hosting Front-End Sites</td>
                        <td>
                            <a href="https://www.netlify.com/">Netlify</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Hosting Backend</td>
                        <td>
                            <a href="https://www.heroku.com/">Heroku</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Other cloud needs</td>
                        <td>
                            <a href="https://www.digitalocean.com/">
                                Digital Ocean
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Email provide</td>
                        <td>
                            <a href="https://gsuite.google.com/">GSuite</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Domain provider</td>
                        <td>
                            <a href="https://www.onlydomains.com/">
                                OnlyDomains
                            </a>
                        </td>
                    </tr>
                </table>

                <h1>Workstation Setup</h1>

                <table className={mainStyles.table}>
                    <tr>
                        <td>Laptop</td>
                        <td>
                            Macbook Pro 16", i9, 64GB. This is all I work on. No
                            desktop computer.
                        </td>
                    </tr>
                    <tr>
                        <td>Laptop stand</td>
                        <td>
                            <a href="https://www.amazon.co.uk/kalibri-Wooden-Laptop-Stand-Vertical/dp/B01JRUR5B0">
                                kalibri Wooden Laptop Stand
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>External screen</td>
                        <td>
                            <a href="https://www.lg.com/us/monitors/lg-34UM88-P-ultrawide-monitor">
                                34" 21:9 UltraWide® QHD IPS LED
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>USB-C Docking Station</td>
                        <td>
                            <a href="https://i-tec.cz/en/produkt/c31dualdockpd-2/">
                                i-tec USB-C Dual Display MST Docking Station +
                                Power Delivery 60W
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Office Chair</td>
                        <td>
                            <a href="https://www.noblechairs.com/epic-series">
                                Noblechairs Epic
                            </a>
                        </td>
                    </tr>
                </table>
            </div>
        </Layout>
    )
}

export default UsesPage
