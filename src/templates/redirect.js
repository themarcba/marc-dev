import React from "react"
import mainStyles from "../styles/main.module.scss"

class Redirect extends React.Component {
    componentDidMount() {
        const timeout = this.props.pageContext.timeout || 1000
        setTimeout(() => {
            window.location = this.props.pageContext.url
        }, timeout);
    }
    render() {        
        const text = this.props.pageContext.text || "You are being redirected..."
        return (
            <div className={mainStyles.center}>
                <h1>{text}</h1>
            </div>
        )
    }
}

export default Redirect
