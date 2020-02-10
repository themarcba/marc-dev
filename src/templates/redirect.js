import React from "react"
import mainStyles from "../styles/main.module.scss"
import Head from "../components/head"

class Redirect extends React.Component {
    componentDidMount() {
        const timeout = this.props.pageContext.timeout || 1000
        setTimeout(() => {
            // window.location = this.props.pageContext.url
        }, timeout)
    }
    render() {
        const title = this.props.pageContext.title || "Redirect"
        const socialCardMeta = this.props.pageContext.socialCardMeta || []
        const coverImageUrl = this.props.pageContext.coverImageUrl
        const text =
            this.props.pageContext.text || "You are being redirected..."

        return (
            <div>
                <Head title={title} socialCardMeta={socialCardMeta} />
                <div className={mainStyles.center}>
                    <div style={{ textAlign: "center" }}>
                        <h1>{text}</h1>
                        <img
                            style={{
                                maxWidth: "600px",
                                width: "90%",
                                borderRadius: "0.5rem",
                            }}
                            src={coverImageUrl}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Redirect
