import React from "react"

const Redirect = ({ pageContext }) => {
    window.location = pageContext.url
    return <div></div>
}

export default Redirect

