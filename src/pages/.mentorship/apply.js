import React from "react"
import mainStyles from "../../styles/main.module.scss"
import addToMailchimp from "gatsby-plugin-mailchimp"

export default class MyGatsbyComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            message: "",
        }
    }
    _handleChange = async e => {
        this.setState({ email: e.target.value })
    }

    _handleSubmit = async e => {
        console.log("@@@@@ adding to mailchimp...", this.state.email)

        try {
            const result = await addToMailchimp(this.state.email, {
                listFields: {
                    FNAME: "Marc",
                    LNAME: "Backes",
                    github: "https://github.com/themarcba",
                },
            })
            console.log("@@@@@ result", result)
            this.setState({ message: result.msg })
        } catch (error) {
            console.log("@@@@@", error.message)
        }
    }

    render() {
        return (
            <form>
                <input type="text" onChange={this._handleChange.bind(this)} />
                Your e-mail is: {this.state.email}
                <div className={mainStyles.button} onClick={this._handleSubmit}>
                    Submit
                </div>
                <div style={{ background: "yellow", color: "#000" }}>
                    {this.state.message}
                </div>
            </form>
        )
    }
}
