import React from "react"
import mainStyles from "../styles/main.module.scss"

class Redirect extends React.Component {
    componentDidMount() {
        window.location = this.props.pageContext.url
    }
    render() {
        return (
            <div className={mainStyles.center}>
                <h1>You are being redirected...</h1>
            </div>
        )
    }
}

export default Redirect
