import React from "react"

class Redirect extends React.Component {
    componentDidMount() {
        window.location = this.props.pageContext.url
    }
    render() {
        return <></>
    }
}

export default Redirect