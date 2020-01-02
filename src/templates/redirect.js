import React from "react"

const Redirect = ({ pageContext }) => {
    window.location = pageContext.url
    return <></>
}

export default Redirect